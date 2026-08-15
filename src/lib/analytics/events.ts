import type { ContactInquiryType } from "@/types/contact";

export type AnalyticsSource =
  | "home"
  | "solutions"
  | "apps"
  | "labs"
  | "company"
  | "header"
  | "footer";

export type AnalyticsCallToAction =
  | "explore_solutions"
  | "discover_bleoris"
  | "lets_talk"
  | "start_conversation";

export type AnalyticsDivision = "apps" | "solutions" | "labs";

export type AnalyticsAiEmployeesAction = "explore" | "contact";

export type AnalyticsProduct = "heicflow";

export type AnalyticsInquiryType =
  | "solutions"
  | "ai_employees"
  | "apps"
  | "labs"
  | "partnership"
  | "other";

export type AnalyticsContactFailureCategory =
  | "validation"
  | "delivery"
  | "configuration";

export interface AnalyticsEventMap {
  readonly cta_click: {
    readonly source: AnalyticsSource;
    readonly cta: AnalyticsCallToAction;
  };
  readonly contact_start: {
    readonly inquiry_type?: AnalyticsInquiryType;
  };
  readonly contact_submit_success: {
    readonly inquiry_type: AnalyticsInquiryType;
  };
  readonly contact_submit_failure: {
    readonly category: AnalyticsContactFailureCategory;
  };
  readonly division_explore: {
    readonly source: AnalyticsSource;
    readonly division: AnalyticsDivision;
  };
  readonly ai_employees_interest: {
    readonly source: AnalyticsSource;
    readonly action: AnalyticsAiEmployeesAction;
  };
  readonly product_interest: {
    readonly source: AnalyticsSource;
    readonly product?: AnalyticsProduct;
  };
}

export type AnalyticsEventName = keyof AnalyticsEventMap;

export type AnalyticsEventProperties<Name extends AnalyticsEventName> =
  AnalyticsEventMap[Name];

export type AnalyticsEvent<
  Name extends AnalyticsEventName = AnalyticsEventName,
> = {
  [CurrentName in Name]: {
    readonly name: CurrentName;
    readonly properties: AnalyticsEventProperties<CurrentName>;
  };
}[Name];

const analyticsInquiryTypes = {
  solutions: "solutions",
  "ai-employees": "ai_employees",
  apps: "apps",
  labs: "labs",
  partnership: "partnership",
  other: "other",
} as const satisfies Record<ContactInquiryType, AnalyticsInquiryType>;

export function toAnalyticsInquiryType(
  inquiryType: ContactInquiryType,
): AnalyticsInquiryType {
  return analyticsInquiryTypes[inquiryType];
}
