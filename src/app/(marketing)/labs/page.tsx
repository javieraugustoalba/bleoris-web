import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

const division = siteConfig.divisions.labs;

export const metadata = createPageMetadata({
  title: "Labs",
  description: division.description,
});

export default function LabsPage() {
  return (
    <PageIntro
      description={division.description}
      eyebrow={siteConfig.name}
      title={division.name}
    />
  );
}
