import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/ui/container";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  readonly containerClassName?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  const sectionClasses = ["py-section", className].filter(Boolean).join(" ");

  return (
    <section className={sectionClasses} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
