// kara-video/src/scenes/Scene1Hook.tsx
import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../constants";
import { cormorant } from "../fonts";

export const Scene1Hook: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: COLORS.darkBg,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 120,
      paddingRight: 120,
    }}
  >
    <AnimatedText
      text="Combien de consultations perdez-vous faute de notes ?"
      delayPerWord={12}
      fadeDuration={18}
      fontSize={88}
      color={COLORS.textOnDark}
      fontFamily={cormorant}
      fontWeight={300}
      textAlign="center"
    />
  </AbsoluteFill>
);
