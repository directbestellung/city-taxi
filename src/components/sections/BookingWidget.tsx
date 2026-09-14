"use client";

import { useEffect, useState } from "react";

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

const SRC =
  "https://www.taxi.de/iframessl?i=1&pref=24075&bg=ffffff&box=ffffff&btn=eeff00" +
  "&btntxt=000000&txt1=000000&txt2=7b7b7b&ico=000000&line=dfdfdf";

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
