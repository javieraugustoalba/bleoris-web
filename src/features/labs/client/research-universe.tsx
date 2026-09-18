"use client";

import dynamic from "next/dynamic";
import {
  Component,
  type CSSProperties,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { UniversePointer } from "@/features/labs/client/research-universe-canvas";
import styles from "@/features/labs/client/research-universe.module.css";
import {
  createParticleField,
  projectUniversePoint,
  researchConnections,
  researchNodePositions,
  type UniversePoint,
  type UniverseQuality,
} from "@/features/labs/lib/procedural-geometry";

const DynamicResearchUniverseCanvas = dynamic(
  () =>
    import("@/features/labs/client/research-universe-canvas").then(
      (module) => module.ResearchUniverseCanvas,
    ),
  { loading: () => null, ssr: false },
);

const ELIGIBLE_MEDIA =
  "(min-width: 48rem) and (prefers-reduced-motion: no-preference)";
const FULL_QUALITY_MEDIA =
  "(min-width: 64rem) and (hover: hover) and (pointer: fine)";
const FINE_POINTER_MEDIA =
  "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)";
const FALLBACK_WIDTH = 1_200;
const FALLBACK_HEIGHT = 760;
const fallbackField = createParticleField(42, 0x1ab5_2026);

let cachedWebGL2Support: boolean | undefined;

interface ResearchUniverseProps {
  readonly className?: string;
}

interface UniverseEnvironment {
  readonly eligible: boolean;
  readonly finePointer: boolean;
  readonly quality: UniverseQuality;
  readonly webgl2: boolean;
}

interface UniverseErrorBoundaryProps {
  readonly children: ReactNode;
  readonly onError: () => void;
}

interface UniverseErrorBoundaryState {
  readonly failed: boolean;
}

class UniverseErrorBoundary extends Component<
  UniverseErrorBoundaryProps,
  UniverseErrorBoundaryState
> {
  state: UniverseErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): UniverseErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL2Support() {
  if (cachedWebGL2Support !== undefined) {
    return cachedWebGL2Support;
  }

  const probe = document.createElement("canvas");

  try {
    const context = probe.getContext("webgl2", {
      alpha: true,
      antialias: true,
      failIfMajorPerformanceCaveat: true,
    });

    cachedWebGL2Support = context !== null;
    context?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cachedWebGL2Support = false;
  }

  return cachedWebGL2Support;
}

function getFallbackPoint(index: number): UniversePoint {
  const offset = index * 3;

  return [
    fallbackField.positions[offset] ?? 0,
    fallbackField.positions[offset + 1] ?? 0,
    fallbackField.positions[offset + 2] ?? 0,
  ];
}

function StaticResearchUniverse() {
  const particles = useMemo(
    () =>
      Array.from(
        { length: fallbackField.positions.length / 3 },
        (_, index) => ({
          index,
          point: projectUniversePoint(
            getFallbackPoint(index),
            FALLBACK_WIDTH,
            FALLBACK_HEIGHT,
          ),
        }),
      ),
    [],
  );
  const nodes = useMemo(
    () =>
      researchNodePositions.map((point, index) => ({
        index,
        point: projectUniversePoint(
          point,
          FALLBACK_WIDTH,
          FALLBACK_HEIGHT,
        ),
      })),
    [],
  );
  const connections = useMemo(
    () =>
      researchConnections.flatMap(([startIndex, endIndex]) => {
        const start = nodes[startIndex]?.point;
        const end = nodes[endIndex]?.point;

        if (!start || !end) {
          return [];
        }

        const startX = (start.x / FALLBACK_WIDTH) * 100;
        const startY = (start.y / FALLBACK_HEIGHT) * 100;
        const deltaX = ((end.x - start.x) / FALLBACK_WIDTH) * 100;
        const deltaY = ((end.y - start.y) / FALLBACK_HEIGHT) * 100;

        return [
          {
            key: `${startIndex}-${endIndex}`,
            style: {
              "--fallback-angle": `${Math.atan2(deltaY, deltaX)}rad`,
              "--fallback-length": `${Math.hypot(deltaX, deltaY)}%`,
              "--fallback-x": `${startX}%`,
              "--fallback-y": `${startY}%`,
            } as CSSProperties,
          },
        ];
      }),
    [nodes],
  );

  return (
    <>
      <div className={styles.atmosphere} />
      <div className={styles.grid} />
      <div className={styles.fallback}>
        <span className={`${styles.fallbackOrbit} ${styles.fallbackOrbitOne}`} />
        <span className={`${styles.fallbackOrbit} ${styles.fallbackOrbitTwo}`} />
        <span className={`${styles.fallbackOrbit} ${styles.fallbackOrbitThree}`} />

        {connections.map(({ key, style }) => (
          <span className={styles.fallbackConnection} key={key} style={style} />
        ))}

        {particles.map(({ index, point }) => (
          <span
            className={styles.fallbackParticle}
            key={index}
            style={
              {
                "--fallback-color":
                  index % 7 === 0
                    ? "var(--brand-violet)"
                    : index % 5 === 0
                      ? "var(--brand-teal)"
                      : "var(--brand-blue)",
                "--fallback-opacity": 0.3 + (index % 4) * 0.1,
                "--fallback-size": index % 11 === 0 ? "0.32rem" : "0.18rem",
                "--fallback-x": `${(point.x / FALLBACK_WIDTH) * 100}%`,
                "--fallback-y": `${(point.y / FALLBACK_HEIGHT) * 100}%`,
              } as CSSProperties
            }
          />
        ))}

        {nodes.map(({ index, point }) => (
          <span
            className={styles.fallbackNode}
            key={index}
            style={
              {
                "--fallback-color":
                  index % 3 === 0
                    ? "var(--brand-teal)"
                    : index % 2 === 0
                      ? "var(--brand-violet)"
                      : "var(--brand-blue)",
                "--fallback-x": `${(point.x / FALLBACK_WIDTH) * 100}%`,
                "--fallback-y": `${(point.y / FALLBACK_HEIGHT) * 100}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}

export function ResearchUniverse({ className }: ResearchUniverseProps) {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<UniversePointer>({ x: 0, y: 0 });
  const invalidateRef = useRef<(() => void) | null>(null);
  const [environment, setEnvironment] = useState<UniverseEnvironment>({
    eligible: false,
    finePointer: false,
    quality: "compact",
    webgl2: false,
  });
  const [intersecting, setIntersecting] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [webglFailed, setWebglFailed] = useState(false);
  const handleUnavailable = useCallback(() => setWebglFailed(true), []);

  useEffect(() => {
    const eligibleMedia = window.matchMedia(ELIGIBLE_MEDIA);
    const fullQualityMedia = window.matchMedia(FULL_QUALITY_MEDIA);
    const finePointerMedia = window.matchMedia(FINE_POINTER_MEDIA);

    const updateEnvironment = () => {
      const eligible = eligibleMedia.matches;

      setEnvironment({
        eligible,
        finePointer: finePointerMedia.matches,
        quality: fullQualityMedia.matches ? "full" : "compact",
        webgl2: eligible ? hasWebGL2Support() : false,
      });
    };

    updateEnvironment();
    eligibleMedia.addEventListener("change", updateEnvironment);
    fullQualityMedia.addEventListener("change", updateEnvironment);
    finePointerMedia.addEventListener("change", updateEnvironment);

    return () => {
      eligibleMedia.removeEventListener("change", updateEnvironment);
      fullQualityMedia.removeEventListener("change", updateEnvironment);
      finePointerMedia.removeEventListener("change", updateEnvironment);
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    const universeRoot =
      layer?.closest<HTMLElement>("[data-labs-universe-root]") ?? layer;

    if (!universeRoot) {
      return;
    }

    const updateDocumentVisibility = () => {
      setDocumentVisible(document.visibilityState === "visible");
    };
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry?.isIntersecting ?? false),
      { rootMargin: "128px 0px", threshold: 0.01 },
    );

    updateDocumentVisibility();
    observer.observe(universeRoot);
    document.addEventListener("visibilitychange", updateDocumentVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener(
        "visibilitychange",
        updateDocumentVisibility,
      );
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    const universeRoot =
      layer?.closest<HTMLElement>("[data-labs-universe-root]") ?? layer;

    if (
      !universeRoot ||
      !environment.eligible ||
      !environment.webgl2 ||
      !environment.finePointer ||
      webglFailed
    ) {
      pointerRef.current = { x: 0, y: 0 };
      invalidateRef.current?.();
      return;
    }

    let bounds: DOMRect | null = null;
    let measuredScrollX = 0;
    let measuredScrollY = 0;

    const cacheBounds = () => {
      bounds = universeRoot.getBoundingClientRect();
      measuredScrollX = window.scrollX;
      measuredScrollY = window.scrollY;
    };
    const resetPointer = () => {
      pointerRef.current = { x: 0, y: 0 };
      invalidateRef.current?.();
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!bounds) {
        cacheBounds();
      }

      if (!bounds || bounds.width === 0 || bounds.height === 0) {
        return;
      }

      const left = bounds.left - (window.scrollX - measuredScrollX);
      const top = bounds.top - (window.scrollY - measuredScrollY);
      const normalize = (value: number) => Math.max(-1, Math.min(1, value));

      pointerRef.current = {
        x: normalize(((event.clientX - left) / bounds.width - 0.5) * 2),
        y: normalize(((event.clientY - top) / bounds.height - 0.5) * 2),
      };
      invalidateRef.current?.();
    };

    universeRoot.addEventListener("pointerenter", cacheBounds, {
      passive: true,
    });
    universeRoot.addEventListener("pointerleave", resetPointer, {
      passive: true,
    });
    universeRoot.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(() => {
      bounds = null;
    });
    resizeObserver.observe(universeRoot);

    return () => {
      resizeObserver.disconnect();
      universeRoot.removeEventListener("pointerenter", cacheBounds);
      universeRoot.removeEventListener("pointerleave", resetPointer);
      universeRoot.removeEventListener("pointermove", handlePointerMove);
      resetPointer();
    };
  }, [
    environment.eligible,
    environment.finePointer,
    environment.webgl2,
    webglFailed,
  ]);

  const canRenderCanvas =
    environment.eligible && environment.webgl2 && !webglFailed;
  const active = canRenderCanvas && intersecting && documentVisible;
  const rootClassName = className
    ? `${styles.root} ${className}`
    : styles.root;

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className={rootClassName}
      data-labs-universe-state={canRenderCanvas ? "interactive" : "static"}
    >
      <StaticResearchUniverse />

      {canRenderCanvas ? (
        <UniverseErrorBoundary onError={handleUnavailable}>
          <DynamicResearchUniverseCanvas
            active={active}
            className={styles.canvasLayer}
            continuous={
              environment.finePointer && environment.quality === "full"
            }
            invalidateRef={invalidateRef}
            onUnavailable={handleUnavailable}
            pointerRef={pointerRef}
            quality={environment.quality}
          />
        </UniverseErrorBoundary>
      ) : null}
    </div>
  );
}
