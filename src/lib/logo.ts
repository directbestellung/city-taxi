/**
 * The brand logo, in the two variants the artwork comes in.
 *
 * The mark is black and yellow, which reads on a light background but loses its
 * black CITY and KAISERSLAUTERN against a dark one. The white-and-yellow
 * variant is the answer to that, so each is used where it is legible:
 *
 *   onLight -> the header under a light colour scheme
 *   onDark  -> the footer, which is always dark, and the header under a dark
 *              colour scheme
 *
 * Using the right variant per background is what lets the logo sit directly on
 * the surface, with no white plate behind it.
 *
 * Set to null to fall back to the text wordmark. To swap the artwork, replace
 * the files and update `width`/`height` to their real pixel dimensions — SVG is
 * worth it if you have one: sharp at any size and a fraction of the weight.
 */
export type BrandLogo = {
  src: string;
  /** Intrinsic pixel size of the file, used to reserve layout space. */
  width: number;
  height: number;
};

export const logo: { onLight: BrandLogo; onDark: BrandLogo } | null = {
  onLight: { src: "/logo/city-taxi-kl-on-light.png", width: 900, height: 450 },
  onDark: { src: "/logo/city-taxi-kl-on-dark.png", width: 900, height: 450 },
};
