import { Fragment } from "react";
import ObfuscatedEmail from "@/components/layout/ObfuscatedEmail";

type Section = { heading: string; body: readonly string[] };

/**
 * Legal copy carries an {email} token rather than the address itself, so the
 * address is never baked into these strings — and therefore never appears in
 * the served HTML as one contiguous, harvestable string.
 */
function withEmail(text: string) {
  const parts = text.split("{email}");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 ? <ObfuscatedEmail /> : null}
    </Fragment>
  ));
}

/** Shared renderer for the Impressum and the privacy policy. */
export default function LegalSections({ sections }: { sections: readonly Section[] }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold tracking-tight">{section.heading}</h2>
            <div className="mt-3 space-y-2.5">
              {section.body.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-muted">
                  {withEmail(line)}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
