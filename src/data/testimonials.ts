export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My son joined NCA two years ago and the transformation has been incredible. The coaches genuinely care about every player and his confidence on the field has soared.",
    name: "Sunita Sharma",
    role: "Parent of a Junior player",
    initials: "SS",
  },
  {
    quote:
      "The personalised coaching and video analysis helped me fix flaws I never knew I had. I earned my district selection within a year of training here.",
    name: "Karan Verma",
    role: "District-level cricketer",
    initials: "KV",
  },
  {
    quote:
      "World-class facilities right here in Nangal. The bowling machines and floodlit ground mean I can train seriously without travelling to the city.",
    name: "Manpreet Singh",
    role: "Senior club cricketer",
    initials: "MS",
  },
];
