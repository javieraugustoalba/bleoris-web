import "server-only";

import { Resend } from "resend";

import type { ContactEmailConfiguration } from "@/app/(marketing)/contact/_lib/contact-email-config";
import type { ContactEmailContent } from "@/app/(marketing)/contact/_lib/contact-email";

export interface ResendContactTransportInput {
  readonly configuration: ContactEmailConfiguration;
  readonly content: ContactEmailContent;
  readonly idempotencyKey: string;
  readonly replyTo: string;
}

export type ResendContactTransportResult =
  | {
      readonly providerId: string;
      readonly status: "accepted";
    }
  | {
      readonly category: "provider_error" | "transport_error";
      readonly status: "failed";
    };

export async function sendContactEmailWithResend(
  input: ResendContactTransportInput,
): Promise<ResendContactTransportResult> {
  try {
    const resend = new Resend(input.configuration.apiKey);
    const { data, error } = await resend.emails.send(
      {
        from: input.configuration.fromEmail,
        html: input.content.html,
        replyTo: input.replyTo,
        subject: input.content.subject,
        text: input.content.text,
        to: input.configuration.toEmail,
      },
      { idempotencyKey: input.idempotencyKey },
    );

    if (error || !data?.id) {
      return { category: "provider_error", status: "failed" };
    }

    return { providerId: data.id, status: "accepted" };
  } catch {
    return { category: "transport_error", status: "failed" };
  }
}
