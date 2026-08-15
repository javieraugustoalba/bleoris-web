import Image from "next/image";

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
    description:
      "Focused software products designed to solve specific problems exceptionally well.",
    href: "/apps",
    division: "apps",
    accent: "bg-brand-blue",
  },
  {
    number: "02",
    name: "Bleoris Solutions",
    description:
      "AI, software, cloud, automation, computer vision, and intelligent systems for organizations.",
    href: "/solutions",
    division: "solutions",
    accent: "bg-brand-violet",
  },
  {
    number: "03",
    name: "Bleoris Labs",
    description:
      "Research and experimentation exploring technologies that can become tomorrow's products.",
    href: "/labs",
    division: "labs",
    accent: "bg-brand-teal",
  },
] as const;

const capabilities = [
  {
    name: "Artificial Intelligence",
    description:
      "AI agents, generative AI, machine learning, and intelligent systems.",
  },
  {
    name: "Software Engineering",
    description:
      "Scalable SaaS, enterprise platforms, APIs, and custom software.",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Modern cloud architecture, CI/CD, containers, and deployment systems.",
  },
  {
    name: "Computer Vision",
    description:
      "Visual intelligence, OCR, detection, inspection, and image analysis.",
  },
  {
    name: "Intelligent Automation",
    description: "AI-powered workflows and business process automation.",
  },
  {
    name: "Data & Platforms",
    description:
      "Data integration, analytics, and intelligent digital platforms.",
  },
] as const;

const aiEmployeeRoles = [
  "AI Support Specialist",
  "AI Document Specialist",
  "AI Operations Specialist",
  "AI Sales Operations Specialist",
] as const;

const appDirections = [
  "Focused utilities",
  "Productivity tools",
  "Developer tools",
  "Document tools",
  "AI-powered applications",
] as const;

const labThemes = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Generative AI",
  "Mobility Intelligence",
  "Emerging Technology",
] as const;

