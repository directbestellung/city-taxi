/**
 * Text logo. Two lines: the name, with "Taxi" picked out in the brand yellow,
 * over a tracked-out locality line.
 *
 * `tone` matters for contrast: on the normal page background the accent must be
 * the darker --accent-text (bright yellow fails contrast on white), while on the
 * dark footer the bright --accent is the readable one.
 */
export default function Wordmark({
  tone = "default",
}: {
  tone?: "default" | "night";
}) {
  const accent = tone === "night" ? "text-accent" : "text-accent-text";
  const sub = tone === "night" ? "text-night-muted" : "text-muted";

  return (
    <span className="flex flex-col leading-none">
      <span className="text-base font-bold tracking-tight sm:text-lg">
        City <span className={accent}>Taxi</span>
      </span>
      <span
        className={`mt-1 text-[0.58rem] font-medium uppercase tracking-[0.26em] ${sub}`}
      >
        Kaiserslautern
      </span>
    </span>
  );
}
