"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

import {
  motionDuration,
  motionEase,
  motionMedia,
} from "@/lib/motion/motion-config";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function LabsMotionController() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const marker = markerRef.current;
    const root = marker?.closest<HTMLElement>("[data-labs-motion-root]");

    if (!root) {
      return;
    }

    const media = gsap.matchMedia(root);

    media.add(motionMedia.noPreference, () => {
      const context = gsap.context(() => {
        const universeStages = root.querySelectorAll<HTMLElement>(
          "[data-labs-universe-stage]",
        );
        const revealElements = root.querySelectorAll<HTMLElement>(
          "[data-labs-reveal]",
        );
        const worlds = root.querySelectorAll<HTMLElement>("[data-labs-world]");

        universeStages.forEach((stage) => {
          gsap.to(stage, {
            ease: "none",
            opacity: 0.84,
            scale: 0.985,
            scrollTrigger: {
              end: "bottom top",
              invalidateOnRefresh: true,
              scrub: 0.55,
              start: "top top",
              trigger: stage,
            },
            transformOrigin: "50% 50%",
            y: 18,
          });
        });

        revealElements.forEach((element) => {
          const revealKind = element.dataset.labsReveal;
          const from =
            revealKind === "constellation"
              ? { opacity: 0.84, scale: 0.97 }
              : { opacity: 0.82, x: 14 };

          gsap.fromTo(
            element,
            from,
            {
              clearProps: "opacity,transform",
              duration: motionDuration.section,
              ease: motionEase.standard,
              opacity: 1,
              scrollTrigger: {
                once: true,
                start: "top 86%",
                trigger: element,
              },
              scale: 1,
              x: 0,
            },
          );
        });

        worlds.forEach((world, index) => {
          gsap.fromTo(
            world,
            { opacity: 0.8, scale: 0.992, y: 14 },
            {
              clearProps: "opacity,transform",
              delay: Math.min(index, 2) * 0.05,
              duration: motionDuration.section,
              ease: motionEase.standard,
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                once: true,
                start: "top 88%",
                trigger: world,
              },
              y: 0,
            },
          );
        });

        const trajectory = root.querySelector<HTMLElement>(
          "[data-labs-trajectory]",
        );

        if (trajectory) {
          const progress = trajectory.querySelector<HTMLElement>(
            "[data-labs-trajectory-progress]",
          );
          const particle = trajectory.querySelector<HTMLElement>(
            "[data-labs-trajectory-particle]",
          );
          const stages = trajectory.querySelectorAll<HTMLElement>(
            "[data-labs-trajectory-stage]",
          );
          const trajectoryTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              end: "bottom 30%",
              invalidateOnRefresh: true,
              scrub: 0.5,
              start: "top 75%",
              trigger: trajectory,
            },
          });

          if (progress) {
            trajectoryTimeline.fromTo(
              progress,
              { scaleY: 0.04 },
              { duration: 1, scaleY: 1 },
              0,
            );
          }

          if (particle) {
            trajectoryTimeline.fromTo(
              particle,
              { opacity: 0.42, scale: 0.72, y: 0 },
              {
                duration: 1,
                opacity: 1,
                scale: 1,
                y: () =>
                  Math.max(0, particle.parentElement?.clientHeight ?? 0),
              },
              0,
            );
          }

          stages.forEach((stage, index) => {
            const position =
              stages.length <= 1 ? 0.1 : 0.08 + (index / (stages.length - 1)) * 0.72;

            trajectoryTimeline.fromTo(
              stage,
              { opacity: 0.64, scale: 0.97 },
              { duration: 0.2, opacity: 1, scale: 1 },
              position,
            );
          });
        }

        const reality = root.querySelector<HTMLElement>(
          "[data-labs-reality]",
        );

        if (reality) {
          const stems = reality.querySelectorAll<HTMLElement>(
            "[data-labs-reality-stem]",
          );
          const branches = reality.querySelectorAll<HTMLElement>(
            "[data-labs-reality-branch]",
          );
          const particles = reality.querySelectorAll<HTMLElement>(
            "[data-labs-reality-particle]",
          );
          const realityTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              end: "bottom 38%",
              scrub: 0.45,
              start: "top 78%",
              trigger: reality,
            },
          });

          if (stems.length > 0) {
            realityTimeline.fromTo(
              stems,
              { opacity: 0.22, scaleY: 0.08 },
              {
                duration: 0.34,
                opacity: 0.82,
                scaleY: 1,
                stagger: 0.08,
              },
              0.08,
            );
          }

          if (branches.length > 0) {
            realityTimeline.fromTo(
              branches,
              {
                opacity: 0.22,
                scaleX: 0.08,
              },
              {
                duration: 0.72,
                opacity: 0.82,
                scaleX: 1,
                stagger: 0.08,
              },
              0.3,
            );
          }

          if (particles.length > 0) {
            realityTimeline.fromTo(
              particles,
              { opacity: 0.28, scale: 0.72, y: -12 },
              {
                duration: 0.48,
                opacity: 1,
                scale: 1,
                stagger: 0.08,
                y: 0,
              },
              0.28,
            );
          }
        }

        const openEngineering = root.querySelector<HTMLElement>(
          "[data-labs-open-engineering]",
        );

        if (openEngineering) {
          const items = openEngineering.querySelectorAll<HTMLElement>(
            "[data-labs-open-item]",
          );

          if (items.length > 0) {
            gsap.fromTo(
              items,
              { opacity: 0.64, y: 12 },
              {
                clearProps: "opacity,transform",
                duration: motionDuration.component,
                ease: motionEase.standard,
                opacity: 1,
                scrollTrigger: {
                  once: true,
                  start: "top 82%",
                  trigger: openEngineering,
                },
                stagger: 0.08,
                y: 0,
              },
            );
          }
        }

        const curiosity = root.querySelector<HTMLElement>(
          "[data-labs-curiosity]",
        );

        if (curiosity) {
          const questions = curiosity.querySelectorAll<HTMLElement>(
            "[data-labs-question]",
          );

          questions.forEach((question) => {
            gsap.fromTo(
              question,
              { opacity: 0.64, scale: 0.992, y: 14 },
              {
                ease: "none",
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                  end: "top 48%",
                  scrub: 0.35,
                  start: "top 86%",
                  trigger: question,
                },
                y: 0,
              },
            );
          });
        }
      }, root);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return <span ref={markerRef} aria-hidden="true" className="hidden" />;
}
