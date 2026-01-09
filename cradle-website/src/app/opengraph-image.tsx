import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cradle - 構想から定着まで。本気で伴走するAI導入パートナー";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "120px",
              fontWeight: "400",
              color: "#ffffff",
              letterSpacing: "-4px",
              fontFamily: "system-ui",
            }}
          >
            Cradle
          </span>
          {/* Smile curve */}
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            style={{ marginTop: "-20px" }}
          >
            <path
              d="M 10 10 Q 100 50 190 10 Q 100 35 10 10 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            color: "#cccccc",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          構想から定着まで。本気で伴走するAI導入パートナー
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "24px",
            color: "#666666",
          }}
        >
          crdl.co.jp
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

