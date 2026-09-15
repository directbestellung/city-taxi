import CtaBand from "@/components/sections/CtaBand";
import LandingSections from "@/components/sections/LandingSections";
import PageHeader from "@/components/sections/PageHeader";
import type { Dictionary } from "@/lib/i18n";
import Link from "next/link";
import {
  landingPages,
  pathFor,
  type Locale,
  type LandingPageKey,
  type PageKey,
} from "@/lib/i18n/routes";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";

export default function LandingPage({
  locale,
  page,
  t,
}: {
  locale: Locale;
  page: LandingPageKey;
  t: Dictionary;
}) {
  const copy = t.landing[page];
  const faq = copy.blocks.find((block) => block.type === "faq");
  const related: PageKey[] = [
    ...landingPages.filter((other) => other !== page),
    "app",
    "tariff",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(locale, page, copy.title, t.seo[page].description),
          ),
        }}
      />
      {faq && faq.type === "faq" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq.items)) }}
        />
      ) : null}

      <PageHeader eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />
      <LandingSections blocks={copy.blocks} />

      {/* Cross-links so these pages are not each other's dead ends. */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          {t.common.relatedTitle}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {related.map((other) => (
            <li key={other}>
              <Link
                href={pathFor(locale, other)}
                className="inline-flex rounded-full border border-border bg-surface-alt px-4 py-2 text-sm transition hover:border-accent/50 hover:text-accent-text"
              >
                {t.nav[other]}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
