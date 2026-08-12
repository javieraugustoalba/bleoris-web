import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

const division = siteConfig.divisions.solutions;

export const metadata = createPageMetadata({
  title: "Solutions",
  description: division.description,
});

export default function SolutionsPage() {
  return (
    <PageIntro
      description={division.description}
      eyebrow={siteConfig.name}
      title={division.name}
    />
  );
}
