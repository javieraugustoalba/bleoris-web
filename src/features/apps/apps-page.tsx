import Image from "next/image";

import { CallToAction } from "@/components/sections/call-to-action";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const heicFlowCapabilities = [
  "HEIC to JPG",
  "HEIC to PNG",
  "HEIC to PDF",
  "Batch conversion",
  "Compression",
  "Resizing",
  "Metadata removal",
  "Privacy-focused processing",
] as const;

const productFamilies = [
  {
    number: "01",
    name: "Image & Media",
    purpose:
      "Tools for converting, preparing, optimizing, and working with digital media.",
    directions: [
      {
        name: "HEICFlow",
        status: "In development",
        description:
          "A focused image utility for converting, optimizing, and preparing HEIC files.",
      },
      {
        name: "Image Print Prep",
        status: "Product direction",
        description:
          "Tools for preparing images for output and production workflows.",
      },
    ],
  },
  {
    number: "02",
    name: "Documents",
    purpose:
      "Software that transforms messy documents into useful digital information.",
    directions: [
      {
        name: "AI Document Cleaner",
        status: "Product direction",
        description:
          "A direction for document cleanup, OCR-assisted processing, scan preparation, and PDF preparation.",
      },
    ],
  },
  {
    number: "03",
    name: "Developer Tools",
    purpose: "Focused utilities for everyday engineering workflows.",
    directions: [
      {
        name: "Developer Toolbox",
        status: "Product direction",
        description:
          "Potential utilities include JSON formatting, JWT decoding, Base64 tools, regex testing, UUID generation, timestamp conversion, and hash utilities.",
      },
    ],
  },
] as const;

const productPrinciples = [
  {
    name: "Focused",
    description: "Solve a clearly defined problem.",
  },
  {
    name: "Simple",
    description:
      "Complex engineering should result in a simple user experience.",
  },
  {
    name: "Fast",
    description: "Software should respect the user's time.",
  },
  {
    name: "Intelligent",
    description:
      "Use automation and artificial intelligence where they genuinely improve the product.",
  },
  {
    name: "Private",
    description:
      "Minimize unnecessary data exposure and design with responsible handling of user information in mind.",
  },
  {
    name: "Global",
    description:
      "Build products capable of serving users beyond a single geography.",
  },
] as const;

const productDevelopmentStages = [
  "Problem",
  "Experiment",
  "Prototype",
  "Validate",
  "Engineer",
  "Product",
] as const;

const futureEcosystemAreas = [
  "Digital utilities",
  "Intelligent documents",
  "Developer tools",
  "Productivity",
  "Emerging software experiences",
] as const;

