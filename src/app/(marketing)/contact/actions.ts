"use server";

import { deliverContactInquiry } from "@/app/(marketing)/contact/_lib/contact-delivery";
import { validateContactSubmission } from "@/lib/contact-inquiry";
import type { ContactFormState } from "@/types/contact";

const deliveryFailureMessage =
  "Message delivery is not configured yet, so your message was not sent. Keep a copy of your message and try again later.";

export async function submitContactInquiry(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  void previousState;

  const validation = validateContactSubmission(formData);

  if (!validation.success) {
    return {
      errors: validation.errors,
      message: "Review the highlighted fields and try again.",
      status: "validation_error",
      values: validation.values,
    };
  }

  if (validation.honeypotTriggered) {
    return {
      errors: {},
      message: deliveryFailureMessage,
      status: "delivery_failure",
      values: validation.values,
    };
  }

  try {
    const result = await deliverContactInquiry(validation.data);

    if (result.status === "delivered") {
      return {
        errors: {},
        message: "Your message was sent to Bleoris.",
        status: "success",
        values: validation.values,
      };
    }

    return {
      errors: {},
      message: deliveryFailureMessage,
      status: "delivery_failure",
      values: validation.values,
    };
  } catch {
    return {
      errors: {},
      message:
        "We couldn't send your message. Nothing was delivered. Keep a copy of your message and try again later.",
      status: "delivery_failure",
      values: validation.values,
    };
  }
}
