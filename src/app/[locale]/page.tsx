import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookingSection from "@/components/sections/BookingSection";
import ContactSection from "@/components/sections/ContactSection";
import CtaBand from "@/components/sections/CtaBand";
import Hero from "@/components/sections/Hero";
import PhotoBanner from "@/components/sections/PhotoBanner";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceCards from "@/components/sections/ServiceCards";
import TariffTable from "@/components/sections/TariffTable";
import { PinIcon } from "@/components/Icons";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales, pathFor } from "@/lib/i18n/routes";
import { photos } from "@/lib/photos";
import { buildMetadata, businessJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "home");
}

/**
 * The home page carries a section for every page in the main menu — services,
 * fares, contact and the booking widget — so a visitor who never navigates can
 * still see the price and book a car.
 */
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(locale)) }}
      />

      <Hero locale={locale} />

      {/* 1 — Services */}
      <section id="leistungen" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.home.servicesTitle}
          lead={t.home.servicesLead}
        />
        <div className="mt-12">
          <ServiceCards items={t.services.items} locale={locale} moreLabel={t.common.readMore} />
        </div>
        <Link
          href={pathFor(locale, "services")}
          className="mt-8 inline-flex rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-surface"
        >
          {t.home.servicesCta}
        </Link>
      </section>

      {/* 2 — Fares: the full official tariff, not a teaser */}
      <div id="preise">
        <TariffTable locale={locale} copy={t.tariff} />
        <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">
          <Link
            href={pathFor(locale, "tariff")}
            className="inline-flex rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-surface"
          >
            {t.home.faresCta}
          </Link>
        </div>
      </div>

      {/* 3 — How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={t.home.stepsEyebrow}
          title={t.home.stepsTitle}
          align="center"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {t.home.steps.map((step, index) => (
            <li key={step.title}>
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <PhotoBanner
        photo={photos.hauptbahnhof}
        locale={locale}
        caption={t.home.photoCaption}
      />

      {/* 4 — Where we drive */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={t.home.areaEyebrow}
          title={t.home.areaTitle}
          lead={t.home.areaLead}
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {t.home.areas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-alt px-3.5 py-2 text-sm text-muted"
            >
              <PinIcon className="size-3.5 text-accent-text" />
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">{t.home.areaNote}</p>
      </section>

      {/* 5 — Contact */}
      <ContactSection locale={locale} />

      {/* 6 — Booking, last so everything above has made the case */}
      <BookingSection locale={locale} />

      <CtaBand locale={locale} />
    </>
  );
}
