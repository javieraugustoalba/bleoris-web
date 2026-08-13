# Bleoris Website

The production website for **Bleoris** — _Engineering Intelligence for Tomorrow._

This repository contains the application and design-system foundation, global site shell, production homepage, and production pages for Bleoris Apps, Solutions, and Labs. Additional interior page content will be developed in later phases.

## Company structure

- **Bleoris Apps** — proprietary software products.
- **Bleoris Solutions** — B2B AI, software engineering, cloud, automation, computer vision, and intelligent systems.
- **Bleoris Labs** — research, experimentation, and emerging technology.

## Technology

- [Next.js 16](https://nextjs.org/) with the App Router and Turbopack
- React 19
- TypeScript in strict mode
- Tailwind CSS 4
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules
- npm with a committed lockfile

No UI framework, database, authentication, CMS, analytics, or backend service is included at this stage.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

The foundation was initialized and verified with Node.js 24 and npm 10.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

`next build` performs the production compilation and Next.js type validation. ESLint is run separately because Next.js 16 no longer runs it during builds.

## Project structure

```text
src/
├── app/
│   ├── (marketing)/       Public routes and global marketing shell
│   ├── globals.css        Brand tokens, Tailwind theme, and global styles
│   └── layout.tsx         Root document and default metadata
├── components/
│   ├── layout/            Header, navigation, footer, and shell components
│   ├── sections/          Reusable marketing sections
│   └── ui/                Small reusable UI primitives
├── config/
│   └── site.ts            Verified company and division configuration
├── content/
│   ├── case-studies/      Future case-study content
│   └── pages/             Future structured page content
├── features/
│   ├── apps/              Bleoris Apps domain code
│   ├── labs/              Bleoris Labs domain code
│   └── solutions/         Bleoris Solutions domain code
├── lib/                    Shared framework-independent utilities
└── types/                  Shared TypeScript contracts
```

The `app` directory is reserved for routing and route composition. Reusable presentation belongs in `components`, while division-specific behavior belongs in `features`. Code should remain colocated with a route when it is not shared.

## Design system

The approved Bleoris palette, semantic surfaces, typography scale, spacing, radii, shadows, container sizes, breakpoints, and motion values are defined as CSS variables in `src/app/globals.css` and exposed through Tailwind CSS theme utilities.

Approved SVG assets live in `public/brand`. Use the supplied light- and dark-surface variants without modifying their geometry.

## Engineering conventions

- Prefer Server Components; add Client Components only when browser interactivity requires them.
- Use semantic HTML, accessible interaction patterns, and responsive-first layouts.
- Keep TypeScript strict and avoid `any`, unsafe assertions, and duplicated domain models.
- Use the `@/*` alias for imports from `src`.
- Keep dependencies minimal and add abstractions only after a concrete reuse case exists.
- Add route metadata as pages are introduced; do not invent URLs, claims, metrics, clients, or case studies.
- Preserve performance by default: minimize client JavaScript, optimize media with Next.js primitives, and avoid unnecessary third-party code.

Additional instructions for coding agents are maintained in [`AGENTS.md`](./AGENTS.md).
