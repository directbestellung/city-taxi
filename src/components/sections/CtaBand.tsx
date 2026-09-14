import Link from "next/link";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";
import { PhoneIcon } from "@/components/Icons";

export default function CtaBand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="bg-accent text-accent-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed opacity-80">{t.home.ctaLead}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-fg px-5 py-3 text-sm font-semibold text-accent transition hover:opacity-90"
          >
            <PhoneIcon className="size-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href={pathFor(locale, "booking")}
            className="inline-flex items-center justify-center rounded-lg border border-accent-fg/25 px-5 py-3 text-sm font-semibold transition hover:bg-accent-fg/10"
          >
            {t.common.bookOnline}
          </Link>
        </div>
      </div>
    </section>
  );
}
