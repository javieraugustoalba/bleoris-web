import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found on the Bleoris website.",
};

const helpfulPages = [
  { href: "/solutions", label: "Solutions" },
  { href: "/apps", label: "Apps" },
  { href: "/labs", label: "Labs" },
] as const;

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-canvas">
      <div aria-hidden="true" className="ambient-grid absolute inset-0 -z-20" />
      <div aria-hidden="true" className="brand-radiance absolute inset-0 -z-10" />

      <header className="border-b border-border/80 bg-surface/80">
        <Container className="flex h-header items-center">
          <Link aria-label="Bleoris home" href="/">
            <BrandLogo />
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.58fr)] lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-accent-blue uppercase">
              404 · Bleoris
            </p>
            <h1 className="mt-5 text-title font-semibold text-balance text-ink">
              Page not found.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-pretty text-muted">
              The page you requested does not exist or may have moved. Continue
              from the Bleoris homepage or explore one of our divisions.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <ButtonLink href="/">Return home</ButtonLink>
              <nav aria-label="Helpful pages">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {helpfulPages.map((page) => (
                    <li key={page.href}>
                      <Link
                        className="inline-flex min-h-11 items-center text-sm font-semibold text-muted underline decoration-border-strong underline-offset-4 transition-colors duration-fast ease-brand hover:text-ink"
                        href={page.href}
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto hidden aspect-square w-full max-w-80 place-items-center rounded-full border border-brand-blue/20 bg-surface/70 shadow-elevated lg:grid"
          >
            <div className="absolute inset-[12%] rounded-full border border-brand-violet/24" />
            <div className="absolute inset-[28%] rounded-full border border-brand-blue/24" />
            <Image
              alt=""
              className="relative h-20 w-auto"
              height={97}
              src="/brand/bleoris-symbol.svg"
              width={87}
            />
          </div>
        </Container>
      </main>

      <footer className="border-t border-border/80">
        <Container className="py-6 text-sm text-muted">
          {siteConfig.tagline}
        </Container>
      </footer>
    </div>
  );
}
