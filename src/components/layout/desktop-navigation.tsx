"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import {
  primaryCallToAction,
  primaryNavigation,
} from "@/config/navigation";

function isCurrentRoute(pathname: string | null, href: string) {
  return pathname === href || pathname?.startsWith(`${href}/`) === true;
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-1">
        {primaryNavigation.map((item) => {
          const isCurrent = isCurrentRoute(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={`group relative inline-flex min-h-11 items-center rounded-control px-3 text-sm font-medium transition-colors duration-fast ease-brand ${
                  isCurrent
                    ? "text-ink"
                    : "text-muted hover:bg-surface-blue hover:text-ink"
                }`}
                href={item.href}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-3 bottom-1.5 left-3 h-px origin-left bg-gradient-to-r from-brand-blue to-brand-violet transition-transform duration-component ease-motion-standard ${
                    isCurrent
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function HeaderCallToAction() {
  const pathname = usePathname();
  const isCurrent = isCurrentRoute(pathname, primaryCallToAction.href);

  return (
    <ButtonLink
      ariaCurrent={isCurrent ? "page" : undefined}
      analytics={{
        name: "cta_click",
        properties: { cta: "lets_talk", source: "header" },
      }}
      className={
        isCurrent
          ? "ring-2 ring-brand-blue/35 ring-offset-2 ring-offset-surface"
          : undefined
      }
      href={primaryCallToAction.href}
    >
      {primaryCallToAction.label}
    </ButtonLink>
  );
}
