import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

const division = siteConfig.divisions.apps;

export const metadata = createPageMetadata({
  title: "Apps",
  description: division.description,
});

export default function AppsPage() {
  return (
    <PageIntro
      description={division.description}
      eyebrow={siteConfig.name}
      title={division.name}
    />
  );
}
