// kara-video/src/components/MockupTimeline.tsx
import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, EASING } from "../constants";
import { inter } from "../fonts";

const ENTRIES = [
  { date: "15 jan", type: "Consultation", text: "Douleur thoracique, ECG normal" },
  { date: "22 jan", type: "Suivi",        text: "Tension stable. Continuer traitement." },
  { date: "8 fév",  type: "Urgence",      text: "Chute RX genou droit — pas de fracture." },
  { date: "15 fév", type: "Consultation", text: "Bilan annuel, bilan sanguin prescrit." },
] as const;

const STAGGER = 25;

export const MockupTimeline: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 760 }}>
      {ENTRIES.map((entry, i) => {
        const start = i * STAGGER;
        const opacity = interpolate(frame, [start, start + 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: EASING,
        });
        const translateY = interpolate(frame, [start, start + 15], [24, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: EASING,
        });

        return (
          <div
            key={i}
            style={{
              opacity,
              translate: `0px ${translateY}px`,
              display: "flex",
              alignItems: "center",
              gap: 20,
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              padding: "18px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: inter,
                fontSize: 28,
                color: COLORS.secondaryOnLight,
                minWidth: 72,
                fontWeight: 400,
              }}
            >
              {entry.date}
            </div>
            <div
              style={{
                width: 3,
                height: 36,
                backgroundColor: COLORS.accent,
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: inter,
                  fontSize: 28,
                  color: COLORS.accent,
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {entry.type}
              </div>
              <div
                style={{
                  fontFamily: inter,
                  fontSize: 26,
                  color: COLORS.textOnLight,
                  opacity: 0.7,
                }}
              >
                {entry.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
