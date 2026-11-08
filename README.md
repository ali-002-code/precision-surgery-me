# PrecisionSurgeryME

Website for the private surgical practice of Mr Mohammad Eddama, Consultant
Colorectal Surgeon — https://precisionsurgeryme.com

Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Lucide icons.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run build        # static site in out/
npm start            # serve out/ locally
```

## Where things live

| What | File |
| --- | --- |
| Design tokens (colour, type, spacing, radii) | `src/app/globals.css` |
| Site name, URL, contact details, registration, portrait | `src/content/site.ts` |
| Treatments (cards + detail pages) | `src/content/treatments.ts` |
| Career, qualifications, awards, research, publications | `src/content/research.ts` |
| Privacy / cookie policies | `src/app/privacy-policy`, `src/app/cookie-policy` |
| Enquiry form (hidden until a backend exists) | `src/components/contact/enquiry-form.tsx` |
| Cloudflare response headers | `public/_headers` |

The portrait is `public/images/mohammad-eddama-studio.webp`.

## Deployment (Cloudflare Pages)

The site is a fully static export, hosted on Cloudflare Pages and connected to
this GitHub repository. Every push to `main` builds and deploys automatically.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | `NODE_VERSION=22` |

Custom domain: `precisionsurgeryme.com` (canonical). `www.precisionsurgeryme.com`
redirects permanently to the apex domain.

### Environment variables (Cloudflare build settings)

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://precisionsurgeryme.com` | Canonical URLs, sitemap |
| `NEXT_PUBLIC_ALLOW_INDEXING` | unset (blocked) | Set to `true` **only after** clinical and legal sign-off |

While indexing is off, every page is `noindex` and `robots.txt` disallows all
crawlers. This does not make the site private.

### Making updates

Edit the content files above, run `npm run build` to check, then commit and
push to `main`. Cloudflare redeploys in a minute or two.

### Family preview (GitHub Pages)

`npm run build:pages` builds a copy under `/precision-surgery-me` for the
`gh-pages` branch. It is separate from the production site.

## Before public launch

- Clinical sign-off of all treatment pages by Mr Eddama.
- Complete privacy policy placeholders: legal entity, ICO registration number,
  postal address, enquiry retention period. ICO registration itself.
- Consultation locations.
- Connect the enquiry form to a secure, UK GDPR-compliant backend (or keep the
  email/phone buttons).
- Then set `NEXT_PUBLIC_ALLOW_INDEXING=true`, redeploy, and submit
  `https://precisionsurgeryme.com/sitemap.xml` in Google Search Console.
