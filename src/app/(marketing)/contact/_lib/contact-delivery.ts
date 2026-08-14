import type { ContactInquiry } from "@/types/contact";

export type ContactDeliveryResult =
  | { readonly status: "delivered" }
  | { readonly status: "failed" }
  | { readonly status: "unavailable" };

/**
 * Server-side boundary for the production contact transport.
 * Replace this implementation when an approved provider is configured.
 */
export async function deliverContactInquiry(
  inquiry: ContactInquiry,
): Promise<ContactDeliveryResult> {
  void inquiry;

  return { status: "unavailable" };
}
