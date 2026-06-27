// kara-video/src/scenes/Scene8CTA.tsx
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, EASING } from "../constants";
import { cormorant, inter } from "../fonts";

interface Scene8CTAProps {
  contactUrl: string;
}

export const Scene8CTA: React.FC<Scene8CTAProps> = ({ contactUrl }) => {
  const frame = useCurrentFrame();

  // KARA wordmark
  const karaOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const karaTranslateY = interpolate(frame, [0, 30], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // Green line
  const lineWidth = interpolate(frame, [35, 75], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // CTA text
  const ctaOpacity = interpolate(frame, [80, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  // URL
  const urlOpacity = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.darkBg,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* KARA wordmark */}
        <div
          style={{
            opacity: karaOpacity,
            translate: `0px ${karaTranslateY}px`,
            fontFamily: cormorant,
            fontSize: 152,
            fontWeight: 300,
            color: COLORS.textOnDark,
            letterSpacing: "0.14em",
            lineHeight: 1,
          }}
        >
          KARA
        </div>

        {/* Green line */}
        <div
          style={{
            width: lineWidth,
            height: 3,
            backgroundColor: COLORS.accent,
            borderRadius: 2,
          }}
        />

        {/* CTA text */}
        <div
          style={{
            opacity: ctaOpacity,
            fontFamily: inter,
            fontSize: 48,
            fontWeight: 400,
            color: COLORS.textOnDark,
            textAlign: "center",
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          Testez KARA dans votre structure.
        </div>

        {/* Contact URL */}
        <div
          style={{
            opacity: urlOpacity,
            fontFamily: inter,
            fontSize: 40,
            fontWeight: 600,
            color: COLORS.accent,
            letterSpacing: "0.04em",
          }}
        >
          {contactUrl}
        </div>
      </div>
    </AbsoluteFill>
  );
};