function AppsHero() {
  const productLogic = [
    {
      label: "Problem",
      value: "Everyday friction",
      accent: "bg-brand-blue",
    },
    {
      label: "Product",
      value: "Focused software",
      accent: "bg-brand-violet",
    },
    {
      label: "Experience",
      value: "Simple and intelligent",
      accent: "bg-brand-teal",
    },
  ] as const;

  return (
    <section
      aria-labelledby="apps-hero-title"
      className="relative isolate overflow-hidden border-b border-border bg-surface"
    >
      <div aria-hidden="true" className="ambient-grid absolute inset-0 -z-30" />
      <div
        aria-hidden="true"
        className="brand-radiance absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-canvas to-transparent"
      />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] lg:gap-16 lg:py-24 xl:gap-20 xl:py-28">
        <div className="relative z-10 max-w-[44rem]">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Bleoris Apps
            </p>
          </div>

          <h1
            className="text-display font-semibold text-balance text-ink"
            id="apps-hero-title"
          >
            Focused software.
            <span className="block text-brand-blue">Built to be useful.</span>
          </h1>

          <p className="mt-7 max-w-[40rem] text-body-lg text-pretty text-muted sm:mt-8">
            Bleoris Apps creates focused digital products that turn everyday
            friction into simple, intelligent experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink
              className="w-full sm:w-auto"
              href="/apps#product-ecosystem"
            >
              Explore Products
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href="/apps#product-philosophy"
              variant="secondary"
            >
              Our Product Philosophy
            </ButtonLink>
          </div>
        </div>

        <figure className="apps-product-field relative isolate overflow-hidden rounded-panel border border-brand-blue/15 bg-surface/88 p-5 shadow-elevated sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <Image
                alt=""
                className="h-7 w-auto"
                height={97}
                priority
                src="/brand/bleoris-symbol.svg"
                width={87}
              />
              <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                Product logic
              </figcaption>
            </div>
            <span className="font-mono text-[0.68rem] text-subtle">
              Apps / 01
            </span>
          </div>

          <ol className="mt-6 border-t border-border">
            {productLogic.map((step, index) => (
              <li
                className="relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-b border-border bg-surface/74 py-4 pr-4 pl-3 sm:grid-cols-[2.25rem_7rem_minmax(0,1fr)] sm:items-center"
                key={step.label}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-0.5 ${step.accent}`}
                />
                <span className="font-mono text-[0.65rem] text-subtle">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                  {step.label}
                </span>
                <span className="col-start-2 text-base font-semibold tracking-[-0.02em] text-ink sm:col-start-3">
                  {step.value}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-ink">Bleoris Apps</p>
            <p className="text-muted">Proprietary products</p>
          </div>
        </figure>
      </Container>
    </section>
  );
}

function FeaturedProduct() {
  return (
    <Section
      aria-labelledby="heicflow-title"
      className="border-b border-border bg-canvas"
      id="heicflow"
    >
      <div className="brand-cta-radiance relative isolate overflow-hidden rounded-panel bg-surface-dark px-5 py-8 shadow-elevated sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute top-[-18rem] right-[-16rem] -z-10 size-[40rem] rounded-full border border-brand-violet/14"
        />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(28rem,1.14fr)] lg:items-center lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-white/58 uppercase">
                Featured product
              </p>
              <span className="inline-flex items-center gap-2 rounded-pill border border-brand-solar/30 bg-brand-solar/10 px-3 py-1 text-xs font-semibold text-white/74">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-brand-solar"
                />
                In development
              </span>
            </div>

            <h2
              className="mt-7 text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white"
              id="heicflow-title"
            >
              HEICFlow
            </h2>
            <p className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-brand-teal sm:text-3xl">
              Convert. Optimize. Move on.
            </p>
            <p className="mt-6 max-w-xl text-body-lg text-pretty text-white/66">
              A focused image utility designed to make HEIC files easier to
              convert, optimize, and prepare for everyday use.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-5 border-t border-white/12">
              {heicFlowCapabilities.map((capability) => (
                <li
                  className="border-b border-white/12 py-3 text-sm leading-5 text-white/68"
                  key={capability}
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <figure className="rounded-panel border border-white/12 bg-white/[0.045] p-5 sm:p-7">
            <figcaption className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[0.68rem] tracking-[0.12em] text-white/58 uppercase">
              Format workflow
              <span className="text-brand-teal">HEICFlow</span>
            </figcaption>

            <div className="mt-8 grid items-center gap-6 sm:grid-cols-[minmax(7rem,0.76fr)_auto_minmax(0,1.24fr)]">
              <div className="mx-auto grid aspect-square w-full max-w-44 place-items-center rounded-panel border border-brand-blue/25 bg-brand-blue/10 p-5 sm:mx-0">
                <div className="text-center">
                  <span className="font-mono text-[0.65rem] tracking-[0.14em] text-white/58 uppercase">
                    Input
                  </span>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    HEIC
                  </p>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="rotate-90 text-center text-xl text-brand-blue sm:rotate-0"
              >
                →
              </span>

              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.14em] text-white/58 uppercase">
                  Prepare for use
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["JPG", "PNG", "PDF"].map((format) => (
                    <span
                      className="rounded-control border border-white/12 bg-white/[0.05] px-2 py-4 text-center font-mono text-sm font-semibold text-white"
                      key={format}
                    >
                      {format}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-control border border-white/10 bg-white/10">
                  {["Convert", "Optimize", "Resize", "Prepare"].map(
                    (action) => (
                      <span
                        className="bg-surface-dark/90 px-3 py-3 text-center text-xs font-medium text-white/64"
                        key={action}
                      >
                        {action}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </Section>
  );
}

function ProductEcosystem() {
  return (
    <Section
      aria-labelledby="product-ecosystem-title"
      className="scroll-mt-24 border-b border-border bg-surface"
      id="product-ecosystem"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="An expandable ecosystem organized around distinct product families and clearly defined problems."
              eyebrow="Product ecosystem"
              id="product-ecosystem-title"
              title="Purpose before product count."
            />
          </div>
        </div>

        <ol className="border-t border-border">
          {productFamilies.map((family) => (
            <li className="border-b border-border py-8 sm:py-10" key={family.name}>
              <div className="grid gap-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-mono text-xs text-brand-blue">
                  {family.number}
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    Product family {family.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                    {family.name}
                  </h3>
                  <p className="mt-4 max-w-xl leading-7 text-muted">
                    {family.purpose}
                  </p>

                  <div className="mt-7 border-l border-border pl-5 sm:pl-7">
                    <p className="font-mono text-[0.65rem] tracking-[0.12em] text-subtle uppercase">
                      Current product directions
                    </p>
                    <div className="mt-4 grid gap-5">
                      {family.directions.map((direction) => (
                        <article key={direction.name}>
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <h4 className="font-semibold tracking-[-0.02em] text-ink">
                              {direction.name}
                            </h4>
                            <p className="shrink-0 font-mono text-[0.65rem] tracking-[0.08em] text-brand-violet uppercase">
                              {direction.status}
                            </p>
                          </div>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                            {direction.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ProductPhilosophy() {
  return (
    <Section
      aria-labelledby="product-philosophy-title"
      className="scroll-mt-24 border-b border-border bg-canvas"
      id="product-philosophy"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="Bleoris Apps should not exist to accumulate features. Each product should solve a clearly defined problem and make the solution feel simpler than the problem itself."
              eyebrow="How we build"
              id="product-philosophy-title"
              title="One problem. One focused product."
            />
          </div>
        </div>

        <ol className="grid border-t border-border sm:grid-cols-2">
          {productPrinciples.map((principle, index) => (
            <li
              className={`border-b border-border py-6 sm:px-6 sm:py-7 ${
                index % 2 === 0 ? "sm:pl-0" : "sm:border-l"
              }`}
              key={principle.name}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full ${
                    index % 3 === 0
                      ? "bg-brand-blue"
                      : index % 3 === 1
                        ? "bg-brand-violet"
                        : "bg-brand-teal"
                  }`}
                />
              </div>
              <h3 className="mt-7 text-lg font-semibold tracking-[0.06em] text-ink uppercase">
                {principle.name}
              </h3>
              <p className="mt-3 max-w-sm leading-7 text-muted">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function FromIdeaToProduct() {
  return (
    <Section
      aria-labelledby="product-development-title"
      className="apps-lifecycle-field relative isolate overflow-hidden bg-surface-dark"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-20rem] left-[-18rem] -z-10 size-[42rem] rounded-full border border-brand-blue/12"
      />
      <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:items-end lg:gap-20">
        <SectionHeading
          description="Ideas may begin as experiments, but they become Bleoris Apps only when they solve a real problem clearly enough to deserve becoming a product."
          eyebrow="From idea to product"
          id="product-development-title"
          title="Experiments earn their way into products."
          tone="dark"
        />

        <figure>
          <figcaption className="sr-only">
            Product development flow from problem through experiment,
            prototype, validation, engineering, and product.
          </figcaption>
          <ol className="grid grid-cols-3 gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-6">
            {productDevelopmentStages.map((stage, index) => (
              <li
                className="min-h-24 bg-surface-dark/92 p-3 sm:min-h-32 sm:p-4"
                key={stage}
              >
                <span className="font-mono text-[0.62rem] text-white/56">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 break-words text-xs font-semibold tracking-[-0.01em] text-white sm:text-sm">
                  {stage}
                </p>
                {index < productDevelopmentStages.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-3 hidden text-xs text-brand-teal sm:block"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </Section>
  );
}

function LabsConnection() {
  return (
    <Section
      aria-labelledby="labs-connection-title"
      className="border-b border-border bg-surface !py-16 sm:!py-20"
    >
      <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <SectionHeading
          description="Bleoris Labs explores technologies and ideas. Bleoris Apps transforms the right ones into focused software people can actually use."
          eyebrow="From Labs to products"
          id="labs-connection-title"
          title="From exploration to product."
        />
        <ButtonLink className="w-full sm:w-auto" href="/labs">
          Explore Bleoris Labs
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </ButtonLink>
      </div>
    </Section>
  );
}

function FutureProductEcosystem() {
  return (
    <Section
      aria-labelledby="future-ecosystem-title"
      className="border-b border-border bg-canvas"
    >
      <div className="apps-growth-field relative isolate overflow-hidden rounded-panel border border-brand-nature/20 bg-surface px-5 py-9 shadow-soft sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Future product ecosystem
            </p>
            <h2
              className="mt-5 text-title font-semibold text-balance text-ink"
              id="future-ecosystem-title"
            >
              More is growing.
            </h2>
            <p className="mt-6 max-w-copy text-body-lg text-pretty text-muted">
              Bleoris Apps is an evolving product ecosystem spanning digital
              utilities, intelligent documents, developer tools, productivity,
              and emerging software experiences.
            </p>
          </div>

          <ol className="border-l border-brand-nature/35 pl-6 sm:pl-8">
            {futureEcosystemAreas.map((area, index) => (
              <li
                className="relative flex items-center justify-between gap-4 border-b border-border py-3 first:border-t"
                key={area}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.7rem] size-2 rounded-full border-2 border-surface bg-brand-nature sm:-left-[2.2rem]"
                />
                <span className="text-sm font-medium text-ink">{area}</span>
                <span className="font-mono text-[0.65rem] text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export function AppsPageContent() {
  return (
    <>
      <AppsHero />
      <FeaturedProduct />
      <ProductEcosystem />
      <ProductPhilosophy />
      <FromIdeaToProduct />
      <LabsConnection />
      <FutureProductEcosystem />
      <CallToAction
        description="Bleoris creates focused products, enterprise systems, and research-driven technology within one engineering company."
        eyebrow="Bleoris Apps"
        id="apps-final-cta-title"
        primaryAction={{ href: "/company", label: "Explore Bleoris" }}
        secondaryAction={{ href: "/labs", label: "See Bleoris Labs" }}
        title="Software should remove friction, not create more of it."
      />
    </>
  );
}
