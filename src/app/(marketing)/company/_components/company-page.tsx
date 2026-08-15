import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { CallToAction } from "@/components/sections/call-to-action";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const divisions = [
  {
    number: "01",
    name: "Bleoris Apps",
    shortName: "Apps",
    role: "Products",
    description:
      "Proprietary software products designed to solve focused problems.",
    href: "/apps",
    division: "apps",
    accent: "bg-brand-blue",
  },
  {
    number: "02",
    name: "Bleoris Solutions",
    shortName: "Solutions",
    role: "Enterprise systems",
    description:
      "AI, software, cloud, automation, computer vision, and intelligent systems for organizations.",
    href: "/solutions",
    division: "solutions",
    accent: "bg-brand-violet",
  },
  {
    number: "03",
    name: "Bleoris Labs",
    shortName: "Labs",
    role: "Research",
    description:
      "Research and experimentation exploring technologies and ideas that may become future products or capabilities.",
    href: "/labs",
    division: "labs",
    accent: "bg-brand-teal",
  },
] as const;

const brandConcepts = [
  {
    number: "01",
    name: "Bleo / Nature",
    description:
      "Represents resilience, adaptation, growth, and living systems.",
    accent: "bg-brand-nature",
  },
  {
    number: "02",
    name: "Stars / Cosmos",
    description:
      "Represents curiosity, discovery, possibility, and exploration.",
    accent: "bg-brand-violet",
  },
  {
    number: "03",
    name: "Orbit / Technology",
    description:
      "Represents engineering, systems, precision, motion, and connection.",
    accent: "bg-brand-blue",
  },
] as const;

const operatingModel = [
  {
    number: "01",
    name: "Bleoris Labs",
    description: "Explores, experiments, and learns.",
  },
  {
    number: "02",
    name: "Bleoris Apps",
    description:
      "Turns validated ideas and focused problems into software products.",
  },
  {
    number: "03",
    name: "Bleoris Solutions",
    description:
      "Applies engineering and intelligent systems to real organizational problems.",
  },
] as const;

const principles = [
  {
    name: "Useful over impressive",
    description: "Technology should solve something real.",
  },
  {
    name: "Simplicity is engineered",
    description:
      "Simple experiences usually require disciplined systems underneath.",
  },
  {
    name: "Intelligence needs judgment",
    description:
      "AI should act where appropriate and involve people where context, risk, or ambiguity demands it.",
  },
  {
    name: "Exploration has value",
    description: "Not every experiment needs to become a product.",
  },
  {
    name: "Build for evolution",
    description:
      "Products, systems, and architecture should be able to change as the problem changes.",
  },
] as const;

const engineeringConsiderations = [
  "Maintainable architecture",
  "Clear system boundaries",
  "Performance",
  "Accessibility",
  "Observability",
  "Automation",
  "Thoughtful AI integration",
  "Responsible data handling",
  "Continuous iteration",
] as const;

const sharedFoundations = [
  "One brand",
  "One engineering standard",
  "One technology foundation",
  "One long-term direction",
] as const;

const futureTransitions = [
  "Apps can become platforms.",
  "Experiments can become capabilities.",
  "Capabilities can become products.",
  "Problems can become new areas of research.",
] as const;

