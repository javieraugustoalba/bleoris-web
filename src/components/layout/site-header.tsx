import Link from "next/link";

import {
  DesktopNavigation,
  HeaderCallToAction,
} from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-xl">
      <Container className="flex h-header items-center justify-between gap-4">
        <Link aria-label="Bleoris home" href="/">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <DesktopNavigation />

          <HeaderCallToAction />
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
