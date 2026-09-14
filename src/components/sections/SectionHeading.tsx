export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-text">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted text-pretty">{lead}</p>
      ) : null}
    </div>
  );
}
