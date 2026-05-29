# Cookies — White-Label Cookie Brand Website

Production-ready Next.js website for a cookie/dessert brand. Built as a configurable template: all client-specific content lives in dedicated data files, so rebranding is a focused data swap — no hunting through JSX.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion** — animations
- **React Leaflet** — store locator map

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Environment Variables

See [`.env.example`](.env.example). All are optional — the site builds without them.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID. GA only loads when set. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (sitemap + OpenGraph). Defaults to production domain. |

## Project Structure

```
src/
├── app/                  # routes (App Router)
│   ├── layout.tsx        # root layout, metadata, GA
│   ├── sitemap.ts        # auto-generated sitemap
│   └── <route>/page.tsx  # one folder per page
├── components/           # Navbar, Footer, Hero, CookieCard, icons, ...
├── data/                 # ← ALL client-configurable content
│   ├── brand.ts          # identity: name, tagline, contact, app links, SEO
│   ├── cookies.ts        # product menu
│   ├── rewards.ts        # loyalty tiers
│   ├── navigation.ts     # nav + social links
│   ├── stores.ts         # store locations
│   ├── milestones.ts     # timeline + stats
│   └── catering.ts       # catering features/contact
├── types/                # shared TS types
└── lib/                  # utilities (cn, ...)
```

## Rebranding Guide

To rebrand for a new client, edit these **6 files** — nothing else:

| # | File | What to change |
|---|------|----------------|
| 1 | `src/data/brand.ts` | Name, legal name, tagline, founders, year, SEO meta, contact, app store links |
| 2 | `src/app/globals.css` | Brand color tokens (`--crumbl-*` custom properties) |
| 3 | `src/data/cookies.ts` | Product menu (names, descriptions, images, colors) |
| 4 | `src/data/rewards.ts` | Loyalty tier names, thresholds, perks |
| 5 | `src/data/navigation.ts` | Social media URLs, nav labels |
| 6 | `src/components/icons.tsx` | Logo SVG (inline component, not an image file) |

Required client info is collected in [`CLIENT_INTAKE_FORM.md`](CLIENT_INTAKE_FORM.md).

After editing, run `npm run build` to verify.

## Deployment

Optimized for [Vercel](https://vercel.com). Set the environment variables above in the project dashboard, then deploy. Any Node host running `npm run build && npm run start` also works.
