# Bayu Rahmat Kurniawan — Portfolio

Personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before deploying

- Update `siteConfig.url` in `lib/site.ts` to your real production domain (it's used for canonical URLs, Open Graph, and the sitemap).
- Add a favicon / OG image to `app/` if desired (e.g. `app/icon.png`, `app/opengraph-image.png`).
- Optionally add real social links in `components/Contact.tsx` and `lib/site.ts`.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at https://vercel.com/new.

## Structure

- `app/` — routes, layout, metadata, robots.ts, sitemap.ts
- `components/` — page sections (Navbar, Hero, About, Skills, FeaturedProject, Workflow, Faq, Contact, Footer, JsonLd)
- `lib/site.ts` — single source of truth for all site content (name, FAQ, skills, project info) used across metadata, JSON-LD, and the UI
