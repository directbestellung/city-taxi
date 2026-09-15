import AppOrder from "@/components/sections/AppOrder";
import CtaBand from "@/components/sections/CtaBand";
import PageHeader from "@/components/sections/PageHeader";
import { ChevronIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";
import { faqJsonLd } from "@/lib/seo";

export default function AppPage({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(t.app.faq)) }}
      />

      <PageHeader eyebrow={t.app.eyebrow} title={t.app.title} lead={t.app.lead} />
      <AppOrder locale={locale} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-balance">
          {t.app.faqHeading}
        </h2>
        <div className="mt-5 divide-y divide-border border-y border-border">
          {t.app.faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden">
                {item.q}
                <ChevronIcon className="size-4 shrink-0 text-muted transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
