import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fantastic Parties YYC — Calgary's most fantastic kids' party rentals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FF6B6B 0%, #FF9B6B 45%, #FFD93D 100%)",
          fontFamily: "system-ui, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            width: 120,
            height: 120,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 240,
            width: 60,
            height: 60,
            borderRadius: 9999,
            background: "#6BCB77",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 200,
            right: 220,
            width: 36,
            height: 36,
            borderRadius: 9999,
            background: "#4D96FF",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            opacity: 0.9,
            marginBottom: 24,
            display: "flex",
          }}
        >
          FANTASTIC PARTIES YYC
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            maxWidth: 900,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Calgary&apos;s most fantastic kids&apos; parties.
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 32,
            opacity: 0.95,
            display: "flex",
            gap: 24,
          }}
        >
          <span style={{ display: "flex" }}>Bumper cars</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>Bubble domes</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>Soft play</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
