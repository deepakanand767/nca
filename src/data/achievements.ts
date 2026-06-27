import type { IconType } from "react-icons";
import { FaUsers, FaTrophy, FaRankingStar } from "react-icons/fa6";
import { GiCricketBat } from "react-icons/gi";

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  icon: IconType;
}

export const achievements: Achievement[] = [
  { value: 500, suffix: "+", label: "Students Trained", icon: FaUsers },
  { value: 25, suffix: "+", label: "Trophies Won", icon: FaTrophy },
  { value: 30, suffix: "+", label: "State Selections", icon: FaRankingStar },
  { value: 10, suffix: "+", label: "Years of Coaching", icon: GiCricketBat },
];
