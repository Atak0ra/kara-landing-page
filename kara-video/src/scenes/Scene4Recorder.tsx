// kara-video/src/scenes/Scene4Recorder.tsx
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { MockupRecorder } from "../components/MockupRecorder";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

export const Scene4Recorder: React.FC = () => {
  const frame = useCurrentFrame();

  const taglineOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const taglineTranslateY = interpolate(frame, [0, 25], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.lightBg,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 72,
        }}
      >
        {/* Tagline */}
        <div
          style={{
            opacity: taglineOpacity,
            translate: `0px ${taglineTranslateY}px`,
            fontFamily: inter,
            fontSize: 56,
            fontWeight: 400,
            color: COLORS.textOnLight,
            textAlign: "center",
          }}
        >
          Appuyez. Parlez. C'est tout.
        </div>

        {/* Recorder mockup */}
        <MockupRecorder />
      </div>
    </AbsoluteFill>
  );
};
