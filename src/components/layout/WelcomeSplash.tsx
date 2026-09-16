"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { business } from "@/lib/business";
import { logo } from "@/lib/logo";

/**
 * Brief welcome overlay: the logo large on blurred dark glass, then it clears.
 *
 * Deliberately restrained, because a splash screen is easy to get wrong:
 *
 *  - Once per session, not per page. Kept in sessionStorage, so moving around
 *    the site does not replay it.
 *  - A tap or click clears it immediately. Someone opening a taxi site at 3am
 *    should never have to wait for an animation.
 *  - The hold starts when the logo has actually loaded, not when the component
 *    mounts. Otherwise the first moments are a blank dark pane, which reads as
 *    a broken page rather than a greeting.
 *  - The page renders underneath it the whole time, so nothing is delayed for
 *    crawlers and the content is in the HTML either way.
 *  - Under prefers-reduced-motion it does not appear at all.
 *
 * `WELCOME_MS` is the whole knob. Set it to 0 to switch the splash off.
 */
const WELCOME_MS: number = 1000;
const FADE_MS = 400;
/** If the logo has not loaded by now, greet without it rather than hang. */
const MAX_WAIT_MS = 1500;
const STORAGE_KEY = "citytaxi-welcomed";

type Phase = "visible" | "fading" | "gone";

export default function WelcomeSplash() {
  const [phase, setPhase] = useState<Phase>("visible");
  const [logoReady, setLogoReady] = useState(false);

  /**
   * A priority image is often already decoded by the time React attaches its
   * handlers, so the load event fires before anyone is listening and onLoad
   * alone leaves the logo stuck at opacity 0. Checking `complete` on the node
   * itself covers that case; onLoad still covers the slow one.
   */
  const captureImage = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLogoReady(true);
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Blocked storage just means it shows again; not worth failing over.
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      const skip = window.setTimeout(() => setPhase("gone"), 0);
      return () => window.clearTimeout(skip);
    }

    const bail = window.setTimeout(() => setLogoReady(true), MAX_WAIT_MS);
    return () => window.clearTimeout(bail);
  }, []);

  useEffect(() => {
    if (!logoReady) return;

    const toFading = window.setTimeout(() => {
      setPhase("fading");
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, WELCOME_MS);

    const toGone = window.setTimeout(() => setPhase("gone"), WELCOME_MS + FADE_MS);

    return () => {
      window.clearTimeout(toFading);
      window.clearTimeout(toGone);
    };
  }, [logoReady]);

  // Checked at render, not in an effect, so switching it off costs no work.
  if (WELCOME_MS === 0 || phase === "gone" || !logo) return null;

  return (
    <div
      data-welcome-splash
      aria-hidden="true"
      onClick={() => setPhase("fading")}
      className={
        "fixed inset-0 z-[100] flex items-center justify-center bg-night/85 backdrop-blur-2xl transition-opacity duration-[400ms] motion-reduce:transition-none " +
        (phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100")
      }
    >
      <Image
        src={logo.onDark.src}
        alt={business.name}
        width={logo.onDark.width}
        height={logo.onDark.height}
        priority
        ref={captureImage}
        onLoad={() => setLogoReady(true)}
        className={
          "w-[min(72vw,26rem)] max-w-full object-contain drop-shadow-2xl transition-opacity duration-300 motion-reduce:transition-none " +
          (logoReady ? "opacity-100" : "opacity-0")
        }
      />
    </div>
  );
}
