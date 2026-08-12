import type { Route } from "next";

export interface NavigationItem {
  readonly href: Route;
  readonly label: string;
}

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/apps", label: "Apps" },
  { href: "/labs", label: "Labs" },
  { href: "/company", label: "Company" },
] as const satisfies readonly NavigationItem[];

export const primaryCallToAction = {
  href: "/contact",
  label: "Let's Talk",
} as const satisfies NavigationItem;
