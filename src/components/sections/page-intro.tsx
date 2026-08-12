import Image from "next/image";

import { Container } from "@/components/ui/container";

interface PageIntroProps {
  readonly description?: string;
  readonly eyebrow: string;
  readonly title: string;
}

export function PageIntro({
  description,
  eyebrow,
  title,
}: PageIntroProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate overflow-hidden border-b border-border bg-surface"
    >
      <div aria-hidden="true" className="ambient-grid absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="brand-radiance absolute inset-0 -z-10"
      />

      <Container className="relative py-section">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_13rem]">
          <div className="max-w-copy">
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
              />
              <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                {eyebrow}
              </p>
            </div>

            <h1
              className="text-title font-semibold text-balance text-ink"
              id="page-title"
            >
              {title}
            </h1>

            {description ? (
              <p className="mt-6 max-w-copy text-body-lg text-pretty text-muted">
                {description}
              </p>
            ) : null}
          </div>

          <div
            aria-hidden="true"
            className="hidden aspect-square place-items-center rounded-full border border-brand-blue/15 bg-surface/68 shadow-soft backdrop-blur-sm lg:grid"
          >
            <Image
              alt=""
              className="h-28 w-auto"
              height={97}
              src="/brand/bleoris-symbol.svg"
              width={87}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
