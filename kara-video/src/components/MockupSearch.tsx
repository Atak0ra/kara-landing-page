// kara-video/src/components/MockupSearch.tsx
import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

interface MockupSearchProps {
  startFrame?: number;
  query?: string;
  resultText?: string;
}

export const MockupSearch: React.FC<MockupSearchProps> = ({
  startFrame = 0,
  query = "douleur thoracique jan",
  resultText = "15 jan — Douleur thoracique, ECG normal",
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  // Fade in search bar
  const barOpacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // Type the query over 90 frames
  const charsToShow = Math.max(
    0,
    Math.floor(
      interpolate(localFrame, [0, 90], [0, query.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  // Result appears after typing is done
  const resultOpacity = interpolate(localFrame, [100, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  const cursorVisible = localFrame % 20 < 10 && charsToShow < query.length;

  return (
    <div style={{ width: 760, display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Search bar */}
      <div
        style={{
          opacity: barOpacity,
          backgroundColor: "#FFFFFF",
          borderRadius: 14,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        {/* Search icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.secondaryOnLight}
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <div
          style={{
            fontFamily: inter,
            fontSize: 32,
            color: COLORS.textOnLight,
            flex: 1,
          }}
        >
          {query.slice(0, charsToShow)}
          <span style={{ opacity: cursorVisible ? 1 : 0, color: COLORS.accent }}>
            |
          </span>
        </div>
      </div>

      {/* Result */}
      <div
        style={{
          opacity: resultOpacity,
          backgroundColor: "#FFFFFF",
          borderRadius: 14,
          padding: "20px 28px",
          borderLeft: `5px solid ${COLORS.accent}`,
          fontFamily: inter,
          fontSize: 30,
          color: COLORS.textOnLight,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {resultText}
      </div>
    </div>
  );
};
