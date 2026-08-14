import { Homepage } from "@/app/(marketing)/_components/homepage";
import { JsonLd } from "@/components/seo/json-ld";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("home");

const organizationId = `${seoConfig.baseUrl}/#organization`;
const websiteId = `${seoConfig.baseUrl}/#website`;

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: seoConfig.baseUrl,
      description: seoConfig.pages.home.description,
      logo: new URL("/brand/bleoris-logo.svg", seoConfig.baseUrl).toString(),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.name,
      url: seoConfig.baseUrl,
      publisher: {
        "@id": organizationId,
      },
    },
  ],
} as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageStructuredData} id="bleoris-homepage-json-ld" />
      <Homepage />
    </>
  );
}
