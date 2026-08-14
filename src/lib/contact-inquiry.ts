import {
  contactFieldLimits,
  isContactInquiryType,
} from "@/config/contact";
import type {
  ContactFormErrors,
  ContactFormValues,
  ContactInquiry,
} from "@/types/contact";

interface ValidContactSubmission {
  readonly data: ContactInquiry;
  readonly honeypotTriggered: boolean;
  readonly success: true;
  readonly values: ContactFormValues;
}

interface InvalidContactSubmission {
  readonly errors: ContactFormErrors;
  readonly honeypotTriggered: boolean;
  readonly success: false;
  readonly values: ContactFormValues;
}

export type ContactValidationResult =
  | ValidContactSubmission
  | InvalidContactSubmission;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readTextField(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === "string" ? value : "";
}

function normalizeSingleLine(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeMessage(value: string) {
  return value.replace(/\r\n?/g, "\n").trim();
}

export function validateContactSubmission(
  formData: FormData,
): ContactValidationResult {
  const inquiryTypeValue = normalizeSingleLine(
    readTextField(formData, "inquiryType"),
  );
  const values: ContactFormValues = {
    company: normalizeSingleLine(readTextField(formData, "company")),
    email: normalizeSingleLine(readTextField(formData, "email")).toLowerCase(),
    inquiryType: isContactInquiryType(inquiryTypeValue)
      ? inquiryTypeValue
      : "",
    message: normalizeMessage(readTextField(formData, "message")),
    name: normalizeSingleLine(readTextField(formData, "name")),
  };
  const honeypotTriggered =
    normalizeSingleLine(readTextField(formData, "website")).length > 0;
  const errors: ContactFormErrors = {};

  if (!values.name) {
    errors.name = "Enter your name.";
  } else if (values.name.length > contactFieldLimits.name) {
    errors.name = `Keep your name under ${contactFieldLimits.name} characters.`;
  }

  if (!values.email) {
    errors.email = "Enter your work email.";
  } else if (
    values.email.length > contactFieldLimits.email ||
    !emailPattern.test(values.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (values.company.length > contactFieldLimits.company) {
    errors.company = `Keep the company name under ${contactFieldLimits.company} characters.`;
  }

  if (!values.inquiryType) {
    errors.inquiryType = "Choose the type of conversation you want to start.";
  }

  if (!values.message) {
    errors.message = "Tell us what you're working on.";
  } else if (values.message.length < 20) {
    errors.message = "Share a little more context so we can understand the problem.";
  } else if (values.message.length > contactFieldLimits.message) {
    errors.message = `Keep your message under ${contactFieldLimits.message.toLocaleString()} characters.`;
  }

  if (Object.keys(errors).length > 0 || values.inquiryType === "") {
    return {
      errors,
      honeypotTriggered,
      success: false,
      values,
    };
  }

  return {
    data: {
      company: values.company,
      email: values.email,
      inquiryType: values.inquiryType,
      message: values.message,
      name: values.name,
    },
    honeypotTriggered,
    success: true,
    values,
  };
}
