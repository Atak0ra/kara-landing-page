// kara-video/src/scenes/Scene7Guarantees.tsx
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

const ITEMS = [
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#4AAB87" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% on-premise",
    desc: "vos données restent chez vous",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#4AAB87" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Français + langues locales",
    desc: "",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#4AAB87" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
      </svg>
    ),
    title: "Fonctionne hors-ligne",
    desc: "",
  },
] as const;

interface GuaranteeBlockProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  startFrame: number;
}

const GuaranteeBlock: React.FC<GuaranteeBlockProps> = ({ icon, title, desc, startFrame }) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  const opacity = interpolate(localFrame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });
  const translateY = interpolate(localFrame, [0, 25], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASING,
  });

  return (
    <div
      style={{
        opacity,
        translate: `0px ${translateY}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 20,
        padding: "44px 32px",
        width: 260,
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {icon}
      <div
        style={{
          fontFamily: inter,
          fontSize: 32,
          fontWeight: 600,
          color: COLORS.textOnDark,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      {desc ? (
        <div
          style={{
            fontFamily: inter,
            fontSize: 26,
            fontWeight: 400,
            color: COLORS.secondaryOnDark,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {desc}
        </div>
      ) : null}
    </div>
  );
};

export const Scene7Guarantees: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: COLORS.darkBg,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{ display: "flex", gap: 32 }}>
      {ITEMS.map((item, i) => (
        <GuaranteeBlock
          key={i}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          startFrame={i * 40}
        />
      ))}
    </div>
  </AbsoluteFill>
);
