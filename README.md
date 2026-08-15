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
- Vercel Web Analytics for privacy-conscious pageviews and funnel events
- npm with a committed lockfile

No UI framework, database, authentication, CMS, advertising pixel, or marketing automation service is included.

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

## Analytics

The root layout mounts Vercel Web Analytics once through the official App Router integration. Vercel handles initial and client-side route pageviews automatically; the application does not emit duplicate manual pageviews. Provider calls are isolated behind small typed client and server adapters in `src/lib/analytics`, and normal local development uses the provider's development/debug behavior rather than sending production traffic.

Enable Web Analytics in the Vercel project dashboard and redeploy the application before expecting production data. Base pageview analytics is available on all Vercel plans. Custom events require an eligible Pro, Web Analytics Plus, or Enterprise plan; UTM reporting in the Vercel dashboard currently requires Web Analytics Plus or Enterprise. The event schema uses no more than two properties per event so it remains compatible with the standard Pro custom-event limit.

The approved initial event schema is:

| Event | Controlled properties |
| --- | --- |
| `cta_click` | `source`; `cta` (`explore_solutions`, `discover_bleoris`, `lets_talk`, `start_conversation`) |
| `division_explore` | `source`; `division` (`apps`, `solutions`, `labs`) |
| `ai_employees_interest` | `source`; `action` (`explore`, `contact`) |
| `product_interest` | `source`; optional `product` (`heicflow` only when the action is specifically about HEICFlow) |
| `contact_start` | optional `inquiry_type` |
| `contact_submit_success` | `inquiry_type` |
| `contact_submit_failure` | `category` (`validation`, `delivery`, `configuration`) |

Controlled `source` values are `home`, `solutions`, `apps`, `labs`, `company`, `header`, and `footer`. Contact inquiry types are normalized to `solutions`, `ai_employees`, `apps`, `labs`, `partnership`, or `other`. The stable `cta` identifier encodes the destination, avoiding a redundant third property. Do not introduce event names or values outside this contract without updating the typed schema and this documentation.

Analytics must never include contact names, email addresses, company names, messages, submission IDs, provider message IDs or errors, secrets, or other visitor-supplied text. No custom user identifier, attribution cookie, local-storage profile, advertising pixel, or session replay is used. Successful contact conversion is emitted server-side only after Resend accepts the inquiry; honeypot submissions are excluded from conversion-failure analytics.

Use normal referrer data and deliberate UTM-tagged campaign URLs rather than custom attribution storage. A recommended LinkedIn company-page URL is:

```text
https://bleoris.com/?utm_source=linkedin&utm_medium=social&utm_campaign=company_page
```

Do not hard-code campaign parameters into internal links. After deployment, verify production pageviews for every public route, client-side route transitions, each instrumented custom event, and one real accepted contact submission in the Vercel dashboard. Also confirm the deployed plan exposes custom events and any required UTM reporting. These production ingestion and dashboard checks cannot be completed locally.

## Engineering conventions

- Prefer Server Components; add Client Components only when browser interactivity requires them.
- Use semantic HTML, accessible interaction patterns, and responsive-first layouts.
- Keep TypeScript strict and avoid `any`, unsafe assertions, and duplicated domain models.
- Use the `@/*` alias for imports from `src`.
- Keep dependencies minimal and add abstractions only after a concrete reuse case exists.
- Add route metadata as pages are introduced; do not invent URLs, claims, metrics, clients, or case studies.
- Preserve performance by default: minimize client JavaScript, optimize media with Next.js primitives, and avoid unnecessary third-party code.

Additional instructions for coding agents are maintained in [`AGENTS.md`](./AGENTS.md).
