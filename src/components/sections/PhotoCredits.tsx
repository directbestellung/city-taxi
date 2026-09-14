import { creditedPhotos } from "@/lib/photos";

/**
 * CC BY requires naming the photographer, so the credits are generated from the
 * photo registry rather than hand-maintained — swap a photo and this follows.
 */
export default function PhotoCredits({
  heading,
  intro,
}: {
  heading: string;
  intro: string;
}) {
  if (creditedPhotos.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
      <h2 className="text-lg font-semibold tracking-tight">{heading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{intro}</p>
      <ul className="mt-3 space-y-2">
        {creditedPhotos.map((photo) => (
          <li key={photo.src} className="text-sm leading-relaxed text-muted">
            <a
              href={photo.credit!.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-fg"
            >
              {photo.credit!.title}
            </a>
            {" — "}
            {photo.credit!.author}
            {", "}
            <a
              href={photo.credit!.licenseUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-fg"
            >
              {photo.credit!.license}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
