/**
 * The official taxi tariff for the city of Kaiserslautern.
 *
 * These are NOT our prices to set. Inside the Pflichtfahrgebiet the fare is
 * fixed by the Taxentarifordnung der Stadt Kaiserslautern and is identical for
 * every licensed operator.
 *
 * VERIFY BEFORE LAUNCH and re-check whenever the city amends the ordinance:
 * the figures below follow the version in force since 1 September 2022. If the
 * city publishes a new tariff, update `validFrom` and the amounts together.
 *
 * Source: Taxentarifordnung (Ortsrecht 3.81), Stadt Kaiserslautern.
 */
export const tariff = {
  validFrom: "2022-09-01",
  sourceUrl:
    "https://www.kaiserslautern.de/buerger_rathaus_politik/stadtverwaltung/ortsrecht/satzungen_a_Z/020341/index.html.de",

  /** Grundpreis / minimum fare, in euro. */
  basePrice: 3.5,

  /** Kilometre prices. `key` maps to a label in the dictionaries. */
  perKilometre: [
    { key: "firstThree", amount: 2.3 },
    { key: "dayRate", amount: 2.1 },
    { key: "nightRate", amount: 2.2 },
  ],

  /** Zeitpreis: waiting and traffic standstill, per hour. */
  waitingPerHour: 35.0,

  /** Pflichtwartezeit at the passenger's request, in minutes. */
  mandatoryWaitMinutes: 10,

  /** Schaltsprung: the increment the meter advances in. */
  meterStep: 0.1,

  surcharges: [
    { key: "einsiedlerhof", amount: 6.0 },
    { key: "largeTaxi", amount: 5.5 },
    { key: "cancellation", amount: 4.5 },
  ],
} as const;

/** Formats euro amounts the way each locale expects: 3,50 € vs €3.50 (en-US). */
export function formatEuro(amount: number, locale: "de" | "en"): string {
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
