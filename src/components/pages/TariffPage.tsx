import CtaBand from "@/components/sections/CtaBand";
import LandingSections from "@/components/sections/LandingSections";
import PageHeader from "@/components/sections/PageHeader";
import TariffTable from "@/components/sections/TariffTable";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";
import { faqJsonLd } from "@/lib/seo";

export default function TariffPage({ locale, t }: { locale: Locale; t: Dictionary }) {
  const faq = t.tariff.blocks.find((block) => block.type === "faq");

  return (
    <>
      {faq && faq.type === "faq" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq.items)) }}
        />
      ) : null}

      <PageHeader eyebrow={t.tariff.eyebrow} title={t.tariff.title} lead={t.tariff.lead} />
      <TariffTable locale={locale} copy={t.tariff} />
      <LandingSections blocks={t.tariff.blocks} />
      <CtaBand locale={locale} />
    </>
  );
}
