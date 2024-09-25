import { Epizode } from "./Epizode";
import { epizodesData } from "../data";
import { MediaRecorder } from "./Media-Recorder";
import { FC } from "react";

export type EpizodeTypes = {
  img: string;
  id: number;
  podcastName: string;
  epizodeName: string;
  sound: string;
};
export const AllEpizodes: FC = () => {
  return (
    <>
      {epizodesData.map((epizode: EpizodeTypes) => {
        return (
          <Epizode
            img={epizode.img}
            id={epizode.id}
            podcastName={epizode.podcastName}
            epizodeName={epizode.epizodeName}
            sound={epizode.sound}
          />
        );
      })}
      <MediaRecorder />
    </>
  );
};
