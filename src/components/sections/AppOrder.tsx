import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";
import { CheckIcon } from "@/components/Icons";

/**
 * Ordering through the taxi.de app.
 *
 * Built natively rather than with the iframe taxi.de supplies for this. That
 * embed pulls in Google Tag Manager and Analytics and sets eight cookies
 * (_ga, _gid, _gat, _ga_*, cmplz_*), which would contradict our own privacy
 * policy — it states this site sets no analytics cookies — and needs consent
 * under GDPR/TTDSG before it may run at all. Its own snippet also declares
 * height="500px" for 1426px of content, hiding two thirds of it including the
 * store links.
 *
 * The content is a list of steps and two public store URLs, so reproducing it
 * costs nothing and keeps the page free of third-party tracking.
 */
export default function AppOrder({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-14">
          <div className="min-w-0">
            {/* The page header already carries the eyebrow, title and lead. */}
            <ol className="space-y-3">
              {t.app.steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-text">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted">{t.app.note}</p>
          </div>

          <aside className="min-w-0 self-start rounded-xl border border-border bg-surface-alt p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {t.app.pinLabel}
            </p>
            <p className="mt-2 font-mono text-3xl font-bold tracking-[0.12em] text-fg">
              {business.taxiDePin}
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={business.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-lg bg-fg px-4 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                {t.app.appStore}
              </a>
              <a
                href={business.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-semibold transition hover:bg-surface"
              >
                {t.app.playStore}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
