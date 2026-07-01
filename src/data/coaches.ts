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
    name: "Prince",
    role: "Certified Head Coach & Founder",
    experience: "20+ years",
    specialty: "Batting & Game Strategy",
    initials: "P",
    from: "brand.600",
    to: "brand.800",
  },
];
