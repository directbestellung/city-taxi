export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-text">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
            {lead}
          </p>
        ) : null}
      </div>
    </div>
  );
}
