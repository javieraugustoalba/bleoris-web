import { siteConfig } from "@/config/site";

export const seoConfig = {
  baseUrl: "https://bleoris.com",
  socialImage: {
    alt: "Bleoris — Engineering Intelligence for Tomorrow.",
    height: 630,
    path: "/brand/bleoris-og.png",
    width: 1200,
  },
  pages: {
    home: {
      path: "/",
      title: "Bleoris — Engineering Intelligence for Tomorrow",
      description: siteConfig.description,
    },
    solutions: {
      path: "/solutions",
      title: "Bleoris Solutions — AI, Software & Intelligent Systems",
      description:
        "Bleoris Solutions applies artificial intelligence, software engineering, cloud, automation, computer vision, and intelligent systems to operational problems.",
    },
    apps: {
      path: "/apps",
      title: "Bleoris Apps — Focused Software Products",
      description:
        "Bleoris Apps develops proprietary, focused software products designed around specific problems and useful, maintainable experiences.",
    },
    labs: {
      path: "/labs",
      title: "Bleoris Labs — Research & Emerging Technology",
      description:
        "Bleoris Labs explores research, experimentation, and emerging technologies that may inform future products and intelligent systems.",
    },
    company: {
      path: "/company",
      title: "About Bleoris — Technology, Research & Engineering",
      description:
        "Learn how Bleoris operates across Apps, Solutions, and Labs to connect product development, real-world engineering, research, and experimentation.",
    },
    contact: {
      path: "/contact",
      title: "Contact Bleoris",
      description:
        "Contact Bleoris about enterprise technology projects, AI Employees, software products, research, partnerships, or other relevant inquiries.",
    },
  },
} as const;

export type SeoPageKey = keyof typeof seoConfig.pages;

export const publicSeoPages = Object.values(seoConfig.pages);
