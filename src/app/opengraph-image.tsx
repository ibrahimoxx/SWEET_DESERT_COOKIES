import { ImageResponse } from "next/og";

export const alt = "Sweet Desert — Fresh Baked Cookies and Desserts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a0a00",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-2px",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          SWEET DESERT
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#d4a96a",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Fresh baked cookies and desserts — rotating weekly menu
        </div>
      </div>
    ),
    size,
  );
}
