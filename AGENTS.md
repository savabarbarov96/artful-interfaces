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
- Contact form and meeting booking submit via `mailto:` links to slav@automationaid.eu — there is no backend.
