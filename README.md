# Bleoris Website

The production website for **Bleoris** — _Engineering Intelligence for Tomorrow._

This repository contains the application and design-system foundation, global site shell, production homepage, production pages for Bleoris Apps, Solutions, Labs, Company, and Contact. Additional interior page content will be developed in later phases.

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
- Resend for server-side contact inquiry delivery
- npm with a committed lockfile

No UI framework, database, authentication, CMS, or analytics service is included.

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

## Corporate contact delivery

The Contact page sends one internal inquiry notification through Resend. The
sender, recipient, and API credential are server-only deployment settings:

```text
RESEND_API_KEY
CONTACT_FROM_EMAIL
CONTACT_TO_EMAIL
```

Copy `.env.example` to `.env.local` for local configuration. Never commit a
real API key or production credentials; `.env.local` remains ignored by Git.
Without all three valid values, the site still builds and the Contact form
returns its delivery-unavailable state instead of simulating a successful send.

Production is intended to send from
`Bleoris Website <forms@send.bleoris.com>` to `hello@bleoris.com`. Before
production sending, verify `send.bleoris.com` in Resend and add the exact DNS
records generated for that account and domain. Those records belong in the DNS
provider, not in application code. Store the real API key and email settings in
the deployment environment.

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

## SEO and discoverability

Production metadata is centralized in `src/config/seo.ts` around the canonical `https://bleoris.com` domain. Route metadata, canonical URLs, Open Graph and X cards, robots directives, the sitemap, and homepage structured data all derive from that configuration. The shared social image is stored alongside the approved brand assets.

## Engineering conventions

- Prefer Server Components; add Client Components only when browser interactivity requires them.
- Use semantic HTML, accessible interaction patterns, and responsive-first layouts.
- Keep TypeScript strict and avoid `any`, unsafe assertions, and duplicated domain models.
- Use the `@/*` alias for imports from `src`.
- Keep dependencies minimal and add abstractions only after a concrete reuse case exists.
- Add route metadata as pages are introduced; do not invent URLs, claims, metrics, clients, or case studies.
- Preserve performance by default: minimize client JavaScript, optimize media with Next.js primitives, and avoid unnecessary third-party code.

Additional instructions for coding agents are maintained in [`AGENTS.md`](./AGENTS.md).
