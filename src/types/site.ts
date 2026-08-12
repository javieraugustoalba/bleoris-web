export type DivisionSlug = "apps" | "solutions" | "labs";

export interface DivisionConfig {
  readonly slug: DivisionSlug;
  readonly name: string;
  readonly description: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly divisions: readonly DivisionConfig[];
}
