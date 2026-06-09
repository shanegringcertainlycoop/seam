# SEAM

Marketing site for SEAM certification — `seamcertification.org`.

Sibling repos:
- [`seam-standard`](../seam-standard) — the public SEAM Standard reference (`standard.seamcertification.org`)
- [`studio-seam-standard`](../studio-seam-standard) — Sanity Studio (CMS) for the Standard

## Stack
- Astro 5
- Tailwind CSS v4 (`@tailwindcss/vite`)
- TypeScript
- Netlify deploy (`@astrojs/netlify`)

## Setup
```bash
npm install
npm run dev        # http://localhost:4321
```
Local env values (if any) go in `.env.local`.

## Scripts
```bash
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Structure
```
src/
  pages/          # routed pages (.astro) — home, certification, pricing, marks, seals, for/*, standard/* …
  components/     # shared UI components
  layouts/        # page layouts
  data/           # structured content / copy
  lib/            # helpers
  styles/         # global styles / Tailwind entry
  assets/         # imported assets
public/           # static assets served as-is
```

## Deploy
Deployed via Netlify using the Astro Netlify adapter (see `astro.config.*`).

## Notes
- `figma-screenshots/` and `screenshots/` hold internal design/QA reference images; they are not part of the shipped site.
