import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mahmoud Adel — Embedded Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #070f1c 0%, #0b1628 50%, #081220 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blob top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Glow blob bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.25)",
              borderRadius: "999px",
              padding: "6px 18px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22d3ee",
              }}
            />
            <span style={{ color: "#22d3ee", fontSize: "16px", fontWeight: 500 }}>
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 800,
              letterSpacing: "-2px",
              margin: 0,
              background: "linear-gradient(135deg, #e2e8f0 20%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1,
            }}
          >
            Mahmoud Adel
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "32px",
              color: "rgba(148,163,184,0.9)",
              marginTop: "16px",
              fontWeight: 400,
              letterSpacing: "0.5px",
            }}
          >
            Embedded Systems Engineer
          </p>

          {/* Divider */}
          <div
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
              margin: "28px 0",
            }}
          />

          {/* Stats row */}
          <div style={{ display: "flex", gap: "60px" }}>
            {[
              { value: "50+", label: "Projects" },
              { value: "2+", label: "Years" },
              { value: "10+", label: "Medical Devices" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "42px", fontWeight: 700, color: "#22d3ee" }}>
                  {s.value}
                </span>
                <span style={{ fontSize: "16px", color: "rgba(148,163,184,0.7)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Location */}
          <p
            style={{
              marginTop: "32px",
              fontSize: "18px",
              color: "rgba(148,163,184,0.5)",
              letterSpacing: "0.1em",
            }}
          >
            📍 Alexandria, Egypt · Comet Lab
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
