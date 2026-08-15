"use server";

import { deliverContactInquiry } from "@/app/(marketing)/contact/_lib/contact-delivery";
import { validateContactSubmission } from "@/lib/contact-inquiry";
import type { ContactFormState } from "@/types/contact";

const deliveryUnavailableMessage =
  "Message delivery is temporarily unavailable, so your message was not sent. Keep a copy of your message and try again later.";
const deliveryFailureMessage =
  "We couldn't send your message right now. Nothing was delivered. Keep a copy of your message and try again later.";

function readSubmissionId(formData: FormData) {
  const value = formData.get("submissionId");

  return typeof value === "string" ? value : null;
}

export async function submitContactInquiry(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  void previousState;

  const validation = validateContactSubmission(formData);

  if (validation.honeypotTriggered) {
    console.warn("[contact-delivery] Submission rejected.", {
      category: "honeypot_rejection",
    });

    return {
      errors: {},
      message: deliveryFailureMessage,
      status: "delivery_failure",
      values: validation.values,
    };
  }

  if (!validation.success) {
    return {
      errors: validation.errors,
      message: "Review the highlighted fields and try again.",
      status: "validation_error",
      values: validation.values,
    };
  }

  try {
    const result = await deliverContactInquiry(
      validation.data,
      readSubmissionId(formData),
    );

    if (result.status === "delivered") {
      return {
        errors: {},
        message: "Your message was sent to Bleoris.",
        status: "success",
        values: validation.values,
      };
    }

    if (result.status === "unavailable") {
      return {
        errors: {},
        message: deliveryUnavailableMessage,
        status: "delivery_unavailable",
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
    console.error("[contact-delivery] Unexpected delivery failure.", {
      category: "unexpected_error",
    });

    return {
      errors: {},
      message: deliveryFailureMessage,
      status: "delivery_failure",
      values: validation.values,
    };
  }
}
