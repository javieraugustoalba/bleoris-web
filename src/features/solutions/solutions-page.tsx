import Image from "next/image";

import { CallToAction } from "@/components/sections/call-to-action";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const capabilities = [
  {
    name: "Artificial Intelligence",
    description:
      "AI agents, generative AI, machine learning, RAG, and intelligent systems.",
  },
  {
    name: "Software Engineering",
    description:
      "SaaS platforms, enterprise applications, APIs, integrations, and custom software.",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Cloud architecture, containers, CI/CD, deployment, observability, and infrastructure automation.",
  },
  {
    name: "Computer Vision",
    description:
      "OCR, visual inspection, object detection, image analysis, and intelligent vision systems.",
  },
  {
    name: "Intelligent Automation",
    description:
      "Business workflows, document processing, system orchestration, and AI-assisted operations.",
  },
  {
    name: "Data & Platforms",
    description:
      "Data integration, analytics, intelligent platforms, and AI-ready system architecture.",
  },
] as const;

const aiEmployeeWorkflow = [
  "Understand",
  "Retrieve",
  "Decide",
  "Act",
  "Verify",
  "Record",
  "Escalate",
] as const;

const aiEmployeeRoles = [
  {
    name: "AI Support Specialist",
    description:
      "Handles customer inquiries, retrieves information, updates cases, and escalates exceptions.",
  },
  {
    name: "AI Document Specialist",
    description:
      "Reads, classifies, extracts, validates, and processes business documents.",
  },
  {
    name: "AI Operations Specialist",
    description:
      "Coordinates workflows across systems and repetitive operational processes.",
  },
  {
    name: "AI Sales Operations Specialist",
    description:
      "Supports lead research, qualification, CRM operations, meeting preparation, and follow-up workflows.",
  },
] as const;

const approvalExamples = [
  "Financial decisions",
  "Contract execution",
  "Destructive operations",
  "Sensitive data changes",
  "Ambiguous cases",
] as const;

const buildStages = [
  {
    name: "Discover",
    description:
      "Understand the workflow, systems, constraints, and business objective.",
  },
  {
    name: "Design",
    description:
      "Define architecture, integrations, AI behavior, permissions, and human checkpoints.",
  },
  {
    name: "Build",
    description:
      "Engineer the software, models, workflows, APIs, and infrastructure.",
  },
  {
    name: "Operate",
    description:
      "Deploy, observe, refine, and evolve the system.",
  },
] as const;

const problemAreas = [
  {
    name: "Document-heavy operations",
    examples: ["PDFs", "Forms", "Invoices", "Claims", "Contracts", "Tenders"],
  },
  {
    name: "Disconnected systems",
    examples: ["CRM", "ERP", "Email", "Databases", "APIs", "Internal tools"],
  },
  {
    name: "Repetitive workflows",
    examples: [
      "Data entry",
      "Case creation",
      "Notifications",
      "Validations",
      "Follow-ups",
    ],
  },
  {
    name: "Visual processes",
    examples: [
      "OCR",
      "Inspection",
      "Image recognition",
      "Quality control",
      "Visual analysis",
    ],
  },
] as const;

const engagementModels = [
  {
    name: "Build",
    description:
      "A defined custom software, AI, automation, or platform project.",
  },
  {
    name: "Integrate",
    description:
      "Connect intelligent capabilities to existing systems and organizational workflows.",
  },
  {
    name: "Evolve",
    description:
      "Long-term engineering, optimization, support, and iteration.",
  },
] as const;

