import type { MetadataRoute } from "next";

import { publicSeoPages, seoConfig } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicSeoPages.map((page) => ({
    url: new URL(page.path, seoConfig.baseUrl).toString(),
  }));
}
