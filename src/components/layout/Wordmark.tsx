import Image from "next/image";
import { business } from "@/lib/business";
import { logo } from "@/lib/logo";

/**
 * The brand mark: the real logo when one is configured, otherwise a text
 * wordmark — the name with "Taxi" picked out in the brand yellow, over a
 * tracked-out locality line.
 *
 * `tone` matters for contrast. In text mode the accent must be the darker
 * --accent-text on the light header (bright yellow fails contrast on white)
 * and the bright --accent on the dark footer. In logo mode the artwork is
 * black and yellow on white, so it gets a white plate: invisible against the
 * light header, a deliberate brand card against the dark footer.
 */
export default function Wordmark({
  tone = "default",
  size = "header",
}: {
  tone?: "default" | "night";
  size?: "header" | "footer";
}) {
  if (logo) {
    const height = size === "footer" ? 60 : 38;
    return (
      <span
        className={
          "inline-flex rounded-lg bg-white " +
          (size === "footer" ? "px-4 py-3" : "px-2.5 py-1.5")
        }
      >
        <Image
          src={logo.src}
          alt={business.name}
          width={logo.width}
          height={logo.height}
          priority={size === "header"}
          style={{ height, width: "auto" }}
          className="max-w-full object-contain"
        />
      </span>
    );
  }

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
