"use client";

import { useState } from "react";

const formats = ["JPG", "PNG", "PDF"] as const;

type OutputFormat = (typeof formats)[number];

export function HeicFlowExperience() {
  const [activeFormat, setActiveFormat] = useState<OutputFormat>("JPG");
  const [signalVersion, setSignalVersion] = useState(0);

  const activateFormat = (format: OutputFormat) => {
    setActiveFormat(format);
    setSignalVersion((version) => version + 1);
  };

  return (
    <figure className="heicflow-experience rounded-panel border border-brand-blue/20 bg-surface/86 p-5 shadow-soft sm:p-7">
      <figcaption className="flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[0.68rem] tracking-[0.12em] text-muted uppercase">
        Format pathway
        <span className="text-accent-teal">HEICFlow</span>
      </figcaption>

      <div className="mt-7 grid gap-5 sm:grid-cols-[minmax(7.5rem,0.72fr)_minmax(4rem,0.36fr)_minmax(0,1.32fr)] sm:items-center">
        <div className="heicflow-experience__input">
          <span className="font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
            Source format
          </span>
          <strong>HEIC</strong>
          <span>Image input</span>
        </div>

        <div aria-hidden="true" className="heicflow-experience__process">
          <span className="heicflow-experience__track" />
          <span
            className="heicflow-experience__signal"
            key={signalVersion}
          />
          <span className="heicflow-experience__core">B</span>
        </div>

        <div>
          <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
            Select an output
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {formats.map((format) => {
              const isActive = format === activeFormat;

              return (
                <button
                  aria-pressed={isActive}
                  className={`heicflow-experience__format ${
                    isActive ? "heicflow-experience__format--active" : ""
                  }`}
                  key={format}
                  onClick={() => activateFormat(format)}
                  onFocus={() => setActiveFormat(format)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setActiveFormat(format);
                    }
                  }}
                  type="button"
                >
                  {format}
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="mt-3 rounded-control border border-brand-teal/30 bg-surface-mint px-3 py-2 text-xs text-muted"
          >
            HEIC <span aria-hidden="true">→</span> {activeFormat} pathway active
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-control border border-border bg-border sm:grid-cols-4">
        {["Convert", "Optimize", "Resize", "Prepare"].map((action) => (
          <span
            className="bg-surface-blue px-3 py-3 text-center text-xs font-medium text-muted"
            key={action}
          >
            {action}
          </span>
        ))}
      </div>

      <p className="mt-4 text-xs leading-5 text-subtle">
        Conceptual product pathway. This is not a file converter.
      </p>
    </figure>
  );
}