function CompanyHero() {
  const companyAxes = [
    { label: "Curiosity", value: "Questions worth exploring" },
    { label: "Engineering", value: "Systems worth building" },
    { label: "Purpose", value: "Technology made useful" },
  ] as const;

  return (
    <section
      aria-labelledby="company-hero-title"
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

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-16 lg:py-24 xl:gap-20 xl:py-28">
        <div className="relative z-10 max-w-[47rem]">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Company
            </p>
          </div>

          <h1
            className="text-display font-semibold text-balance text-ink"
            id="company-hero-title"
          >
            Technology shaped by curiosity,
            <span className="block text-brand-blue">
              engineering, and purpose.
            </span>
          </h1>

          <p className="mt-7 max-w-[44rem] text-body-lg text-pretty text-muted sm:mt-8">
            Bleoris is a technology company building intelligent software,
            AI-powered products, enterprise systems, and experimental
            technologies through Bleoris Apps, Bleoris Solutions, and Bleoris
            Labs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink
              className="w-full sm:w-auto"
              href="/company#company-model"
            >
              Explore Bleoris
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </ButtonLink>
            <ButtonLink
              analytics={{
                name: "cta_click",
                properties: { cta: "lets_talk", source: "company" },
              }}
              className="w-full sm:w-auto"
              href="/contact"
              variant="secondary"
            >
              Let&apos;s Talk
            </ButtonLink>
          </div>
        </div>

        <figure className="company-institution-field relative isolate overflow-hidden rounded-panel border border-brand-blue/15 bg-surface/86 p-5 shadow-elevated sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              Company system
            </figcaption>
            <span className="font-mono text-[0.68rem] text-subtle">
              Bleoris / 01
            </span>
          </div>

          <div className="my-7 grid place-items-center">
            <div className="relative grid size-28 place-items-center rounded-full border border-brand-blue/22 bg-white shadow-soft sm:size-32">
              <div
                aria-hidden="true"
                className="absolute inset-2 rounded-full border border-brand-violet/18"
              />
              <Image
                alt=""
                className="relative h-14 w-auto sm:h-16"
                height={97}
                loading="eager"
                src="/brand/bleoris-symbol.svg"
                width={87}
              />
            </div>
          </div>

          <ol className="border-t border-border">
            {companyAxes.map((axis, index) => (
              <li
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-border py-3.5 sm:grid-cols-[2rem_7rem_minmax(0,1fr)] sm:items-center"
                key={axis.label}
              >
                <span className="font-mono text-[0.62rem] text-subtle">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">
                  {axis.label}
                </span>
                <span className="col-start-2 text-sm font-medium text-ink sm:col-start-3">
                  {axis.value}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-5 text-center font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">
            One company · Three divisions
          </p>
        </figure>
      </Container>
    </section>
  );
}

function WhatBleorisIs() {
  return (
    <Section
      aria-labelledby="company-model-title"
      className="scroll-mt-24 border-b border-border bg-canvas"
      id="company-model"
    >
      <SectionHeading
        description="Bleoris combines product development, enterprise engineering, and technical experimentation within one company."
        eyebrow="Who we are"
        id="company-model-title"
        title="One technology company. Three ways to build."
      />

      <div className="mt-12 border-t border-border lg:mt-16">
        {divisions.map((division) => (
          <TrackedLink
            analytics={{
              name: "division_explore",
              properties: { division: division.division, source: "company" },
            }}
            className="group relative grid gap-4 border-b border-border py-7 transition-colors duration-base ease-brand hover:bg-surface sm:grid-cols-[3rem_minmax(12rem,0.72fr)_minmax(0,1fr)_2rem] sm:items-center sm:gap-6 sm:px-5 sm:py-8"
            href={division.href}
            key={division.name}
          >
            <span className="font-mono text-xs text-subtle">
              {division.number}
            </span>
            <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
              {division.name}
            </h3>
            <p className="max-w-2xl leading-7 text-muted">
              {division.description}
            </p>
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-full border border-border-strong text-ink transition-[color,background-color,border-color,transform] duration-base ease-brand group-hover:translate-x-1 group-hover:border-ink group-hover:bg-ink group-hover:text-white"
            >
              →
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 transition-transform duration-base ease-brand group-hover:scale-y-100 ${division.accent}`}
            />
          </TrackedLink>
        ))}
      </div>
    </Section>
  );
}

function WhyBleoris() {
  return (
    <Section
      aria-labelledby="why-bleoris-title"
      className="border-b border-border bg-surface"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(28rem,1.2fr)] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="The name"
            id="why-bleoris-title"
            title="Inspired by life. Built for possibility."
          />
          <p className="mt-7 text-body-lg text-pretty text-muted">
            Inspired by Bleo — a symbol of resilience and life.
          </p>
          <p className="mt-5 max-w-copy leading-7 text-muted">
            We combine nature&apos;s intelligence with the boundless potential
            of the cosmos to build technology that makes a difference.
          </p>
          <p className="mt-5 max-w-copy text-sm leading-6 text-muted">
            Together these ideas form the conceptual foundation of Bleoris.
          </p>
        </div>

        <figure className="company-brand-field relative isolate overflow-hidden rounded-panel border border-brand-blue/15 bg-canvas p-5 shadow-soft sm:p-7 lg:p-8">
          <figcaption className="flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
            Identity system
            <span className="text-subtle">B / 03</span>
          </figcaption>

          <div className="mt-6 grid gap-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center">
            <div className="mx-auto grid size-28 place-items-center rounded-full border border-brand-blue/20 bg-surface shadow-soft sm:size-32">
              <Image
                alt=""
                className="h-16 w-auto"
                height={97}
                src="/brand/bleoris-symbol.svg"
                width={87}
              />
            </div>

            <ol className="border-t border-border">
              {brandConcepts.map((concept) => (
                <li
                  className="relative border-b border-border py-4 pl-4"
                  key={concept.name}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-0.5 ${concept.accent}`}
                  />
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">
                      {concept.name}
                    </h3>
                    <span className="font-mono text-[0.6rem] text-subtle">
                      {concept.number}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {concept.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </figure>
      </div>
    </Section>
  );
}

function MissionAndDirection() {
  return (
    <Section
      aria-labelledby="mission-direction-title"
      className="company-purpose-field relative isolate overflow-hidden bg-surface-dark !py-16 sm:!py-20 lg:!py-24"
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-white/58 uppercase">
        Why we build
      </p>
      <h2
        className="mt-5 text-title font-semibold text-balance text-white"
        id="mission-direction-title"
      >
        Mission and direction.
      </h2>

      <div className="mt-10 grid border-y border-white/12 sm:grid-cols-2">
        <article className="border-b border-white/12 py-7 sm:border-r sm:border-b-0 sm:pr-8 sm:py-9 lg:pr-12">
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-brand-teal uppercase">
            Mission
          </p>
          <p className="mt-5 max-w-xl text-xl leading-8 font-semibold tracking-[-0.025em] text-white sm:text-2xl sm:leading-9">
            Build technology that turns complex problems into useful systems,
            products, and capabilities.
          </p>
        </article>
        <article className="py-7 sm:py-9 sm:pl-8 lg:pl-12">
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-brand-violet uppercase">
            Direction
          </p>
          <p className="mt-5 max-w-xl text-xl leading-8 font-semibold tracking-[-0.025em] text-white sm:text-2xl sm:leading-9">
            Create a company where research, product development, and
            enterprise engineering strengthen one another.
          </p>
        </article>
      </div>
    </Section>
  );
}

function BleorisOperatingModel() {
  return (
    <Section
      aria-labelledby="operating-model-title"
      className="border-b border-border bg-canvas"
    >
      <SectionHeading
        description="Research informs products. Products sharpen engineering. Enterprise problems generate new questions."
        eyebrow="How the company works"
        id="operating-model-title"
        title="Research. Products. Real-world engineering."
      />

      <figure className="company-model-field relative isolate mt-12 overflow-hidden rounded-panel border border-brand-blue/15 bg-surface p-5 shadow-soft sm:p-7 lg:mt-16 lg:p-8">
        <figcaption className="sr-only">
          The Bleoris operating model connects research, products, and
          enterprise engineering in a reinforcing loop.
        </figcaption>

        <ol className="grid gap-px overflow-hidden rounded-control border border-border bg-border md:grid-cols-3">
          {operatingModel.map((division, index) => (
            <li
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 bg-surface p-5 md:min-h-48 md:block md:p-6"
              key={division.name}
            >
              <span className="font-mono text-xs text-accent-blue">
                {division.number}
              </span>
              <div>
                <h3 className="font-semibold tracking-[-0.025em] text-ink md:mt-8 md:text-xl">
                  {division.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {division.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="absolute right-4 bottom-3 text-sm text-accent-violet md:top-5 md:right-5 md:bottom-auto"
              >
                {index === operatingModel.length - 1 ? "↺" : "→"}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-5 grid items-center gap-3 rounded-control border border-brand-teal/24 bg-brand-teal/[0.045] p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:px-5">
          <p className="text-sm leading-6 font-medium text-ink">
            Real-world problems create new technical questions that can return
            to Labs.
          </p>
          <span className="font-mono text-[0.62rem] tracking-[0.1em] text-muted uppercase">
            Feedback loop
          </span>
        </div>
      </figure>
    </Section>
  );
}

function Principles() {
  return (
    <Section
      aria-labelledby="principles-title"
      className="border-b border-border bg-surface"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Principles"
              id="principles-title"
              title="How we think about technology."
            />
          </div>
        </div>

        <ol className="border-t border-border">
          {principles.map((principle, index) => (
            <li
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(12rem,0.78fr)_minmax(0,1fr)] sm:gap-5 sm:py-7"
              key={principle.name}
            >
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">
                {principle.name}
              </h3>
              <p className="leading-7 text-muted">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function EngineeringPhilosophy() {
  return (
    <Section
      aria-labelledby="engineering-philosophy-title"
      className="company-engineering-field relative isolate overflow-hidden bg-surface-dark"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.22fr)] lg:items-end lg:gap-20">
        <SectionHeading
          description="Bleoris treats architecture, reliability, performance, accessibility, automation, and maintainability as part of the experience — not as work hidden behind it."
          eyebrow="Engineering"
          id="engineering-philosophy-title"
          title="Engineering is part of the product."
          tone="dark"
        />

        <div>
          <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-4">
            <p className="font-mono text-[0.65rem] tracking-[0.12em] text-white/58 uppercase">
              Engineering considerations
            </p>
            <p className="font-mono text-[0.65rem] text-white/52">E / 09</p>
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden border-b border-white/10 bg-white/10 sm:grid-cols-3">
            {engineeringConsiderations.map((consideration, index) => (
              <li
                className="min-h-24 bg-surface-dark/92 p-4 sm:min-h-28"
                key={consideration}
              >
                <span className="font-mono text-[0.6rem] text-white/48">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-xs leading-5 font-semibold text-white/78 sm:text-sm">
                  {consideration}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function OneBleoris() {
  return (
    <Section
      aria-labelledby="one-bleoris-title"
      className="border-b border-border bg-canvas"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(28rem,1.28fr)] lg:items-center lg:gap-20">
        <SectionHeading
          description="Apps, Solutions, and Labs are different paths within the same company and share the same foundation."
          eyebrow="One Bleoris"
          id="one-bleoris-title"
          title="Different paths. Shared intelligence."
        />

        <figure className="overflow-hidden rounded-panel border border-border bg-surface p-5 shadow-soft sm:p-7">
          <figcaption className="sr-only">
            Three Bleoris divisions connected by one shared company foundation.
          </figcaption>

          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-t-control border border-border bg-border">
            {divisions.map((division) => (
              <Link
                className="group bg-surface px-2 py-4 text-center transition-colors duration-base ease-brand hover:bg-canvas sm:px-4 sm:py-5"
                href={division.href}
                key={division.name}
              >
                <span className="block text-sm font-semibold text-ink sm:text-base">
                  {division.shortName}
                </span>
                <span className="mt-2 block text-[0.62rem] leading-4 text-muted sm:text-xs">
                  {division.role}
                </span>
              </Link>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="mx-auto h-7 w-px bg-gradient-to-b from-brand-violet to-brand-blue"
          />

          <ol className="border-t border-border">
            {sharedFoundations.map((foundation, index) => (
              <li
                className="flex items-center justify-between gap-4 border-b border-border bg-canvas px-4 py-3.5 sm:px-5"
                key={foundation}
              >
                <span className="text-sm font-medium text-ink">
                  {foundation}
                </span>
                <span className="font-mono text-[0.62rem] text-subtle">
                  F{index + 1}
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </Section>
  );
}

function FutureDirection() {
  return (
    <Section
      aria-labelledby="future-direction-title"
      className="border-b border-border bg-surface"
    >
      <div className="company-direction-field relative isolate overflow-hidden rounded-panel border border-brand-nature/20 bg-canvas p-5 shadow-soft sm:p-8 lg:p-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:gap-20">
          <SectionHeading
            description="Bleoris is being built as a global technology company where focused software products, enterprise engineering, and technical research can grow into a shared ecosystem."
            eyebrow="The direction"
            id="future-direction-title"
            title="Built for what comes next."
          />

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
              Potential transitions
            </p>
            <ol className="mt-4 border-t border-border">
              {futureTransitions.map((transition, index) => (
                <li
                  className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-border py-4"
                  key={transition}
                >
                  <span className="font-mono text-[0.62rem] text-accent-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-medium text-ink">{transition}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}

function BrandEssence() {
  const essence = [
    "Nature.",
    "Intelligence.",
    "Technology.",
    "Future.",
    "Impact.",
  ] as const;

  return (
    <Section
      aria-labelledby="brand-essence-title"
      className="bg-canvas !py-16 sm:!py-20"
    >
      <div className="company-essence-field relative isolate overflow-hidden rounded-panel bg-surface-dark px-5 py-10 text-center shadow-elevated sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <p className="text-xs font-semibold tracking-[0.18em] text-white/58 uppercase">
          Bleoris
        </p>
        <h2
          className="mx-auto mt-6 flex max-w-[62rem] flex-wrap justify-center gap-x-3 gap-y-2 text-[clamp(2.15rem,5.5vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-white sm:gap-x-5"
          id="brand-essence-title"
        >
          {essence.map((word, index) => (
            <span
              className={
                index === 1
                  ? "text-brand-blue"
                  : index === 2
                    ? "text-brand-violet"
                    : ""
              }
              key={word}
            >
              {word}
            </span>
          ))}
        </h2>
        <p className="mt-8 text-body-lg text-white/66">
          Light. Intelligent. Boundless.
        </p>
      </div>
    </Section>
  );
}

export function CompanyPageContent() {
  return (
    <>
      <CompanyHero />
      <WhatBleorisIs />
      <WhyBleoris />
      <MissionAndDirection />
      <BleorisOperatingModel />
      <Principles />
      <EngineeringPhilosophy />
      <OneBleoris />
      <FutureDirection />
      <BrandEssence />
      <CallToAction
        description="Explore Bleoris products, enterprise capabilities, research, or start a conversation about what you're building."
        eyebrow="Bleoris"
        id="company-final-cta-title"
        primaryAction={{
          analytics: {
            name: "cta_click",
            properties: { cta: "lets_talk", source: "company" },
          },
          href: "/contact",
          label: "Let's Talk",
        }}
        secondaryAction={{
          analytics: {
            name: "division_explore",
            properties: { division: "solutions", source: "company" },
          },
          href: "/solutions",
          label: "Explore Solutions",
        }}
        title="Build what comes next."
      />
    </>
  );
}
