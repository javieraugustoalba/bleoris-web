import "server-only";

export interface ContactEmailConfiguration {
  readonly apiKey: string;
  readonly fromEmail: string;
  readonly toEmail: string;
}

export type ContactEmailConfigurationResult =
  | {
      readonly configuration: ContactEmailConfiguration;
      readonly status: "available";
    }
  | { readonly status: "unavailable" };

const mailboxPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const namedMailboxPattern = /^([^<>\r\n]+)\s*<([^<>\r\n]+)>$/;

function isMailbox(value: string) {
  return !/[\r\n]/.test(value) && mailboxPattern.test(value);
}

function isSender(value: string) {
  if (isMailbox(value)) {
    return true;
  }

  const match = value.match(namedMailboxPattern);

  return Boolean(
    match && match[1].trim().length > 0 && isMailbox(match[2].trim()),
  );
}

export function getContactEmailConfiguration(): ContactEmailConfigurationResult {
  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? "";

  if (!apiKey || !isSender(fromEmail) || !isMailbox(toEmail)) {
    return { status: "unavailable" };
  }

  return {
    configuration: {
      apiKey,
      fromEmail,
      toEmail,
    },
    status: "available",
  };
}
