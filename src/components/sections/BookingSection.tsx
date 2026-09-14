import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";
import BookingWidget from "./BookingWidget";
import SectionHeading from "./SectionHeading";

/** The booking widget on the home page, so a visitor never has to navigate. */
export default function BookingSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="buchen" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={t.booking.eyebrow}
          title={t.home.bookingTitle}
          lead={t.home.bookingLead}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
          <div className="min-w-0">
            {/* taxi.de styles the widget light, so it always sits on white. */}
            <div className="overflow-hidden rounded-xl border border-border bg-white p-2 sm:p-3">
              <BookingWidget title={t.booking.title} />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">
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

          <aside className="min-w-0 self-start">
            <h3 className="text-base font-semibold tracking-tight">
              {t.booking.fallbackTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t.booking.fallbackBody}
            </p>
            <Link
              href={pathFor(locale, "booking")}
              className="mt-4 inline-flex rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm font-medium transition hover:bg-surface"
            >
              {t.home.bookingCta}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
