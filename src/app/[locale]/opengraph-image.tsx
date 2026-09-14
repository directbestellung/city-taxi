import { ImageResponse } from "next/og";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/routes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = business.name;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Social preview card, rendered per language at build time. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "de");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0e12",
          color: "#f4f6f8",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#f6b900",
              color: "#14100a",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            CT
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>{business.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Satori needs an explicit display on any node with several children. */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            <span>{t.home.title}</span>
            <span style={{ color: "#f6b900" }}>{t.home.titleHighlight}</span>
          </div>
          <div style={{ fontSize: 30, color: "#a2aab8", maxWidth: 880 }}>
            {t.common.hours}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              background: "#f6b900",
              color: "#14100a",
              fontSize: 34,
              fontWeight: 700,
              padding: "16px 28px",
              borderRadius: 14,
            }}
          >
            {business.phoneDisplay}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a2aab8" }}>
            {business.city}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
