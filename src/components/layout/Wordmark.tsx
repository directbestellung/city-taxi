import Image from "next/image";
import { business } from "@/lib/business";
import { logo, type BrandLogo } from "@/lib/logo";

/**
 * The brand mark: the real logo when one is configured, otherwise a text
 * wordmark — the name with "Taxi" picked out in the brand yellow, over a
 * tracked-out locality line.
 *
 * The logo comes in two variants, so it sits directly on the surface with no
 * plate behind it. The footer is always dark and always takes the white
 * variant; the header swaps between them with the colour scheme.
 */
export default function Wordmark({
  tone = "default",
  size = "header",
}: {
  tone?: "default" | "night";
  size?: "header" | "footer";
}) {
  const isFooter = size === "footer";
  const sizeClass = isFooter ? "h-11 sm:h-14" : "h-9 sm:h-11";

  if (logo) {
    const mark = (variant: BrandLogo, className: string) => (
      <Image
        src={variant.src}
        alt={business.name}
        width={variant.width}
        height={variant.height}
        priority={!isFooter}
        // Sized in CSS rather than inline so it can step down on the narrowest
        // phones — at a flat 44px the header ran past a 320px viewport.
        className={`w-auto max-w-full object-contain ${sizeClass} ${className}`}
      />
    );

    // The footer is dark in both colour schemes, so it needs only one variant.
    if (isFooter) return mark(logo.onDark, "");

    return (
      <>
        {mark(logo.onLight, "dark:hidden")}
        {mark(logo.onDark, "hidden dark:block")}
      </>
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
