import type { Metadata } from "next";

import { seoConfig, type SeoPageKey } from "@/config/seo";
import { siteConfig } from "@/config/site";

export function createPageMetadata(pageKey: SeoPageKey): Metadata {
  const page = seoConfig.pages[pageKey];
  const socialImage = {
    url: seoConfig.socialImage.path,
    width: seoConfig.socialImage.width,
    height: seoConfig.socialImage.height,
    alt: seoConfig.socialImage.alt,
    type: "image/png",
  };

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      siteName: siteConfig.name,
      type: "website",
      url: page.path,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [seoConfig.socialImage.path],
    },
  };
}
