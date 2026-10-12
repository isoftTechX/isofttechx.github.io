# isoftTechX website

isoftTechX builds AI, intelligent systems, and software.

**Stack:** React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · Lucide React

## Architecture & Design
- **Single-page layout:** Section anchor navigation (`#projects`, `#about`, `#contact`) with sticky header and mobile navigation drawer.
- **Typography:** Pure system-font stack (`ui-sans-serif, system-ui, sans-serif`) with zero external font requests.
- **Visuals:** Dark editorial theme (`#0B0B0D`), restrained violet accents, and accessible SVG diagrams with reduced-motion support.
- **Contact:** Responsive social cards linking directly to official profiles (Instagram, LinkedIn, GitHub, X).

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start local development server (http://localhost:5173)
npm run typecheck    # Run TypeScript check (tsc --noEmit)
npm run build        # Typecheck and build production assets to ./dist
npm run preview      # Preview the production build locally
```

## Content Management
Site data is centralized in typed configurations:
- **`src/data/content.ts`**: Navigation items, project descriptions, team member cards, and social profile links.
- **`src/components/`**: Modular section components (`Navbar`, `Hero`, `Projects`, `About`, `Contact`, `Footer`, `Reveal`).

## Deployment
Automated deployment to GitHub Pages is configured via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `main`.
Production URL: `https://isofttechx.github.io/`
