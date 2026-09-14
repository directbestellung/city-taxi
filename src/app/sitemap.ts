import type { MetadataRoute } from "next";
import { business, siteUrl } from "@/lib/business";
import { locales, pageKeys, pathFor } from "@/lib/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((page) => ({
      url: `${siteUrl}${pathFor(locale, page)}`,
      // A build timestamp would tell crawlers every page changed on every
      // deploy; this only moves when the copy actually does.
      lastModified: new Date(business.contentUpdatedAt),
      changeFrequency: page === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "home" ? 1 : page === "booking" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [other, `${siteUrl}${pathFor(other, page)}`]),
        ),
      },
    })),
  );
}
