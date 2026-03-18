import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Henry Russell | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f6f2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        {/* Monogram */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 700,
            color: "#1f5c2e",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          HR
        </div>
        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 2,
            background: "#1f5c2e",
            margin: "24px 0",
            opacity: 0.4,
          }}
        />
        {/* Name + label */}
        <div
          style={{
            fontSize: 32,
            color: "#1a1a16",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Henry Russell
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#888880",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: 10,
          }}
        >
          Portfolio
        </div>
      </div>
    ),
    { ...size }
  );
}
