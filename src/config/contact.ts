import type {
  ContactInquiryOption,
  ContactInquiryType,
} from "@/types/contact";

export const contactInquiryTypes = [
  {
    value: "solutions",
    label: "Bleoris Solutions",
    description:
      "Custom software, artificial intelligence, cloud, automation, computer vision, or enterprise systems.",
  },
  {
    value: "ai-employees",
    label: "AI Employees",
    description:
      "Digital workers, intelligent workflows, agents, document automation, or operational AI.",
  },
  {
    value: "apps",
    label: "Bleoris Apps",
    description:
      "Questions, feedback, or interest related to Bleoris software products.",
  },
  {
    value: "labs",
    label: "Bleoris Labs",
    description:
      "Research, experiments, technical collaboration, or emerging technologies.",
  },
  {
    value: "partnership",
    label: "Partnership / Collaboration",
    description:
      "Potential technical, product, business, or research collaboration.",
  },
  {
    value: "other",
    label: "Something Else",
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
