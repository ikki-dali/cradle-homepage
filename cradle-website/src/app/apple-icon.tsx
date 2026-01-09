import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "22px",
        }}
      >
        <span
          style={{
            fontSize: "100px",
            fontWeight: "400",
            color: "#ffffff",
            letterSpacing: "-4px",
            fontFamily: "system-ui",
            marginTop: "-10px",
          }}
        >
          C
        </span>
        {/* Smile curve */}
        <svg
          width="80"
          height="20"
          viewBox="0 0 80 20"
          style={{ marginTop: "-15px" }}
        >
          <path
            d="M 5 5 Q 40 25 75 5 Q 40 18 5 5 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

