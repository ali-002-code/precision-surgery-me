# PrecisionSurgeryME

Development prototype of the website for the private surgical practice of
Mr Mohammad Eddama, Consultant Colorectal Surgeon.

Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4 · Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| Design tokens (colour, type, spacing, radii) | `src/app/globals.css` |
| Site name, navigation, placeholders, portrait | `src/content/site.ts` |
| Treatments (cards + detail pages) | `src/content/treatments.ts` |
| Verified UCL appointments & publications | `src/content/research.ts` |
| Enquiry form (not connected) | `src/components/contact/enquiry-form.tsx` |

### Portrait

The portrait is `public/images/mohammad-eddama-studio.webp` (converted from the studio headshot). Its path is set in `portrait` in `src/content/site.ts`; set `src` to `null` to show the placeholder.

## Preview on GitHub Pages

```bash
npm run build:pages   # static export to out/ under /precision-surgery-me
```

The `out/` folder is published to the `gh-pages` branch. This preview build
skips robots.txt/sitemap (pages are `noindex`) and turns off Cache Components,
which static export does not support.

## Before launch

- Supply and verify: qualifications, GMC number, contact details,
  consultation locations, privacy and cookie policies.
- Clinically review all treatment copy.
- Connect the enquiry form to a secure, UK GDPR-compliant backend.
- Set `NEXT_PUBLIC_SITE_URL` and, only once approved, `NEXT_PUBLIC_ALLOW_INDEXING=true`
  (search engines are blocked until then).
