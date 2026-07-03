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
- All lead capture submits via `mailto:` links to slav@automationaid.eu — there is no backend.

## Lead conversion (2026-07 wizard replacement)

- The site-wide CTA is "Заяви проекта сега", which opens the multi-step project questionnaire in `src/components/wizard/ProjectWizard.tsx`. `ProjectWizardProvider` wraps the routes in `App.tsx`; open it from any component with `useProjectWizard().openWizard()`. `LandingHero`/`LandingCTA` accept a `ctaOpensWizard` prop for landing pages.
- The wizard is deliberately low-friction per owner request: no hard field validation anywhere; the contact step shows a one-time soft hint if both phone and email are empty, but a second click always submits. Keep it that way.
- The old "Безплатна консултация" call-booking flow (calendar + time slots + meeting dialog in `Contact.tsx`) was removed in this change — do not reintroduce it.
