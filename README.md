# City Taxi Kaiserslautern

Bilingual (German / English) website for **City Taxi Kaiserslautern**, with
online booking through the taxi.de widget, the official city taxi tariff, and a
dedicated landing page for every service we offer.

Thirty static pages, no database, no tracking, no cookies.

- **Live domain:** `citytaxi-kl.de`
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4
- **Runtime dependencies:** none beyond the framework

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

Set the canonical origin per environment (defaults to `https://citytaxi-kl.de`):

```bash
NEXT_PUBLIC_SITE_URL=https://citytaxi-kl.de
```

---

## ⚠️ Before this goes live

| # | What | Where |
| --- | --- | --- |
| 1 | **One Impressum field left: the VAT ID.** Set `vatId` in `business.ts` and both languages are correct — put the § 19 UStG small-business note there instead if there is no number. While it is `null` a visible `[placeholder]` shows on both imprint pages, so an incomplete Impressum cannot ship unnoticed. This is a real legal requirement in Germany (§ 5 DDG). | `src/lib/business.ts` |
| 2 | **Have the privacy policy reviewed.** Written for this site as built (server logs, taxi.de iframe, WhatsApp) — but it is not legal advice. | `src/lib/i18n/de.ts`, `en.ts` |
| 3 | **Re-check the taxi tariff.** The figures follow the Taxentarifordnung in force since 1 Sept 2022. These are legally binding prices — verify against the current ordinance and update on every amendment. | `src/lib/tariff.ts` |
| 4 | **Confirm 24/7 availability** — assumed, and stated on every page and in the structured data. | `src/lib/business.ts` |
| 5 | **Check the health-insurance details** (Muster 4 prescription, prior approval, 10% / 5–10 € co-payment) against how you actually bill. | `src/lib/i18n/de.ts`, `en.ts` |
| 6 | **Sanity-check distances and journey times** on the airport and Air Base pages. | `src/lib/i18n/de.ts`, `en.ts` |
| 7 | **Confirm base access.** The Air Base page states you send a driver with an access card when told in advance, and only reach the gate otherwise. | `src/lib/i18n/de.ts`, `en.ts` |
| 8 | **Replace the stock photo** with pictures of your own cars. See *Photos* below. | `public/photos/`, `src/lib/photos.ts` |

`pref=24075` now correctly resolves to "City Taxi Kaiserslautern" in the booking
widget — verified, no longer an issue.

---

## Pages

Fifteen pages per language, all prerendered as static HTML with localised slugs.

| Page | German | English | Where it is linked |
| --- | --- | --- | --- |
| Home | `/de` | `/en` | menu |
| Services | `/de/leistungen` | `/en/services` | menu |
| Fares | `/de/taxipreise-kaiserslautern` | `/en/taxi-fares-kaiserslautern` | menu |
| Booking | `/de/taxi-online-bestellen` | `/en/order-a-taxi-online` | menu |
| Contact | `/de/kontakt` | `/en/contact` | menu |
| City rides | `/de/taxi-kaiserslautern-stadtfahrten` | `/en/city-taxi-rides-kaiserslautern` | footer + service card |
| Taxi app | `/de/taxi-app-kaiserslautern` | `/en/taxi-app-kaiserslautern` | footer |
| Medical transport | `/de/krankenfahrten-kaiserslautern` | `/en/medical-transport-kaiserslautern` | footer + service card |
| Large-capacity taxi | `/de/grossraumtaxi-kaiserslautern` | `/en/large-taxi-kaiserslautern` | footer + service card |
| Courier runs | `/de/kurierfahrten-kaiserslautern` | `/en/courier-service-kaiserslautern` | footer + service card |
| Business accounts | `/de/geschaeftskunden-taxi-kaiserslautern` | `/en/business-taxi-accounts-kaiserslautern` | footer + service card |
| Airport transfer | `/de/flughafentransfer-kaiserslautern` | `/en/airport-transfer-kaiserslautern` | footer + service card |
| Ramstein Air Base | `/de/taxi-ramstein-air-base` | `/en/taxi-ramstein-air-base` | footer + related links |
| Imprint | `/de/impressum` | `/en/imprint` | footer |
| Privacy | `/de/datenschutz` | `/en/privacy` | footer |

Every one of the six services on the services page has its own landing page.
All seven landing pages are deliberately kept out of the main menu: they are
linked from the footer, from the matching service card, and from each other — a
page linked only from the footer is close to an orphan as far as search engines
are concerned.

### The home page carries every menu section

Hero → services → the full fare table → how it works → photo → service area →
contact → **the booking widget**. A visitor who never clicks anything can still
see what a ride costs and book one. The widget is embedded twice (home and the
booking page) from a single `BookingWidget` component.

A URL without a language prefix (`/krankenfahrten-kaiserslautern`) redirects to
the German version.

---

## Language handling

`src/proxy.ts` reads the browser's `Accept-Language` header, honours its `q`
weights, and redirects to `/de` or `/en`. Anything that is not English falls
back to German. **Nothing is stored** — no cookie, no fingerprint, which is also
why the privacy policy can stay short.

