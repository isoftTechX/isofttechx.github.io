# isoftTechX website

React 18 + Vite 5 + TypeScript + Tailwind CSS 3 + React Router 6 + Lucide.

## Run
```bash
npm install
cp .env.example .env     # then fill in values
npm run dev              # http://localhost:5173
npm run typecheck
npm run build            # type-checks, then outputs ./dist
npm run preview
```

## Environment variables (all optional, all public)
| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Canonical/OG URLs. Also edit `public/robots.txt` and `public/sitemap.xml` (they use `isofttechx.github.io`). |
| `VITE_CONTACT_ENDPOINT` | JSON POST endpoint for the contact form (Formspree, a serverless function, etc.). Without it the form validates but honestly reports "not sent". |
| `VITE_CONTACT_EMAIL` | Shown on Contact/Footer only when set. |
| `VITE_SOCIAL_*` | GitHub / LinkedIn / X / YouTube links, shown only when set. |

Never put secrets in `VITE_*` variables: they ship to the browser. Do rate limiting, sanitising and spam control on the endpoint side.

## Content
- Projects: `src/data/projects.ts` (typed; add an entry to extend the index, filters and footer). Product pages are bespoke in `src/pages/projects/`.
- Founder: set `site.founder` in `src/data/site.ts` when verified details exist.
- Statuses are conservative (`MayaVE: In Development`, `ecoReward Bin: Concept`). Confirm and change.

## Known limitations / owner to-do
- Client-rendered SPA. For crawlability use prerendering (e.g. `vite-plugin-ssg`/Prerender) or SSR on your host; configure SPA fallback to `index.html` for deep links.
- No OG image, real avatar renders, screenshots or photos are included. Visuals are labeled conceptual SVGs.
- Add security headers (CSP, etc.) at the host. Add privacy/legal pages and footer links when they exist.
- Fonts load from Google Fonts; self-host (e.g. `@fontsource`) if you prefer.
