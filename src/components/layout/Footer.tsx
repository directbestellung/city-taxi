import Link from "next/link";
import { business, mapsDirectionsUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import {
  footerLegalPages,
  navPages,
  pathFor,
  seoPages,
  type Locale,
  type PageKey,
} from "@/lib/i18n/routes";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import ObfuscatedEmail from "@/components/layout/ObfuscatedEmail";
import Wordmark from "./Wordmark";

/**
 * Compact footer.
 *
 * Links run inline rather than in stacked columns — the same crawlable anchors
 * in roughly a third of the height.
 *
 * The service-area line is real content, not a keyword list: an unlinked block
 * of search terms in a footer is the pattern search engines treat as stuffing.
 * The SEO value here is in the descriptive anchor text of the offer links and
 * in the districts actually being places we drive to.
 */
export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const row = (label: string, pages: PageKey[]) => (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className="shrink-0 text-xs font-semibold text-night-fg">{label}</span>
      <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        {pages.map((page, index) => (
          <li key={page} className="flex items-baseline gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-night-border">
                &middot;
              </span>
            ) : null}
            <Link
              href={pathFor(locale, page)}
              className="text-xs text-night-muted transition hover:text-accent"
            >
              {t.nav[page]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="border-t border-night-border bg-night text-night-fg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <Wordmark tone="night" size="footer" />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-night-muted">
              {t.footer.tagline}
            </p>
          </div>

          <ul className="shrink-0 space-y-1.5 text-sm sm:text-right">
            <li>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 font-semibold transition hover:text-accent sm:flex-row-reverse"
              >
                <PhoneIcon className="size-4 text-accent" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 text-xs text-night-muted transition hover:text-accent sm:flex-row-reverse">
                <MailIcon className="size-4 text-accent" />
                <ObfuscatedEmail />
              </span>
            </li>
            <li>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-night-muted transition hover:text-accent sm:flex-row-reverse"
              >
                <PinIcon className="size-4 shrink-0 text-accent" />
                {business.street}, {business.postalCode} {business.city}
              </a>
            </li>
            <li className="text-xs text-night-muted">{t.common.hours}</li>
          </ul>
        </div>

        <nav
          aria-label={t.footer.navTitle}
          className="mt-8 space-y-2 border-t border-night-border pt-6"
        >
          {row(t.footer.navTitle, navPages)}
          {row(t.footer.servicesTitle, seoPages)}
          {row(t.footer.legalTitle, footerLegalPages)}
        </nav>

        <div className="mt-6 space-y-2 border-t border-night-border pt-5 text-xs text-night-muted">
          <p>
            <span className="font-medium text-night-fg">{t.footer.areaLabel}:</span>{" "}
            {t.home.areas.join(" · ")}
          </p>
          <p>
            &copy; {new Date().getFullYear()} {business.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
