/**
 * The brand logo.
 *
 * Set this once the image file is in `public/logo/` and every place that shows
 * the brand — header and footer — switches from the text wordmark to the real
 * logo. Leave it null and the text wordmark is used, so the site is never
 * showing a broken image.
 *
 * The file has a transparent background, so it drops straight onto the light
 * header. It cannot go straight onto a dark one: the black CITY and
 * KAISERSLAUTERN would disappear and only the yellow TAXI would survive. So
 * `Wordmark` gives it a white plate wherever the background is dark — always in
 * the footer, and in the header only under a dark colour scheme.
 *
 * To swap the artwork, replace the file and update `width`/`height` to its real
 * pixel dimensions. SVG is worth it if you have one: sharp at any size and a
 * fraction of the weight.
 */
export type BrandLogo = {
  src: string;
  /** Intrinsic pixel size of the file, used to reserve layout space. */
  width: number;
  height: number;
};

export const logo: BrandLogo | null = {
  src: "/logo/city-taxi-kl-logo.png",
  width: 900,
  height: 450,
};
