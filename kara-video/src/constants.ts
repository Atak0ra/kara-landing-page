import { Easing } from "remotion";

export const COLORS = {
  darkBg: "#1A1A1A",
  lightBg: "#F5F4F0",
  accent: "#4AAB87",
  textOnDark: "#FFFFFF",
  textOnLight: "#1A1A1A",
  secondaryOnDark: "rgba(255,255,255,0.60)",
  secondaryOnLight: "#6B6560",
} as const;

export const EASING = Easing.bezier(0.16, 1, 0.3, 1);

export const SCENE_FRAMES = {
  s1: { from: 0,    duration: 300  },
  s2: { from: 300,  duration: 360  },
  s3: { from: 660,  duration: 300  },
  s4: { from: 960,  duration: 450  },
  s5: { from: 1410, duration: 330  },
  s6: { from: 1740, duration: 420  },
  s7: { from: 2160, duration: 390  },
  s8: { from: 2550, duration: 300  },
} as const;
