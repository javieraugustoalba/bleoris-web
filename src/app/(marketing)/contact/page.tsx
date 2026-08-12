import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
});

export default function ContactPage() {
  return (
    <PageIntro
      description={siteConfig.tagline}
      eyebrow="Contact"
      title="Let's Talk"
    />
  );
}
