import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface MarketingShellProps {
  readonly children: ReactNode;
}

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-control bg-accent-blue px-4 py-2 text-sm font-semibold text-white shadow-elevated transition-transform duration-fast ease-brand focus:translate-y-0"
        href="#main-content"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
