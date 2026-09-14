import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/routes";

/**
 * Picks a language from the browser's Accept-Language header, honouring q
 * weights. Falls back to German, which is the default for a Kaiserslautern
 * business. Nothing is stored: no cookie, no fingerprint.
 */
function pickLocale(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.split("=")[1]) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter((entry) => entry.tag.length > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals, the generated metadata routes (icon,
  // opengraph-image, robots, sitemap) and real files. Without the icon and
  // image entries the favicon gets redirected to /de/icon and never loads.
  matcher: [
    "/((?!_next/|favicon\\.ico|robots\\.txt|sitemap\\.xml|icon|apple-icon|opengraph-image|twitter-image|manifest|.*\\..*).*)",
  ],
};
