// kara-video/src/KaraVideo.tsx
import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_FRAMES } from "./constants";

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

interface KaraVideoProps {
  contactUrl: string;
}

export const KaraVideo: React.FC<KaraVideoProps> = ({ contactUrl }) => {
  const { s1, s2, s3, s4, s5, s6, s7, s8 } = SCENE_FRAMES;

  return (
    <AbsoluteFill>
      <Sequence from={s1.from} durationInFrames={s1.duration}>
        <PlaceholderScene label="Scene 1 — Hook" bg="#1A1A1A" />
      </Sequence>
      <Sequence from={s2.from} durationInFrames={s2.duration}>
        <PlaceholderScene label="Scene 2 — Pain" bg="#1A1A1A" />
      </Sequence>
      <Sequence from={s3.from} durationInFrames={s3.duration}>
        <PlaceholderScene label="Scene 3 — Reveal" bg="#F5F4F0" />
      </Sequence>
      <Sequence from={s4.from} durationInFrames={s4.duration}>
        <PlaceholderScene label="Scene 4 — Recorder" bg="#F5F4F0" />
      </Sequence>
      <Sequence from={s5.from} durationInFrames={s5.duration}>
        <PlaceholderScene label="Scene 5 — Transcription" bg="#F5F4F0" />
      </Sequence>
      <Sequence from={s6.from} durationInFrames={s6.duration}>
        <PlaceholderScene label="Scene 6 — Dossier" bg="#F5F4F0" />
      </Sequence>
      <Sequence from={s7.from} durationInFrames={s7.duration}>
        <PlaceholderScene label="Scene 7 — Guarantees" bg="#1A1A1A" />
      </Sequence>
      <Sequence from={s8.from} durationInFrames={s8.duration}>
        <PlaceholderScene label="Scene 8 — CTA" bg="#1A1A1A" />
      </Sequence>
    </AbsoluteFill>
  );
};
