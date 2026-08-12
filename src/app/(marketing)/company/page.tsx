import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Company",
});

export default function CompanyPage() {
  return (
    <PageIntro
      description={siteConfig.tagline}
      eyebrow={siteConfig.name}
      title="Company"
    />
  );
}
