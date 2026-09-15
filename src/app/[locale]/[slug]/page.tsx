import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingPage from "@/components/pages/BookingPage";
import ContactPage from "@/components/pages/ContactPage";
import LandingPage from "@/components/pages/LandingPage";
import LegalSections from "@/components/sections/LegalSections";
import PageHeader from "@/components/sections/PageHeader";
import PhotoCredits from "@/components/sections/PhotoCredits";
import ServicesPage from "@/components/pages/ServicesPage";
import TariffPage from "@/components/pages/TariffPage";
import { getDictionary, type Dictionary } from "@/lib/i18n";
import {
  isLocale,
  locales,
  pageForSlug,
  pageKeys,
  slugs,
  type Locale,
  type PageKey,
} from "@/lib/i18n/routes";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

/**
 * Only the slugs below exist; anything else is a hard 404 rather than a soft
 * page. Note this means unknown URLs never enter this segment, so the 404 is
 * served by the global app/not-found.tsx — which is why that page is bilingual.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageKeys
      .filter((page) => page !== "home")
      .map((page) => ({ locale, slug: slugs[locale][page] })),
  );
}

function resolve(locale: string, slug: string) {
  if (!isLocale(locale)) return null;
  const page = pageForSlug(locale, slug);
  if (!page || page === "home") return null;
  return { locale, page };
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) return {};
  return buildMetadata(resolved.locale, resolved.page);
}

export default async function SlugPage({ params }: PageProps<"/[locale]/[slug]">) {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) notFound();

  const { page } = resolved;
  const t = getDictionary(resolved.locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(resolved.locale, page, t.nav[page])),
        }}
      />
      {renderPage(resolved.locale, page, t)}
    </>
  );
}

function renderPage(locale: Locale, page: PageKey, t: Dictionary) {
  switch (page) {
    case "services":
      return <ServicesPage locale={locale} t={t} />;
    case "tariff":
      return <TariffPage locale={locale} t={t} />;
    case "booking":
      return <BookingPage locale={locale} t={t} />;
    case "contact":
      return <ContactPage locale={locale} t={t} />;
    case "medical":
    case "airport":
    case "airbase":
    case "cityrides":
    case "largetaxi":
    case "courier":
    case "business":
      return <LandingPage locale={locale} page={page} t={t} />;
    case "imprint":
      return (
        <>
          <PageHeader eyebrow={t.imprint.eyebrow} title={t.imprint.title} />
          <LegalSections sections={t.imprint.sections} />
          <PhotoCredits
            heading={t.imprint.creditsHeading}
            intro={t.imprint.creditsIntro}
          />
        </>
      );
    case "privacy":
      return (
        <>
          <PageHeader eyebrow={t.privacy.eyebrow} title={t.privacy.title} />
          <LegalSections sections={t.privacy.sections} />
        </>
      );
    default:
      notFound();
  }
}
