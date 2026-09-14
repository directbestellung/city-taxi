import Link from "next/link";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { navPages, pathFor, type Locale } from "@/lib/i18n/routes";
import HeaderNav from "./HeaderNav";
import { TaxiIcon } from "@/components/Icons";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const items = navPages.map((page) => ({
    page,
    label: t.nav[page],
    href: pathFor(locale, page),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link
          href={pathFor(locale, "home")}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-fg">
            <TaxiIcon className="size-5" />
          </span>
          <span className="text-sm leading-tight sm:text-base">
            City Taxi
            <span className="block text-[0.7rem] font-normal text-muted sm:inline sm:text-sm">
              {" "}
              Kaiserslautern
            </span>
          </span>
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
