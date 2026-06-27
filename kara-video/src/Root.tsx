import { Composition } from "remotion";
import { AnimatedText } from "./components/AnimatedText";
import { TypewriterText } from "./components/TypewriterText";
import { MockupRecorder } from "./components/MockupRecorder";
import { MockupTimeline } from "./components/MockupTimeline";
import { MockupSearch } from "./components/MockupSearch";
import { inter } from "./fonts";

export const RemotionRoot = () => (
  <>
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
    <Composition
      id="TestTypewriter"
      component={() => (
        <div
          style={{
            width: 1080,
            height: 1080,
            backgroundColor: "#F5F4F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
          }}
        >
          <TypewriterText
            text="Transcription automatique en français."
            totalFrames={120}
            fontFamily={inter}
            fontSize={52}
            color="#1A1A1A"
          />
        </div>
      )}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1080}
    />
    <Composition
      id="TestRecorder"
      component={() => (
        <div
          style={{
            width: 1080,
            height: 1080,
            backgroundColor: "#F5F4F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MockupRecorder />
        </div>
      )}
      durationInFrames={120}
      fps={30}
      width={1080}
      height={1080}
    />
    <Composition
      id="TestTimeline"
      component={() => (
        <div
          style={{
            width: 1080,
            height: 1080,
            backgroundColor: "#F5F4F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
          }}
        >
          <MockupTimeline />
        </div>
      )}
      durationInFrames={200}
      fps={30}
      width={1080}
      height={1080}
    />
    <Composition
      id="TestSearch"
      component={() => (
        <div
          style={{
            width: 1080,
            height: 1080,
            backgroundColor: "#F5F4F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
          }}
        >
          <MockupSearch />
        </div>
      )}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1080}
    />
  </>
);
