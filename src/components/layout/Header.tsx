import Link from "next/link";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { navPages, pathFor, type Locale } from "@/lib/i18n/routes";
import HeaderNav from "./HeaderNav";
import Wordmark from "./Wordmark";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const items = navPages.map((page) => ({
    page,
    label: t.nav[page],
    href: pathFor(locale, page),
  }));

  return (
    // Glass: heavy blur plus a little saturation so colour shows through the
    // panel. The plain bg-bg/90 is the fallback for browsers without
    // backdrop-filter, where a translucent bar would just be unreadable.
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-bg/55">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link
          href={pathFor(locale, "home")}
          aria-label={business.name}
          className="shrink-0 transition hover:opacity-80"
        >
          <Wordmark />
        </Link>

        <HeaderNav
          locale={locale}
          items={items}
          bookHref={pathFor(locale, "booking")}
          bookLabel={t.common.bookOnline}
          phoneDisplay={business.phoneDisplay}
          phoneHref={business.phoneHref}
          switchLabel={t.switchLanguage}
          menuLabel={t.common.menu}
        />
      </div>
    </header>
  );
}
