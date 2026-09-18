"use client";

import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
} from "react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { motionMedia } from "@/lib/motion/motion-config";

export interface ResearchConstellationArea {
  readonly description: string;
  readonly id: string;
  readonly name: string;
  readonly x: number;
  readonly y: number;
}

interface ResearchConstellationProps {
  readonly areas: readonly ResearchConstellationArea[];
}

const desktopFinePointerMedia = `${motionMedia.finePointer} and ${motionMedia.wideLayout}`;

function normalizeCoordinate(value: number): number {
  if (!Number.isFinite(value)) {
    return 50;
  }

  return Math.max(5, Math.min(95, value));
}

function createDescriptionId(id: string, index: number): string {
  const safeId = id.toLowerCase().replace(/[^a-z0-9_-]+/g, "-");

  return `labs-research-${safeId || index + 1}-description`;
}

function createEdges(count: number): readonly (readonly [number, number])[] {
  const edges: [number, number][] = [];

  for (let index = 0; index < count - 1; index += 1) {
    edges.push([index, index + 1]);
  }

  for (let index = 0; index < count - 2; index += 2) {
    edges.push([index, index + 2]);
  }

  return edges;
}

export function ResearchConstellation({
  areas,
}: ResearchConstellationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const finePointerRef = useRef(false);
  const [selectedId, setSelectedId] = useState<string | null>(
    () => areas[0]?.id ?? null,
  );
  const [previewId, setPreviewId] = useState<string | null>(null);
  const activeId = previewId ?? selectedId;
  const edges = useMemo(() => createEdges(areas.length), [areas.length]);

  const drawConstellation = useCallback(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;

    if (!root || !canvas) {
      return;
    }

    const bounds = canvas.getBoundingClientRect();

    if (bounds.width < 2 || bounds.height < 2) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const deviceScale = Math.min(window.devicePixelRatio || 1, 1.5);
    const pixelWidth = Math.max(1, Math.round(bounds.width * deviceScale));
    const pixelHeight = Math.max(1, Math.round(bounds.height * deviceScale));

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    context.clearRect(0, 0, bounds.width, bounds.height);

    const styles = window.getComputedStyle(root);
    const blue = styles.getPropertyValue("--brand-blue").trim() || "#5b8bff";
    const teal = styles.getPropertyValue("--brand-teal").trim() || "#4ee1c1";
    const violet =
      styles.getPropertyValue("--brand-violet").trim() || "#a78bfa";
    const points = areas.map((area) => ({
      x: (normalizeCoordinate(area.x) / 100) * bounds.width,
      y: (normalizeCoordinate(area.y) / 100) * bounds.height,
    }));
    const activeIndex = areas.findIndex((area) => area.id === activeId);
    const neighbors = new Set<number>();

    edges.forEach(([from, to]) => {
      if (from === activeIndex) {
        neighbors.add(to);
      }

      if (to === activeIndex) {
        neighbors.add(from);
      }
    });

    context.save();
    context.strokeStyle = violet;
    context.globalAlpha = 0.11;
    context.lineWidth = 1;
    context.beginPath();
    context.ellipse(
      bounds.width * 0.5,
      bounds.height * 0.48,
      bounds.width * 0.36,
      bounds.height * 0.28,
      -0.18,
      0,
      Math.PI * 2,
    );
    context.stroke();
    context.restore();

    edges.forEach(([from, to]) => {
      const start = points[from];
      const end = points[to];

      if (!start || !end) {
        return;
      }

      const isActiveEdge = from === activeIndex || to === activeIndex;
      const gradient = context.createLinearGradient(
        start.x,
        start.y,
        end.x,
        end.y,
      );
      gradient.addColorStop(0, isActiveEdge ? blue : violet);
      gradient.addColorStop(1, isActiveEdge ? teal : blue);

      context.save();
      context.strokeStyle = gradient;
      context.globalAlpha = isActiveEdge ? 0.68 : 0.2;
      context.lineWidth = isActiveEdge ? 1.6 : 1;
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.stroke();
      context.restore();
    });

    points.forEach((point, index) => {
      const isActive = index === activeIndex;
      const isNeighbor = neighbors.has(index);

      context.save();
      context.fillStyle = isActive ? blue : isNeighbor ? teal : violet;
      context.globalAlpha = isActive ? 0.95 : isNeighbor ? 0.72 : 0.42;
      context.shadowColor = isActive ? blue : "transparent";
      context.shadowBlur = isActive ? 18 : 0;
      context.beginPath();
      context.arc(point.x, point.y, isActive ? 5 : isNeighbor ? 3.5 : 2.5, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  }, [activeId, areas, edges]);

  useEffect(() => {
    const media = window.matchMedia(desktopFinePointerMedia);
    const updateCapability = () => {
      finePointerRef.current = media.matches;

      if (!media.matches) {
        setPreviewId(null);
      }
    };

    updateCapability();
    media.addEventListener("change", updateCapability);

    return () => media.removeEventListener("change", updateCapability);
  }, []);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    drawConstellation();

    const resizeObserver = new ResizeObserver(drawConstellation);
    resizeObserver.observe(root);

    return () => resizeObserver.disconnect();
  }, [drawConstellation]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!finePointerRef.current || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;
    let nearestId: string | null = null;
    let nearestDistance = Number.POSITIVE_INFINITY;

    areas.forEach((area) => {
      const nodeX = (normalizeCoordinate(area.x) / 100) * bounds.width;
      const nodeY = (normalizeCoordinate(area.y) / 100) * bounds.height;
      const distance = Math.hypot(pointerX - nodeX, pointerY - nodeY);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestId = area.id;
      }
    });

    const proximityRadius = Math.max(
      64,
      Math.min(bounds.width, bounds.height) * 0.12,
    );
    setPreviewId(nearestDistance <= proximityRadius ? nearestId : null);
  };

  const selectArea = (id: string) => {
    setSelectedId(id);
    setPreviewId(null);
  };

  return (
    <div
      ref={rootRef}
      className="relative isolate min-h-[30rem] overflow-hidden rounded-panel border border-brand-blue/15 bg-surface/80 shadow-soft md:min-h-[38rem]"
      onPointerLeave={() => setPreviewId(null)}
      onPointerMove={handlePointerMove}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden size-full md:block"
        role="presentation"
        tabIndex={-1}
        height={1}
        width={1}
      />

      <ol
        aria-label="Bleoris Labs research areas"
        className="relative z-10 grid grid-cols-2 gap-3 p-5 md:absolute md:inset-0 md:block md:p-0"
      >
        {areas.map((area, index) => {
          const isSelected = selectedId === area.id;
          const isActive = activeId === area.id;
          const descriptionId = createDescriptionId(area.id, index);
          const positionStyle: CSSProperties = {
            left: `${normalizeCoordinate(area.x)}%`,
            top: `${normalizeCoordinate(area.y)}%`,
          };

          return (
            <li
              className="md:absolute md:-translate-x-1/2 md:-translate-y-1/2"
              key={area.id}
              style={positionStyle}
            >
              <button
                aria-describedby={descriptionId}
                aria-pressed={isSelected}
                className={`group flex min-h-11 w-full items-center gap-2.5 rounded-pill border px-3 py-2 text-left text-xs font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-component ease-motion-standard md:w-auto md:max-w-44 ${
                  isActive
                    ? "border-brand-blue/60 bg-surface text-ink shadow-elevated md:-translate-y-px"
                    : "border-border bg-surface/88 text-muted shadow-soft"
                }`}
                onClick={() => selectArea(area.id)}
                onFocus={() => selectArea(area.id)}
                onPointerEnter={(event) => {
                  if (
                    finePointerRef.current &&
                    event.pointerType === "mouse"
                  ) {
                    setPreviewId(area.id);
                  }
                }}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className={`size-2 shrink-0 rounded-full transition-[background-color,box-shadow,transform] duration-component ease-motion-standard ${
                    isActive
                      ? "scale-125 bg-brand-blue shadow-[0_0_0_5px_color-mix(in_srgb,var(--brand-blue)_12%,transparent)]"
                      : "bg-brand-violet/65"
                  }`}
                />
                <span>{area.name}</span>
              </button>

              <p className="sr-only" id={descriptionId}>
                {area.description}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="relative z-10 mx-5 mb-5 rounded-control border border-brand-violet/16 bg-surface/92 p-5 shadow-soft md:absolute md:bottom-6 md:left-6 md:mx-0 md:mb-0 md:max-w-md md:p-6">
        {areas.map((area) => {
          const isActive = activeId === area.id;

          return (
            <div
              className={isActive ? "block" : "hidden"}
              key={`${area.id}-visible-description`}
            >
              <p className="font-mono text-[0.65rem] tracking-[0.12em] text-accent-violet uppercase">
                Research area
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.025em] text-ink">
                {area.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
