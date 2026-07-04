# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Build & checks

- `npm run dev` (Vite, port 8080), `npm run build`, `npm run lint`. There is no test suite wired up (`npm run test` runs vitest with no tests).
- Pre-existing lint errors live in `src/components/ui/*` (shadcn generated) and `tailwind.config.ts` (`require()` import) — not introduced by feature work.

## Design system (2026-07 home redesign)

- The home page and landing heroes use an "engineering atelier" system layered on top of the older blue theme, defined by `--aa-*` CSS variables in `src/index.css` and Tailwind tokens `paper`, `bone`, `ink`, `machine` (teal), `signal` (vermilion — reserved for CTAs/conversion accents).
- Typography: `font-heading` / `.aa-display` = Unbounded (full Cyrillic), body = Manrope (`font-plex`), technical labels = IBM Plex Mono (`font-plexmono`, `.aa-label`). Owner feedback: keep the site all-white (no dark section backgrounds) and keep hero headlines moderate in size.
- Shared primitives (`useReveal`, `SectionHead`, `Cross`) live in `src/components/home/primitives.tsx`.
- The legacy blue-theme utilities in `src/index.css` (`bg-hero-gradient`, `glass-card`, `text-display-*`, etc.) are still used by inner sections of `AboutUs` and the service landing pages — do not remove them.
- `public/fonts/Manasco.otf` is a custom display font with full Cyrillic coverage (66 glyphs), currently unused; it was tried for headings and rejected by the owner.

## Sharp edges

- All section components under `src/components/sections/` are shared: `Header`, `Footer`, `Contact`, `Testimonials`, `Pricing`, `Proposition`, `AIIntegrations` are imported by the service landing pages too — changing them changes those pages.
- Bulgarian copy is the product; keep content factual (prices come from `Pricing.tsx`: 99 €/299 € monthly plans) and do not invent stats/claims.
- There IS a production backend even though none lives in this repo: an Express server on the automationaid.eu VPS exposes `POST https://automationaid.eu/api/contact` (nginx-proxied, CORS `*`, sends email via Resend). It accepts JSON `{name, email, phone, message}` and requires non-empty `name`, `email`, `message` (no email format validation — any string passes). The project wizard posts there; the legacy `Contact.tsx` form still uses `mailto:` links to slav@automationaid.eu.

## Lead conversion (2026-07 wizard replacement)

- The site-wide CTA is "Заяви проекта сега", which opens the multi-step project questionnaire in `src/components/wizard/ProjectWizard.tsx`. `ProjectWizardProvider` wraps the routes in `App.tsx`; open it from any component with `useProjectWizard().openWizard()`. `LandingHero`/`LandingCTA` accept a `ctaOpensWizard` prop for landing pages.
- The wizard is deliberately low-friction per owner request: no hard field validation anywhere; the contact step shows a one-time soft hint if both phone and email are empty, but a second click always submits. Keep it that way. Because the API rejects empty `name`/`email`, the wizard substitutes placeholders ("Заявка от въпросник" / "не е посочен") for phone-only leads.
- The old "Безплатна консултация" call-booking flow (calendar + time slots + meeting dialog in `Contact.tsx`) was removed in this change — do not reintroduce it.

## Landing page expansion (2026-07, founder-pages-scout-q8)

- A market-research report (`data/founder-pages-scout-q8/report.md` in the firstmate repo, not checked into this repo) recommended 6 new service landing pages. Two of the highest-confidence ones shipped in this change: `/launch-your-business` (`src/pages/LaunchBusinessLanding.tsx`, audience = starting a business from zero) and `/automation-for-business` (`src/pages/AutomationForBusinessLanding.tsx`, audience = solopreneurs/coaches/creators, not tech-defined). Both reuse the shared `Pricing` component (99/299 € plans) unchanged — confirmed by the report to fit without new pricing machinery.
- The remaining 4 candidate pages from that report (AI agent development, SaaS/MVP, security testing, compliance/certifications) need new pricing shapes (fixed one-time packages, setup+monthly) that the shared `Pricing` component does NOT support — do not force-fit them into `Pricing.tsx` without a pricing-shape decision first.
- All service landing pages now lazy-load via `React.lazy()` in `src/App.tsx` under a single `<Suspense>` boundary — when adding a new page route, follow that pattern (const X = lazy(() => import(...))) rather than a static import.
- `src/components/Analytics.tsx` renders a Plausible `<script>` tag (no cookies/consent banner needed) gated on `VITE_ANALYTICS_DOMAIN`; renders nothing if the env var is unset. Mounted once in `App.tsx`. Document any change to this in `README.md`.
- `public/dashboard_desktop.png`/`dashboard_mobile.png` now ship `.webp` siblings (lossless — smaller than the palette-optimized PNG for this flat-color UI screenshot content) referenced via `<picture>` in `src/components/sections/Services.tsx`; keep both files in sync if the screenshots are ever replaced.
