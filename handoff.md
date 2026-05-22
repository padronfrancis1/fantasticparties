# Fantastic Parties YYC — Handoff

Last updated: 2026-05-21
Branch: `redesign-modern`

## Where we are

A full Next.js 15 / Tailwind v4 redesign is **live in production** on the real customer domain.

- 🟢 https://www.fantasticparties.ca — primary canonical (Vercel)
- 🟢 https://fantasticparties.ca — 307 redirects to the www canonical
- 🟢 https://fantasticparties.vercel.app — Vercel alias to latest production deploy (still works for direct preview)

DNS is delegated to Vercel via WHC nameservers (`ns1.vercel-dns.com` / `ns2.vercel-dns.com`). The legacy GitHub Pages site has been disabled on `padronfrancis1/fantasticparties` (Settings → Pages → Source: None). The `CNAME` file remains in `legacy/CNAME` as a historical artifact and is no longer read by anything.

## Tech stack

- Next.js 15 (App Router) + React 19, TypeScript strict
- Tailwind CSS v4 with `@theme` tokens in `app/globals.css`
- shadcn-style primitives (Button, Dialog, Sheet, Accordion, Card)
- Framer Motion + Lenis smooth scroll
- React Hook Form + Zod for the booking modal
- canvas-confetti on booking success
- Vercel Analytics + Speed Insights
- next/font with Fredoka (display) + Inter (body)

## Architecture map

```
app/
  layout.tsx              root layout, fonts, metadata, LocalBusiness JSON-LD
  page.tsx                home (composes hero, trust, rentals, package, testimonials, FAQ, CTA)
  [rental]/page.tsx       5 rental landing pages (bumper-cars, bubble-domes,
                          bouncy-castle, soft-play, chairs-and-tables)
  contact/page.tsx
  api/booking/route.ts    Zod-validated POST endpoint (422 on invalid)
  opengraph-image.tsx     dynamic 1200x630 PNG via next/og
  sitemap.ts, robots.ts
components/
  nav.tsx                 sticky shrinking nav + mobile Sheet
  hero.tsx                full-viewport hero with parallax balloons + sparkles
  rentals-grid.tsx        home rentals showcase
  package-section.tsx     featured bumper-cars package
  testimonial-carousel.tsx
  faq-accordion.tsx
  big-cta.tsx
  footer.tsx
  booking-modal.tsx       4-step: rentals → date → address → details
  booking-modal-provider.tsx
  rental-page.tsx         shared template for [rental]/page.tsx
  ui/                     button, dialog, sheet, accordion, card
  decorative/shapes.tsx   Balloon, Sparkle, Star, Squiggle, Confetti, Blob
lib/
  data/rentals.ts         single source of truth — 6 rentals with prices, copy, gallery
  data/faqs.ts
  data/testimonials.ts    placeholder content — needs real reviews
  utils.ts                SITE constant: phone, email, geo, socials
  jsonld.ts               LocalBusiness / Service / FAQPage schema generators
  use-reduced-motion.ts
```

## Brand tokens (in `app/globals.css`)

| Token | Hex |
|---|---|
| cream | #FFF9F2 |
| coral | #FF6B6B |
| sunshine | #FFD93D |
| mint | #6BCB77 |
| sky | #4D96FF |
| ink | #1F1A1A |

Display: Fredoka (`--font-fredoka`). Body: Inter (`--font-inter`).

## Business data (in `lib/utils.ts`)

- Phone: 587-969-5441 (`tel:+15879695441`)
- Email: fantasticpartiesyyc@gmail.com
- Pickup base: Evergreen SW, Calgary
- Service area: Calgary + Airdrie, Cochrane, Chestermere, Okotoks

## SEO

- Per-page `Metadata` and canonical URLs
- LocalBusiness JSON-LD on every page (via root layout)
- Service JSON-LD on each rental page
- FAQPage JSON-LD on home
- sitemap.ts + robots.ts
- Dynamic OG image at /opengraph-image (brand gradient + headline)

## Accessibility & performance

- `prefers-reduced-motion` respected via `useReducedMotion` hook in hero, big-cta
- Skip link to `#main`
- `aria-current` on nav
- Focus management on lightbox (returns focus to trigger on close)
- `role="progressbar"` on booking step indicator
- `suppressHydrationWarning` on `<body>` to tolerate Grammarly browser extension
- Fonts load with `display: swap`
- Hero image `priority` + `fetchPriority="high"`

## Outstanding content TODOs

- [ ] Replace placeholder testimonials in `lib/data/testimonials.ts` with real reviews
- [ ] Confirm/update Google rating language (currently shows "5.0 on Google")
- [ ] Replace any remaining stock photos
- [ ] Add real Instagram/Facebook URLs in `lib/utils.ts` → `SITE.socials`

## Deployment

- Vercel project: `padronfrancis1s-projects/fantasticparties`
- Deploy preview: run `vercel` from project root
- Promote to fantasticparties.ca:
  1. Vercel dashboard → Settings → Domains → add `fantasticparties.ca` and `www.fantasticparties.ca`
  2. Update DNS at registrar to the records Vercel provides
  3. Disable GitHub Pages on the old repo

## Session log

### 2026-05-21 — Polish round (from co-owner feedback)

- Replaced "magical" with "fantastic" in the hero headline and supporting copy (brand pun on "Fantastic Parties")
- Swapped to the official wordmark logo (`fantastic_logo-removebg-preview.png`) in nav + footer; favicon stays as the small mark
- Removed "free takedown" promise across the site
- Removed "free setup" claims everywhere as well — both setup and takedown are billed; pricing quoted on contact
- Removed `softplays.jpg` from the soft-play gallery (file deleted)
- Mitigated white-edge issue on photos via a small CSS scale inside `overflow-hidden` containers

### Earlier commits

- `e1f7a5c` phone number → 587-969-5441 sitewide
- `fbd09fe` chairs & tables Product schema image fields
- `27e9aa9` chairs & tables Product schema offers
- `63b9bda` centered logo in navbar
- `f922e1d` equal-height cross-sell cards
