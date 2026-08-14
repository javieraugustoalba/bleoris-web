import { CompanyPageContent } from "@/app/(marketing)/company/_components/company-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Company",
  description:
    "Bleoris is a technology company building intelligent software, AI-powered products, enterprise systems, and experimental technologies.",
});

export default function CompanyPage() {
  return <CompanyPageContent />;
}
