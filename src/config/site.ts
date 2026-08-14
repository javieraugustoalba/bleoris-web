import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Bleoris",
  tagline: "Engineering Intelligence for Tomorrow.",
  description:
    "Bleoris builds intelligent software, AI-powered products, enterprise systems, and experimental technologies through Bleoris Apps, Solutions, and Labs.",
  divisions: {
    apps: {
      slug: "apps",
      name: "Bleoris Apps",
      description: "Proprietary software products.",
    },
    solutions: {
      slug: "solutions",
      name: "Bleoris Solutions",
      description:
        "B2B AI, software engineering, cloud, automation, computer vision, and intelligent systems.",
    },
    labs: {
      slug: "labs",
      name: "Bleoris Labs",
      description: "Research, experimentation, and emerging technology.",
    },
  },
} as const satisfies SiteConfig;
