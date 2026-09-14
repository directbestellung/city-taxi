import CtaBand from "@/components/sections/CtaBand";
import PageHeader from "@/components/sections/PageHeader";
import ServiceCards from "@/components/sections/ServiceCards";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";

export default function ServicesPage({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <>
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ServiceCards items={t.services.items} locale={locale} moreLabel={t.common.readMore} />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-balance">
            {t.services.tariffTitle}
          </h2>
          <div className="mt-4 space-y-4">
            {t.services.tariffBody.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
