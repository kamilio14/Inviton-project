// import sound from "../audio/rec.mp3";
import { useState } from "react";

type EpizodeProps = {
  img: string;
  id: number;
  podcastName: string;
  epizodeName: string;
  sound: string;
};

export const Epizode = ({
  img,
  id,
  podcastName,
  epizodeName,
  sound,
}: EpizodeProps) => {
  const [activeAudio, setActiveAudio] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleClick = (): void => {
    if (activeAudio) {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setActiveAudio(false);
    } else {
      const newAudio = new Audio(sound);
      newAudio.play();
      setAudio(newAudio);
      setActiveAudio(true);
    }
  };

  return (
    <div
      className="flex flex-row items-center p-4 pr-8 h-28 hover:bg-slate-700 hover:cursor-pointer"
      onClick={handleClick}
    >
      <img src={img} className="w-24 rounded-2xl " />
      <div className="flex flex-col p-6">
        <h1 className="text-xl  text-white">{epizodeName}</h1>
        <h1 className="text-gray-400">{podcastName}</h1>
      </div>
      <i className="fa-solid fa-ellipsis-vertical ml-auto text-2xl hover:cursor-pointer text-gray-400"></i>
    </div>
  );
};
