/**
 * Cookie consent.
 *
 * The site currently loads no trackers, so the banner is OFF and nothing is
 * stored. Turn `trackingPlanned` on at the same time you add Meta Pixel,
 * Google Ads or Analytics — not before. A banner announcing cookies that do not
 * exist is its own kind of wrong, and an accepted banner with no scripts behind
 * it teaches visitors the choice is meaningless.
 *
 * WHEN YOU ENABLE IT:
 *   1. Set `trackingPlanned` to true.
 *   2. Load your tags only from `hasConsent("marketing")` / ("statistics") —
 *      never on page load. Under TTDSG §25 they may not run before consent.
 *   3. Uncomment the tracking section in the privacy policy (both languages),
 *      naming each service and what it stores.
 *
 * Note the choice lives in localStorage, not a cookie: storing a cookie in
 * order to ask about cookies is a contradiction, and localStorage is not sent
 * to the server.
 */
export const trackingPlanned = false;

export type ConsentChoice = "accepted" | "declined";

const STORAGE_KEY = "citytaxi-consent";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    // Private mode and blocked storage both throw; treat as "not asked yet".
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Nothing to do — the banner simply reappears next visit.
  }
}

/**
 * The gate every tracking script must pass through. Returns false unless the
 * visitor actively accepted, so "no answer yet" never counts as consent.
 */
export function hasConsent(): boolean {
  return trackingPlanned && readConsent() === "accepted";
}
