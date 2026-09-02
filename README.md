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

## Coming-soon mode (the default)

One variable decides which site people see:

| `VITE_SITE_MODE` | What is served |
| --- | --- |
| unset or `coming-soon` | The pre-launch page at every address. `/privacy` and `/terms` stay reachable behind a quiet header. |
| `full` | The full marketing site. |

To launch: set `VITE_SITE_MODE=full` in the Railway service variables. Railway rebuilds on a
variable change, and the value is read at build time. To go back to the teaser, remove it.

Optional variables, also set on Railway:

- `VITE_PREVIEW_KEY` — with this set, `https://sellai.africa/?preview=<key>` unlocks the full site
  for one browser tab while the public still sees the teaser. Good for showing partners.
- `VITE_WAITLIST_ENDPOINT` — a POST URL (Formspree or similar) that receives `{ contact, source, city }`
  from the teaser's form. Without it the form composes an email to hello@sellai.africa.
- `VITE_WHATSAPP_NUMBER` — digits only, international format. Adds a "say hello on WhatsApp" link.

Locally: `npm run dev` shows the teaser, `npm run dev:full` the full site (`.env.full`). Same for
`npm run build` / `npm run build:full`. The crawler-facing tags in `index.html` (title, description,
social image) are swapped per mode by the small plugin in `vite.config.ts`, so a link shared on
WhatsApp pre-launch shows `og-soon.png`, not the product.
