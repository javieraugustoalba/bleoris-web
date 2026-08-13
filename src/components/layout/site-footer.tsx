import Link from "next/link";

import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  primaryCallToAction,
  primaryNavigation,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-white">
      <Container className="py-11 sm:py-14 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 md:grid-cols-[minmax(0,1.3fr)_minmax(14rem,0.7fr)] lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)_auto] lg:items-start">
          <div className="max-w-md">
            <Link aria-label="Bleoris home" href="/">
              <BrandLogo tone="dark" />
            </Link>
            <p className="mt-4 text-base leading-7 text-white/64 sm:mt-5">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center text-sm font-medium text-white/64 transition-colors duration-fast ease-brand hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-1">
            <ButtonLink
              className="w-full sm:w-auto"
              href={primaryCallToAction.href}
              variant="inverse"
            >
              {primaryCallToAction.label}
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© Bleoris.</p>
          <p>Nature · Cosmos · Technology</p>
        </div>
      </Container>
    </footer>
  );
}
