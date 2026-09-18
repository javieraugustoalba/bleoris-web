import Image from "next/image";
import type { CSSProperties } from "react";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LabsMotionController } from "@/features/labs/client/labs-motion-controller";
import { ResearchConstellation } from "@/features/labs/client/research-constellation";
import { ResearchUniverse } from "@/features/labs/client/research-universe";
import {
  activeExplorations,
  experimentOutcomes,
  experimentStages,
  openEngineeringAreas,
  researchAreas,
  researchQuestions,
} from "@/features/labs/labs-content";

import styles from "./labs-page.module.css";

type ExplorationVisual = (typeof activeExplorations)[number]["visual"];

function LabsHero() {
  return (
    <section
      aria-labelledby="labs-hero-title"
      className={`${styles.hero} relative isolate overflow-hidden`}
      data-labs-universe-stage
    >
      <Container className="relative z-10 grid min-h-[calc(100svh-var(--header-height))] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1.18fr)] lg:gap-12 lg:py-24 xl:gap-20">
        <div className="relative z-20 max-w-[46rem]" data-labs-hero-copy>
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Bleoris Labs
            </p>
          </div>

          <h1
            className="text-display max-w-[12ch] font-semibold text-balance text-ink"
            id="labs-hero-title"
          >
            Explore what could become{" "}
            <span className={styles.heroAccent}>possible.</span>
          </h1>

          <p className="mt-7 max-w-[42rem] text-body-lg text-pretty text-muted sm:mt-8">
            Bleoris Labs is our research and experimentation division,
            exploring technologies, technical ideas, and prototypes that may
            become tomorrow&apos;s products and intelligent systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 xs:flex-row sm:mt-10">
            <ButtonLink
              className="w-full xs:w-auto"
              href="/labs#research-areas"
            >
              Explore Research Areas
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </ButtonLink>
            <ButtonLink
              className="w-full xs:w-auto"
              href="/labs#how-labs-works"
              variant="secondary"
            >
              Follow the trajectory
            </ButtonLink>
          </div>
        </div>

        <figure
          aria-hidden="true"
          className={`${styles.heroAperture} relative z-10 min-h-[22rem] sm:min-h-[30rem] lg:min-h-[38rem]`}
        >
          <div className={styles.apertureRing} />
          <div className={styles.apertureRingInner} />
          <span className={`${styles.apertureNode} ${styles.apertureNodeOne}`} />
          <span className={`${styles.apertureNode} ${styles.apertureNodeTwo}`} />
          <span className={`${styles.apertureNode} ${styles.apertureNodeThree}`} />
          <div className={styles.apertureCore}>
            <Image
              alt=""
              className="h-12 w-auto sm:h-14"
              height={97}
              loading="eager"
              src="/brand/bleoris-symbol.svg"
              width={87}
            />
          </div>
          <figcaption className={styles.apertureLabel}>
            <span>Research universe</span>
            <span>Deterministic field · L/01</span>
          </figcaption>
          <span className={styles.apertureCoordinate}>X 01.00 / Y 01.00</span>
        </figure>
      </Container>

      <div aria-hidden="true" className={styles.heroBridge}>
        <span data-labs-universe-bridge />
      </div>
    </section>
  );
}

function ResearchAreas() {
  return (
    <section
      aria-labelledby="research-areas-title"
      className={`${styles.researchSection} relative z-10 scroll-mt-24 border-b border-border`}
      id="research-areas"
    >
      <Container className="relative z-10 py-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.66fr)_minmax(0,1.34fr)] lg:items-end lg:gap-16 xl:gap-20">
          <SectionHeading
            description="Areas of technical exploration—not commercial service packages or claims of completed research."
            eyebrow="Research constellation"
            id="research-areas-title"
            title="Questions worth exploring."
          />
          <p className="max-w-xl text-sm leading-6 text-muted lg:justify-self-end">
            Move through the constellation to examine each research direction.
            Every node is part of one connected field of inquiry.
          </p>
        </div>

        <div
          className="mt-10 sm:mt-14 lg:mt-16"
          data-labs-reveal="constellation"
        >
          <ResearchConstellation areas={researchAreas} />
        </div>
      </Container>
    </section>
  );
}

