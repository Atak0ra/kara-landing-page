// kara-video/src/scenes/Scene3Reveal.tsx
import React from "react";
import { AbsoluteFill, interpolate, interpolateColors, useCurrentFrame } from "remotion";
import { COLORS, EASING } from "../constants";
import { cormorant, inter } from "../fonts";

export const Scene3Reveal: React.FC = () => {
  const frame = useCurrentFrame();

  // Background fades from dark to light over 60 frames
  const bgColor = interpolateColors(frame, [0, 60], [COLORS.darkBg, COLORS.lightBg]);

  // KARA wordmark
  const karaOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const karaTranslateY = interpolate(frame, [30, 60], [48, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // Green accent line width (0 → 100px)
  const lineWidth = interpolate(frame, [70, 110], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // Tagline 1
  const tagline1Opacity = interpolate(frame, [110, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // Tagline 2
  const tagline2Opacity = interpolate(frame, [150, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bgColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* KARA wordmark */}
        <div
          style={{
            opacity: karaOpacity,
            translate: `0px ${karaTranslateY}px`,
            fontFamily: cormorant,
            fontSize: 172,
            fontWeight: 300,
            color: COLORS.textOnLight,
            letterSpacing: "0.14em",
            lineHeight: 1,
          }}
        >
          KARA
        </div>

        {/* Green accent line */}
        <div
          style={{
            width: lineWidth,
            height: 3,
            backgroundColor: COLORS.accent,
            borderRadius: 2,
          }}
        />

        {/* Tagline 1: Mémoire clinique vocale */}
        <div
          style={{
            opacity: tagline1Opacity,
            fontFamily: inter,
            fontSize: 48,
            fontWeight: 400,
            color: COLORS.textOnLight,
            letterSpacing: "0.04em",
          }}
        >
          Mémoire clinique vocale
        </div>

        {/* Tagline 2: Enregistrez. Transcrivez. Retrouvez. */}
        <div
          style={{
            opacity: tagline2Opacity,
            fontFamily: inter,
            fontSize: 38,
            fontWeight: 400,
            color: COLORS.secondaryOnLight,
            letterSpacing: "0.02em",
          }}
        >
          Enregistrez. Transcrivez. Retrouvez.
        </div>
      </div>
    </AbsoluteFill>
  );
};
