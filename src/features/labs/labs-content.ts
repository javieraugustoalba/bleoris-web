export const researchAreas = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    description:
      "Reasoning systems, agents, generative AI, knowledge systems, and applied intelligence.",
    x: 18,
    y: 25,
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description:
      "Learning systems, prediction, classification, experimentation, and applied modeling.",
    x: 48,
    y: 15,
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    description:
      "Image understanding, detection, recognition, visual analysis, and intelligent perception.",
    x: 80,
    y: 29,
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    description:
      "Language, multimodal systems, structured generation, and AI-assisted experiences.",
    x: 68,
    y: 59,
  },
  {
    id: "mobility-intelligence",
    name: "Mobility Intelligence",
    description:
      "Data, perception, traffic systems, transportation, and intelligent mobility.",
    x: 31,
    y: 68,
  },
  {
    id: "emerging-technology",
    name: "Emerging Technology",
    description:
      "Technical ideas and technologies that do not yet belong to an established Bleoris product or enterprise capability.",
    x: 83,
    y: 83,
  },
] as const;

export const experimentStages = [
  {
    name: "Question",
    description: "Define what is unknown and why it is worth investigating.",
  },
  {
    name: "Explore",
    description: "Map the technical space, constraints, and possible paths.",
  },
  {
    name: "Experiment",
    description: "Test focused ideas through controlled technical work.",
  },
  {
    name: "Prototype",
    description: "Make the promising direction tangible enough to evaluate.",
  },
  {
    name: "Measure",
    description: "Examine evidence, limitations, and practical implications.",
  },
  {
    name: "Learn",
    description: "Carry useful knowledge forward, whatever the outcome.",
  },
] as const;

export const experimentOutcomes = [
  {
    name: "Keep",
    description: "Continue exploration.",
  },
  {
    name: "Evolve",
    description: "Become a stronger technical capability.",
  },
  {
    name: "Transfer",
    description: "Move into Bleoris Apps or Bleoris Solutions.",
  },
  {
    name: "Discard",
    description:
      "End when evidence suggests the idea is not valuable enough to continue.",
  },
] as const;

export const activeExplorations = [
  {
    id: "field-01",
    visual: "vision",
    name: "Visual Intelligence",
    description:
      "Experiments in image classification, object detection, visual analysis, and computer vision.",
  },
  {
    id: "field-02",
    visual: "health",
    name: "Health & Medical AI",
    description:
      "Exploration of machine-learning and computer-vision methods applied to medical-image analysis.",
  },
  {
    id: "field-03",
    visual: "mobility",
    name: "Mobility & Traffic Intelligence",
    description:
      "Experiments around traffic analysis, perception, movement, and transportation data.",
  },
  {
    id: "field-04",
    visual: "documents",
    name: "Intelligent Documents",
    description:
      "Exploring OCR, extraction, document understanding, multimodal AI, and structured information.",
  },
  {
    id: "field-05",
    visual: "workflows",
    name: "Autonomous AI Workflows",
    description:
      "Research around agents, tool use, memory, orchestration, permissions, and human-in-the-loop execution.",
  },
] as const;

export const openEngineeringAreas = [
  "Experiments",
  "Tools",
  "Technical notes",
  "Open-source work",
] as const;

export const researchQuestions = [
  "How can AI systems act reliably across real business workflows?",
  "How can machines understand visual environments more effectively?",
  "How can multimodal AI make documents genuinely useful?",
  "How can intelligent systems collaborate with people rather than simply respond to them?",
  "How can focused systems solve complex problems without unnecessary complexity?",
] as const;
