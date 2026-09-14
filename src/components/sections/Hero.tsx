import Link from "next/link";
import { business, mapsDirectionsUrl, whatsappUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";
import {
  CheckIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="relative overflow-clip bg-night text-night-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 size-[34rem] rounded-full bg-accent/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 size-[30rem] rounded-full bg-accent/8 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_minmax(0,23rem)] lg:gap-16 lg:py-24">
        <div className="flex min-w-0 flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-night-border bg-white/5 px-3 py-1 text-xs font-medium text-night-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {t.home.badge}
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.home.title}{" "}
            <span className="text-accent">{t.home.titleHighlight}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-night-muted text-pretty">
            {t.home.lead}
          </p>

          <ul className="mt-8 space-y-3">
            {t.home.trust.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-night-muted">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-night-muted">
            <span aria-hidden="true" className="text-accent">
              {"★★★★★"}
            </span>{" "}
            {t.common.ratingLine}
          </p>
        </div>

        {/* Quick-contact card: the three ways to get a car, in order of speed. */}
        <div className="min-w-0 rounded-2xl border border-night-border bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-night-muted">
            {t.common.phoneLabel}
          </p>
          <a
            href={business.phoneHref}
            className="mt-2 flex items-baseline gap-2 text-2xl font-semibold tracking-tight transition hover:text-accent sm:text-3xl"
          >
            {business.phoneDisplay}
          </a>
          <p className="mt-2 text-xs text-night-muted">{t.common.hours}</p>

          <div className="mt-6 space-y-2.5">
            <a
              href={business.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-95"
            >
              <PhoneIcon className="size-4" />
              {t.common.callNow}
            </a>
            <a
              href={whatsappUrl(t.common.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#06281a] transition hover:brightness-95"
            >
              <WhatsAppIcon className="size-4" />
              {t.common.whatsapp}
            </a>
            <Link
              href={pathFor(locale, "booking")}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-night-border px-4 py-3 text-sm font-semibold transition hover:bg-white/5"
            >
              {t.common.bookOnline}
            </Link>
          </div>

          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex gap-2.5 border-t border-night-border pt-5 text-xs leading-relaxed text-night-muted transition hover:text-accent"
          >
            <PinIcon className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>
              {business.street}
              <br />
              {business.postalCode} {business.city}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
