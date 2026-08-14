import { ContactPageContent } from "@/app/(marketing)/contact/_components/contact-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Bleoris about enterprise technology projects, AI Employees, Bleoris Apps, Bleoris Labs, partnerships, or other inquiries.",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
