/**
 * Photo credits.
 *
 * Everything shipped here is freely licensed, and CC BY requires the
 * photographer to be named — which is why `Bildnachweise` appears at the end of
 * the Impressum. If you drop in your own photos, remove the matching entry.
 *
 * TODO: replace these with photographs of your own cars and drivers. A real
 * photo of your vehicle outside a place people recognise beats any stock image
 * for trust, and needs no credit line.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  /** Alt text per language. */
  alt: { de: string; en: string };
  credit?: {
    title: string;
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

export const photos = {
  hauptbahnhof: {
    src: "/photos/kaiserslautern-hauptbahnhof.jpg",
    width: 2400,
    height: 1238,
    alt: {
      de: "Vorplatz des Kaiserslauterer Hauptbahnhofs, ein typischer Abhol- und Halteplatz für Taxis",
      en: "The forecourt of Kaiserslautern main station, a typical taxi pick-up point",
    },
    credit: {
      title: "Kaiserslautern-Hauptbahnhof-02-2025",
      author: "Gerd Eichmann",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.de",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=162969565",
    },
  },
} satisfies Record<string, Photo>;

export const creditedPhotos = Object.values(photos).filter((photo) => photo.credit);
