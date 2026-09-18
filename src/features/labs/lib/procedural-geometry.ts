export type UniverseQuality = "compact" | "full";

export type UniversePoint = readonly [x: number, y: number, z: number];

interface ParticleField {
  readonly colors: Float32Array;
  readonly positions: Float32Array;
}

interface OrbitDefinition {
  readonly phase: number;
  readonly radiusX: number;
  readonly radiusY: number;
  readonly tilt: number;
  readonly z: number;
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const particlePalette = [
  [91 / 255, 139 / 255, 1],
  [167 / 255, 139 / 255, 250 / 255],
  [78 / 255, 225 / 255, 193 / 255],
  [123 / 255, 204 / 255, 119 / 255],
  [1, 217 / 255, 138 / 255],
] as const;

export const researchNodePositions = [
  [-3.35, 1.35, 0.45],
  [-1.25, 2.1, -0.2],
  [1.2, 1.45, 0.7],
  [3.3, 0.35, -0.35],
  [1.45, -1.75, 0.25],
  [-2.2, -1.55, -0.55],
] as const satisfies readonly UniversePoint[];

export const researchConnections = [
  [0, 1],
  [0, 5],
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 5],
] as const;

export const orbitDefinitions = [
  {
    phase: 0.18,
    radiusX: 4.85,
    radiusY: 2.1,
    tilt: 0.16,
    z: -0.85,
  },
  {
    phase: 1.05,
    radiusX: 3.55,
    radiusY: 1.3,
    tilt: -0.34,
    z: 0.15,
  },
  {
    phase: 2.2,
    radiusX: 2.45,
    radiusY: 2.35,
    tilt: 0.48,
    z: 0.8,
  },
] as const satisfies readonly OrbitDefinition[];

function createSeededRandom(seed: number) {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);

    return ((result ^ (result >>> 14)) >>> 0) / 4_294_967_296;
  };
}

export function getParticleCount(quality: UniverseQuality) {
  return quality === "full" ? 140 : 72;
}

export function getOrbitSegmentCount(quality: UniverseQuality) {
  return quality === "full" ? 96 : 56;
}

export function createParticleField(
  count: number,
  seed = 0x0b1e_0a15,
): ParticleField {
  const safeCount = Math.max(0, Math.floor(count));
  const positions = new Float32Array(safeCount * 3);
  const colors = new Float32Array(safeCount * 3);
  const random = createSeededRandom(seed);

  for (let index = 0; index < safeCount; index += 1) {
    const progress = (index + 0.5) / Math.max(1, safeCount);
    const angle = index * GOLDEN_ANGLE + (random() - 0.5) * 0.42;
    const radius = 0.55 + Math.sqrt(progress) * 4.8;
    const horizontalDrift = (random() - 0.5) * 0.6;
    const verticalDrift = (random() - 0.5) * 0.4;
    const positionOffset = index * 3;

    positions[positionOffset] =
      Math.cos(angle) * radius * 1.22 + horizontalDrift;
    positions[positionOffset + 1] =
      Math.sin(angle) * radius * 0.68 + verticalDrift;
    positions[positionOffset + 2] = (random() - 0.5) * 3.2;

    const paletteIndex =
      index > 0 && index % 29 === 0
        ? particlePalette.length - 1
        : Math.floor(random() * (particlePalette.length - 1));
    const color = particlePalette[paletteIndex] ?? particlePalette[0];
    const intensity = 0.72 + random() * 0.28;

    colors[positionOffset] = color[0] * intensity;
    colors[positionOffset + 1] = color[1] * intensity;
    colors[positionOffset + 2] = color[2] * intensity;
  }

  return { colors, positions };
}

export function createOrbitPath(
  definition: OrbitDefinition,
  segmentCount: number,
) {
  const safeSegmentCount = Math.max(12, Math.floor(segmentCount));
  const positions = new Float32Array(safeSegmentCount * 3);
  const cosine = Math.cos(definition.tilt);
  const sine = Math.sin(definition.tilt);

  for (let index = 0; index < safeSegmentCount; index += 1) {
    const angle =
      (index / safeSegmentCount) * Math.PI * 2 + definition.phase;
    const x = Math.cos(angle) * definition.radiusX;
    const y = Math.sin(angle) * definition.radiusY;
    const offset = index * 3;

    positions[offset] = x * cosine - y * sine;
    positions[offset + 1] = x * sine + y * cosine;
    positions[offset + 2] =
      definition.z + Math.sin(angle * 2 + definition.phase) * 0.12;
  }

  return positions;
}

export function createResearchNodeField(): ParticleField {
  const positions = new Float32Array(researchNodePositions.length * 3);
  const colors = new Float32Array(researchNodePositions.length * 3);

  researchNodePositions.forEach((point, index) => {
    const offset = index * 3;
    const color = particlePalette[index % 4] ?? particlePalette[0];

    positions[offset] = point[0];
    positions[offset + 1] = point[1];
    positions[offset + 2] = point[2];
    colors[offset] = color[0];
    colors[offset + 1] = color[1];
    colors[offset + 2] = color[2];
  });

  return { colors, positions };
}

export function createResearchConnections() {
  const positions = new Float32Array(researchConnections.length * 2 * 3);

  researchConnections.forEach(([startIndex, endIndex], index) => {
    const start = researchNodePositions[startIndex];
    const end = researchNodePositions[endIndex];
    const offset = index * 6;

    positions[offset] = start[0];
    positions[offset + 1] = start[1];
    positions[offset + 2] = start[2];
    positions[offset + 3] = end[0];
    positions[offset + 4] = end[1];
    positions[offset + 5] = end[2];
  });

  return positions;
}

export function projectUniversePoint(
  point: UniversePoint,
  width: number,
  height: number,
) {
  return {
    x: width / 2 + point[0] * (width / 11.5),
    y: height / 2 - point[1] * (height / 6.8) - point[2] * 4,
  };
}
