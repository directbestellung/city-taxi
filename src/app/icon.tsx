import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Taxi-yellow mark so the tab is recognisable at favicon size. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6b900",
          color: "#14100a",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        CT
      </div>
    ),
    size,
  );
}
