/**
 * Verified business data for City Taxi Kaiserslautern.
 *
 * Everything here is language-independent (name, address, phone). Translated
 * copy lives in src/lib/i18n/.
 *
 * CHECK BEFORE LAUNCH:
 *   - `availability`: set to 24/7, which is typical for a taxi firm. Correct it
 *     if your dispatch hours differ.
 */
export const business = {
  name: "City Taxi Kaiserslautern",
  legalName: "City Taxi Kaiserslautern",

  street: "Pariser Str. 51",
  postalCode: "67655",
  city: "Kaiserslautern",
  region: "Rheinland-Pfalz",
  countryCode: "DE",

  phoneDisplay: "0171 3553030",
  phoneIntl: "+49 171 3553030",
  /** tel: href — digits only, no spaces. */
  phoneHref: "tel:+491713553030",
  /** wa.me expects the international number without + or spaces. */
  whatsappNumber: "491713553030",

  email: "toptaxikl@gmail.com",

  /** Verified against OpenStreetMap for Pariser Str. 51. Used for local SEO. */
  geo: { latitude: 49.4435759, longitude: 7.7595036 },

  /** Shown on the Google Business Profile at the time of writing. */
  rating: { value: "5,0", valueEn: "5.0", count: 7 },
  googleProfileUrl: "https://share.google/36BqKCrpDoMk3ehDW",

  /**
   * Partner id at taxi.de. Used both by the booking widget and as the PIN
   * customers enter in the taxi.de app to set us as their preferred firm.
   */
  taxiDePin: "24075",

  /** Links to the taxi.de app, which customers order through with that PIN. */
  appStoreUrl: "https://apps.apple.com/de/app/taxi-de/id481007071",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.sic.taxibutton",

  /** Set false if you are not a 24/7 operation. */
  availability24h: true,

  /**
   * Bump when you change page copy. Feeds sitemap <lastmod>; a build timestamp
   * would tell crawlers every page changed on every deploy, which is noise.
   */
  contentUpdatedAt: "2026-09-14",
} as const;

export const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(
    `${business.name}, ${business.street}, ${business.postalCode} ${business.city}`,
  );

export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Canonical origin, used for sitemap, canonical tags and hreflang. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://citytaxi-kl.de"
).replace(/\/$/, "");
