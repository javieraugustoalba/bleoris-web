"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

import {
  heroMotion,
  motionDuration,
  motionEase,
  motionMedia,
} from "@/lib/motion/motion-config";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function normalizePointer(value: number) {
  return Math.max(-1, Math.min(1, value));
}

export function HeroMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    const hero = root?.closest<HTMLElement>("[data-home-hero]");

    if (!root || !hero) {
      return;
    }

    const media = gsap.matchMedia(hero);
    let invalidatePointerBounds: (() => void) | null = null;

    media.add(motionMedia.noPreference, () => {
      const headingLines = hero.querySelectorAll<HTMLElement>(
        "[data-hero-line]",
      );
      const system = root.querySelector<HTMLElement>("[data-hero-system]");
      const solarStar = root.querySelector<HTMLElement>(
        '[data-hero-star="solar"]',
      );
      const tealStar = root.querySelector<HTMLElement>(
        '[data-hero-star="teal"]',
      );
      const bridgeLine = hero.querySelector<HTMLElement>(
        "[data-hero-bridge-line]",
      );
      const bridgeOrbit = hero.querySelector<HTMLElement>(
        "[data-hero-bridge-orbit]",
      );
      const orbitSpinners = root.querySelectorAll<HTMLElement>(
        ".home-orbit-spin",
      );

      gsap.fromTo(
        headingLines,
        { opacity: 0.78, y: heroMotion.headingOffset },
        {
          clearProps: "opacity,transform",
          duration: motionDuration.section,
          ease: motionEase.standard,
          opacity: 1,
          stagger: 0.08,
          y: 0,
        },
      );

      const setOrbitPlayback = (playState: "paused" | "running") => {
        orbitSpinners.forEach((spinner) => {
          spinner.style.animationPlayState = playState;
        });
      };
      const forLayout = (wideValue: number, compactValue: number) => () =>
        window.matchMedia(motionMedia.wideLayout).matches
          ? wideValue
          : compactValue;

      if (system) {
        const scrollTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            end: "bottom top",
            invalidateOnRefresh: true,
            onEnter: () => setOrbitPlayback("running"),
            onEnterBack: () => setOrbitPlayback("running"),
            onLeave: () => setOrbitPlayback("paused"),
            onRefresh: (trigger) => {
              setOrbitPlayback(trigger.progress >= 1 ? "paused" : "running");
              invalidatePointerBounds?.();
            },
            scrub: 0.55,
            start: "top top",
            trigger: hero,
          },
        });

        scrollTimeline.to(
          system,
          {
            rotation: forLayout(
              heroMotion.scrollRotation,
              heroMotion.mobileScrollRotation,
            ),
            scale: forLayout(
              heroMotion.scrollScale,
              heroMotion.mobileScrollScale,
            ),
            transformOrigin: "50% 50%",
          },
          0,
        );

        if (solarStar) {
          scrollTimeline.to(
            solarStar,
            { x: forLayout(-5, -2), y: forLayout(5, 2) },
            0,
          );
        }

        if (tealStar) {
          scrollTimeline.to(
            tealStar,
            { x: forLayout(6, 2), y: forLayout(-4, -2) },
            0,
          );
        }

        if (bridgeLine) {
          scrollTimeline.fromTo(
            bridgeLine,
            { scaleY: 0.35, transformOrigin: "bottom center" },
            { scaleY: 1 },
            0,
          );
        }

        if (bridgeOrbit) {
          scrollTimeline.fromTo(
            bridgeOrbit,
            { opacity: 0.32, scale: 0.92 },
            { opacity: 0.72, scale: 1 },
            0,
          );
        }
      }

      return () => {
        orbitSpinners.forEach((spinner) => {
          spinner.style.animationPlayState = "";
        });
      };
    });

    media.add(motionMedia.finePointer, () => {
      const depthLayers = Array.from(
        root.querySelectorAll<HTMLElement>("[data-hero-depth]"),
      );
      const xSetters = depthLayers.map((layer) =>
        gsap.quickTo(layer, "x", {
          duration: motionDuration.component,
          ease: motionEase.standard,
        }),
      );
      const ySetters = depthLayers.map((layer) =>
        gsap.quickTo(layer, "y", {
          duration: motionDuration.component,
          ease: motionEase.standard,
        }),
      );
      let heroBounds: DOMRect | null = null;
      let magneticBounds: DOMRect | null = null;
      let heroScrollX = 0;
      let heroScrollY = 0;
      let magneticScrollX = 0;
      let magneticScrollY = 0;

      const invalidateBounds = () => {
        heroBounds = null;
        magneticBounds = null;
      };

      invalidatePointerBounds = invalidateBounds;

      const cacheHeroBounds = () => {
        heroBounds = hero.getBoundingClientRect();
        heroScrollX = window.scrollX;
        heroScrollY = window.scrollY;
      };

      const resetDepth = () => {
        xSetters.forEach((setX) => setX(0));
        ySetters.forEach((setY) => setY(0));
      };

      const handleHeroPointerMove = (event: PointerEvent) => {
        if (!heroBounds) {
          cacheHeroBounds();
        }

        if (!heroBounds || heroBounds.width === 0 || heroBounds.height === 0) {
          return;
        }

        const horizontal = normalizePointer(
          ((event.clientX -
            (heroBounds.left - (window.scrollX - heroScrollX))) /
            heroBounds.width -
            0.5) *
            2,
        );
        const vertical = normalizePointer(
          ((event.clientY -
            (heroBounds.top - (window.scrollY - heroScrollY))) /
            heroBounds.height -
            0.5) *
            2,
        );

        xSetters.forEach((setX, index) => {
          setX(horizontal * (heroMotion.depth[index] ?? 0));
        });
        ySetters.forEach((setY, index) => {
          setY(vertical * (heroMotion.depth[index] ?? 0) * 0.72);
        });
      };

      hero.addEventListener("pointerenter", cacheHeroBounds, { passive: true });
      hero.addEventListener("pointerleave", resetDepth, { passive: true });
      hero.addEventListener("pointermove", handleHeroPointerMove, {
        passive: true,
      });

      const magneticContent = hero.querySelector<HTMLElement>(
        "[data-hero-magnetic-content]",
      );
      const magneticLink = magneticContent?.closest<HTMLAnchorElement>("a");
      const magneticX = magneticContent
        ? gsap.quickTo(magneticContent, "x", {
            duration: motionDuration.micro,
            ease: motionEase.standard,
          })
        : null;
      const magneticY = magneticContent
        ? gsap.quickTo(magneticContent, "y", {
            duration: motionDuration.micro,
            ease: motionEase.standard,
          })
        : null;

      const cacheMagneticBounds = () => {
        magneticBounds = magneticLink?.getBoundingClientRect() ?? null;
        magneticScrollX = window.scrollX;
        magneticScrollY = window.scrollY;
      };

      const resetMagneticContent = () => {
        magneticX?.(0);
        magneticY?.(0);
      };

      const handleMagneticPointerMove = (event: PointerEvent) => {
        if (!magneticBounds) {
          cacheMagneticBounds();
        }

        if (!magneticBounds || !magneticX || !magneticY) {
          return;
        }

        const horizontal = normalizePointer(
          ((event.clientX -
            (magneticBounds.left - (window.scrollX - magneticScrollX))) /
            magneticBounds.width -
            0.5) *
            2,
        );
        const vertical = normalizePointer(
          ((event.clientY -
            (magneticBounds.top - (window.scrollY - magneticScrollY))) /
            magneticBounds.height -
            0.5) *
            2,
        );

        magneticX(horizontal * heroMotion.magneticOffset);
        magneticY(vertical * heroMotion.magneticOffset * 0.72);
      };

      if (magneticLink) {
        magneticLink.addEventListener("pointerenter", cacheMagneticBounds, {
          passive: true,
        });
        magneticLink.addEventListener("pointerleave", resetMagneticContent, {
          passive: true,
        });
        magneticLink.addEventListener("pointermove", handleMagneticPointerMove, {
          passive: true,
        });
      }

      const boundsObserver = new ResizeObserver(invalidateBounds);
      boundsObserver.observe(hero);

      if (magneticLink) {
        boundsObserver.observe(magneticLink);
      }

      return () => {
        if (invalidatePointerBounds === invalidateBounds) {
          invalidatePointerBounds = null;
        }

        boundsObserver.disconnect();
        hero.removeEventListener("pointerenter", cacheHeroBounds);
        hero.removeEventListener("pointerleave", resetDepth);
        hero.removeEventListener("pointermove", handleHeroPointerMove);
        magneticLink?.removeEventListener(
          "pointerenter",
          cacheMagneticBounds,
        );
        magneticLink?.removeEventListener(
          "pointerleave",
          resetMagneticContent,
        );
        magneticLink?.removeEventListener(
          "pointermove",
          handleMagneticPointerMove,
        );
        xSetters.forEach((setX) => setX.tween.kill());
        ySetters.forEach((setY) => setY.tween.kill());
        magneticX?.tween.kill();
        magneticY?.tween.kill();
      };
    });

    return () => media.revert();
  }, []);

  return (
    <>
      <div
        ref={rootRef}
        aria-hidden="true"
        className="relative mx-auto w-full max-w-[29rem] py-2 sm:py-4 lg:mx-0 lg:justify-self-end lg:py-0 xl:max-w-[30rem]"
      >
        <div className="home-orbit-field relative aspect-square overflow-hidden rounded-full border border-brand-blue/15 bg-surface/56 shadow-elevated backdrop-blur-sm">
          <div
            className="absolute inset-0 transform-gpu"
            data-hero-system
          >
            <div className="absolute inset-0 transform-gpu" data-hero-depth>
              <span className="absolute inset-[10%] rounded-full border border-brand-violet/20" />
              <span className="absolute inset-[24%] rounded-full border border-brand-blue/15" />
              <span className="absolute top-[31%] right-[13%] size-1 rounded-full bg-brand-blue/55" />
            </div>

            <div className="absolute inset-0 transform-gpu" data-hero-depth>
              <div className="orbit-spin home-orbit-spin absolute inset-[7%] rounded-full border border-brand-blue/35">
                <span className="absolute top-[12%] right-[4%] size-3 rounded-full bg-brand-blue shadow-[0_0_0_6px_color-mix(in_srgb,var(--brand-blue)_12%,transparent)]" />
              </div>
              <span
                className="absolute top-[19%] left-[19%] size-2 rounded-full bg-brand-solar"
                data-hero-star="solar"
              />
            </div>

            <div className="absolute inset-0 transform-gpu" data-hero-depth>
              <div className="orbit-spin-reverse home-orbit-spin absolute inset-[19%] rotate-[28deg] rounded-[50%] border border-brand-violet/32">
                <span className="absolute bottom-[2%] left-[18%] size-2.5 rounded-full bg-brand-violet" />
              </div>
              <span
                className="absolute right-[18%] bottom-[19%] size-2 rounded-full bg-brand-teal"
                data-hero-star="teal"
              />
              <span className="absolute top-[16%] left-[46%] size-1 rounded-full bg-brand-violet/65" />
              <span className="absolute right-[27%] bottom-[11%] size-1 rounded-full bg-brand-blue/55" />
            </div>
          </div>

          <div className="absolute inset-[30%] grid place-items-center rounded-full border border-white/80 bg-white/84 shadow-soft">
            <Image
              alt=""
              className="h-[58%] w-auto"
              height={97}
              loading="eager"
              src="/brand/bleoris-symbol.svg"
              width={87}
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 overflow-hidden"
      >
        <span
          className="absolute bottom-[-4.75rem] left-1/2 size-32 -translate-x-1/2 rounded-full border border-brand-violet/20"
          data-hero-bridge-orbit
        />
        <span
          className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-brand-violet/10 via-brand-blue/35 to-brand-blue/55"
          data-hero-bridge-line
        />
        <span className="absolute bottom-3 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-brand-blue/70" />
      </div>
    </>
  );
}
