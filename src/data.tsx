import Sme from "./images/dennik-sme.jpeg";
import Retro from "./images/retro.jpeg";

import audio_01 from "./audio/01.mp3";
import audio_02 from "./audio/02.mp3";
import audio_03 from "./audio/03.mp3";
import audio_04 from "./audio/04.mp3";
import audio_05 from "./audio/05.mp3";
import audio_06 from "./audio/06.mp3";
import audio_07 from "./audio/07.mp3";
import audio_08 from "./audio/08.mp3";

import { EpizodeTypes } from "./components/All.epizodes";

export const epizodesData: Array<EpizodeTypes> = [
  {
    id: 1,
    podcastName: "Podcasty Retro Nation",
    epizodeName: "Popkult s Řezníkem Martym Pohlem",
    img: Retro,
    sound: audio_01,
  },
  {
    id: 2,
    podcastName: "Dobré ránno | denný podcast denníka SME",
    epizodeName:
      "Dobré ráno: Ľudstvo je fascinované mimozemšťanmi. Nájdeme ich?",
    img: Sme,
    sound: audio_02,
  },
  {
    id: 3,
    podcastName: "Dobré ránno | denný podcast denníka SME",
    epizodeName:
      "Zrada či alibizmus? Prečo by sa Rusi mohli vrátiť na športoviská",
    img: Sme,
    sound: audio_03,
  },
  {
    id: 4,
    podcastName: "Dobré ránno | denný podcast denníka SME",
    epizodeName:
      "Dobré ráno: Fico narazil v Štrasburgu, súd mu poslal ostrý odkaz",
    img: Sme,
    sound: audio_04,
  },
  {
    id: 5,
    podcastName: "Dobré ránno | denný podcast denníka SME",
    epizodeName:
      "Kto môže zaKto môže za drahé potraviny a pomáhajú zastropované ceny?",
    img: Sme,
    sound: audio_05,
  },
  {
    id: 6,
    podcastName: "Dobré ránno | denný podcast denníka SME",
    epizodeName:
      "Ukrajinský spravodaj: Netreba sa báť Bieloruska, hrozba je inde",
    img: Sme,
    sound: audio_06,
  },
  {
    id: 7,
    podcastName: "Dobré ránno | denný podcast denníka SME",
    epizodeName:
      "Dobré ráno: Putin straší jadrovou vojnou, na Ukrajine sa mu nedarí",
    img: Sme,
    sound: audio_07,
  },

  {
    id: 8,
    podcastName: "Podcasty Retro Nation",
    epizodeName: "Retro noty 79: Děsivé hudební světy Jasona Gravese",
    img: Retro,
    sound: audio_08,
  },
];
