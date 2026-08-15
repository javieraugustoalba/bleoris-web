import Image from "next/image";
import Link from "next/link";

import { CallToAction } from "@/components/sections/call-to-action";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const researchAreas = [
  {
    name: "Artificial Intelligence",
    description:
      "Reasoning systems, agents, generative AI, knowledge systems, and applied intelligence.",
  },
  {
    name: "Machine Learning",
    description:
      "Learning systems, prediction, classification, experimentation, and applied modeling.",
  },
  {
    name: "Computer Vision",
    description:
      "Image understanding, detection, recognition, visual analysis, and intelligent perception.",
  },
  {
    name: "Generative AI",
    description:
      "Language, multimodal systems, structured generation, and AI-assisted experiences.",
  },
  {
    name: "Mobility Intelligence",
    description:
      "Data, perception, traffic systems, transportation, and intelligent mobility.",
  },
  {
    name: "Emerging Technology",
    description:
      "Technical ideas and technologies that do not yet belong to an established Bleoris product or enterprise capability.",
  },
] as const;

const experimentStages = [
  "Question",
  "Explore",
  "Experiment",
  "Prototype",
  "Measure",
  "Learn",
] as const;

const experimentOutcomes = [
  {
    name: "Keep",
    description: "Continue exploration.",
  },
  {
    name: "Evolve",
    description: "Become a stronger technical capability.",
  },
  {
    name: "Transfer",
    description: "Move into Bleoris Apps or Bleoris Solutions.",
  },
  {
    name: "Discard",
    description:
      "End when evidence suggests the idea is not valuable enough to continue.",
  },
] as const;

const activeExplorations = [
  {
    name: "Visual Intelligence",
    description:
      "Experiments in image classification, object detection, visual analysis, and computer vision.",
  },
  {
    name: "Health & Medical AI",
    description:
      "Exploration of machine-learning and computer-vision methods applied to medical-image analysis.",
  },
  {
    name: "Mobility & Traffic Intelligence",
    description:
      "Experiments around traffic analysis, perception, movement, and transportation data.",
  },
  {
    name: "Intelligent Documents",
    description:
      "Exploring OCR, extraction, document understanding, multimodal AI, and structured information.",
  },
  {
    name: "Autonomous AI Workflows",
    description:
      "Research around agents, tool use, memory, orchestration, permissions, and human-in-the-loop execution.",
  },
] as const;

const openEngineeringAreas = [
  "Experiments",
  "Tools",
  "Technical notes",
  "Open-source work",
] as const;

const researchQuestions = [
  "How can AI systems act reliably across real business workflows?",
  "How can machines understand visual environments more effectively?",
  "How can multimodal AI make documents genuinely useful?",
  "How can intelligent systems collaborate with people rather than simply respond to them?",
  "How can focused systems solve complex problems without unnecessary complexity?",
] as const;

function LabsHero() {
  const coordinates = [
    { label: "Question", position: "top-[14%] left-[16%]" },
    { label: "Experiment", position: "top-[23%] right-[11%]" },
    { label: "Evidence", position: "right-[15%] bottom-[15%]" },
    { label: "Learning", position: "bottom-[20%] left-[10%]" },
  ] as const;

  return (
    <section
      aria-labelledby="labs-hero-title"
      className="labs-hero-field relative isolate overflow-hidden bg-surface-dark"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-surface-dark to-transparent"
      />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] lg:gap-16 lg:py-24 xl:gap-20 xl:py-28">
        <div className="relative z-10 max-w-[45rem]">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-white/62 uppercase">
              Bleoris Labs
            </p>
          </div>

          <h1
            className="text-display font-semibold text-balance text-white"
            id="labs-hero-title"
          >
            Explore what could become possible.
          </h1>

          <p className="mt-7 max-w-[43rem] text-body-lg text-pretty text-white/66 sm:mt-8">
            Bleoris Labs is our research and experimentation division,
            exploring technologies, technical ideas, and prototypes that may
            become tomorrow&apos;s products and intelligent systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink
              className="w-full sm:w-auto"
              href="/labs#research-areas"
              variant="inverse"
            >
              Explore Research Areas
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href="/labs#how-labs-works"
              variant="outline-inverse"
            >
              How Labs Works
            </ButtonLink>
          </div>
        </div>

        <figure className="labs-coordinate-field relative mx-auto aspect-square w-full max-w-[29rem] overflow-hidden rounded-full border border-white/12 shadow-elevated lg:mx-0 lg:justify-self-end">
          <figcaption className="absolute top-[8%] left-1/2 z-10 -translate-x-1/2 font-mono text-[0.62rem] tracking-[0.14em] text-white/58 uppercase">
            Exploration field · L-01
          </figcaption>
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-[8%] left-[8%] h-px bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute top-[8%] bottom-[8%] left-1/2 w-px bg-white/10"
          />
          <div
            aria-hidden="true"
            className="orbit-spin absolute inset-[12%] rounded-full border border-brand-blue/28"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[25%] rotate-[28deg] rounded-full border border-brand-violet/26"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[38%] rounded-full border border-white/12"
          />

          {coordinates.map((coordinate, index) => (
            <div
              aria-hidden="true"
              className={`absolute ${coordinate.position}`}
              key={coordinate.label}
            >
              <span
                className={`block size-2 rounded-full ${
                  index % 2 === 0 ? "bg-brand-blue" : "bg-brand-violet"
                }`}
              />
              <span className="mt-2 block font-mono text-[0.58rem] tracking-[0.08em] text-white/56 uppercase">
                {coordinate.label}
              </span>
            </div>
          ))}

          <div className="absolute inset-[36%] grid place-items-center rounded-full border border-white/14 bg-white/[0.055] backdrop-blur-sm">
            <Image
              alt=""
              className="h-[48%] w-auto"
              height={97}
              loading="eager"
              src="/brand/bleoris-symbol.svg"
              width={87}
            />
          </div>

          <span className="absolute right-[7%] bottom-[7%] font-mono text-[0.58rem] text-white/52">
            X 01.00 / Y 01.00
          </span>
        </figure>
      </Container>
    </section>
  );
}

