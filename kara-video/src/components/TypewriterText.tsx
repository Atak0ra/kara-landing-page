import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

interface TypewriterTextProps {
  text: string;
  totalFrames: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  totalFrames,
  fontSize = 52,
  color = "#1A1A1A",
  fontFamily,
  fontWeight = 400,
  showCursor = true,
}) => {
  const frame = useCurrentFrame();
  const charsToShow = Math.floor(
    interpolate(frame, [0, totalFrames], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    })
  );
  const cursorVisible = frame % 20 < 10 && charsToShow < text.length;

  return (
    <span
      style={{
        fontFamily,
        fontSize,
        color,
        fontWeight,
        lineHeight: 1.4,
      }}
    >
      {text.slice(0, charsToShow)}
      {showCursor && (
        <span style={{ opacity: cursorVisible ? 1 : 0, color: "#4AAB87" }}>
          |
        </span>
      )}
    </span>
  );
};
