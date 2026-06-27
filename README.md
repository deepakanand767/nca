# NCA — Nangal Cricket Academy

A modern, fully responsive marketing website for **Nangal Cricket Academy (NCA)**, built with **Next.js (App Router)** and **Chakra UI v3**. Single-page scroll layout with a sticky navbar, a green & gold "cricket-pitch" theme, and WhatsApp-first calls to action.

## Sections

Hero · About · Programs · Coaches · Facilities · Gallery · Testimonials & Achievements · Contact (WhatsApp / email)

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Chakra UI v3](https://chakra-ui.com) + Emotion
- [react-icons](https://react-icons.github.io/react-icons/)
- Google Fonts (Poppins + Inter) loaded via `<link>`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## ✏️ Things to customise

All editable content lives in plain data files — no need to touch the components.

| What | Where |
| --- | --- |
| **WhatsApp number** | `src/config/site.ts` → `WHATSAPP_NUMBER` (country code + number, no `+`/spaces, e.g. `919876543210`) |
| Phone / email / address / hours | `src/config/site.ts` → `siteConfig` |
| Google Map location | `src/config/site.ts` → `siteConfig.mapEmbedUrl` |
| Social links | `src/config/site.ts` → `siteConfig.socials` |
| Programs | `src/data/programs.ts` |
| Coaches | `src/data/coaches.ts` |
| Facilities | `src/data/facilities.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Achievement stats | `src/data/achievements.ts` |
| Gallery tiles | `src/data/gallery.ts` |
| Brand colors / fonts | `src/theme/index.ts` |

Images are tasteful gradient placeholders for now — swap in real photos by replacing the gradient blocks with `<Image>` tags in the relevant section/data files.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js; no config needed.
3. Every push to `main` auto-deploys. Add a custom domain under **Settings → Domains** (free, includes SSL).
