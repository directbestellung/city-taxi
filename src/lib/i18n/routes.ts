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
  "app",
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
    booking: "taxi-online-bestellen",
    contact: "kontakt",
    medical: "krankenfahrten-kaiserslautern",
    airport: "flughafentransfer-kaiserslautern",
    airbase: "taxi-ramstein-air-base",
    cityrides: "taxi-kaiserslautern-stadtfahrten",
    app: "taxi-app-kaiserslautern",
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
    booking: "order-a-taxi-online",
    contact: "contact",
    medical: "medical-transport-kaiserslautern",
    airport: "airport-transfer-kaiserslautern",
    airbase: "taxi-ramstein-air-base",
    cityrides: "city-taxi-rides-kaiserslautern",
    app: "taxi-app-kaiserslautern",
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

/**
 * Detail pages rendered by the shared landing template, which reads its content
 * from `landing` in the dictionaries. The app page has its own layout, so it is
 * deliberately not one of these.
 */
export const landingPages = [
  "cityrides",
  "airport",
  "airbase",
  "medical",
  "largetaxi",
  "courier",
  "business",
] as const satisfies readonly PageKey[];

export type LandingPageKey = (typeof landingPages)[number];

/** Everything listed under "offers" in the footer. Kept out of the main menu. */
export const seoPages: PageKey[] = [
  "cityrides",
  "app",
  "airport",
  "airbase",
  "medical",
  "largetaxi",
  "courier",
  "business",
];

export const footerLegalPages: PageKey[] = ["imprint", "privacy"];
