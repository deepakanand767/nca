export interface Coach {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  initials: string;
  // gradient placeholder for the avatar — swap for a real photo URL later.
  from: string;
  to: string;
}

export const coaches: Coach[] = [
  {
    name: "Rajinder Singh",
    role: "Head Coach & Founder",
    experience: "20+ years",
    specialty: "Batting & Game Strategy",
    initials: "RS",
    from: "brand.600",
    to: "brand.800",
  },
  {
    name: "Amarjeet Kaur",
    role: "Bowling Coach",
    experience: "12 years",
    specialty: "Pace & Swing Bowling",
    initials: "AK",
    from: "brand.500",
    to: "brand.700",
  },
  {
    name: "Vikram Thakur",
    role: "Fielding & Fitness Coach",
    experience: "10 years",
    specialty: "Athleticism & Conditioning",
    initials: "VT",
    from: "gold.600",
    to: "brand.700",
  },
  {
    name: "Harpreet Gill",
    role: "Junior Development Coach",
    experience: "8 years",
    specialty: "Foundation & Technique",
    initials: "HG",
    from: "brand.600",
    to: "gold.700",
  },
];
