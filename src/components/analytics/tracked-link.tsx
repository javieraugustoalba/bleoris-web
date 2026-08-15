"use client";

import type { Route } from "next";
import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { trackEvent } from "@/lib/analytics/client";
import type { AnalyticsEvent } from "@/lib/analytics/events";

type TrackedLinkProps = Omit<
  ComponentProps<typeof Link>,
  "href" | "onClick"
> & {
  readonly analytics: AnalyticsEvent;
  readonly href: Route;
  readonly onClick?: ComponentProps<typeof Link>["onClick"];
};

export function TrackedLink({
  analytics,
  href,
  onClick,
  ...linkProps
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(analytics);
    onClick?.(event);
  };

  return <Link {...linkProps} href={href} onClick={handleClick} />;
}
