"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { readConsent, trackingPlanned, writeConsent } from "@/lib/consent";
import { getDictionary } from "@/lib/i18n";
import { pathFor, type Locale } from "@/lib/i18n/routes";

/**
 * Compact consent bar.
 *
 * Accept and Decline are the same size and weight on purpose. A single
 * "OK/Understood" button is only lawful while nothing non-essential is being
 * set; once Meta Pixel, Google Ads or Analytics are added, TTDSG §25 and the
 * GDPR require refusing to be as easy as agreeing, and a banner that only lets
 * you agree is the exact pattern German regulators fine.
 *
 * Read through useSyncExternalStore so the server renders nothing at all: the
 * stored choice only exists in the browser, and rendering a guess would either
 * flash the bar at people who already answered or mismatch on hydration.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

export default function CookieBanner({ locale }: { locale: Locale }) {
  const choice = useSyncExternalStore(
    subscribe,
    () => readConsent(),
    () => null,
  );

  const t = getDictionary(locale);

  // Nothing to consent to yet, or the visitor has already answered.
  if (!trackingPlanned || choice !== null) return null;

  function decide(next: "accepted" | "declined") {
    writeConsent(next);
    listeners.forEach((notify) => notify());
  }

  return (
    <div
      data-cookie-banner
      role="region"
      aria-label={t.consent.ariaLabel}
      className="fixed inset-x-3 bottom-3 z-50 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-bg/95 px-4 py-3 shadow-lg backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:flex-nowrap"
    >
      <p className="min-w-0 flex-1 text-xs leading-relaxed text-muted">
        {t.consent.message}{" "}
        <Link
          href={pathFor(locale, "privacy")}
          className="underline underline-offset-2 hover:text-fg"
        >
          {t.consent.more}
        </Link>
      </p>

      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => decide("declined")}
          className="rounded-lg border border-border px-3.5 py-2 text-xs font-semibold transition hover:bg-surface"
        >
          {t.consent.decline}
        </button>
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-accent-fg transition hover:brightness-95"
        >
          {t.consent.accept}
        </button>
      </div>
    </div>
  );
}
