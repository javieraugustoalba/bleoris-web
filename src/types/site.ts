export type DivisionSlug = "apps" | "solutions" | "labs";

export interface DivisionConfig {
  readonly slug: DivisionSlug;
  readonly name: string;
  readonly description: string;
}

export type DivisionConfigMap = {
  readonly [Slug in DivisionSlug]: DivisionConfig & { readonly slug: Slug };
};

export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly divisions: DivisionConfigMap;
}
