"use client";

import { useSyncExternalStore } from "react";

/**
 * Signals that the booking widget dispatches a real car, rather than emailing a
 * form somewhere: a pulsing status dot and a clock ticking in Kaiserslautern
 * local time.
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
  return new Date().toLocaleTimeString(locale === "de" ? "de-DE" : "en-GB", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function LiveStatus({
  locale,
  label,
  status,
}: {
  locale: "de" | "en";
  label: string;
  status: string;
}) {
  const time = useSyncExternalStore(
    subscribe,
    () => readClock(locale),
    () => null,
  );

  return (
    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-lg border border-night-border bg-white/5 px-3 py-2 text-xs">
      <span className="flex items-center gap-2 font-semibold uppercase tracking-[0.14em] text-emerald-300">
        <span className="relative flex size-2">
          {/* The ping is decorative; reduced-motion users just get the dot. */}
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        {label}
      </span>

      <span className="text-night-muted">{status}</span>

      {/* Renders only once mounted, so there is no server/client time mismatch. */}
      {time ? (
        <span
          className="ml-auto font-mono tabular-nums text-night-fg"
          aria-label={`${status} — ${time}`}
        >
          {time}
        </span>
      ) : null}
    </div>
  );
}
