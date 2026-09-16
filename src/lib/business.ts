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
  /** Named in the Impressum (§ 5 DDG) and as controller in the privacy policy. */
  owner: "Toheed Babar",

  street: "Pariser Str. 51",
  postalCode: "67655",
  city: "Kaiserslautern",
  region: "Rheinland-Pfalz",
  countryCode: "DE",

  phoneDisplay: "0155 6555 4111",
  phoneIntl: "+49 155 6555 4111",
  /** tel: href — digits only, no spaces. */
  phoneHref: "tel:+4915565554111",
  /** wa.me expects the international number without + or spaces. */
  whatsappNumber: "4915565554111",

  /**
   * Split on purpose. The address is assembled at runtime and rendered in
   * pieces, so the complete string never appears in the served HTML for a
   * regex-over-the-page harvester to find. See ObfuscatedEmail.
   */
  /**
   * VAT identification number, shown in the Impressum under § 27a UStG.
   *
   * Leave null until it is known: both language versions then render a visible
   * placeholder, so an incomplete Impressum cannot ship unnoticed. Set it here
   * and both are correct — no need to edit the dictionaries.
   *
   * If the business is a Kleinunternehmer with no VAT ID, put the § 19 UStG
   * note here instead of a number.
   */
  vatId: null as string | null,

  emailUser: "info",
  emailDomain: "citytaxi-kl.de",

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

/**
 * The address, joined at runtime. `.join()` rather than a template literal so a
 * minifier does not fold it back into one literal in the bundle.
 */
export function emailAddress(): string {
  return [business.emailUser, business.emailDomain].join("@");
}

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
