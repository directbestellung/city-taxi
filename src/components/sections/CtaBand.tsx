import Link from "next/link";
import { business, whatsappUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

/** Same priority as the hero: book online, then WhatsApp, then the phone. */
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

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={pathFor(locale, "booking")}
            className="inline-flex items-center justify-center rounded-lg bg-accent-fg px-5 py-3 text-sm font-semibold text-accent transition hover:opacity-90"
          >
            {t.common.bookOnline}
          </Link>
          <a
            href={whatsappUrl(t.common.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent-fg/30 px-5 py-3 text-sm font-semibold transition hover:bg-accent-fg/10"
          >
            <WhatsAppIcon className="size-4" />
            {t.common.whatsapp}
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium underline underline-offset-4 opacity-80 transition hover:opacity-100"
          >
            <PhoneIcon className="size-4" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
