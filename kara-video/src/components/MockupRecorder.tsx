import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../constants";

const NUM_BARS = 9;

export const MockupRecorder: React.FC = () => {
  const frame = useCurrentFrame();

  // Outer ring pulses on a 60-frame cycle
  const pulseScale = interpolate(
    frame % 60,
    [0, 30, 60],
    [1, 1.06, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Fade-in of the whole component
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
      }}
    >
      {/* Record button */}
      <div style={{ position: "relative", width: 160, height: 160 }}>
        {/* Outer pulse ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backgroundColor: `rgba(74, 171, 135, 0.20)`,
            scale: String(pulseScale),
          }}
        />
        {/* Green button */}
        <div
          style={{
            position: "absolute",
            inset: 12,
            borderRadius: "50%",
            backgroundColor: COLORS.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Microphone SVG */}
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="2" width="6" height="11" rx="3" fill="#FFFFFF" stroke="none" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <line x1="8" y1="21" x2="16" y2="21" />
          </svg>
        </div>
      </div>

      {/* Animated waveform */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {Array.from({ length: NUM_BARS }).map((_, i) => {
          const phaseOffset = (i / NUM_BARS) * Math.PI * 2;
          const sinValue = Math.sin(frame / 12 + phaseOffset);
          const barHeight = interpolate(sinValue, [-1, 1], [10, 72], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                width: 10,
                height: barHeight,
                borderRadius: 5,
                backgroundColor: COLORS.accent,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
