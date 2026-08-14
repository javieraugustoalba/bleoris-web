import { AppsPageContent } from "@/features/apps/apps-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("apps");

export default function AppsPage() {
  return <AppsPageContent />;
}
