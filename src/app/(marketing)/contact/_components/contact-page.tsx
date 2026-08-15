import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/app/(marketing)/contact/_components/contact-form";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const nextSteps = [
  {
    name: "Context",
    description: "We review what you share.",
  },
  {
    name: "Fit",
    description:
      "We determine whether Bleoris is a good fit for the problem.",
  },
  {
    name: "Next step",
    description:
      "If there is a useful path forward, we continue the conversation with the appropriate next step.",
  },
] as const;

const alternativePaths = [
  { href: "/solutions", label: "Explore Solutions" },
  { href: "/apps", label: "Explore Apps" },
  { href: "/labs", label: "Explore Labs" },
  { href: "/company", label: "Learn about Bleoris" },
] as const;

function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative isolate overflow-hidden border-b border-border bg-surface"
    >
      <div aria-hidden="true" className="ambient-grid absolute inset-0 -z-30" />
      <div aria-hidden="true" className="brand-radiance absolute inset-0 -z-20" />
      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:py-24 xl:py-28">
        <div className="max-w-[48rem]">
          <div className="mb-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Contact
            </p>
          </div>
          <h1
            className="text-display font-semibold text-balance text-ink"
            id="contact-hero-title"
          >
            Let&apos;s build something useful.
          </h1>
          <p className="mt-7 max-w-[44rem] text-body-lg text-pretty text-muted">
            Tell us what you&apos;re trying to build, improve, automate, or
            understand. We&apos;ll start with the problem.
          </p>
        </div>

        <figure className="contact-hero-field relative overflow-hidden rounded-panel border border-brand-blue/15 bg-surface/82 p-6 shadow-elevated sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              Conversation path
            </figcaption>
            <Image
              alt=""
              className="h-8 w-auto"
              height={97}
              src="/brand/bleoris-symbol.svg"
              width={87}
            />
          </div>
          <ol className="mt-2">
            {[
              ["01", "Problem"],
              ["02", "Context"],
              ["03", "Useful next step"],
            ].map(([number, label]) => (
              <li
                className="flex items-center gap-5 border-b border-border py-4 last:border-b-0"
                key={number}
              >
                <span className="font-mono text-xs text-accent-blue">{number}</span>
                <span className="font-semibold tracking-[-0.02em] text-ink">
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </Container>
    </section>
  );
}

function InquiryAndForm() {
  return (
    <Section
      aria-labelledby="start-conversation-title"
      className="border-b border-border bg-canvas"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.56fr)_minmax(0,1.44fr)] lg:gap-14 xl:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="Identify the closest area, then share enough context for us to understand what matters."
              eyebrow="Start a conversation"
              id="start-conversation-title"
              title="Begin with the problem."
            />
            <div className="mt-8 border-l border-brand-blue/35 pl-5">
              <p className="text-sm leading-6 text-muted">
                No phone number, budget, company size, country, or job title is
                required.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

function WhatHappensNext() {
  return (
    <Section
      aria-labelledby="what-happens-next-title"
      className="contact-next-field relative isolate overflow-hidden border-b border-border bg-surface-dark"
    >
      <SectionHeading
        eyebrow="What happens next"
        id="what-happens-next-title"
        title="A useful conversation, one step at a time."
        tone="dark"
      />

      <ol className="mt-10 grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 md:mt-12 md:grid-cols-3">
        {nextSteps.map((step, index) => (
          <li className="min-h-52 bg-surface-dark/94 p-6 sm:p-7 lg:p-8" key={step.name}>
            <span className="font-mono text-xs text-brand-teal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
              {step.name}
            </h3>
            <p className="mt-4 max-w-sm leading-7 text-white/62">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function AlternativePaths() {
  return (
    <Section
      aria-labelledby="alternative-paths-title"
      className="contact-close-field relative isolate overflow-hidden bg-canvas"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(14rem,0.52fr)_minmax(0,1.48fr)] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            Alternative paths
          </p>
          <h2
            className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl"
            id="alternative-paths-title"
          >
            Explore before reaching out.
          </h2>
        </div>

        <nav aria-label="Explore Bleoris">
          <ul className="border-t border-border">
            {alternativePaths.map((path) => (
              <li className="border-b border-border" key={path.href}>
                <Link
                  className="group flex min-h-16 items-center justify-between gap-5 py-4 text-base font-semibold text-ink transition-colors duration-fast ease-brand hover:text-accent-blue sm:min-h-18 sm:text-lg"
                  href={path.href}
                >
                  {path.label}
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border-strong transition-[color,background-color,border-color,transform] duration-base ease-brand group-hover:translate-x-1 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16 lg:mt-24 lg:pt-20">
        <Image
          alt=""
          className="h-12 w-auto"
          height={97}
          src="/brand/bleoris-symbol.svg"
          width={87}
        />
        <p className="mt-7 max-w-[56rem] text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-balance text-ink">
          Good technology starts with understanding the problem.
        </p>
      </div>
    </Section>
  );
}

export function ContactPageContent() {
  return (
    <>
      <ContactHero />
      <InquiryAndForm />
      <WhatHappensNext />
      <AlternativePaths />
    </>
  );
}
