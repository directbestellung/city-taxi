import { business, whatsappUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";
import BookingWidget from "./BookingWidget";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

/**
 * Ordering online is the primary action, so the booking form takes the hero.
 * WhatsApp is second and the phone number third, and they are styled in that
 * order of prominence.
 *
 * The three blocks stack headline -> form -> trust on a phone, so the form is
 * reachable without scrolling past the sales copy. From lg, explicit grid
 * placement rebuilds the usual two-column hero.
 */
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

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_minmax(0,27rem)] lg:gap-x-14 lg:py-20">
        {/* Headline */}
        <div className="flex min-w-0 flex-col justify-end lg:col-start-1 lg:row-start-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-night-border bg-white/5 px-3 py-1 text-xs font-medium text-night-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {t.home.badge}
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.home.title} <span className="text-accent">{t.home.titleHighlight}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-night-muted text-pretty">
            {t.home.lead}
          </p>
        </div>

        {/* 1 — order online */}
        <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {/* taxi.de styles the widget light, so it always sits on white. */}
          <div className="overflow-hidden rounded-2xl border border-night-border bg-white p-2 shadow-2xl shadow-black/30 sm:p-3">
            <BookingWidget title={t.booking.title} />
          </div>

          {/* 2 — WhatsApp, then 3 — phone, deliberately quieter. */}
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-night-muted">
            {t.home.heroOr}
          </p>

          <a
            href={whatsappUrl(t.common.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#06281a] transition hover:brightness-95"
          >
            <WhatsAppIcon className="size-4" />
            {t.common.whatsapp}
          </a>

          <a
            href={business.phoneHref}
            className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg border border-night-border px-4 py-2.5 text-sm text-night-muted transition hover:bg-white/5 hover:text-night-fg"
          >
            <PhoneIcon className="size-4" />
            {business.phoneDisplay}
          </a>

          <p className="mt-3 text-center text-xs text-night-muted">{t.common.hours}</p>
        </div>

        {/* Supporting proof, below the form on a phone */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <ul className="space-y-3">
            {t.home.trust.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-night-muted">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-night-muted">
            <span aria-hidden="true" className="text-accent">
              {"★★★★★"}
            </span>{" "}
            {t.common.ratingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
