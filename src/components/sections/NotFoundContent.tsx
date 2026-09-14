import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { locales, navPages, pathFor } from "@/lib/i18n/routes";

/**
 * Bilingual 404.
 *
 * Unknown URLs never reach a locale segment, so this page cannot know which
 * language the visitor wanted. Rather than guessing German and being wrong for
 * half the audience, it answers in both — and works without JavaScript.
 */
export default function NotFoundContent() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-text">404</p>

      <div className="mt-6 grid gap-10 sm:grid-cols-2">
        {locales.map((locale) => {
          const t = getDictionary(locale);
          return (
            <section key={locale} lang={t.htmlLang}>
              <h2 className="text-2xl font-semibold tracking-tight text-balance">
                {t.notFound.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                {t.notFound.lead}
              </p>

              <Link
                href={pathFor(locale, "home")}
                className="mt-5 inline-flex rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-95"
              >
                {t.common.backHome}
              </Link>

              <p className="mt-6 text-xs text-muted">{t.notFound.linksIntro}</p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {navPages
                  .filter((page) => page !== "home")
                  .map((page) => (
                    <li key={page}>
                      <Link
                        href={pathFor(locale, page)}
                        className="text-sm underline underline-offset-2 hover:text-accent-text"
                      >
                        {t.nav[page]}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
