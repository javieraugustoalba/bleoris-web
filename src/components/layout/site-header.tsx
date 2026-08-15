import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  primaryCallToAction,
  primaryNavigation,
} from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-xl">
      <Container className="flex h-header items-center justify-between gap-4">
        <Link aria-label="Bleoris home" href="/">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center rounded-control px-3 text-sm font-medium text-muted transition-colors duration-fast ease-brand hover:bg-surface-muted hover:text-ink"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink
            analytics={{
              name: "cta_click",
              properties: { cta: "lets_talk", source: "header" },
            }}
            href={primaryCallToAction.href}
          >
            {primaryCallToAction.label}
          </ButtonLink>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
