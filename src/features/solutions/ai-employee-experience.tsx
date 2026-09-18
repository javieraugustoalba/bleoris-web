"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

interface WorkflowStage {
  readonly description: string;
  readonly name: string;
}

interface EmployeeRole {
  readonly context: readonly string[];
  readonly description: string;
  readonly emphasis: readonly number[];
  readonly name: string;
}

interface AiEmployeeExperienceProps {
  readonly roles: readonly EmployeeRole[];
  readonly workflow: readonly WorkflowStage[];
}

interface WorkflowStyle extends CSSProperties {
  "--active-progress": number;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function AiEmployeeExperience({
  roles,
  workflow,
}: AiEmployeeExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const userSelectedRef = useRef(false);
  const [activeRole, setActiveRole] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const media = window.matchMedia(
      "(min-width: 64rem) and (prefers-reduced-motion: no-preference)",
    );

    if (!root || !media.matches || workflow.length < 2) {
      return;
    }

    let frame = 0;

    const updateStageFromScroll = () => {
      frame = 0;

      if (userSelectedRef.current) {
        return;
      }

      const bounds = root.getBoundingClientRect();
      const start = window.innerHeight * 0.78;
      const end = window.innerHeight * 0.24;
      const progress = clamp(
        (start - bounds.top) / (bounds.height + start - end),
        0,
        1,
      );
      const nextStage = Math.min(
        workflow.length - 1,
        Math.floor(progress * workflow.length),
      );

      setActiveStage((current) =>
        current === nextStage ? current : nextStage,
      );
    };

    const requestUpdate = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateStageFromScroll);
      }
    };

    updateStageFromScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [workflow.length]);

  const selectedRole = roles[activeRole] ?? roles[0];
  const selectedStage = workflow[activeStage] ?? workflow[0];
  const workflowStyle: WorkflowStyle = {
    "--active-progress":
      workflow.length > 1 ? activeStage / (workflow.length - 1) : 0,
  };

  if (!selectedRole || !selectedStage) {
    return null;
  }

  const selectStage = (index: number) => {
    userSelectedRef.current = true;
    setActiveStage(index);
  };

  return (
    <div className="ai-employee-experience" ref={rootRef}>
      <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div>
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-accent-blue uppercase">
            Operational sequence
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
            Context moves toward accountable action.
          </h3>
        </div>
        <p className="text-xs leading-5 text-subtle">
          Scroll or choose a stage to inspect
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="ai-workflow" style={workflowStyle}>
          <div aria-hidden="true" className="ai-workflow__rail">
            <span className="ai-workflow__progress" />
            <span className="ai-workflow__signal" />
          </div>

          <ol aria-label="AI Employee execution sequence">
            {workflow.map((stage, index) => {
              const isActive = index === activeStage;
              const isEmphasized = selectedRole.emphasis.includes(index);

              return (
                <li key={stage.name}>
                  <button
                    aria-pressed={isActive}
                    className={`ai-workflow__stage ${
                      isActive ? "ai-workflow__stage--active" : ""
                    } ${
                      isEmphasized ? "ai-workflow__stage--emphasized" : ""
                    }`}
                    onClick={() => selectStage(index)}
                    onFocus={() => selectStage(index)}
                    type="button"
                  >
                    <span className="ai-workflow__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="ai-workflow__name">{stage.name}</span>
                    <span className="ai-workflow__description">
                      {stage.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div
            aria-live="polite"
            className="rounded-control border border-brand-blue/24 bg-surface-blue p-5"
          >
            <p className="font-mono text-[0.62rem] tracking-[0.12em] text-muted uppercase">
              Active system stage
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              {selectedStage.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {selectedStage.description}
            </p>
          </div>

          <div className="ai-decision-system">
            <div className="ai-decision-system__gate">
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-accent-blue uppercase">
                Confidence · policy
              </span>
              <strong>Evaluate before execution</strong>
            </div>
            <div aria-hidden="true" className="ai-decision-system__branch" />
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-control border border-brand-teal/25 bg-brand-teal/[0.07] p-4">
                <span className="font-mono text-[0.6rem] text-accent-teal uppercase">
                  Safe · approved
                </span>
                <p className="mt-2 text-sm font-semibold text-ink">
                  Execute and verify
                </p>
              </div>
              <div className="rounded-control border border-brand-solar/30 bg-brand-solar/[0.07] p-4">
                <span className="font-mono text-[0.6rem] text-accent-solar uppercase">
                  Exception · sensitive
                </span>
                <p className="mt-2 text-sm font-semibold text-ink">
                  Escalate for human review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              Role exploration
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
              The pathway adapts to the work.
            </h3>
          </div>
          <p className="text-xs text-subtle">Choose a role</p>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,0.96fr)_minmax(17rem,0.64fr)]">
          <div className="grid gap-2 sm:grid-cols-2">
            {roles.map((role, index) => {
              const isActive = index === activeRole;

              return (
                <button
                  aria-pressed={isActive}
                  className={`ai-role-selector ${
                    isActive ? "ai-role-selector--active" : ""
                  }`}
                  key={role.name}
                  onClick={() => setActiveRole(index)}
                  onFocus={() => setActiveRole(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setActiveRole(index);
                    }
                  }}
                  type="button"
                >
                  <span className="font-mono text-[0.62rem] text-accent-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{role.name}</strong>
                  <span>{role.description}</span>
                </button>
              );
            })}
          </div>

          <div
            aria-live="polite"
            className="rounded-control border border-border bg-surface-blue p-5"
          >
            <p className="font-mono text-[0.62rem] tracking-[0.12em] text-subtle uppercase">
              Conceptual context
            </p>
            <p className="mt-3 font-semibold text-ink">
              {selectedRole.name}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-control border border-border bg-border">
              {selectedRole.context.map((item) => (
                <li
                  className="bg-surface px-3 py-3 text-xs text-muted"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
