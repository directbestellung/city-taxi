"use client";

import { useEffect, useState } from "react";

/**
 * Colours handed to taxi.de.
 *
 * Parameter mapping, established by loading the iframe with extreme test
 * colours rather than guessing:
 *   bg  -> the strip around the panel (set to --night, so it disappears into
 *          the hero and only the form itself reads as a panel)
 *   box -> the form panel
 *   the input fields are HARDCODED WHITE and cannot be themed
 *   txt1 -> labels on the panel AND the text typed into those white inputs
 *
 * That last one is the constraint. Because one token colours text on the panel
 * and text on a white input, `txt1` has to stay dark, which in turn bounds how
 * dark `box` can go. A dark panel with a light `txt1` renders customer input as
 * white on white — and since placeholders use `txt2` and still look correct,
 * nothing appears wrong until someone actually types.
 *
 * `box` is therefore as dark as the contrast maths allows: near-black text on
 * #c9ced6 is 11.9:1, and the same text on the white inputs is 19.3:1. Pushing
 * the panel darker also makes the white input fields glare.
 *
 * Re-check with getComputedStyle on a real <input> before changing any of this.
 */
export const widgetPalette = {
  bg: "0c0e12", // --night, blends the surround into the hero
  box: "c9ced6", // the form panel
  btn: "f6b900", // --accent, the taxi yellow
  btntxt: "1b1500", // --accent-fg, near-black on the yellow
  txt1: "0c0e12", // labels AND typed input text — must stay dark
  txt2: "4a515c", // placeholders and secondary text, darkened to suit the panel
  ico: "6b4f00", // brand amber, readable on the grey panel
  line: "aab1bb", // dividers
} as const;

/** Background for the wrapper, so the frame edge is invisible. */
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
  /**
   * Starts slightly UNDER the shortest real layout (~457px) on purpose.
   * taxi.de paints #fcfcfc on its own <html>, so the body colour never reaches
   * the canvas and any iframe taller than its content shows a white band until
   * the resize message lands. Undershooting instead clips a few pixels for well
   * under a second, which reads as loading rather than as a rendering fault.
   */
  const [height, setHeight] = useState(450);

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
      // Backstop for the same problem, in case taxi.de ever drops its own
      // <html> background: without it the element paints white underneath.
      style={{ height: `${height}px`, background: widgetSurface }}
      className="w-full max-w-[760px] border-0"
    />
  );
}
