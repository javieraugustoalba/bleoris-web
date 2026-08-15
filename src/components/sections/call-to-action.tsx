import type { Route } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import type { AnalyticsEvent } from "@/lib/analytics/events";

interface CallToActionLink {
  readonly analytics?: AnalyticsEvent;
  readonly href: Route;
  readonly label: string;
}

interface CallToActionProps {
  readonly description: string;
  readonly eyebrow: string;
  readonly id: string;
  readonly primaryAction: CallToActionLink;
  readonly secondaryAction?: CallToActionLink;
  readonly title: string;
}

export function CallToAction({
  description,
  eyebrow,
  id,
  primaryAction,
  secondaryAction,
  title,
}: CallToActionProps) {
  return (
    <Section aria-labelledby={id} className="bg-canvas pt-0">
      <div className="brand-cta-radiance relative isolate overflow-hidden rounded-panel bg-surface-dark px-6 py-14 text-center shadow-elevated sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute top-[-16rem] left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full border border-brand-blue/16"
        />
        <p className="text-xs font-semibold tracking-[0.18em] text-white/52 uppercase">
          {eyebrow}
        </p>
        <h2
          className="mx-auto mt-5 max-w-[50rem] text-title font-semibold text-balance text-white"
          id={id}
        >
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-[42rem] text-body-lg text-pretty text-white/64">
          {description}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink
            analytics={primaryAction.analytics}
            className="w-full sm:w-auto"
            href={primaryAction.href}
            variant="inverse"
          >
            {primaryAction.label}
          </ButtonLink>
          {secondaryAction ? (
            <ButtonLink
              analytics={secondaryAction.analytics}
              className="w-full sm:w-auto"
              href={secondaryAction.href}
              variant="outline-inverse"
            >
              {secondaryAction.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
