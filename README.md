**NY Portfolio (Astro)**

- Stack: Astro 4, TailwindCSS, TypeScript
- Features: retro minimalist landing page, blog, SEO meta/OG, sitemap, RSS ready
- Theme: dark mode toggle, CRT glow, scanlines/noise overlay, glass UI, pixelated icon support
- Tooling: ESLint + Prettier, Node 20, GitHub Actions, Docker + Compose

Scripts

- dev: astro dev
- build: astro build
- preview: astro preview
- lint: eslint .
- format: prettier -w .
- typecheck: tsc --noEmit

Run locally

- npm install
- npm run dev
- open http://localhost:4321

Docker

- docker compose up (dev, hot reload)
- For a production image: docker build -t ny-portfolio . && docker run -p 4321:4321 ny-portfolio

Content

- Blog posts live in src/content/blog using Astro Content Collections.

Config

- Update site in astro.config.mjs for correct canonical URLs and sitemap.
- Replace links, email, and social in components.
