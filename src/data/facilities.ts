import type { IconType } from "react-icons";
import { GiCricketBat, GiGymBag, GiStopwatch } from "react-icons/gi";
import { FaVideo, FaUsers } from "react-icons/fa6";

export interface Facility {
  title: string;
  description: string;
  icon: IconType;
}

export const facilities: Facility[] = [
  {
    title: "Turf & Matting Nets",
    description:
      "Multiple practice nets with turf and matting wickets that replicate real match conditions all year round.",
    icon: GiCricketBat,
  },
  {
    title: "Floodlit Ground",
    description:
      "A full-size ground with floodlights for evening practice, net sessions and competitive match play.",
    icon: GiStopwatch,
  },
  {
    title: "Strength & Fitness Zone",
    description:
      "A dedicated fitness area with strength, agility and conditioning equipment built for cricketers.",
    icon: GiGymBag,
  },
  {
    title: "Video Analysis",
    description:
      "Side-by-side video review of your technique so every session turns into measurable improvement.",
    icon: FaVideo,
  },
  {
    title: "Match Practice",
    description:
      "Regular intra-academy and inter-club matches give players real game time and big-match temperament.",
    icon: FaUsers,
  },
];
