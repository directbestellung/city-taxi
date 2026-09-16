import type { Metadata } from "next";
import { business, mapsDirectionsUrl, siteUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { locales, pathFor, type Locale, type PageKey } from "@/lib/i18n/routes";

/**
 * Per-page metadata including canonical URL and hreflang alternates, so each
 * language version is indexed separately and points at its counterpart.
 */
export function buildMetadata(locale: Locale, page: PageKey): Metadata {
  const t = getDictionary(locale);
  const seo = t.seo[page];
  const path = pathFor(locale, page);

  const languages = Object.fromEntries(
    locales.map((other) => [other, pathFor(other, page)]),
  );

  // The file-based opengraph-image only covers its own segment, so point every
  // page at it explicitly; otherwise sub-pages share with no image at all.
  const image = {
    url: `/${locale}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: business.name,
  };

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
      languages: { ...languages, "x-default": pathFor("de", page) },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: business.name,
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      title: seo.title,
      description: seo.description,
      url: `${siteUrl}${path}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}

/** Structured data for the business itself, emitted once on the home page. */
export function businessJsonLd(locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    description: t.seo.home.description,
    url: `${siteUrl}${pathFor(locale, "home")}`,
    telephone: business.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      postalCode: business.postalCode,
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: mapsDirectionsUrl,
    sameAs: [business.googleProfileUrl],
    areaServed: { "@type": "City", name: business.city },
    /**
     * Declares that a ride can actually be ordered on the site, rather than
     * only advertised there — the schema.org way to say "online booking".
     */
    potentialAction: {
      "@type": "ReserveAction",
      name: t.nav.booking,
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}${pathFor(locale, "booking")}`,
        inLanguage: locale === "de" ? "de-DE" : "en-US",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: t.seo.booking.title },
    },
    ...(business.availability24h
      ? {
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }
      : {}),
  };
}

/** Breadcrumbs for sub-pages. */
export function breadcrumbJsonLd(locale: Locale, page: PageKey, label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: business.name,
        item: `${siteUrl}${pathFor(locale, "home")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${siteUrl}${pathFor(locale, page)}`,
      },
    ],
  };
}

/** FAQ rich result for the landing pages. */
export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Ties a landing page to the business as a named service offering. */
export function serviceJsonLd(
  locale: Locale,
  page: PageKey,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${siteUrl}${pathFor(locale, page)}`,
    areaServed: { "@type": "City", name: business.city },
    provider: {
      "@type": "TaxiService",
      "@id": `${siteUrl}/#business`,
      name: business.name,
      telephone: business.phoneIntl,
    },
  };
}
