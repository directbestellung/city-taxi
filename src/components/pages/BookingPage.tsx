import BookingWidget, { widgetSurface } from "@/components/sections/BookingWidget";
import LiveStatus from "@/components/sections/LiveStatus";
import PageHeader from "@/components/sections/PageHeader";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { business, whatsappUrl } from "@/lib/business";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";

export default function BookingPage({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <>
      <PageHeader eyebrow={t.booking.eyebrow} title={t.booking.title} lead={t.booking.lead} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
          <div className="min-w-0">
            <LiveStatus
              locale={locale}
              label={t.home.liveLabel}
              headline={t.home.liveHeadline}
            />

            {/* Panel colour comes from the widget palette, so the frame edge is invisible. */}
            <div
              style={{ background: widgetSurface }}
              className="overflow-hidden rounded-xl border border-night-border p-2 sm:p-3"
            >
              <BookingWidget title={t.booking.title} />
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted">{t.home.liveNote}</p>

            <p className="mt-3 text-xs leading-relaxed text-muted">
              {t.booking.widgetNote}{" "}
              <a
                href="https://www.taxi.de/agb"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-fg"
              >
                {t.booking.disclaimer}
              </a>
            </p>
          </div>

          <aside className="min-w-0 self-start rounded-xl border border-border bg-surface-alt p-6">
            <h2 className="text-base font-semibold tracking-tight">{t.booking.fallbackTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.booking.fallbackBody}</p>
            <a
              href={business.phoneHref}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-95"
            >
              <PhoneIcon className="size-4" />
              {business.phoneDisplay}
            </a>
            <a
              href={whatsappUrl(t.common.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#06281a] transition hover:brightness-95"
            >
              <WhatsAppIcon className="size-4" />
              {t.common.whatsapp}
            </a>
            <p className="mt-4 text-xs text-muted">{t.common.hours}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
