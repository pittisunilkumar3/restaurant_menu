# Saffron & Smoke

A responsive restaurant landing page built with Next.js, React, TypeScript, Tailwind CSS and Phosphor icons. It includes menu category filters, dietary labels, scroll reveals, FAQs and persistent restaurant ratings.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run build
```

## Restaurant content

The restaurant name, menu, prices and opening hours are sample content. Edit the page content in `src/app/page.tsx` and menu entries in `src/data/menu.ts`.

The full menu lives at `/menu`. Its page content and metadata are in `src/app/menu/page.tsx`; the interactive category showcase is in `src/components/menu-browser.tsx`.

The homepage links to the Google Maps listing and Google review form for **ASTER CAFE & KITCHEN** in Banjara Hills, Hyderabad. To change the destination, update `googleListingName` and `googlePlaceId` in `src/app/page.tsx`, along with the displayed location. Google reviews are separate from the ratings stored by this site.

## Ratings

`GET /api/ratings` returns the current average and rating count. `POST /api/ratings` accepts a JSON body with an integer `rating` from 1 to 5.

Ratings are stored in `data/ratings.json`. Writes are serialized and saved with an atomic file rename. This storage works on one persistent Node.js server. Use a shared durable database before deploying to serverless or multiple instances.

Set `NEXT_PUBLIC_SITE_URL` to the public site URL for correct social sharing metadata.
