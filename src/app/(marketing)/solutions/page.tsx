import { SolutionsPageContent } from "@/features/solutions/solutions-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("solutions");

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
