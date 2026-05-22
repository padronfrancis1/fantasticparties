# Fantastic Parties YYC — Website

Modern, joyful kids' party rental site for Calgary. Next.js 15 (App Router), TypeScript strict, Tailwind v4, Framer Motion, Lenis smooth scroll, shadcn-style primitives over Radix.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

## Project layout

```
app/                       Routes (App Router)
  layout.tsx               Fonts, metadata, providers, JSON-LD, analytics
  page.tsx                 Home
  bumper-cars/, bubble-domes/, bouncy-castle/, soft-play/, chairs-and-tables/
  contact/                 Contact page
  api/booking/route.ts     Booking endpoint (currently logs — wire to Resend)
  sitemap.ts, robots.ts    SEO
components/                React components
  ui/                      Primitives: button, dialog, sheet, accordion, card
  decorative/              SVGs: balloons, stars, blobs, confetti, squiggle, wavy
  hero, nav, footer, …     Page sections
  booking-modal*           Multi-step modal + provider
lib/data/                  Typed content: rentals.ts, faqs.ts, testimonials.ts
lib/                       jsonld.ts, utils.ts, use-reduced-motion.ts
public/images/             Photos + logo
legacy/                    Old static site (delete when ready)
```

## Editing content

All copy is in plain TypeScript files — no CMS.

- **Rentals** (name, pricing, features, photos): `lib/data/rentals.ts`
- **FAQ**: `lib/data/faqs.ts`
- **Testimonials**: `lib/data/testimonials.ts` *(currently placeholders — replace with real Google reviews)*
- **Business info** (phone, email, geo): `lib/utils.ts` → `SITE`
- **Hero headline / copy**: `components/hero.tsx`
- **Featured package**: `components/package-section.tsx`

## Design system

Tokens live in `app/globals.css` under `@theme`:

| Token         | Value      | Use                                      |
| ------------- | ---------- | ---------------------------------------- |
| `--color-cream` | `#FFF9F2`  | Page background                          |
| `--color-coral` | `#FF6B6B`  | Primary CTAs, accents                    |
| `--color-sunshine` | `#FFD93D` | Secondary highlights, hover states    |
| `--color-mint` | `#6BCB77`  | Success, decorative                      |
| `--color-sky` | `#4D96FF`  | Focus ring, decorative                   |
| `--color-ink` | `#1F1A1A`  | Body text                                |

Fonts: **Fredoka** (display) + **Inter** (body), loaded via `next/font` with `display: swap`.

## Deploying to Vercel

1. Push the `redesign-modern` branch to GitHub.
2. In Vercel: **Add new project** → import the repo → Framework "Next.js" auto-detects.
3. **Root directory**: leave default (`/`).
4. **Build command**: `next build` (default).
5. Deploy. Vercel gives you a preview URL.
6. When ready, merge `redesign-modern` → `main`, then in Vercel **Domains** add `fantasticparties.ca` and `www.fantasticparties.ca`. Update your DNS records as Vercel instructs (A record → 76.76.21.21, or CNAME for www → cname.vercel-dns.com).
7. Delete the GitHub Pages CNAME / disable Pages for the repo.

## Content to customize before launch

- [ ] Replace testimonial placeholders with real Google/Facebook reviews (`lib/data/testimonials.ts`)
- [ ] Generate an OG share image at `public/og-image.png` (1200 × 630). Brand colors, big logo, "Calgary's most magical kids' parties". Canva works fine.
- [ ] Wire `/api/booking` to Resend (or send to a Google Sheet, or email). See `app/api/booking/route.ts` — there's a `// TODO`.
- [ ] Confirm pricing (especially bouncy castle and soft play — currently "contact for pricing").
- [ ] Add a favicon set if you want sharper than the current logo PNG.

## Lighthouse expectations

With proper image dimensions and the optimizations in place, expect:

- **Performance**: 90–98 (home), 95+ (rental pages). The hero has 3 large images so home is the heaviest page.
- **Accessibility**: 95–100. Skip link, focus rings, ARIA labels on all interactive elements, alt text on photos.
- **Best practices**: 100.
- **SEO**: 100. Per-page metadata + canonical, JSON-LD for LocalBusiness / Service / FAQPage, sitemap & robots.

## Future additions

- **Blog**: port `legacy/blog/best-kids-party-ideas-calgary-2026.html` to MDX under `/app/blog/[slug]`.
- **Payments / deposits**: Stripe Checkout at the end of the booking flow.
- **Calendar booking**: integrate with Cal.com or build a simple availability calendar.
- **Real reviews integration**: pull from Google Places API.
- **Image gallery**: per-rental galleries from a real photoshoot.
- **Internationalization**: not needed today, but `next-intl` is the path if you want French.
