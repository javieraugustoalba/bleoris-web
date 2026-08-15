import "server-only";

import { track } from "@vercel/analytics/server";

import type { AnalyticsEvent } from "./events";

export async function trackServerEvent(event: AnalyticsEvent): Promise<void> {
  try {
    await track(event.name, event.properties);
  } catch {
    return;
  }
}
