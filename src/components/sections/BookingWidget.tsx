"use client";

import { useEffect, useState } from "react";

/**
 * Colours handed to taxi.de, matched to the light-mode tokens in globals.css.
 *
 * It has to be a LIGHT palette. taxi.de ignores `box` and hardcodes the input
 * fields to white, while `txt1` colours both the labels and the text typed into
 * those inputs. A dark palette therefore renders what the customer types as
 * white on white — the placeholders still look right, so it is invisible until
 * someone actually tries to book. Verified against the widget's own computed
 * styles; re-check with the same method before darkening any of this.
 *
 * Because the colours are baked into the iframe URL on the server, the widget
 * cannot follow prefers-color-scheme. It stays light in both site themes and
 * sits on a light card.
 */
export const widgetPalette = {
  bg: "ffffff", // --surface-alt, the panel behind the form
  box: "f5f6f8", // --surface (taxi.de appears to ignore this; kept for clarity)
  btn: "f6b900", // --accent, the taxi yellow
  btntxt: "1b1500", // --accent-fg, near-black on the yellow
  txt1: "0c0e12", // --fg. Also the colour of typed input text — keep it dark.
  txt2: "59606d", // --muted, placeholders and secondary text
  ico: "8a6300", // --accent-text, readable brand tint on white
  line: "e3e6ea", // --border, dividers
} as const;

/** Background for the wrapper, so it matches the frame exactly. */
export const widgetSurface = `#${widgetPalette.bg}`;

const SRC =
  "https://www.taxi.de/iframessl?i=1&pref=24075&" +
  Object.entries(widgetPalette)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

/**
 * taxi.de booking form. The widget reports its own height by postMessage; we
 * resize the iframe to match so it never scrolls internally.
 *
 * The vendor snippet accepts a message from ANY origin. We check the origin and
 * the payload shape instead, so an unrelated frame cannot resize this element.
 *
 * Note the frame is served from www.taxi.de but posts its height from
 * oldiframe.taxi.de, so the check covers taxi.de and its subdomains over https
 * rather than one exact origin.
 */
function isVendorOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    return (
      url.protocol === "https:" &&
      (url.hostname === "taxi.de" || url.hostname.endsWith(".taxi.de"))
    );
  } catch {
    return false;
  }
}

export default function BookingWidget({ title }: { title: string }) {
  const [height, setHeight] = useState(560);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (!isVendorOrigin(event.origin)) return;

      const reported = (event.data as { height?: unknown } | null)?.height;
      const next = typeof reported === "string" ? Number(reported) : reported;
      if (typeof next !== "number" || !Number.isFinite(next) || next < 200) return;

      setHeight(Math.min(next, 4000));
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      id="taxide-order"
      title={title}
      src={SRC}
      scrolling="no"
      style={{ height: `${height}px` }}
      className="w-full max-w-[760px] border-0"
    />
  );
}
