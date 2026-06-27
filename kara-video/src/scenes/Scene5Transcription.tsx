// kara-video/src/scenes/Scene5Transcription.tsx
import React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { TypewriterText } from "../components/TypewriterText";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

// Badge appears after line 1 is typed
const StructuredBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const scale = interpolate(frame, [0, 20], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  return (
    <div
      style={{
        opacity,
        scale: String(scale),
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        backgroundColor: `rgba(74, 171, 135, 0.15)`,
        border: `2px solid ${COLORS.accent}`,
        borderRadius: 40,
        padding: "10px 24px",
      }}
    >
      {/* Check icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={COLORS.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span
        style={{
          fontFamily: inter,
          fontSize: 30,
          fontWeight: 600,
          color: COLORS.accent,
        }}
      >
        structuré
      </span>
    </div>
  );
};

export const Scene5Transcription: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: COLORS.lightBg,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 100,
      paddingRight: 100,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
      }}
    >
      {/* Line 1 — types over 100 frames */}
      <TypewriterText
        text="Transcription automatique en français."
        totalFrames={100}
        fontFamily={inter}
        fontSize={52}
        color={COLORS.textOnLight}
        fontWeight={400}
      />

      {/* Badge appears at frame 110 */}
      <Sequence from={110} durationInFrames={220} layout="none">
        <StructuredBadge />
      </Sequence>

      {/* Line 2 — starts at 150 */}
      <Sequence from={150} durationInFrames={180} layout="none">
        <TypewriterText
          text="Structurée par type de consultation."
          totalFrames={100}
          fontFamily={inter}
          fontSize={48}
          color={COLORS.secondaryOnLight}
          fontWeight={400}
          showCursor={false}
        />
      </Sequence>
    </div>
  </AbsoluteFill>
);
