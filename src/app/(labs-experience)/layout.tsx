import type { ReactNode } from "react";

import { MarketingShell } from "@/components/layout/marketing-shell";

interface LabsExperienceLayoutProps {
  readonly children: ReactNode;
}

export default function LabsExperienceLayout({
  children,
}: LabsExperienceLayoutProps) {
  return <MarketingShell>{children}</MarketingShell>;
}
