import { formatEuro, tariff } from "@/lib/tariff";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";

/**
 * The official city tariff. Numbers come from src/lib/tariff.ts; only the row
 * labels are translated, so the two languages can never drift apart on price.
 */
export default function TariffTable({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["tariff"];
}) {
  const money = (amount: number) => formatEuro(amount, locale);

  const fareRows = [
    { label: copy.rows.basePrice, amount: tariff.basePrice },
    ...tariff.perKilometre.map((row) => ({
      label: copy.rows[row.key],
      amount: row.amount,
    })),
    { label: copy.rows.waiting, amount: tariff.waitingPerHour },
    { label: copy.rows.meterStep, amount: tariff.meterStep },
  ];

  const validFrom = new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(tariff.validFrom));

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-balance">
            {copy.tableHeading}
          </h2>
          <p className="text-xs text-muted">
            {copy.validFromLabel} {validFrom}
          </p>
        </div>

        <div className="mt-6 min-w-0 overflow-x-auto rounded-xl border border-border bg-surface-alt">
          <table className="w-full min-w-[26rem] text-left text-sm">
            <caption className="sr-only">{copy.tableHeading}</caption>
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
                <th scope="col" className="px-5 py-3.5 font-medium">
                  {copy.columns.item}
                </th>
                <th scope="col" className="px-5 py-3.5 text-right font-medium">
                  {copy.columns.price}
                </th>
              </tr>
            </thead>
            <tbody>
              {fareRows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <th scope="row" className="px-5 py-4 font-normal">
                    {row.label}
                  </th>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold tabular-nums">
                    {money(row.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 text-base font-semibold tracking-tight">
          {copy.surchargeHeading}
        </h3>
        <div className="mt-4 min-w-0 overflow-x-auto rounded-xl border border-border bg-surface-alt">
          <table className="w-full min-w-[26rem] text-left text-sm">
            <caption className="sr-only">{copy.surchargeHeading}</caption>
            <tbody>
              {tariff.surcharges.map((row) => (
                <tr key={row.key} className="border-b border-border last:border-0">
                  <th scope="row" className="px-5 py-4 font-normal">
                    {copy.surcharges[row.key]}
                  </th>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold tabular-nums">
                    {money(row.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-muted">
          {copy.footnote}{" "}
          <a
            href={tariff.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-fg"
          >
            {copy.sourceLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
