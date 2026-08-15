"use client";

import { track } from "@vercel/analytics";

import type { AnalyticsEvent } from "./events";

export function trackEvent(event: AnalyticsEvent): void {
  try {
    track(event.name, event.properties);
  } catch {
    return;
  }
}
