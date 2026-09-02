# Sellai marketing website

The public site at sellai.africa. Vite + React + Tailwind v4 + `motion`. Not connected to the Sellai API.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

Railway runs `npm run build` then `npm start` (a static `serve` of `dist/` with SPA fallback).

## How it is put together

- `src/index.css` holds every colour, font and radius token. They mirror the mobile app's
  `theme.ts` (Forest & Mint). If a colour is not in that file, it does not belong on the site.
- `src/components/ui.tsx` has the primitives: `Section`, `SectionHeader`, `Button`, `Card`,
  `IconDisc`, `FeatureList`, `Pill`, `PhoneFrame`, `BrandIcon`.
- `src/components/AppScreens.tsx` draws the three animated phone screens (buyer, seller, runner)
  in HTML so they always match the current palette. Every field shown exists in the real app.
- `src/components/motion.tsx` wraps `motion/react` with one easing and reduced-motion handling.
- Icons are `lucide-react`, the same family the app uses. There is no icon font.
- `src/constants/downloads.ts` has the download links. iPhone and Mac are "in progress" flags:
  set the URL constants when the builds ship and the buttons switch over.

## Copy rules

Every claim on the site must be true of the product today. Before adding a feature line, find
the code that does it. The messaging reference is `../../SELLAI_MESSAGING.md` at the workspace
root; keep it in sync when copy here changes.

Words we avoid: "marketplace", "cart", "checkout", "order", "gig", "AI-powered", "revolutionary".
Buyers post one budget number, not a range. Sellers do not deliver, runners do. The buyer pays
the runner in cash at handoff. Sellai only ever charges sellers (credits) and runners (commission).

## Assets

`public/og.png` is the social preview (1200×630). Regenerate it from `scripts/og.html` with a
headless browser screenshot if the headline changes. `favicon.svg` is the forest tile with the
mint S.
