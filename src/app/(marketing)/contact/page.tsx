import { ContactPageContent } from "@/app/(marketing)/contact/_components/contact-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("contact");

export default function ContactPage() {
  return <ContactPageContent />;
}
