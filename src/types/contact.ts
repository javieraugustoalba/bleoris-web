export type ContactInquiryType =
  | "solutions"
  | "ai-employees"
  | "apps"
  | "labs"
  | "partnership"
  | "other";

export interface ContactInquiryOption {
  readonly description: string;
  readonly label: string;
  readonly value: ContactInquiryType;
}

export interface ContactFormValues {
  readonly company: string;
  readonly email: string;
  readonly inquiryType: ContactInquiryType | "";
  readonly message: string;
  readonly name: string;
}

export type ContactFormField = keyof ContactFormValues;

export type ContactFormErrors = Partial<Record<ContactFormField, string>>;

export type ContactFormStatus =
  | "idle"
  | "validation_error"
  | "delivery_unavailable"
  | "delivery_failure"
  | "success";

export interface ContactFormState {
  readonly errors: ContactFormErrors;
  readonly message: string;
  readonly status: ContactFormStatus;
  readonly values: ContactFormValues;
}

export interface ContactInquiry {
  readonly company: string;
  readonly email: string;
  readonly inquiryType: ContactInquiryType;
  readonly message: string;
  readonly name: string;
}