function ExplorationTrajectory() {
  return (
    <Section
      aria-labelledby="how-labs-works-title"
      className={`${styles.trajectorySection} relative isolate scroll-mt-24 overflow-hidden border-b border-border`}
      id="how-labs-works"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(17rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16 xl:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            description="An experiment is designed to produce evidence and technical learning, whether or not the original idea continues."
            eyebrow="Exploration trajectory"
            id="how-labs-works-title"
            title="Learning is part of the output."
          />
          <p className="mt-7 max-w-md text-sm leading-6 text-muted">
            The path is structured, but discovery is not always linear. Each
            stage makes the next decision more informed.
          </p>
        </div>

        <figure className={styles.trajectory} data-labs-trajectory>
          <figcaption className="sr-only">
            Labs experimentation sequence from question through learning.
          </figcaption>
          <div aria-hidden="true" className={styles.trajectoryRail}>
            <span className={styles.trajectoryProgress} data-labs-trajectory-progress />
            <span className={styles.trajectoryParticle} data-labs-trajectory-particle />
          </div>
          <ol aria-label="Labs experimentation sequence" className="relative">
            {experimentStages.map((stage, index) => (
              <li
                className={styles.trajectoryStage}
                data-labs-trajectory-stage
                key={stage.name}
              >
                <span aria-hidden="true" className={styles.trajectoryNode} />
                <div className={styles.trajectoryContent}>
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] text-accent-blue uppercase">
                    Stage {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                    {stage.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      </div>

      <div
        className="mt-16 border-t border-border pt-9 lg:mt-20 lg:pt-11"
        data-labs-reveal="principles"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16 xl:gap-20">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.035em] text-balance text-ink sm:text-3xl">
              Not every experiment needs to become a product.
            </p>
            <p className="mt-3 text-body-lg text-accent-blue">
              This is a strength, not a failure.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {experimentOutcomes.map((outcome, index) => (
              <li className={styles.outcome} key={outcome.name}>
                <span className="font-mono text-[0.6rem] text-subtle">
                  O{index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.06em] text-ink uppercase">
                    {outcome.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {outcome.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function WorldVisual({ kind }: { readonly kind: ExplorationVisual }) {
  if (kind === "vision") {
    return (
      <div aria-hidden="true" className={`${styles.worldVisual} ${styles.visionVisual}`}>
        <span className={styles.visionFocus} />
        <span className={styles.visionFocusSecondary} />
        <span className={styles.visionScan} />
      </div>
    );
  }

  if (kind === "health") {
    return (
      <div aria-hidden="true" className={`${styles.worldVisual} ${styles.healthVisual}`}>
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} style={{ "--cell-index": index } as CSSProperties} />
        ))}
      </div>
    );
  }

  if (kind === "mobility") {
    return (
      <div aria-hidden="true" className={`${styles.worldVisual} ${styles.mobilityVisual}`}>
        <span className={styles.mobilityPathOne} />
        <span className={styles.mobilityPathTwo} />
        {Array.from({ length: 5 }, (_, index) => (
          <span className={styles.mobilityNode} key={index} />
        ))}
      </div>
    );
  }

  if (kind === "documents") {
    return (
      <div aria-hidden="true" className={`${styles.worldVisual} ${styles.documentVisual}`}>
        <span className={styles.documentLayerOne} />
        <span className={styles.documentLayerTwo} />
        <span className={styles.documentLayerThree} />
        <span className={styles.documentRegion} />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`${styles.worldVisual} ${styles.workflowVisual}`}>
      <span className={styles.workflowCore} />
      {Array.from({ length: 4 }, (_, index) => (
        <span className={styles.workflowNode} key={index} />
      ))}
      <span className={styles.workflowPathOne} />
      <span className={styles.workflowPathTwo} />
    </div>
  );
}

function ExplorationWorlds() {
  return (
    <Section
      aria-labelledby="active-exploration-title"
      className={`${styles.worldsSection} relative isolate overflow-hidden border-b border-border`}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.66fr)_minmax(0,1.34fr)] lg:items-end lg:gap-16 xl:gap-20">
        <SectionHeading
          description="Current research directions and experimentation areas—not completed products or validated scientific systems."
          eyebrow="Active exploration worlds"
          id="active-exploration-title"
          title="Where we're currently looking."
        />
        <p className="max-w-xl text-sm leading-6 text-muted lg:justify-self-end">
          Each field is a different technical landscape: a focused space for
          observation, experimentation, and learning.
        </p>
      </div>

      <ol className={styles.worldGrid}>
        {activeExplorations.map((exploration, index) => (
          <li
            className={styles.world}
            data-labs-world
            key={exploration.name}
          >
            <WorldVisual kind={exploration.visual} />
            <div className={styles.worldCopy}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.62rem] tracking-[0.12em] text-accent-violet uppercase">
                  {exploration.id}
                </span>
                <span className="font-mono text-[0.58rem] text-subtle">
                  {String(index + 1).padStart(2, "0")} / 05
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                {exploration.name}
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-muted">
                {exploration.description}
              </p>
            </div>
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
      className={`${styles.realitySection} relative isolate overflow-hidden border-b border-border`}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(28rem,1.28fr)] lg:items-center lg:gap-16 xl:gap-20">
        <SectionHeading
          description="Some experiments become products. Others become enterprise capabilities. Some simply teach us something valuable."
          eyebrow="From Labs to reality"
          id="labs-reality-title"
          title="Experiments can become capability."
        />

        <figure className={styles.realitySystem} data-labs-reality>
          <figcaption className="sr-only">
            Bleoris Labs research and technical exploration may transfer into
            Bleoris Apps or Bleoris Solutions.
          </figcaption>
          <div className={styles.realityOrigin}>
            <span
              aria-hidden="true"
              className={styles.realityPulse}
              data-labs-reality-particle
            />
            <span className="font-mono text-[0.62rem] tracking-[0.12em] text-accent-violet uppercase">
              Research signal
            </span>
            <strong>Bleoris Labs</strong>
          </div>

          <div aria-hidden="true" className={styles.realityStem}>
            <span data-labs-reality-stem />
          </div>
          <p className={styles.realityExploration}>
            Technical exploration · evidence · learning
          </p>
          <div aria-hidden="true" className={styles.realityBranches}>
            <span data-labs-reality-branch />
            <span data-labs-reality-branch />
          </div>

          <div className={styles.realityDestinations}>
            <TrackedLink
              analytics={{
                name: "division_explore",
                properties: { division: "apps", source: "labs" },
              }}
              className={`${styles.realityDestination} group`}
              href="/apps"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-accent-blue uppercase">
                Product path
              </span>
              <strong>Bleoris Apps</strong>
              <span>Products</span>
              <span aria-hidden="true" className={styles.realityArrow}>→</span>
            </TrackedLink>
            <TrackedLink
              analytics={{
                name: "division_explore",
                properties: { division: "solutions", source: "labs" },
              }}
              className={`${styles.realityDestination} group`}
              href="/solutions"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-accent-violet uppercase">
                Capability path
              </span>
              <strong>Bleoris Solutions</strong>
              <span>Enterprise systems</span>
              <span aria-hidden="true" className={styles.realityArrow}>→</span>
            </TrackedLink>
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
      className={`${styles.openSection} relative isolate overflow-hidden border-b border-border`}
      data-labs-open-engineering
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.76fr)_minmax(0,1.24fr)] lg:gap-16 xl:gap-20">
        <SectionHeading
          description="As Bleoris Labs evolves, selected experiments, tools, technical notes, and open-source work can be shared with the broader engineering community."
          eyebrow="Open engineering"
          id="open-engineering-title"
          title="Build in the open where it makes sense."
        />

        <div className={styles.openField} data-labs-open-field>
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
            <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
              Future public surface
            </p>
            <p className="font-mono text-[0.65rem] text-subtle">L / OPEN</p>
          </div>
          <ul className={styles.openGrid}>
            {openEngineeringAreas.map((area, index) => (
              <li data-labs-open-item key={area}>
                <span className="font-mono text-[0.6rem] text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className={styles.openSignal} />
                <p>{area}</p>
                <span className="font-mono text-[0.58rem] tracking-[0.08em] text-accent-blue uppercase">
                  Direction
                </span>
              </li>
            ))}
          </ul>
          <p className="px-5 py-5 text-sm leading-6 text-muted sm:px-6">
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
      className={`${styles.curiositySection} relative isolate overflow-hidden border-b border-border`}
      data-labs-curiosity
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.58fr)_minmax(0,1.42fr)] lg:gap-16 xl:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            description="Research begins by making the unknown precise enough to investigate."
            eyebrow="Curiosity"
            id="curiosity-title"
            title="Questions drive the work."
          />
        </div>

        <ol className={styles.questionList}>
          {researchQuestions.map((question, index) => (
            <li data-labs-question key={question}>
              <span className={styles.questionIndex}>
                Q{String(index + 1).padStart(2, "0")}
              </span>
              <p>{question}</p>
              <span aria-hidden="true" className={styles.questionOrbit} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function LabsFinalCallToAction() {
  return (
    <section
      aria-labelledby="labs-final-cta-title"
      className={`${styles.finalCta} relative isolate overflow-hidden border-b border-border`}
    >
      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Bleoris Labs
            </p>
            <h2
              className="mt-5 text-title max-w-[12ch] font-semibold text-balance text-ink"
              id="labs-final-cta-title"
            >
              Curiosity becomes capability.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-body-lg text-pretty text-muted">
              Explore how Bleoris turns experimentation into products, systems,
              and new technical possibilities.
            </p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row">
              <ButtonLink
                analytics={{
                  name: "division_explore",
                  properties: { division: "apps", source: "labs" },
                }}
                className="w-full xs:w-auto"
                href="/apps"
              >
                Explore Bleoris Apps
              </ButtonLink>
              <ButtonLink
                analytics={{
                  name: "division_explore",
                  properties: { division: "solutions", source: "labs" },
                }}
                className="w-full xs:w-auto"
                href="/solutions"
                variant="secondary"
              >
                Explore Bleoris Solutions
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function LabsPageContent() {
  return (
    <div
      className={`${styles.experience} labs-experience`}
      data-labs-motion-root
    >
      <LabsMotionController />
      <div
        className={`${styles.universeJourney} relative isolate overflow-hidden`}
        data-labs-universe-root
      >
        <ResearchUniverse />
        <LabsHero />
        <ResearchAreas />
      </div>
      <ExplorationTrajectory />
      <ExplorationWorlds />
      <FromLabsToReality />
      <OpenEngineering />
      <Curiosity />
      <LabsFinalCallToAction />
    </div>
  );
}