function ResearchAreas() {
  return (
    <Section
      aria-labelledby="research-areas-title"
      className="scroll-mt-24 border-b border-border bg-canvas"
      id="research-areas"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              description="Areas of technical exploration—not commercial service packages or claims of completed research."
              eyebrow="Research areas"
              id="research-areas-title"
              title="Questions worth exploring."
            />
          </div>
        </div>

        <ol className="border-t border-border">
          {researchAreas.map((area, index) => (
            <li
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(11rem,0.72fr)_minmax(0,1fr)] sm:gap-5 sm:py-7"
              key={area.name}
            >
              <span className="font-mono text-xs text-accent-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">
                {area.name}
              </h3>
              <p className="leading-7 text-muted">{area.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function HowLabsWorks() {
  return (
    <Section
      aria-labelledby="how-labs-works-title"
      className="labs-experiment-field relative isolate scroll-mt-24 overflow-hidden bg-surface-dark"
      id="how-labs-works"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-20rem] right-[-18rem] -z-10 size-[44rem] rounded-full border border-brand-violet/12"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.74fr)_minmax(0,1.26fr)] lg:items-end lg:gap-20">
        <SectionHeading
          description="An experiment is designed to produce evidence and technical learning, whether or not the original idea continues."
          eyebrow="The experiment"
          id="how-labs-works-title"
          title="Learning is part of the output."
          tone="dark"
        />

        <figure>
          <figcaption className="sr-only">
            Labs experimentation sequence from question through learning.
          </figcaption>
          <ol
            aria-label="Labs experimentation sequence"
            className="grid grid-cols-3 gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-6"
          >
            {experimentStages.map((stage, index) => (
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
                {index < experimentStages.length - 1 ? (
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

      <div className="mt-14 grid gap-10 border-t border-white/12 pt-10 lg:mt-18 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.035em] text-balance text-white sm:text-3xl">
            Not every experiment needs to become a product.
          </p>
          <p className="mt-4 text-body-lg text-brand-teal">
            This is a strength, not a failure.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10">
          {experimentOutcomes.map((outcome, index) => (
            <li
              className="min-h-36 bg-surface-dark/92 p-4 sm:min-h-40 sm:p-5"
              key={outcome.name}
            >
              <span className="font-mono text-[0.62rem] text-white/56">
                O{index + 1}
              </span>
              <h3 className="mt-5 text-sm font-semibold tracking-[0.08em] text-white uppercase sm:text-base">
                {outcome.name}
              </h3>
              <p className="mt-3 text-xs leading-5 text-white/62 sm:text-sm sm:leading-6">
                {outcome.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ActiveExploration() {
  return (
    <Section
      aria-labelledby="active-exploration-title"
      className="border-b border-border bg-surface"
    >
      <SectionHeading
        description="Current research directions and experimentation areas—not completed products or validated scientific systems."
        eyebrow="Active exploration"
        id="active-exploration-title"
        title="Where we're currently looking."
      />

      <ol className="mt-12 border-t border-border lg:mt-16">
        {activeExplorations.map((exploration, index) => (
          <li
            className="grid gap-4 border-b border-border py-7 sm:grid-cols-[2.75rem_minmax(12rem,0.72fr)_minmax(0,1fr)] sm:gap-6 sm:py-8"
            key={exploration.name}
          >
            <span className="font-mono text-xs text-subtle">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-mono text-[0.62rem] tracking-[0.1em] text-accent-violet uppercase">
                Research direction
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-ink">
                {exploration.name}
              </h3>
            </div>
            <p className="max-w-2xl leading-7 text-muted">
              {exploration.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FromLabsToReality() {
  return (
    <Section
      aria-labelledby="labs-reality-title"
      className="border-b border-border bg-canvas"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.76fr)_minmax(28rem,1.24fr)] lg:items-center lg:gap-20">
        <SectionHeading
          description="Some experiments become products. Others become enterprise capabilities. Some simply teach us something valuable."
          eyebrow="From research to reality"
          id="labs-reality-title"
          title="Experiments can become capability."
        />

        <figure className="labs-transfer-field relative isolate overflow-hidden rounded-panel border border-brand-blue/15 bg-surface p-5 shadow-soft sm:p-7 lg:p-8">
          <figcaption className="sr-only">
            Bleoris Labs experimentation and technical learning may transfer
            into Bleoris Apps or Bleoris Solutions.
          </figcaption>

          <div className="rounded-control border border-brand-violet/25 bg-brand-violet/[0.055] p-5 text-center">
            <p className="font-mono text-[0.62rem] tracking-[0.12em] text-accent-violet uppercase">
              Research direction
            </p>
            <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink">
              Bleoris Labs
            </p>
          </div>

          <div className="mx-auto h-8 w-px bg-gradient-to-b from-brand-violet to-brand-blue" />

          <div className="rounded-control border border-brand-blue/22 bg-brand-blue/[0.045] p-4 text-center">
            <p className="font-mono text-[0.62rem] tracking-[0.1em] text-muted uppercase">
              Experimentation + technical learning
            </p>
          </div>

          <div className="mx-auto h-8 w-px bg-gradient-to-b from-brand-blue to-brand-teal" />
          <p className="text-center font-mono text-[0.62rem] tracking-[0.12em] text-subtle uppercase">
            May become
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              className="group rounded-control border border-border bg-surface p-4 transition-[border-color,background-color,transform] duration-base ease-brand hover:-translate-y-px hover:border-brand-blue hover:bg-canvas"
              href="/apps"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.08em] text-muted uppercase">
                Product path
              </span>
              <span className="mt-2 block font-semibold text-ink">
                Bleoris Apps
              </span>
              <span className="mt-2 block text-xs leading-5 text-muted">
                Focused software products.
              </span>
              <span
                aria-hidden="true"
                className="mt-4 block text-accent-blue transition-transform duration-base ease-brand group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              className="group rounded-control border border-border bg-surface p-4 transition-[border-color,background-color,transform] duration-base ease-brand hover:-translate-y-px hover:border-brand-violet hover:bg-canvas"
              href="/solutions"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.08em] text-muted uppercase">
                Capability path
              </span>
              <span className="mt-2 block font-semibold text-ink">
                Bleoris Solutions
              </span>
              <span className="mt-2 block text-xs leading-5 text-muted">
                Enterprise technology and engineering.
              </span>
              <span
                aria-hidden="true"
                className="mt-4 block text-accent-violet transition-transform duration-base ease-brand group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </figure>
      </div>
    </Section>
  );
}

function OpenEngineering() {
  return (
    <Section
      aria-labelledby="open-engineering-title"
      className="border-b border-border bg-surface"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
        <SectionHeading
          description="As Bleoris Labs evolves, selected experiments, tools, technical notes, and open-source work can be shared with the broader engineering community."
          eyebrow="Open engineering"
          id="open-engineering-title"
          title="Build in the open where it makes sense."
        />

        <div>
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
              Future public surface
            </p>
            <p className="font-mono text-[0.65rem] text-subtle">L / OPEN</p>
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden border-b border-border bg-border md:grid-cols-4">
            {openEngineeringAreas.map((area, index) => (
              <li className="min-h-28 bg-surface p-4" key={area}>
                <span className="font-mono text-[0.6rem] text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm font-semibold text-ink">{area}</p>
                <p className="mt-2 font-mono text-[0.58rem] tracking-[0.08em] text-accent-blue uppercase">
                  Direction
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted">
            Public work can be added here when selected material is ready to be
            shared.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Curiosity() {
  return (
    <Section
      aria-labelledby="curiosity-title"
      className="labs-curiosity-field relative isolate overflow-hidden bg-surface-dark"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-[-22rem] left-[-18rem] -z-10 size-[44rem] rounded-full border border-brand-blue/10"
      />
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
        <SectionHeading
          description="Research begins by making the unknown precise enough to investigate."
          eyebrow="Curiosity"
          id="curiosity-title"
          title="Questions drive the work."
          tone="dark"
        />

        <ol className="grid border-t border-white/12 md:grid-cols-2">
          {researchQuestions.map((question, index) => (
            <li
              className={`border-b border-white/12 py-6 md:px-6 md:py-7 ${
                index % 2 === 0 ? "md:pl-0" : "md:border-l"
              } ${index === researchQuestions.length - 1 ? "md:col-span-2" : ""}`}
              key={question}
            >
              <span className="font-mono text-[0.62rem] text-brand-teal">
                Q{String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 max-w-xl text-base leading-7 font-medium text-white/78 sm:text-lg">
                {question}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function LabsPageContent() {
  return (
    <>
      <LabsHero />
      <ResearchAreas />
      <HowLabsWorks />
      <ActiveExploration />
      <FromLabsToReality />
      <OpenEngineering />
      <Curiosity />
      <CallToAction
        description="Explore how Bleoris turns experimentation into products, systems, and new technical possibilities."
        eyebrow="Bleoris Labs"
        id="labs-final-cta-title"
        primaryAction={{ href: "/apps", label: "Explore Bleoris Apps" }}
        secondaryAction={{
          href: "/solutions",
          label: "Explore Bleoris Solutions",
        }}
        title="Curiosity becomes capability."
      />
    </>
  );
}
