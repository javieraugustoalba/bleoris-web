import type { Route } from "next";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { TrackedLink } from "@/components/analytics/tracked-link";
import type { AnalyticsEvent } from "@/lib/analytics/events";

type ButtonLinkVariant = "primary" | "secondary" | "soft";

interface ButtonLinkProps {
  readonly ariaCurrent?: "page";
  readonly analytics?: AnalyticsEvent;
  readonly children: ReactNode;
  readonly className?: string;
  readonly href: Route;
  readonly onClick?: MouseEventHandler<HTMLAnchorElement>;
  readonly variant?: ButtonLinkVariant;
}

const variantClasses = {
  primary:
    "border-accent-blue bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-soft hover:-translate-y-px hover:shadow-elevated",
  secondary:
    "border-border-strong bg-surface text-ink hover:-translate-y-px hover:border-brand-blue hover:bg-surface-blue",
  soft:
    "border-brand-blue/25 bg-surface-blue text-accent-blue hover:-translate-y-px hover:border-brand-blue/45 hover:bg-surface-violet",
} satisfies Record<ButtonLinkVariant, string>;

export function ButtonLink({
  ariaCurrent,
  analytics,
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-pill border px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow,transform] duration-base ease-brand",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (analytics) {
    return (
      <TrackedLink
        aria-current={ariaCurrent}
        analytics={analytics}
        className={classes}
        href={href}
        onClick={onClick}
      >
        {children}
      </TrackedLink>
    );
  }

  return (
    <Link
      aria-current={ariaCurrent}
      className={classes}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
