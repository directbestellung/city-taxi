type Section = { heading: string; body: readonly string[] };

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
                  {line}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
