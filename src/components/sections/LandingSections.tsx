import type { LandingBlock } from "@/lib/i18n/types";
import { ChevronIcon, InfoIcon } from "@/components/Icons";

/** Renders the content blocks an SEO landing page is assembled from. */
export default function LandingSections({
  blocks,
}: {
  blocks: readonly LandingBlock[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="space-y-12">
        {blocks.map((block) => (
          <section key={block.heading}>
            <h2 className="flex items-start gap-2.5 text-2xl font-semibold tracking-tight text-balance">
              {block.type === "note" ? (
                <InfoIcon className="mt-1.5 size-5 shrink-0 text-accent-text" />
              ) : null}
              {block.heading}
            </h2>

            {block.type === "text" ? (
              <div className="mt-4 space-y-4">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {block.type === "note" ? (
              <div className="mt-4 space-y-3 rounded-xl border border-accent/35 bg-accent/8 p-5">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-fg/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {block.type === "list" ? (
              <>
                {block.intro ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{block.intro}</p>
                ) : null}
                <ul className="mt-4 space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {block.type === "table" ? (
              <>
                {block.intro ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{block.intro}</p>
                ) : null}
                {/* min-w-0 keeps the wide table scrolling inside its own box. */}
                <div className="mt-5 min-w-0 overflow-x-auto rounded-xl border border-border bg-surface-alt">
                  <table className="w-full min-w-[30rem] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
                        {block.columns.map((column) => (
                          <th key={column} scope="col" className="px-5 py-3.5 font-medium">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-border last:border-0">
                          <th scope="row" className="px-5 py-4 font-medium">
                            {row[0]}
                          </th>
                          {row.slice(1).map((cell, index) => (
                            <td key={`${row[0]}-${index}`} className="px-5 py-4 text-muted">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : null}

            {block.type === "faq" ? (
              <div className="mt-5 divide-y divide-border border-y border-border">
                {block.items.map((item) => (
                  <details key={item.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden">
                      {item.q}
                      <ChevronIcon className="size-4 shrink-0 text-muted transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
                  </details>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
