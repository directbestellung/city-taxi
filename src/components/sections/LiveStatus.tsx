"use client";

import { useSyncExternalStore } from "react";

/**
 * Says the booking widget dispatches a real car rather than emailing a form
 * somewhere: a pulsing LIVE badge, the promise itself, and a clock ticking in
 * Kaiserslautern local time.
 *
 * en-US, not en-GB: most of the English-speaking audience here is the American
 * community around Ramstein, so the clock reads 1:22:13 AM rather than 01:22:13.
 *
 * The clock is read through useSyncExternalStore rather than an effect. The
 * server snapshot is null, so the server renders no time at all and there is
 * nothing for hydration to mismatch — and the subscription updates from a
 * timer callback, not a setState in an effect body.
 */
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/**
 * Returns the same string for the whole second, so the identity check
 * useSyncExternalStore does on the snapshot stays stable.
 */
function readClock(locale: "de" | "en") {
  return new Date().toLocaleTimeString(locale === "de" ? "de-DE" : "en-US", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function LiveStatus({
  locale,
  label,
  headline,
}: {
  locale: "de" | "en";
  label: string;
  headline: string;
}) {
  const time = useSyncExternalStore(
    subscribe,
    () => readClock(locale),
    () => null,
  );

  return (
    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-3">
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-emerald-400 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-emerald-950">
        <span className="relative flex size-1.5">
          {/* The ping is decorative; reduced-motion users just get the dot. */}
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-950 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-950" />
        </span>
        {label}
      </span>

      <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-night-fg">
        {headline}
      </span>

      {/* Renders only once mounted, so there is no server/client time mismatch. */}
      {time ? (
        <span
          className="ml-auto shrink-0 font-mono text-sm tabular-nums text-emerald-200"
          aria-label={`${headline} — ${time}`}
        >
          {time}
        </span>
      ) : null}
    </div>
  );
}
