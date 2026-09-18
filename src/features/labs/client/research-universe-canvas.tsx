"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { MutableRefObject } from "react";
import { useEffect, useMemo, useRef } from "react";
import {
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  PointsMaterial,
} from "three";

import {
  createOrbitPath,
  createParticleField,
  createResearchConnections,
  createResearchNodeField,
  getOrbitSegmentCount,
  getParticleCount,
  orbitDefinitions,
  type UniverseQuality,
} from "@/features/labs/lib/procedural-geometry";

export interface UniversePointer {
  x: number;
  y: number;
}

interface ResearchUniverseCanvasProps {
  readonly active: boolean;
  readonly className?: string;
  readonly continuous: boolean;
  readonly invalidateRef: MutableRefObject<(() => void) | null>;
  readonly onUnavailable: () => void;
  readonly pointerRef: MutableRefObject<UniversePointer>;
  readonly quality: UniverseQuality;
}

type ResearchUniverseSceneProps = Omit<
  ResearchUniverseCanvasProps,
  "className"
>;

function createGeometry(positions: Float32Array, colors?: Float32Array) {
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

  if (colors) {
    geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
  }

  return geometry;
}

function ResearchUniverseScene({
  active,
  continuous,
  invalidateRef,
  onUnavailable,
  pointerRef,
  quality,
}: ResearchUniverseSceneProps) {
  const systemRef = useRef<Group | null>(null);
  const particleLayerRef = useRef<Group | null>(null);
  const orbitLayerRef = useRef<Group | null>(null);
  const invalidate = useThree((state) => state.invalidate);
  const renderer = useThree((state) => state.gl);
  const particleField = useMemo(
    () => createParticleField(getParticleCount(quality)),
    [quality],
  );
  const particleGeometry = useMemo(
    () => createGeometry(particleField.positions, particleField.colors),
    [particleField],
  );
  const nodeField = useMemo(() => createResearchNodeField(), []);
  const nodeGeometry = useMemo(
    () => createGeometry(nodeField.positions, nodeField.colors),
    [nodeField],
  );
  const connectionGeometry = useMemo(
    () => createGeometry(createResearchConnections()),
    [],
  );
  const orbitGeometries = useMemo(
    () =>
      orbitDefinitions.map((definition) =>
        createGeometry(
          createOrbitPath(definition, getOrbitSegmentCount(quality)),
        ),
      ),
    [quality],
  );
  const particleMaterial = useMemo(
    () =>
      new PointsMaterial({
        depthWrite: false,
        opacity: quality === "full" ? 0.62 : 0.56,
        size: quality === "full" ? 0.055 : 0.065,
        sizeAttenuation: true,
        transparent: true,
        vertexColors: true,
      }),
    [quality],
  );
  const nodeMaterial = useMemo(
    () =>
      new PointsMaterial({
        depthWrite: false,
        opacity: 0.92,
        size: quality === "full" ? 0.14 : 0.16,
        sizeAttenuation: true,
        transparent: true,
        vertexColors: true,
      }),
    [quality],
  );
  const connectionMaterial = useMemo(
    () =>
      new LineBasicMaterial({
        color: "#5b8bff",
        depthWrite: false,
        opacity: 0.2,
        transparent: true,
      }),
    [],
  );
  const orbitMaterials = useMemo(
    () =>
      [
        new LineBasicMaterial({
          color: "#5b8bff",
          depthWrite: false,
          opacity: 0.22,
          transparent: true,
        }),
        new LineBasicMaterial({
          color: "#a78bfa",
          depthWrite: false,
          opacity: 0.2,
          transparent: true,
        }),
        new LineBasicMaterial({
          color: "#4ee1c1",
          depthWrite: false,
          opacity: 0.17,
          transparent: true,
        }),
      ] as const,
    [],
  );

  useEffect(() => {
    invalidateRef.current = invalidate;
    invalidate();

    return () => {
      if (invalidateRef.current === invalidate) {
        invalidateRef.current = null;
      }
    };
  }, [invalidate, invalidateRef]);

  useEffect(() => {
    const canvas = renderer.domElement;
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      onUnavailable();
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, [onUnavailable, renderer]);

  useEffect(() => {
    invalidate();
  }, [active, continuous, invalidate, quality]);

  useEffect(
    () => () => {
      particleGeometry.dispose();
      orbitGeometries.forEach((geometry) => geometry.dispose());
      particleMaterial.dispose();
      nodeMaterial.dispose();
    },
    [
      nodeMaterial,
      orbitGeometries,
      particleGeometry,
      particleMaterial,
    ],
  );

  useEffect(
    () => () => {
      nodeGeometry.dispose();
      connectionGeometry.dispose();
      connectionMaterial.dispose();
      orbitMaterials.forEach((material) => material.dispose());
    },
    [
      connectionGeometry,
      connectionMaterial,
      nodeGeometry,
      orbitMaterials,
    ],
  );

  useFrame((_state, delta) => {
    const system = systemRef.current;
    const particleLayer = particleLayerRef.current;
    const orbitLayer = orbitLayerRef.current;

    if (!system || !particleLayer || !orbitLayer) {
      return;
    }

    const pointer = pointerRef.current;
    system.position.x = pointer.x * 0.18;
    system.position.y = pointer.y * -0.12;
    system.rotation.x = pointer.y * 0.012;
    system.rotation.y = pointer.x * 0.018;

    if (!active || !continuous) {
      return;
    }

    const safeDelta = Math.min(delta, 0.05);
    particleLayer.rotation.z += safeDelta * 0.018;
    orbitLayer.rotation.z -= safeDelta * 0.006;
    invalidate();
  });

  return (
    <group ref={systemRef} dispose={null}>
      <group ref={particleLayerRef}>
        <points geometry={particleGeometry} material={particleMaterial} />
      </group>

      <group ref={orbitLayerRef}>
        {orbitGeometries.map((geometry, index) => (
          <lineLoop
            geometry={geometry}
            key={orbitDefinitions[index]?.phase ?? index}
            material={orbitMaterials[index] ?? orbitMaterials[0]}
          />
        ))}
      </group>

      <lineSegments
        geometry={connectionGeometry}
        material={connectionMaterial}
      />
      <points geometry={nodeGeometry} material={nodeMaterial} />
    </group>
  );
}

export function ResearchUniverseCanvas({
  active,
  className,
  continuous,
  invalidateRef,
  onUnavailable,
  pointerRef,
  quality,
}: ResearchUniverseCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ far: 50, fov: 40, near: 0.1, position: [0, 0, 9] }}
        dpr={quality === "full" ? [1, 1.5] : [1, 1.25]}
        fallback={null}
        frameloop="demand"
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#f8fafc", 0);
        }}
        shadows={false}
        style={{ pointerEvents: "none" }}
      >
        <ResearchUniverseScene
          active={active}
          continuous={continuous}
          invalidateRef={invalidateRef}
          onUnavailable={onUnavailable}
          pointerRef={pointerRef}
          quality={quality}
        />
      </Canvas>
    </div>
  );
}