function SolutionsHero() {
  const inputLayer = ["Workflow", "Knowledge", "Systems"] as const;
  const outputLayer = ["Decisions", "Actions", "Records"] as const;

  return (
    <section
      aria-labelledby="solutions-hero-title"
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

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.06fr)_minmax(25rem,0.94fr)] lg:gap-14 lg:py-24 xl:gap-20 xl:py-28">
        <div className="relative z-10 max-w-[46rem]">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Bleoris Solutions
            </p>
          </div>

          <h1
            className="text-display font-semibold text-balance text-ink"
            id="solutions-hero-title"
          >
            Intelligent systems built for real business.
          </h1>

          <p className="mt-7 max-w-[44rem] text-body-lg text-pretty text-muted sm:mt-8">
            Bleoris Solutions combines artificial intelligence, software
            engineering, cloud infrastructure, automation, and computer vision
            to design systems that solve operational problems and create new
            digital capabilities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" href="/contact">
              Start a Conversation
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href="/solutions#ai-employees"
              variant="secondary"
            >
              Explore AI Employees
            </ButtonLink>
          </div>
        </div>

        <figure className="solutions-system-field relative isolate overflow-hidden rounded-panel border border-brand-blue/15 bg-surface/84 p-5 shadow-elevated sm:p-7">
          <div
            aria-hidden="true"
            className="ambient-grid absolute inset-0 -z-20 opacity-55"
          />
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              System blueprint
            </figcaption>
            <span className="font-mono text-[0.68rem] text-subtle">
              Context → execution
            </span>
          </div>

          <div className="mt-7 grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_6.5rem_minmax(0,1fr)] sm:gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-subtle uppercase">
                Input layer
              </p>
              <ul className="mt-3 border-t border-border">
                {inputLayer.map((item, index) => (
                  <li
                    className="flex items-center justify-between gap-3 border-b border-border py-3 text-sm font-medium text-ink"
                    key={item}
                  >
                    {item}
                    <span className="font-mono text-[0.65rem] text-subtle">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid justify-items-center gap-3">
              <div className="relative grid size-24 place-items-center rounded-full border border-brand-blue/24 bg-white shadow-soft">
                <div
                  aria-hidden="true"
                  className="absolute inset-2 rounded-full border border-brand-violet/18"
                />
                <Image
                  alt=""
                  className="relative h-11 w-auto"
                  height={97}
                  loading="eager"
                  src="/brand/bleoris-symbol.svg"
                  width={87}
                />
              </div>
              <p className="text-center text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase">
                Intelligent system
              </p>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-subtle uppercase">
                Output layer
              </p>
              <ul className="mt-3 border-t border-border">
                {outputLayer.map((item, index) => (
                  <li
                    className="flex items-center justify-between gap-3 border-b border-border py-3 text-sm font-medium text-ink"
                    key={item}
                  >
                    {item}
                    <span className="font-mono text-[0.65rem] text-subtle">
                      0{index + 4}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-control border border-border bg-border sm:grid-cols-4">
            {["AI", "Software", "Cloud", "Automation"].map((discipline) => (
              <span
                className="bg-surface/94 px-3 py-3 text-center font-mono text-[0.66rem] tracking-[0.08em] text-muted uppercase"
                key={discipline}
              >
                {discipline}
              </span>
            ))}
          </div>
        </figure>
      </Container>
    </section>
  );
}

function CoreCapabilities() {
  return (
    <Section
      aria-labelledby="solutions-capabilities-title"
      className="border-b border-border bg-canvas"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="Connected disciplines for designing, building, and operating intelligent systems."
              eyebrow="Core capabilities"
              id="solutions-capabilities-title"
              title="Engineering across the system."
            />
          </div>
        </div>

        <ol className="border-t border-border">
          {capabilities.map((capability, index) => (
            <li
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(11rem,0.72fr)_minmax(0,1fr)] sm:gap-5 sm:py-7"
              key={capability.name}
            >
              <span className="font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">
                {capability.name}
              </h3>
              <p className="leading-7 text-muted">{capability.description}</p>
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
      aria-labelledby="solutions-ai-employees-title"
      className="workforce-radiance relative isolate scroll-mt-24 overflow-hidden bg-surface-dark"
      id="ai-employees"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-18rem] right-[-14rem] -z-10 size-[42rem] rounded-full border border-brand-violet/14"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-24rem] left-[-20rem] -z-10 size-[44rem] rounded-full border border-brand-blue/10"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(30rem,1.16fr)] lg:items-start lg:gap-20">
        <SectionHeading
          description="AI Employees are specialized digital workers designed to understand business context, use company knowledge, interact with systems, execute workflows, verify results, record activity, and escalate exceptions to people."
          eyebrow="AI Employees"
          id="solutions-ai-employees-title"
          title="Meet your new digital workforce."
          tone="dark"
        />

        <div className="overflow-hidden rounded-panel border border-white/12 bg-white/[0.04] shadow-elevated">
          <div className="grid border-b border-white/10 md:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-white/10 p-5 md:border-r md:border-b-0 md:p-6">
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-white/58 uppercase">
                Traditional chatbot
              </p>
              <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white/72">
                Question <span aria-hidden="true">→</span> Answer
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/16 to-brand-violet/10 p-5 md:p-6">
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-brand-teal uppercase">
                Bleoris AI Employee
              </p>
              <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-balance text-white">
                Understand → Retrieve → Decide → Act → Verify → Record →
                Escalate
              </p>
            </div>
          </div>

          <ol
            aria-label="AI Employee execution sequence"
            className="grid gap-px bg-white/10 sm:grid-cols-4 xl:grid-cols-7"
          >
            {aiEmployeeWorkflow.map((step, index) => (
              <li
                className="min-h-20 bg-surface-dark/92 p-4"
                key={step}
              >
                <span className="font-mono text-[0.65rem] text-white/56">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold text-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 border-t border-white/12 pt-8 sm:mt-20 sm:pt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-white/58 uppercase">
              Initial roles
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
              Specialized around the work.
            </h3>
          </div>
          <p className="text-sm text-white/58">Role set 01—04</p>
        </div>

        <ol className="mt-8 grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 md:grid-cols-2">
          {aiEmployeeRoles.map((role, index) => (
            <li
              className="min-h-56 bg-surface-dark/92 p-6 sm:p-8"
              key={role.name}
            >
              <span className="font-mono text-xs text-brand-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                {role.name}
              </h4>
              <p className="mt-4 max-w-md leading-7 text-white/62">
                {role.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function HumanInTheLoop() {
  return (
    <Section
      aria-labelledby="human-in-the-loop-title"
      className="border-b border-border bg-surface"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(28rem,1.2fr)] lg:items-start lg:gap-20">
        <SectionHeading
          description="Routine execution can move quickly while policy, confidence, and human checkpoints determine what happens next."
          eyebrow="Human in the loop"
          id="human-in-the-loop-title"
          title="Automation where it makes sense. Human judgment where it matters."
        />

        <figure className="rounded-panel border border-border bg-canvas p-5 shadow-soft sm:p-7 lg:p-8">
          <figcaption className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
            Responsible execution flow
          </figcaption>

          <div className="mt-6 grid gap-3">
            <div className="rounded-control border border-border bg-surface p-5">
              <span className="font-mono text-[0.65rem] text-subtle">01</span>
              <p className="mt-2 font-semibold text-ink">
                AI handles routine work
              </p>
            </div>

            <span
              aria-hidden="true"
              className="mx-auto text-lg text-accent-blue"
            >
              ↓
            </span>

            <div className="rounded-control border border-brand-blue/24 bg-brand-blue/[0.045] p-5">
              <span className="font-mono text-[0.65rem] text-accent-blue">
                02 · decision point
              </span>
              <p className="mt-2 font-semibold text-ink">
                Policy / confidence evaluation
              </p>
            </div>

            <span
              aria-hidden="true"
              className="mx-auto text-lg text-accent-violet"
            >
              ↓
            </span>

            <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-control border border-brand-teal/30 bg-brand-teal/[0.055] p-5">
                <span className="font-mono text-[0.65rem] text-muted uppercase">
                  Safe path
                </span>
                <p className="mt-2 font-semibold text-ink">
                  Execute safe actions automatically
                </p>
              </div>
              <span
                aria-hidden="true"
                className="self-center text-center font-mono text-xs tracking-[0.12em] text-subtle uppercase"
              >
                or
              </span>
              <div className="rounded-control border border-brand-solar/60 bg-brand-solar/10 p-5">
                <span className="font-mono text-[0.65rem] text-muted uppercase">
                  Review path
                </span>
                <p className="mt-2 font-semibold text-ink">
                  Require human review for exceptions or sensitive actions
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
              Representative review triggers
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {approvalExamples.map((example) => (
                <li
                  className="rounded-pill border border-border-strong bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                  key={example}
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </figure>
      </div>
    </Section>
  );
}

function HowBleorisBuilds() {
  return (
    <Section
      aria-labelledby="build-process-title"
      className="border-b border-border bg-canvas"
    >
      <SectionHeading
        description="A practical engineering path from operational context to an evolving production system."
        eyebrow="How Bleoris builds"
        id="build-process-title"
        title="From workflow to working system."
      />

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        {buildStages.map((stage, index) => (
          <li className="border-t border-border pt-6" key={stage.name}>
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-accent-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-brand-violet"
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-ink">
              {stage.name}
            </h3>
            <p className="mt-4 leading-7 text-muted">{stage.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function BusinessProblems() {
  return (
    <Section
      aria-labelledby="business-problems-title"
      className="border-b border-border bg-surface"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <SectionHeading
          description="Representative operational patterns where connected software and intelligence can be applied."
          eyebrow="Business problems"
          id="business-problems-title"
          title="Start with the friction."
        />

        <div className="grid border-t border-border lg:grid-cols-2">
          {problemAreas.map((area, index) => (
            <div
              className={`border-b border-border py-7 lg:px-8 lg:py-8 ${
                index % 2 === 0 ? "lg:pl-0" : "lg:border-l"
              }`}
              key={area.name}
            >
              <p className="font-mono text-[0.65rem] text-subtle">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-sm font-semibold tracking-[0.08em] text-ink uppercase">
                {area.name}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {area.examples.map((example) => (
                  <li
                    className="flex items-center gap-2 text-sm text-muted"
                    key={example}
                  >
                    <span
                      aria-hidden="true"
                      className="size-1 rounded-full bg-brand-teal"
                    />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EngagementModel() {
  return (
    <Section
      aria-labelledby="engagement-model-title"
      className="bg-canvas"
    >
      <SectionHeading
        description="Three focused ways to move an intelligent system forward."
        eyebrow="Engagement model"
        id="engagement-model-title"
        title="Build. Integrate. Evolve."
      />

      <ol className="mt-12 divide-y divide-border border-y border-border md:grid md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-16">
        {engagementModels.map((model, index) => (
          <li
            className="py-8 md:px-7 md:py-10 md:first:pl-0 md:last:pr-0 lg:px-10"
            key={model.name}
          >
            <span className="font-mono text-xs text-subtle">
              0{index + 1}
            </span>
            <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-ink">
              {model.name}
            </h3>
            <p className="mt-4 max-w-sm leading-7 text-muted">
              {model.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function SolutionsPageContent() {
  return (
    <>
      <SolutionsHero />
      <CoreCapabilities />
      <AiEmployees />
      <HumanInTheLoop />
      <HowBleorisBuilds />
      <BusinessProblems />
      <EngagementModel />
      <CallToAction
        description="Tell us what your team is doing manually, where your systems are disconnected, or what you want to build next."
        eyebrow="Start a conversation"
        id="solutions-final-cta-title"
        primaryAction={{ href: "/contact", label: "Let's Talk" }}
        title="Turn the workflow into a system."
      />
    </>
  );
}
