"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  pageForSlug,
  pathFor,
  type Locale,
  type PageKey,
} from "@/lib/i18n/routes";
import { PhoneIcon } from "@/components/Icons";

type NavItem = { page: PageKey; label: string; href: string };

export default function HeaderNav({
  locale,
  items,
  bookHref,
  bookLabel,
  phoneDisplay,
  phoneHref,
  switchLabel,
  menuLabel,
}: {
  locale: Locale;
  items: NavItem[];
  bookHref: string;
  bookLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  switchLabel: string;
  menuLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /** Current page, derived from the URL, so the switcher keeps you on this page. */
  const segments = pathname.split("/").filter(Boolean);
  const currentPage: PageKey =
    (segments[1] ? pageForSlug(locale, segments[1]) : "home") ?? "home";
  const otherLocale = locales.find((l) => l !== locale) as Locale;

  return (
    <>
      <nav aria-label="Hauptmenü" className="ml-auto hidden items-center gap-1 lg:flex">
        {items.map((item) => (
          <Link
            key={item.page}
            href={item.href}
            aria-current={item.page === currentPage ? "page" : undefined}
            className={
              "rounded-md px-3 py-2 text-sm transition hover:bg-surface hover:text-fg " +
              (item.page === currentPage ? "font-medium text-fg" : "text-muted")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-2 lg:ml-0">
        <Link
          href={pathFor(otherLocale, currentPage)}
          hrefLang={otherLocale}
          title={switchLabel}
          className="rounded-md border border-border px-2.5 py-2 text-xs font-medium uppercase tracking-wide text-muted transition hover:bg-surface hover:text-fg"
        >
          {otherLocale}
        </Link>

        <a
          href={phoneHref}
          className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition hover:bg-surface sm:flex"
        >
          <PhoneIcon className="size-4" />
          {phoneDisplay}
        </a>

        <Link
          href={bookHref}
          className="rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-accent-fg transition hover:brightness-95"
        >
          {bookLabel}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={menuLabel}
          className="flex size-9 items-center justify-center rounded-lg border border-border lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={menuLabel}
          className="absolute inset-x-0 top-16 border-b border-border bg-bg px-4 py-3 shadow-lg lg:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.page}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={item.page === currentPage ? "page" : undefined}
              className={
                "block rounded-md px-2 py-2.5 text-sm transition hover:bg-surface " +
                (item.page === currentPage ? "font-medium text-fg" : "text-muted")
              }
            >
              {item.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="mt-1 flex items-center gap-2 rounded-md px-2 py-2.5 text-sm font-medium"
          >
            <PhoneIcon className="size-4" />
            {phoneDisplay}
          </a>
        </nav>
      ) : null}
    </>
  );
}
