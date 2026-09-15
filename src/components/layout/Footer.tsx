import Link from "next/link";
import { business, mapsDirectionsUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import {
  footerLegalPages,
  navPages,
  pathFor,
  seoPages,
  type Locale,
} from "@/lib/i18n/routes";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import Wordmark from "./Wordmark";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <footer className="border-t border-night-border bg-night text-night-fg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark tone="night" size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-night-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">{t.footer.navTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-night-muted">
              {navPages.map((page) => (
                <li key={page}>
                  <Link href={pathFor(locale, page)} className="transition hover:text-accent">
                    {t.nav[page]}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-7 text-sm font-semibold">{t.footer.servicesTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-night-muted">
              {seoPages.map((page) => (
                <li key={page}>
                  <Link href={pathFor(locale, page)} className="transition hover:text-accent">
                    {t.nav[page]}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-7 text-sm font-semibold">{t.footer.legalTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-night-muted">
              {footerLegalPages.map((page) => (
                <li key={page}>
                  <Link href={pathFor(locale, page)} className="transition hover:text-accent">
                    {t.nav[page]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">{t.footer.contactTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={business.phoneHref} className="flex items-center gap-2.5 transition hover:text-accent">
                  <PhoneIcon className="size-4 shrink-0 text-accent" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 transition hover:text-accent">
                  <MailIcon className="size-4 shrink-0 text-accent" />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2.5 text-night-muted transition hover:text-accent"
                >
                  <PinIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    {business.street}
                    <br />
                    {business.postalCode} {business.city}
                  </span>
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-night-muted">{t.common.hours}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-night-border pt-6 text-xs text-night-muted">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
