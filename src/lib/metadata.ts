import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
  readonly title: string;
  readonly description?: string;
}

export function createPageMetadata({
  title,
  description = siteConfig.tagline,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    openGraph: {
      title: socialTitle,
      description,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
