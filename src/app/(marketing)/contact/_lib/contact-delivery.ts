import "server-only";

import { randomUUID } from "node:crypto";

import {
  getContactEmailConfiguration,
  type ContactEmailConfigurationResult,
} from "@/app/(marketing)/contact/_lib/contact-email-config";
import { createContactEmailContent } from "@/app/(marketing)/contact/_lib/contact-email";
import {
  sendContactEmailWithResend,
  type ResendContactTransportInput,
  type ResendContactTransportResult,
} from "@/app/(marketing)/contact/_lib/resend-contact-transport";
import type { ContactInquiry } from "@/types/contact";

export type ContactDeliveryResult =
  | { readonly requestId: string; readonly status: "delivered" }
  | { readonly requestId: string; readonly status: "failed" }
  | { readonly requestId: string; readonly status: "unavailable" };

export interface ContactDeliveryDependencies {
  readonly createRequestId: () => string;
  readonly getConfiguration: () => ContactEmailConfigurationResult;
  readonly send: (
    input: ResendContactTransportInput,
  ) => Promise<ResendContactTransportResult>;
}

const contactSubmissionIdPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const productionDependencies: ContactDeliveryDependencies = {
  createRequestId: randomUUID,
  getConfiguration: getContactEmailConfiguration,
  send: sendContactEmailWithResend,
};

function resolveRequestId(
  submissionId: string | null,
  createRequestId: () => string,
) {
  return submissionId && contactSubmissionIdPattern.test(submissionId)
    ? submissionId.toLowerCase()
    : createRequestId();
}

export async function deliverContactInquiry(
  inquiry: ContactInquiry,
  submissionId: string | null,
  dependencies: ContactDeliveryDependencies = productionDependencies,
): Promise<ContactDeliveryResult> {
  const requestId = resolveRequestId(
    submissionId,
    dependencies.createRequestId,
  );
  const configurationResult = dependencies.getConfiguration();

  if (configurationResult.status === "unavailable") {
    console.warn("[contact-delivery] Transactional email is unavailable.", {
      category: "configuration_unavailable",
      inquiryType: inquiry.inquiryType,
      requestId,
    });

    return { requestId, status: "unavailable" };
  }

  const transportResult = await dependencies.send({
    configuration: configurationResult.configuration,
    content: createContactEmailContent(inquiry),
    idempotencyKey: `contact/${requestId}`,
    replyTo: inquiry.email,
  });

  if (transportResult.status === "failed") {
    console.error("[contact-delivery] Provider did not accept the inquiry.", {
      category: transportResult.category,
      inquiryType: inquiry.inquiryType,
      requestId,
    });

    return { requestId, status: "failed" };
  }

  console.info("[contact-delivery] Provider accepted the inquiry.", {
    category: "provider_accepted",
    inquiryType: inquiry.inquiryType,
    requestId,
  });

  return { requestId, status: "delivered" };
}
