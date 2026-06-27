import { Composition } from "remotion";
import { AnimatedText } from "./components/AnimatedText";
import { inter } from "./fonts";

export const RemotionRoot = () => (
  <Composition
    id="TestAnimatedText"
    component={() => (
      <div
        style={{
          width: 1080,
          height: 1080,
          backgroundColor: "#1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <AnimatedText
          text="Combien de consultations perdez-vous faute de notes ?"
          delayPerWord={10}
          fontFamily={inter}
          fontSize={88}
          color="#FFFFFF"
        />
      </div>
    )}
    durationInFrames={300}
    fps={30}
    width={1080}
    height={1080}
  />
);
