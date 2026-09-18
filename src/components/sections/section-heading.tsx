interface SectionHeadingProps {
  readonly description?: string;
  readonly eyebrow: string;
  readonly id: string;
  readonly title: string;
}

export function SectionHeading({
  description,
  eyebrow,
  id,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-copy">
      <div className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-px w-8 bg-gradient-to-r from-brand-blue to-brand-violet"
        />
        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          {eyebrow}
        </p>
      </div>
      <h2
        className="text-title font-semibold text-balance text-ink"
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-body-lg text-pretty text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
