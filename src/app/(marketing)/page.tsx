import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return <PageIntro eyebrow={siteConfig.name} title={siteConfig.tagline} />;
}
