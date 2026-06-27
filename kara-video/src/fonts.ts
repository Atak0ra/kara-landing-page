import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadCormorant } from "@remotion/google-fonts/CormorantGaramond";

export const { fontFamily: inter } = loadFont("normal", {
  weights: ["400", "600"],
  subsets: ["latin"],
});

export const { fontFamily: cormorant } = loadCormorant("normal", {
  weights: ["300", "400"],
  subsets: ["latin"],
});
