<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Bleoris engineering guide

## Scope

This repository contains the production website for Bleoris. Treat all changes as production work even while the public site is still under construction.

Before editing, read `README.md`, `package.json`, the nearest relevant source files, and the applicable bundled Next.js documentation referenced above. Preserve unrelated work and keep each change focused on the requested outcome.

## Product facts and content safety

- Company: Bleoris
- Tagline: Engineering Intelligence for Tomorrow.
- Bleoris Apps develops proprietary software products.
- Bleoris Solutions covers B2B AI, software engineering, cloud, automation, computer vision, and intelligent systems.
- Bleoris Labs covers research, experimentation, and emerging technology.

Do not invent company history, locations, customers, partners, employee counts, awards, performance claims, statistics, testimonials, case studies, product capabilities, URLs, or contact details. Mark genuinely unknown content for owner input rather than filling it with plausible copy.

## Architecture

- Keep routing, layouts, metadata, and route-specific composition in `src/app`.
- Put small reusable primitives in `src/components/ui`, shared site chrome in `src/components/layout`, and reusable marketing compositions in `src/components/sections`.
- Keep division-specific code in `src/features/apps`, `src/features/solutions`, or `src/features/labs`.
- Keep verified structured content in `src/content`; case studies belong in `src/content/case-studies`.
- Keep shared configuration in `src/config`, framework-independent utilities in `src/lib`, and shared contracts in `src/types`.
- Colocate code with its route when it has only one consumer. Promote it to a shared directory only after a real reuse case exists.
- Avoid barrel files unless they materially improve a public module boundary.

## Implementation standards

- Use strict TypeScript. Avoid `any`, unchecked casts, non-null assertions, and duplicated types.
- Prefer Server Components. Add `"use client"` only when state, effects, event handlers, or browser APIs require it, and keep the client boundary narrow.
- Use semantic HTML and native elements before ARIA. All interactive UI must be usable by keyboard, have visible focus, and meet reasonable contrast and touch-target requirements.
- Build responsive-first, with the smallest viewport as the baseline.
- Use Tailwind CSS utilities and future shared design tokens consistently. Do not introduce a UI framework or component library without explicit approval.
- Use `next/image`, `next/font`, and the Metadata API where appropriate. Do not add an external asset, font, tracker, or script without a clear requirement.
- Provide meaningful titles, descriptions, heading order, link text, and image alternative text as routes are implemented.
- Favor clear names and small focused components. Avoid duplicated components, speculative generalization, and abstractions without a concrete consumer.
- Do not add a database, authentication, CMS, analytics, API service, or other backend integration unless the task explicitly requires it.

## Verification

Run the checks appropriate to the change before handing work back:

```bash
npm run lint
npm run typecheck
npm run build
```

At minimum, lint and the production build must pass for changes intended to merge. Report warnings as well as failures. For visible UI work, also check keyboard behavior and representative mobile and desktop widths.

Never suppress a lint, type, accessibility, or build error simply to make a check pass. Fix the cause or explain the blocker.
