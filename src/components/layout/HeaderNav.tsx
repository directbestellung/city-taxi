"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const panelRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  /**
   * Dismiss the open menu the way a phone user expects: by starting to scroll,
   * by tapping anywhere outside it, or with Escape — not only by finding the
   * close button.
   *
   * Listeners are only attached while the menu is open, so there is no
   * scroll handler running on a page nobody has opened the menu on.
   */
  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      // A tap on the toggle is its own business; let it handle the state.
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return;
      }
      close();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    /**
     * Close when the user scrolls — but listen for wheel and touchmove, not
     * "scroll". The scroll event also fires for momentum after a flick and for
     * smooth scrolling still in flight, so using it closed the menu again a
     * moment after someone deliberately opened it. wheel and touchmove only
     * fire when a person is actually scrolling right now.
     */
    document.addEventListener("wheel", close, { passive: true });
    document.addEventListener("touchmove", close, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("wheel", close);
      document.removeEventListener("touchmove", close);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  // No effect is needed for route changes: the panel's links close it on click,
  // and every other control sits outside the panel, so the pointerdown handler
  // above already catches those.

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
          ref={toggleRef}
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
          ref={panelRef}
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
