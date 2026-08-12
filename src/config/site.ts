import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Bleoris",
  tagline: "Engineering Intelligence for Tomorrow.",
  divisions: [
    {
      slug: "apps",
      name: "Bleoris Apps",
      description: "Proprietary software products.",
    },
    {
      slug: "solutions",
      name: "Bleoris Solutions",
      description:
        "B2B AI, software engineering, cloud, automation, computer vision, and intelligent systems.",
    },
    {
      slug: "labs",
      name: "Bleoris Labs",
      description: "Research, experimentation, and emerging technology.",
    },
  ],
} as const satisfies SiteConfig;
