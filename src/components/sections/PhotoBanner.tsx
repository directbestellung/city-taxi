import Image from "next/image";
import type { Photo } from "@/lib/photos";
import type { Locale } from "@/lib/i18n/routes";

/** Full-width photo strip used to break up the long home page. */
export default function PhotoBanner({
  photo,
  locale,
  caption,
}: {
  photo: Photo;
  locale: Locale;
  caption?: string;
}) {
  return (
    <figure className="relative">
      <div className="relative aspect-[24/10] w-full overflow-hidden bg-surface sm:aspect-[24/8]">
        <Image
          src={photo.src}
          alt={photo.alt[locale]}
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      {caption ? (
        <figcaption className="mx-auto max-w-6xl px-4 pt-3 text-xs text-muted sm:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
