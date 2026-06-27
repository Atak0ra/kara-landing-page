import { Composition } from "remotion";
import { KaraVideo, type KaraVideoProps } from "./KaraVideo";

export const RemotionRoot = () => (
  <Composition
    id="KaraVideo"
    component={KaraVideo}
    durationInFrames={2850}
    fps={30}
    width={1080}
    height={1080}
    defaultProps={{ contactUrl: "kara.health/demo" } satisfies KaraVideoProps}
  />
);
