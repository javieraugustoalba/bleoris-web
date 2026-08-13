type SectionHeadingTone = "light" | "dark";

interface SectionHeadingProps {
  readonly description?: string;
  readonly eyebrow: string;
  readonly id: string;
  readonly title: string;
  readonly tone?: SectionHeadingTone;
}

export function SectionHeading({
  description,
  eyebrow,
  id,
  title,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-copy">
      <div className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
        />
        <p
          className={
            isDark
              ? "text-xs font-semibold tracking-[0.18em] text-white/56 uppercase"
              : "text-xs font-semibold tracking-[0.18em] text-muted uppercase"
          }
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={
          isDark
            ? "text-title font-semibold text-balance text-white"
            : "text-title font-semibold text-balance text-ink"
        }
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            isDark
              ? "mt-6 text-body-lg text-pretty text-white/64"
              : "mt-6 text-body-lg text-pretty text-muted"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
