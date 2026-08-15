import type {
  ContactInquiryOption,
  ContactInquiryType,
} from "@/types/contact";

const contactInquiryTypeLabels = {
  solutions: "Bleoris Solutions",
  "ai-employees": "AI Employees",
  apps: "Bleoris Apps",
  labs: "Bleoris Labs",
  partnership: "Partnership / Collaboration",
  other: "Something Else",
} as const satisfies Record<ContactInquiryType, string>;

export const contactInquiryTypes = [
  {
    value: "solutions",
    label: contactInquiryTypeLabels.solutions,
    description:
      "Custom software, artificial intelligence, cloud, automation, computer vision, or enterprise systems.",
  },
  {
    value: "ai-employees",
    label: contactInquiryTypeLabels["ai-employees"],
    description:
      "Digital workers, intelligent workflows, agents, document automation, or operational AI.",
  },
  {
    value: "apps",
    label: contactInquiryTypeLabels.apps,
    description:
      "Questions, feedback, or interest related to Bleoris software products.",
  },
  {
    value: "labs",
    label: contactInquiryTypeLabels.labs,
    description:
      "Research, experiments, technical collaboration, or emerging technologies.",
  },
  {
    value: "partnership",
    label: contactInquiryTypeLabels.partnership,
    description:
      "Potential technical, product, business, or research collaboration.",
  },
  {
    value: "other",
    label: contactInquiryTypeLabels.other,
    description: "Anything that does not clearly fit the categories above.",
  },
] as const satisfies readonly ContactInquiryOption[];

export const contactFieldLimits = {
  company: 160,
  email: 254,
  message: 4_000,
  name: 100,
} as const;

export function isContactInquiryType(
  value: string,
): value is ContactInquiryType {
  return contactInquiryTypes.some((option) => option.value === value);
}

export function getContactInquiryTypeLabel(type: ContactInquiryType) {
  return contactInquiryTypeLabels[type];
}
