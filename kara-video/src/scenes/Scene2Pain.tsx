// kara-video/src/scenes/Scene2Pain.tsx
import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

const LINES = [
  "Notes griffonnées. Dossiers incomplets.",
  "Temps perdu après chaque patient.",
  "Informations perdues entre soignants.",
] as const;

const AnimatedLine: React.FC<{ text: string; color?: string }> = ({
  text,
  color = "#FFFFFF",
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const translateY = interpolate(frame, [0, 20], [32, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  return (
    <div
      style={{
        opacity,
        translate: `0px ${translateY}px`,
        fontFamily: inter,
        fontSize: 52,
        fontWeight: 400,
        color,
        lineHeight: 1.3,
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
};

export const Scene2Pain: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: COLORS.darkBg,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 100,
      paddingRight: 100,
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 52 }}>
      <Sequence from={0} durationInFrames={360} layout="none">
        <AnimatedLine text={LINES[0]} color={COLORS.textOnDark} />
      </Sequence>
      <Sequence from={60} durationInFrames={300} layout="none">
        <AnimatedLine text={LINES[1]} color={COLORS.secondaryOnDark} />
      </Sequence>
      <Sequence from={120} durationInFrames={240} layout="none">
        <AnimatedLine text={LINES[2]} color={COLORS.secondaryOnDark} />
      </Sequence>
    </div>
  </AbsoluteFill>
);
