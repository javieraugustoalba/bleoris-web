import { SolutionsPageContent } from "@/features/solutions/solutions-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Solutions",
  description:
    "Bleoris Solutions combines artificial intelligence, software engineering, cloud infrastructure, automation, and computer vision to solve operational problems.",
});

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
