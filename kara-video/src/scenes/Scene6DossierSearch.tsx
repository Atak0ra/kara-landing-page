// kara-video/src/scenes/Scene6DossierSearch.tsx
import React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { MockupSearch } from "../components/MockupSearch";
import { MockupTimeline } from "../components/MockupTimeline";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

const FadeInLabel: React.FC<{ text: string; color?: string; fontSize?: number }> = ({
  text,
  color = COLORS.textOnLight,
  fontSize = 52,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const translateY = interpolate(frame, [0, 20], [20, 0], {
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
        fontSize,
        fontWeight: 600,
        color,
      }}
    >
      {text}
    </div>
  );
};

export const Scene6DossierSearch: React.FC = () => (
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
        gap: 28,
        width: "100%",
        maxWidth: 760,
      }}
    >
      {/* Label 1 */}
      <Sequence from={0} durationInFrames={420} layout="none">
        <FadeInLabel text="Dossier vocal complet." />
      </Sequence>

      {/* Timeline */}
      <MockupTimeline />

      {/* Label 2 — appears at frame 160 */}
      <Sequence from={160} durationInFrames={260} layout="none">
        <FadeInLabel
          text="Retrouvable en 3 secondes."
          color={COLORS.accent}
          fontSize={48}
        />
      </Sequence>

      {/* Search — starts at frame 160 */}
      <Sequence from={160} durationInFrames={260} layout="none">
        <MockupSearch />
      </Sequence>
    </div>
  </AbsoluteFill>
);
