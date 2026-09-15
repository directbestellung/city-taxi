/**
 * The brand logo.
 *
 * Set this once the image file is in `public/logo/` and every place that shows
 * the brand — header and footer — switches from the text wordmark to the real
 * logo. Leave it null and the text wordmark is used, so the site is never
 * showing a broken image.
 *
 * TO ENABLE:
 *   1. Save the logo as `public/logo/city-taxi-kaiserslautern.svg`
 *      (SVG preferred — it stays sharp at any size. PNG is fine too; export it
 *      at roughly 1200px wide so it is crisp on retina screens.)
 *   2. Replace the `null` below with the block commented out underneath, and
 *      set `width`/`height` to the file's real pixel dimensions.
 *
 * Note the logo is black and yellow on white, so it cannot sit directly on the
 * dark footer — the black wordmark would disappear. `Wordmark` therefore places
 * it on a white plate, which is invisible against the light header and reads as
 * a deliberate brand card against the dark footer.
 */
export type BrandLogo = {
  src: string;
  /** Intrinsic pixel size of the file, used to reserve layout space. */
  width: number;
  height: number;
};

export const logo: BrandLogo | null = null;

// export const logo: BrandLogo | null = {
//   src: "/logo/city-taxi-kaiserslautern.svg",
//   width: 1200,
//   height: 586,
// };
