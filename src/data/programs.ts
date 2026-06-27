import type { IconType } from "react-icons";
import {
  GiCricketBat,
  GiBallGlow,
  GiWhistle,
  GiRunningShoe,
} from "react-icons/gi";
import { FaUserNinja, FaUsers } from "react-icons/fa6";

export interface Program {
  title: string;
  age: string;
  icon: IconType;
  description: string;
  highlights: string[];
}

export const programs: Program[] = [
  {
    title: "Junior Cubs",
    age: "Ages 6 – 12",
    icon: FaUsers,
    description:
      "Fun-first foundation coaching that builds basic technique, coordination and a lifelong love for the game.",
    highlights: ["Basic batting & bowling", "Fielding fundamentals", "Fitness through play"],
  },
  {
    title: "Youth Development",
    age: "Ages 13 – 17",
    icon: GiCricketBat,
    description:
      "Structured skill development with match scenarios to prepare young cricketers for district and state trials.",
    highlights: ["Advanced technique", "Match simulation", "Trial preparation"],
  },
  {
    title: "Senior & Adult",
    age: "Ages 18+",
    icon: FaUserNinja,
    description:
      "Competitive coaching and net sessions for club, league and corporate cricketers who want to keep sharpening their edge.",
    highlights: ["League readiness", "Strategy sessions", "Flexible timings"],
  },
  {
    title: "Fast Bowling Lab",
    age: "All Levels",
    icon: GiBallGlow,
    description:
      "Specialised pace-bowling program focused on biomechanics, run-up, seam position and injury-free workloads.",
    highlights: ["Action analysis", "Speed & swing", "Workload management"],
  },
  {
    title: "Batting Masterclass",
    age: "All Levels",
    icon: GiWhistle,
    description:
      "Focused batting intensives covering footwork, shot selection and game awareness against varied bowling.",
    highlights: ["Footwork drills", "Shot selection", "Bowling-machine reps"],
  },
  {
    title: "1-on-1 Personal Coaching",
    age: "By Appointment",
    icon: GiRunningShoe,
    description:
      "Fully personalised sessions with a dedicated coach and a tailored plan to fast-track your specific goals.",
    highlights: ["Custom plan", "Video feedback", "Dedicated coach"],
  },
];
