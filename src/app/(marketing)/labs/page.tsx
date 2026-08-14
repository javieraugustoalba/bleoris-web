import { LabsPageContent } from "@/features/labs/labs-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("labs");

export default function LabsPage() {
  return <LabsPageContent />;
}
