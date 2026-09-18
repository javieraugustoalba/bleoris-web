export const motionDuration = {
  micro: 0.18,
  component: 0.38,
  section: 0.7,
  signature: 0.9,
} as const;

export const motionEase = {
  standard: "power3.out",
} as const;

export const motionMedia = {
  noPreference: "(prefers-reduced-motion: no-preference)",
  finePointer:
    "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
  wideLayout: "(min-width: 48rem)",
} as const;

export const heroMotion = {
  depth: [3, 6, 9],
  headingOffset: 9,
  magneticOffset: 3,
  mobileScrollRotation: 0.8,
  mobileScrollScale: 0.975,
  scrollRotation: 2.25,
  scrollScale: 0.945,
} as const;
