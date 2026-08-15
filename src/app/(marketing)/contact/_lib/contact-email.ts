import { getContactInquiryTypeLabel } from "@/config/contact";
import { seoConfig } from "@/config/seo";
import type { ContactInquiry } from "@/types/contact";

export interface ContactEmailContent {
  readonly html: string;
  readonly subject: string;
  readonly text: string;
}

interface ContactEmailField {
  readonly label: string;
  readonly value: string;
}

const contactSource = new URL("/contact", seoConfig.baseUrl).toString();

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTextFields(fields: readonly ContactEmailField[]) {
  return fields.map((field) => `${field.label.toUpperCase()}\n${field.value}`);
}

function renderHtmlFields(fields: readonly ContactEmailField[]) {
  return fields
    .map(
      (field) => `
        <p style="margin:0 0 20px;color:#10162a;font-size:16px;line-height:1.6;">
          <strong style="display:block;margin-bottom:2px;color:#5d667b;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">${escapeHtml(field.label)}</strong>
          ${escapeHtml(field.value)}
        </p>`,
    )
    .join("");
}

export function createContactEmailContent(
  inquiry: ContactInquiry,
): ContactEmailContent {
  const inquiryLabel = getContactInquiryTypeLabel(inquiry.inquiryType);
  const subjectContext = inquiry.company || inquiry.name;
  const fields: ContactEmailField[] = [
    { label: "Inquiry type", value: inquiryLabel },
    { label: "Name", value: inquiry.name },
    { label: "Email", value: inquiry.email },
  ];

  if (inquiry.company) {
    fields.push({ label: "Company", value: inquiry.company });
  }

  const messageHtml = escapeHtml(inquiry.message).replaceAll("\n", "<br />");
  const sourceHtml = escapeHtml(contactSource);

  return {
    subject: `Bleoris inquiry · ${inquiryLabel} · ${subjectContext}`,
    text: [
      "Bleoris website inquiry",
      ...renderTextFields(fields),
      `MESSAGE\n${inquiry.message}`,
      `SOURCE\n${contactSource}`,
    ].join("\n\n"),
    html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f8f9fc;color:#10162a;font-family:Arial,Helvetica,sans-serif;">
    <main style="margin:0 auto;max-width:680px;padding:32px 20px;">
      <section style="border:1px solid #e2e6ef;border-radius:16px;background:#ffffff;padding:32px;">
        <p style="margin:0;color:#3d67cb;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Bleoris</p>
        <h1 style="margin:10px 0 28px;color:#10162a;font-size:28px;line-height:1.2;">New website inquiry</h1>
        <h2 style="margin:0 0 18px;color:#10162a;font-size:18px;line-height:1.4;">Inquiry details</h2>
        ${renderHtmlFields(fields)}
        <h2 style="margin:28px 0 10px;color:#10162a;font-size:18px;line-height:1.4;">Message</h2>
        <p style="margin:0;color:#10162a;font-size:16px;line-height:1.7;">${messageHtml}</p>
        <hr style="margin:30px 0 20px;border:0;border-top:1px solid #e2e6ef;" />
        <p style="margin:0;color:#5d667b;font-size:13px;line-height:1.6;"><strong>Source:</strong> ${sourceHtml}</p>
      </section>
    </main>
  </body>
</html>`,
  };
}
