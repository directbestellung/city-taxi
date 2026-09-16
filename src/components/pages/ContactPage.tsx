import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import { MailIcon, PhoneIcon, PinIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import ObfuscatedEmail from "@/components/layout/ObfuscatedEmail";
import { business, mapsDirectionsUrl, whatsappUrl } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";

export default function ContactPage({ locale, t }: { locale: Locale; t: Dictionary }) {
  const cards = [
    {
      key: "call",
      title: t.contact.callTitle,
      body: t.contact.callBody,
      action: business.phoneDisplay,
      href: business.phoneHref,
      icon: PhoneIcon,
      external: false,
    },
    {
      key: "whatsapp",
      title: t.contact.whatsappTitle,
      body: t.contact.whatsappBody,
      action: t.common.whatsapp,
      href: whatsappUrl(t.common.whatsappMessage),
      icon: WhatsAppIcon,
      external: true,
    },
  ];

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.key} className="flex flex-col rounded-xl border border-border bg-surface-alt p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent/12 text-accent-text">
                <card.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold tracking-tight">{card.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.body}</p>
              <a
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-fg px-4 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                {card.action}
              </a>
            </article>
          ))}

          <article className="flex flex-col rounded-xl border border-border bg-surface-alt p-6">
            <span className="flex size-11 items-center justify-center rounded-lg bg-accent/12 text-accent-text">
              <PinIcon className="size-5" />
            </span>
            <h2 className="mt-4 text-base font-semibold tracking-tight">{t.contact.onlineTitle}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.contact.onlineBody}</p>
            <Link
              href={pathFor(locale, "booking")}
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-fg px-4 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              {t.common.bookOnline}
            </Link>
          </article>
        </div>

        <div className="mt-10 grid gap-6 rounded-xl border border-border bg-surface p-6 sm:grid-cols-2 lg:p-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {t.contact.addressTitle}
            </h2>
            <address className="mt-3 text-base not-italic leading-relaxed">
              {business.name}
              <br />
              {business.street}
              <br />
              {business.postalCode} {business.city}
            </address>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-2 hover:text-accent-text"
            >
              <PinIcon className="size-4" />
              {t.common.directions}
            </a>
          </div>

          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-muted">{t.common.hoursLabel}</dt>
              <dd className="mt-1">{t.common.hours}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">{t.common.emailLabel}</dt>
              <dd className="mt-1">
                <span className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-accent-text">
                  <MailIcon className="size-4" />
                  <ObfuscatedEmail />
                </span>
              </dd>
            </div>
          </dl>
        </div>

        {/*
          Review ask. Deliberately a plain, unconditional link: Google forbids
          steering — you may not screen for a happy answer first and send only
          those people on. Everyone who gets here sees the same button.
        */}
        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-border bg-surface-alt p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div className="max-w-xl">
            <h2 className="flex items-center gap-2 text-base font-semibold tracking-tight">
              <span aria-hidden="true" className="flex gap-0.5 text-accent-text">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </span>
              {t.contact.reviewTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.contact.reviewBody}</p>
          </div>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-95"
          >
            <StarIcon className="size-4" />
            {t.contact.reviewCta}
          </a>
        </div>
      </section>
    </>
  );
}
