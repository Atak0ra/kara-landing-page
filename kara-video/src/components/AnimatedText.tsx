// kara-video/src/components/AnimatedText.tsx
import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

interface AnimatedTextProps {
  text: string;
  delayPerWord?: number;
  fadeDuration?: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  textAlign?: "left" | "center" | "right";
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delayPerWord = 10,
  fadeDuration = 15,
  fontSize = 88,
  color = "#FFFFFF",
  fontFamily,
  fontWeight = 400,
  textAlign = "center",
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.3em",
        justifyContent: textAlign === "center" ? "center" : textAlign === "right" ? "flex-end" : "flex-start",
      }}
    >
      {words.map((word, i) => {
        const wordStart = i * delayPerWord;
        const opacity = interpolate(
          frame,
          [wordStart, wordStart + fadeDuration],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }
        );
        const translateY = interpolate(
          frame,
          [wordStart, wordStart + fadeDuration],
          [16, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }
        );
        return (
          <span
            key={i}
            style={{
              opacity,
              translate: `0px ${translateY}px`,
              fontFamily,
              fontSize,
              color,
              fontWeight,
              lineHeight: 1.2,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