The language switcher keeps you on the same page rather than dropping you on
the home page.

---

## Project structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── [slug]/page.tsx      # thin router: slug → page component
│   │   ├── layout.tsx           # <html lang>, header, footer, WhatsApp button
│   │   ├── opengraph-image.tsx  # social card, generated per language
│   │   └── page.tsx             # home
│   ├── icon.tsx                 # favicon
│   ├── layout.tsx               # pass-through (locale layout owns <html>)
│   ├── not-found.tsx            # bilingual 404
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Icons.tsx                # inline SVG set, no icon library
│   ├── layout/                  # Header, HeaderNav, Footer, WhatsAppFab
│   ├── pages/                   # one component per page body
│   └── sections/                # reusable blocks (Hero, TariffTable, FAQ…)
├── lib/
│   ├── business.ts              # name, address, phone, geo — single source
│   ├── tariff.ts                # official city tariff
│   ├── seo.ts                   # metadata + JSON-LD builders
│   └── i18n/
│       ├── de.ts  en.ts         # all copy
│       ├── routes.ts            # page keys + localised slugs
│       └── types.ts
└── proxy.ts                     # language detection
```

### Editing content

All text lives in **`src/lib/i18n/de.ts`** and **`src/lib/i18n/en.ts`**. English
is type-checked against German, so adding a key to one and forgetting the other
**fails the build** instead of silently shipping a gap.

Name, address, phone, and coordinates live once in **`src/lib/business.ts`** and
feed the header, footer, contact page, legal pages, and structured data.

### Adding a page

1. Add a key to `pageKeys` and a slug for both languages in `src/lib/i18n/routes.ts`
2. Add the copy and a `seo` entry to both dictionaries
3. Render it in `src/app/[locale]/[slug]/page.tsx`

Navigation, sitemap, and hreflang pick it up automatically.

---

## The email address

`ObfuscatedEmail` renders it in pieces — local part, `@`, domain as separate
elements — and attaches the `mailto:` on the client through a ref. The served
HTML therefore contains neither the address as a contiguous string nor a
`mailto:` anywhere. Legal copy carries an `{email}` token that `LegalSections`
swaps for the same element, so the address is never baked into those strings.

For a person nothing changes: the text reads as the address, selects and copies
normally, and hydrates into a real mailto link. Without JavaScript it degrades
to readable text rather than vanishing — which matters, since the Impressum has
to state a working address.

**It defeats cheap harvesters, not a scraper driving a real browser**, which
sees the assembled address like any visitor. If the address starts attracting
spam, the answer is a contact form or a burnable alias, not more obfuscation.

## Cookie banner and tracking

`src/lib/consent.ts` holds the switch. It is **off**, because the site loads no
trackers — a banner announcing cookies that do not exist is its own kind of
wrong, and an accepted banner with nothing behind it teaches visitors the
choice is meaningless.

To add Meta Pixel, Google Ads or Analytics:

1. Set `trackingPlanned = true`
2. Load your tags **only** behind `hasConsent()` — never on page load. Under
   TTDSG §25 they may not run before the visitor agrees.
3. Uncomment the tracking section in the privacy policy (both languages) and
   name every service you actually run.

**Accept and Decline are deliberately the same size.** A single "OK" button is
lawful only while nothing non-essential is set; with trackers in place, GDPR and
TTDSG require refusing to be as easy as agreeing, and an accept-only bar is the
pattern German regulators fine. Shrinking Decline is not a safe optimisation.

The choice lives in `localStorage`, not a cookie — storing a cookie in order to
ask about cookies is a contradiction.

Visitors can request deletion of their data by email; that route is set out on
the privacy page in both languages.

## Welcome splash

`src/components/layout/WelcomeSplash.tsx` shows the logo large on blurred dark
glass for about a second on a visitor's first page of a session.
`WELCOME_MS` is the whole knob — set it to `0` to switch it off.

It is kept deliberately unobtrusive: once per session rather than per page, a
tap clears it immediately, it does not appear under `prefers-reduced-motion`,
and the page renders underneath it throughout, so nothing is withheld from
crawlers and no content is delayed.

The hold starts when the logo has actually **loaded**, not when the component
mounts. A `priority` image is often decoded before React attaches its handlers,
so `onLoad` alone never fires and the logo sits at opacity 0 — the splash then
shows as a blank dark pane, which reads as a broken page. The image ref checks
`complete` to cover that.

## The logo

`public/logo/` holds two variants of the mark and `src/lib/logo.ts` maps each to
the background it is legible on:

| File | Used on |
| --- | --- |
| `city-taxi-kl-on-light.png` | the header under a light colour scheme |
| `city-taxi-kl-on-dark.png` | the footer (always dark) and the header under a dark colour scheme |

The black-and-yellow mark loses its black "CITY" and "KAISERSLAUTERN" against a
dark background; the white-and-yellow one is the answer. Because the right
variant is used per background, the logo sits directly on the surface with no
plate behind it.

Set `logo` to null to fall back to the text wordmark. SVG is worth it if you
ever have one — sharp at any size and a fraction of the weight.

## Photos

`public/photos/` holds the imagery; `src/lib/photos.ts` is the registry that
carries dimensions, per-language alt text, and licence metadata.

The one photo shipped is a real picture of **Kaiserslautern Hauptbahnhof**
(Gerd Eichmann, CC BY 4.0) — a genuine local landmark and a place taxis actually
wait. It is deliberately *not* a stock photo of someone else's taxi, which would
misrepresent the fleet.

CC BY requires naming the photographer, so `PhotoCredits` renders the credits at
the end of the Impressum straight from the registry. **Replace this with photos
of your own cars and drivers** — a real vehicle outside a recognisable place
beats any stock image for trust, and needs no credit line. Drop the file in,
update the entry, and delete the `credit` block.

## English is American English

Most of the English-speaking audience here is the US community around Ramstein,
so `en` is en-US throughout, not just in spelling:

- `<html lang="en-US">`, while `hreflang` stays plain `en` so it still matches
  every English speaker
- the live clock reads `2:48:59 AM`, not `02:48:59`
- dates read `September 1, 2022`, not `1 September 2022`
- US spellings (kilometer, center, license, traveling) and idiom — a car's boot
  is a trunk

Those conventions come from the locale codes in `LiveStatus`, `TariffTable` and
`formatEuro`; changing the dialect means changing those, not just the copy.

## SEO

- Unique title and meta description per page, per language
- Canonical URL and `hreflang` alternates (`de`, `en`, `x-default`) on every page
- `sitemap.xml` (20 URLs with language alternates) and `robots.txt`
- `lastmod` driven by `business.contentUpdatedAt`, not the build clock — a build
  timestamp would tell crawlers every page changed on every deploy
- JSON-LD: `TaxiService` with address, phone, and geo coordinates on the home
  page; `BreadcrumbList` on sub-pages; `Service` and `FAQPage` on the landing
  and fares pages (FAQ blocks are eligible for rich results)
- Social card generated per language, `summary_large_image` on every page
- `robots` directives set `max-snippet:-1` and `max-image-preview:large`
- Localised URL slugs so each language ranks on its own terms — the booking
  slug, H1, title and nav label all use *bestellen*, which is what people
  actually search in German, rather than *buchen*
- `potentialAction: ReserveAction` on the business, declaring that a ride can
  be ordered on the site rather than only advertised there

**No `aggregateRating` on purpose.** Google does not allow a business to mark up
its own review score, and doing so can trigger a manual action. The 5.0 / 7
reviews line stays as visible text.

---

## Notes and gotchas

- **The booking widget's origin.** taxi.de's own snippet accepts a resize
  message from *any* origin. Ours validates it — but note the frame is served
  from `www.taxi.de` and posts its height from `oldiframe.taxi.de`, so the check
  covers subdomains, not one exact origin. If the widget stops resizing, look
  there first.
- **Do not embed the taxi.de app iframe.** taxi.de also supplies
  `iframeapp?i=1&pref=…` for the "order via the app" panel. It loads Google Tag
  Manager and Analytics and sets eight cookies (`_ga`, `_gid`, `_gat`, `_ga_*`,
  `cmplz_*`), which would contradict the privacy policy's statement that this
  site sets no analytics cookies, and needs consent under GDPR/TTDSG before it
  may run. Its own snippet also declares `height="500px"` for 1426px of content.
  That panel is reproduced natively on its own page instead (`AppPage` +
  `AppOrder`): same steps, same PIN, the two public store links, no third-party
  requests.
- **The booking widget's palette must stay light.** The colours in
  `widgetPalette` (`src/components/sections/BookingWidget.tsx`) are baked into
  the iframe URL. taxi.de **ignores `box`** and hardcodes the input fields to
  white, while **`txt1` colours both the labels and the text typed into those
  inputs**. A dark palette therefore renders customer input as white on white —
  and because placeholders use `txt2` and still look correct, it is invisible
  until someone tries to book. If you change these, verify by loading the iframe
  URL directly and reading `getComputedStyle` on a real `<input>`.
- **The proxy matcher must exclude generated metadata routes** (`icon`,
  `opengraph-image`, `robots.txt`, `sitemap.xml`) or the favicon gets redirected
  to `/de/icon` and never loads.
- **`dynamicParams = false`** on the slug route means unknown URLs never reach a
  locale segment, so the 404 cannot know which language was wanted. That is why
  `app/not-found.tsx` answers in both languages and needs no JavaScript.
- **Grid items need `min-w-0`** around the wide tables. Without it a grid item's
  default `min-width: auto` lets the table push the whole page sideways on a
  phone instead of scrolling inside its own box.
- **Light and dark** both supported via `prefers-color-scheme`. `--accent` is
  the taxi yellow for fills; `--accent-text` is the darker tone for
  accent-coloured *text*, which would otherwise fail contrast on light grounds.
- **`AGENTS.md` / `CLAUDE.md`** are generated by `next dev` and reappear if deleted.
