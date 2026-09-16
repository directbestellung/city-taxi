import Link from "next/link";
import { business, mapsDirectionsUrl, whatsappUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";
import SectionHeading from "./SectionHeading";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import ObfuscatedEmail from "@/components/layout/ObfuscatedEmail";

/** Compact contact block so the home page answers "how do I reach them?" too. */
export default function ContactSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.home.contactTitle}
        lead={t.home.contactLead}
      />

      <div className="mt-10 grid gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-2 lg:p-8">
        <div className="space-y-4">
          <a
            href={whatsappUrl(t.common.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#06281a] transition hover:brightness-95"
          >
            <WhatsAppIcon className="size-4" />
            {t.common.whatsapp}
          </a>
          <a
            href={business.phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition hover:bg-surface-alt"
          >
            <PhoneIcon className="size-4" />
            {business.phoneDisplay}
          </a>
          <p className="text-xs text-muted">{t.common.hours}</p>
        </div>

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-medium text-muted">{t.common.addressLabel}</dt>
            <dd className="mt-1">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex gap-2 not-italic hover:text-accent-text"
              >
                <PinIcon className="mt-0.5 size-4 shrink-0 text-accent-text" />
                <span>
                  {business.street}
                  <br />
                  {business.postalCode} {business.city}
                </span>
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-muted">{t.common.emailLabel}</dt>
            <dd className="mt-1">
              <span className="inline-flex items-center gap-2 hover:text-accent-text">
                <MailIcon className="size-4" />
                <ObfuscatedEmail />
              </span>
            </dd>
          </div>
        </dl>
      </div>

      <Link
        href={pathFor(locale, "contact")}
        className="mt-6 inline-flex rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-surface"
      >
        {t.home.contactCta}
      </Link>
    </section>
  );
}
