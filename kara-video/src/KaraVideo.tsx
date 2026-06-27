// kara-video/src/KaraVideo.tsx
import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_FRAMES } from "./constants";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Pain } from "./scenes/Scene2Pain";
import { Scene3Reveal } from "./scenes/Scene3Reveal";
import { Scene4Recorder } from "./scenes/Scene4Recorder";
import { Scene5Transcription } from "./scenes/Scene5Transcription";
import { Scene6DossierSearch } from "./scenes/Scene6DossierSearch";
import { Scene7Guarantees } from "./scenes/Scene7Guarantees";

// Scene imports (will be added incrementally in later tasks)
// Placeholder until scenes are implemented:
const PlaceholderScene: React.FC<{ label: string; bg: string }> = ({ label, bg }) => (
  <AbsoluteFill
    style={{
      backgroundColor: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 64,
      color: bg === "#1A1A1A" ? "#FFFFFF" : "#1A1A1A",
      fontFamily: "sans-serif",
    }}
  >
    {label}
  </AbsoluteFill>
);

export interface KaraVideoProps {
  contactUrl?: string;
}

export const KaraVideo: React.FC<KaraVideoProps> = ({ contactUrl = "kara.health/demo" }) => {
  const { s1, s2, s3, s4, s5, s6, s7, s8 } = SCENE_FRAMES;

  return (
    <AbsoluteFill>
      <Sequence from={s1.from} durationInFrames={s1.duration}>
        <Scene1Hook />
      </Sequence>
      <Sequence from={s2.from} durationInFrames={s2.duration}>
        <Scene2Pain />
      </Sequence>
      <Sequence from={s3.from} durationInFrames={s3.duration}>
        <Scene3Reveal />
      </Sequence>
      <Sequence from={s4.from} durationInFrames={s4.duration}>
        <Scene4Recorder />
      </Sequence>
      <Sequence from={s5.from} durationInFrames={s5.duration}>
        <Scene5Transcription />
      </Sequence>
      <Sequence from={s6.from} durationInFrames={s6.duration}>
        <Scene6DossierSearch />
      </Sequence>
      <Sequence from={s7.from} durationInFrames={s7.duration}>
        <Scene7Guarantees />
      </Sequence>
      <Sequence from={s8.from} durationInFrames={s8.duration}>
        <PlaceholderScene label="Scene 8 — CTA" bg="#1A1A1A" />
      </Sequence>
    </AbsoluteFill>
  );
};
