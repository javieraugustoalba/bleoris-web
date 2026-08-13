import { AppsPageContent } from "@/features/apps/apps-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Apps",
  description:
    "Bleoris Apps creates focused digital products that turn everyday friction into simple, intelligent experiences.",
});

export default function AppsPage() {
  return <AppsPageContent />;
}