function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate overflow-hidden border-b border-border bg-surface"
    >
      <div aria-hidden="true" className="ambient-grid absolute inset-0 -z-30" />
      <div
        aria-hidden="true"
        className="brand-radiance absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-canvas to-transparent"
      />

      <Container className="grid min-h-[calc(100svh-var(--header-height))] items-center gap-10 py-14 sm:gap-12 sm:py-18 lg:min-h-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(24rem,0.88fr)] lg:gap-12 lg:py-24 xl:gap-16 xl:py-28 2xl:py-32">
        <div className="relative z-10 max-w-[44rem]">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand-teal shadow-[0_0_0_5px_color-mix(in_srgb,var(--brand-teal)_14%,transparent)]"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Nature · Cosmos · Technology
            </p>
          </div>

          <h1
            className="text-display font-semibold text-balance text-ink"
            id="home-hero-title"
          >
            Engineering Intelligence{" "}
            <span className="block bg-gradient-to-r from-brand-blue via-brand-blue to-brand-violet bg-clip-text text-transparent">
              for Tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-[42rem] text-body-lg text-pretty text-muted sm:mt-8">
            Bleoris builds intelligent software, AI-powered products, and
            digital systems designed to turn complex problems into useful
            technology.
          </p>

          <div className="mt-9 flex flex-col gap-3 xs:flex-row sm:mt-10">
            <ButtonLink
              analytics={{
                name: "cta_click",
                properties: { cta: "explore_solutions", source: "home" },
              }}
              className="w-full xs:w-auto"
              href="/solutions"
            >
              Explore Solutions
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </ButtonLink>
            <ButtonLink
              analytics={{
                name: "cta_click",
                properties: { cta: "discover_bleoris", source: "home" },
              }}
              className="w-full xs:w-auto"
              href="/company"
              variant="secondary"
            >
              Discover Bleoris
            </ButtonLink>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-[29rem] py-2 sm:py-4 lg:mx-0 lg:justify-self-end lg:py-0 xl:max-w-[30rem]"
        >
          <div className="home-orbit-field relative aspect-square overflow-hidden rounded-full border border-brand-blue/15 bg-surface/56 shadow-elevated backdrop-blur-sm">
            <div className="absolute inset-[10%] rounded-full border border-brand-violet/20" />
            <div className="absolute inset-[24%] rounded-full border border-brand-blue/15" />
            <div className="orbit-spin absolute inset-[7%] rounded-full border border-brand-blue/35">
              <span className="absolute top-[12%] right-[4%] size-3 rounded-full bg-brand-blue shadow-[0_0_0_6px_color-mix(in_srgb,var(--brand-blue)_12%,transparent)]" />
            </div>
            <div className="orbit-spin-reverse absolute inset-[19%] rotate-[28deg] rounded-[50%] border border-brand-violet/32">
              <span className="absolute bottom-[2%] left-[18%] size-2.5 rounded-full bg-brand-violet" />
            </div>
            <span className="absolute top-[19%] left-[19%] size-2 rounded-full bg-brand-solar" />
            <span className="absolute right-[18%] bottom-[19%] size-2 rounded-full bg-brand-teal" />

            <div className="absolute inset-[30%] grid place-items-center rounded-full border border-white/80 bg-white/84 shadow-soft">
              <Image
                alt=""
                className="h-[58%] w-auto"
                height={97}
                loading="eager"
                src="/brand/bleoris-symbol.svg"
                width={87}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BrandPositioning() {
  return (
    <Section
      aria-labelledby="brand-positioning-title"
      className="border-b border-border bg-canvas !py-16 sm:!py-20 lg:!py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16 xl:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            How we think
          </p>
          <h2
            className="mt-4 text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.055em] text-ink"
            id="brand-positioning-title"
          >
            Nature.
            <span className="block text-brand-blue">Intelligence.</span>
            <span className="block text-accent-violet">Technology.</span>
          </h2>
        </div>

        <div className="border-l border-border pl-6 sm:pl-9">
          <p className="max-w-[39rem] text-body-lg text-pretty text-muted">
            Bleoris combines the adaptive intelligence of nature, scientific
            curiosity, and modern engineering to create meaningful technology.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Divisions() {
  return (
    <Section
      aria-labelledby="divisions-title"
      className="border-b border-border bg-surface"
    >
      <SectionHeading
        description="Three focused divisions, one shared engineering standard."
        eyebrow="One company"
        id="divisions-title"
        title="Built to explore, create, and deliver."
      />

      <div className="mt-10 border-t border-border sm:mt-12 lg:mt-14">
        {divisions.map((division) => (
          <TrackedLink
            analytics={{
              name: "division_explore",
              properties: { division: division.division, source: "home" },
            }}
            className="group relative grid gap-5 border-b border-border py-7 transition-colors duration-base ease-brand hover:bg-canvas sm:grid-cols-[3rem_minmax(12rem,0.7fr)_minmax(0,1fr)_2rem] sm:items-center sm:gap-7 sm:px-5 sm:py-9"
            href={division.href}
            key={division.name}
          >
            <span className="font-mono text-xs text-subtle">
              {division.number}
            </span>
            <h3 className="text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
              {division.name}
            </h3>
            <p className="max-w-xl leading-7 text-muted">
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

function Capabilities() {
  return (
    <Section
      aria-labelledby="capabilities-title"
      className="border-b border-border bg-canvas"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="Disciplines connected by systems thinking and a focus on useful outcomes."
              eyebrow="Core capabilities"
              id="capabilities-title"
              title="Engineering across the intelligent stack."
            />
          </div>
        </div>

        <ol className="border-t border-border">
          {capabilities.map((capability, index) => (
            <li
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(12rem,0.72fr)_minmax(0,1fr)] sm:gap-5 sm:py-7"
              key={capability.name}
            >
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">
                {capability.name}
              </h3>
              <p className="leading-7 text-muted">
                {capability.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function AiEmployees() {
  return (
    <Section
      aria-labelledby="ai-employees-title"
      className="workforce-radiance relative isolate overflow-hidden bg-surface-dark"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-14rem] right-[-12rem] -z-10 size-[35rem] rounded-full border border-brand-violet/15"
      />
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            description="Specialized AI workers that understand context, use company knowledge, interact with systems, execute workflows, and escalate exceptions to people."
            eyebrow="AI Employees"
            id="ai-employees-title"
            title="Meet your new digital workforce."
            tone="dark"
          />
          <ButtonLink
            analytics={{
              name: "ai_employees_interest",
              properties: { action: "explore", source: "home" },
            }}
            className="mt-9 w-full xs:w-auto"
            href="/solutions"
            variant="inverse"
          >
            Explore AI Employees
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </ButtonLink>
        </div>

        <div className="rounded-panel border border-white/12 bg-white/[0.045] p-5 shadow-elevated sm:p-7 lg:p-8">
          <div className="grid gap-px overflow-hidden rounded-control border border-white/10 bg-white/10 sm:grid-cols-2">
            <div className="bg-surface-dark/90 p-5 sm:p-6">
              <p className="font-mono text-xs tracking-[0.12em] text-white/52 uppercase">
                Chatbot
              </p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white/72">
                Answers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/18 to-brand-violet/12 p-5 sm:p-6">
              <p className="font-mono text-xs tracking-[0.12em] text-brand-teal uppercase">
                AI Employee
              </p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                Understands. Acts. Verifies.
              </p>
              <p className="mt-1 text-sm leading-6 text-white/58">
                Records and escalates.
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-semibold tracking-[0.15em] text-white/52 uppercase">
              Example roles
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {aiEmployeeRoles.map((role, index) => (
                <li
                  className="flex min-h-20 items-start gap-3 rounded-control border border-white/10 bg-white/[0.035] p-4"
                  key={role}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 size-2 shrink-0 rounded-full ${
                      index % 2 === 0 ? "bg-brand-blue" : "bg-brand-violet"
                    }`}
                  />
                  <span className="text-sm leading-6 font-medium text-white/78">
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Apps() {
  return (
    <Section
      aria-labelledby="apps-title"
      className="border-b border-border bg-surface"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.8fr)] lg:items-center lg:gap-24">
        <div>
          <SectionHeading
            description="A proprietary product ecosystem for focused utilities, productivity, development, documents, and AI-powered applications."
            eyebrow="Bleoris Apps"
            id="apps-title"
            title="Purpose-built software, shaped around real problems."
          />
          <p className="mt-5 max-w-copy leading-7 text-muted">
            The platform is designed so focused product experiences can grow
            without losing the clarity that made them useful.
          </p>
          <ButtonLink
            analytics={{
              name: "division_explore",
              properties: { division: "apps", source: "home" },
            }}
            className="mt-9 w-full xs:w-auto"
            href="/apps"
          >
            Explore Bleoris Apps
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </ButtonLink>
        </div>

        <div className="relative overflow-hidden rounded-panel border border-border bg-canvas p-6 shadow-soft sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 size-52 rounded-full bg-brand-blue/10 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Product directions
              </p>
              <span className="font-mono text-xs text-subtle">A—05</span>
            </div>
            <ul>
              {appDirections.map((direction, index) => (
                <li
                  className="flex items-center gap-4 border-b border-border py-4 last:border-b-0"
                  key={direction}
                >
                  <span className="font-mono text-xs text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-ink">{direction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Labs() {
  return (
    <Section
      aria-labelledby="labs-title"
      className="border-b border-border bg-canvas"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(22rem,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:gap-20">
        <div className="order-2 lg:order-1">
          <div className="labs-field relative overflow-hidden rounded-panel border border-brand-blue/15 p-6 shadow-soft sm:p-8">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-[18rem] -translate-1/2 rounded-full border border-brand-violet/20"
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-[10rem] -translate-1/2 rounded-full border border-brand-blue/20"
            />
            <ul className="relative grid gap-3 sm:grid-cols-2">
              {labThemes.map((theme, index) => (
                <li
                  className={`flex min-h-24 items-end rounded-control border bg-white/76 p-4 text-sm font-semibold tracking-[-0.01em] text-ink shadow-soft backdrop-blur-sm ${
                    index === 0 || index === 5
                      ? "border-brand-violet/20"
                      : "border-border"
                  }`}
                  key={theme}
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            description="Research and experimentation exploring technologies that can become tomorrow's products."
            eyebrow="Bleoris Labs"
            id="labs-title"
            title="Curiosity, given an engineering path."
          />
          <p className="mt-5 max-w-copy leading-7 text-muted">
            Labs creates room to test emerging ideas carefully, connect
            disciplines, and learn what is worth building next.
          </p>
          <ButtonLink
            analytics={{
              name: "division_explore",
              properties: { division: "labs", source: "home" },
            }}
            className="mt-9 w-full xs:w-auto"
            href="/labs"
          >
            Enter Bleoris Labs
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

function BrandPhilosophy() {
  return (
    <Section
      aria-labelledby="brand-philosophy-title"
      className="relative isolate overflow-hidden bg-surface"
      containerClassName="relative"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-page h-px w-20 bg-gradient-to-r from-brand-solar via-brand-blue to-transparent"
      />
      <div className="mx-auto grid max-w-[62rem] gap-9 text-center">
        <Image
          alt=""
          className="mx-auto h-16 w-auto"
          height={97}
          src="/brand/bleoris-symbol.svg"
          width={87}
        />
        <div>
          <p className="text-sm font-semibold tracking-[0.08em] text-accent-blue uppercase">
            Inspired by Bleo
          </p>
          <h2
            className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-balance text-ink"
            id="brand-philosophy-title"
          >
            A symbol of resilience and life.
          </h2>
          <p className="mx-auto mt-7 max-w-[48rem] text-body-lg text-pretty text-muted">
            We combine nature&apos;s intelligence with the boundless potential
            of the cosmos to build technology that makes a difference.
          </p>
        </div>
      </div>
    </Section>
  );
}

function FinalCallToAction() {
  return (
    <CallToAction
      description="From intelligent products to enterprise systems, Bleoris engineers technology designed for real-world impact."
      eyebrow="Start a conversation"
      id="final-cta-title"
      primaryAction={{
        analytics: {
          name: "cta_click",
          properties: { cta: "lets_talk", source: "home" },
        },
        href: "/contact",
        label: "Let's Talk",
      }}
      secondaryAction={{
        analytics: {
          name: "division_explore",
          properties: { division: "solutions", source: "home" },
        },
        href: "/solutions",
        label: "Explore Solutions",
      }}
      title="Build what comes next."
    />
  );
}

export function Homepage() {
  return (
    <>
      <Hero />
      <BrandPositioning />
      <Divisions />
      <Capabilities />
      <AiEmployees />
      <Apps />
      <Labs />
      <BrandPhilosophy />
      <FinalCallToAction />
    </>
  );
}
