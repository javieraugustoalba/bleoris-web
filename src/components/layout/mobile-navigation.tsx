"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  primaryCallToAction,
  primaryNavigation,
} from "@/config/navigation";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const focusFrame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFrame);
    };
  }, [isOpen]);

  const closeNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        aria-controls="mobile-site-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="flex size-11 items-center justify-center rounded-control border border-border bg-surface text-ink transition-colors duration-fast ease-brand hover:border-border-strong hover:bg-surface-blue"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform duration-base ease-brand ${
              isOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform duration-base ease-brand ${
              isOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        aria-hidden={!isOpen}
        className={`absolute inset-x-0 top-full origin-top border-b border-border bg-surface shadow-elevated transition-[opacity,transform,visibility] duration-component ease-motion-standard ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
        id="mobile-site-navigation"
        inert={!isOpen ? true : undefined}
      >
          <Container className="py-4">
            <nav aria-label="Mobile navigation">
              <ul className="grid gap-1">
                {primaryNavigation.map((item, index) => {
                  const isCurrent =
                    pathname === item.href ||
                    pathname?.startsWith(`${item.href}/`) === true;

                  return (
                    <li key={item.href}>
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex min-h-11 items-center justify-between rounded-control px-3 text-base font-medium transition-colors duration-fast ease-brand ${
                          isCurrent
                            ? "bg-brand-blue/[0.065] text-ink"
                            : "text-muted hover:bg-surface-blue hover:text-ink"
                        }`}
                        href={item.href}
                        onClick={closeNavigation}
                      >
                        {item.label}
                        {isCurrent ? (
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-brand-blue"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ButtonLink
                ariaCurrent={
                  pathname === primaryCallToAction.href ? "page" : undefined
                }
                analytics={{
                  name: "cta_click",
                  properties: { cta: "lets_talk", source: "header" },
                }}
                className={`mt-4 w-full ${
                  pathname === primaryCallToAction.href
                    ? "ring-2 ring-brand-blue/35 ring-offset-2 ring-offset-surface"
                    : ""
                }`}
                href={primaryCallToAction.href}
                onClick={closeNavigation}
              >
                {primaryCallToAction.label}
              </ButtonLink>
            </nav>
          </Container>
      </div>
    </div>
  );
}
