export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

/** German is the default: the business is in Kaiserslautern. */
export const defaultLocale: Locale = "de";

export const pageKeys = [
  "home",
  "services",
  "tariff",
  "booking",
  "contact",
  "medical",
  "airport",
  "airbase",
  "cityrides",
  "largetaxi",
  "courier",
  "business",
  "imprint",
  "privacy",
] as const;
export type PageKey = (typeof pageKeys)[number];

/** Localised URL slugs, so each language gets its own indexable paths. */
export const slugs: Record<Locale, Record<PageKey, string>> = {
  de: {
    home: "",
    services: "leistungen",
    tariff: "taxipreise-kaiserslautern",
    booking: "taxi-buchen",
    contact: "kontakt",
    medical: "krankenfahrten-kaiserslautern",
    airport: "flughafentransfer-kaiserslautern",
    airbase: "taxi-ramstein-air-base",
    cityrides: "taxi-kaiserslautern-stadtfahrten",
    largetaxi: "grossraumtaxi-kaiserslautern",
    courier: "kurierfahrten-kaiserslautern",
    business: "geschaeftskunden-taxi-kaiserslautern",
    imprint: "impressum",
    privacy: "datenschutz",
  },
  en: {
    home: "",
    services: "services",
    tariff: "taxi-fares-kaiserslautern",
    booking: "book-a-taxi",
    contact: "contact",
    medical: "medical-transport-kaiserslautern",
    airport: "airport-transfer-kaiserslautern",
    airbase: "taxi-ramstein-air-base",
    cityrides: "city-taxi-rides-kaiserslautern",
    largetaxi: "large-taxi-kaiserslautern",
    courier: "courier-service-kaiserslautern",
    business: "business-taxi-accounts-kaiserslautern",
    imprint: "imprint",
    privacy: "privacy",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Path for a page in a given language, e.g. ("en", "booking") -> /en/book-a-taxi */
export function pathFor(locale: Locale, page: PageKey): string {
  const slug = slugs[locale][page];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function pageForSlug(locale: Locale, slug: string): PageKey | null {
  const entries = Object.entries(slugs[locale]) as [PageKey, string][];
  const match = entries.find(([, value]) => value === slug);
  return match ? match[0] : null;
}

/** Main menu. Everything else is reachable from the footer. */
export const navPages: PageKey[] = [
  "home",
  "services",
  "tariff",
  "booking",
  "contact",
];

/** Detail landing pages: footer only, deliberately kept out of the menu. */
export const seoPages = [
  "cityrides",
  "airport",
  "airbase",
  "medical",
  "largetaxi",
  "courier",
  "business",
] as const satisfies readonly PageKey[];

/** The subset of pages rendered by the shared landing-page template. */
export type SeoPageKey = (typeof seoPages)[number];

export const footerLegalPages: PageKey[] = ["imprint", "privacy"];
