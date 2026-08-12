"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  primaryCallToAction,
  primaryNavigation,
} from "@/config/navigation";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
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
        className="flex size-11 items-center justify-center rounded-control border border-border bg-surface text-ink transition-colors duration-fast ease-brand hover:border-border-strong hover:bg-surface-muted"
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

      {isOpen ? (
        <div
          className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-elevated"
          id="mobile-site-navigation"
        >
          <Container className="py-4">
            <nav aria-label="Mobile navigation">
              <ul className="grid gap-1">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="flex min-h-11 items-center rounded-control px-3 text-base font-medium text-muted transition-colors duration-fast ease-brand hover:bg-surface-muted hover:text-ink"
                      href={item.href}
                      onClick={closeNavigation}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonLink
                className="mt-4 w-full"
                href={primaryCallToAction.href}
                onClick={closeNavigation}
              >
                {primaryCallToAction.label}
              </ButtonLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
