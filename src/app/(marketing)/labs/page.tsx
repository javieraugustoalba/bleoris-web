import { LabsPageContent } from "@/features/labs/labs-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Labs",
  description:
    "Bleoris Labs explores technologies, technical ideas, and prototypes that may become tomorrow's products and intelligent systems.",
});

export default function LabsPage() {
  return <LabsPageContent />;
}
