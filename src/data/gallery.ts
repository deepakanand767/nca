export interface GalleryItem {
  label: string;
  category: string;
  // gradient placeholder — replace with a real photo by swapping in an <Image src> later.
  from: string;
  to: string;
}

export const gallery: GalleryItem[] = [
  { label: "Net Practice", category: "Training", from: "brand.500", to: "brand.800" },
  { label: "Match Day", category: "Matches", from: "brand.700", to: "gold.700" },
  { label: "Junior Camp", category: "Juniors", from: "brand.400", to: "brand.700" },
  { label: "Floodlit Session", category: "Facilities", from: "brand.800", to: "brand.950" },
  { label: "Award Ceremony", category: "Achievements", from: "gold.600", to: "brand.800" },
  { label: "Fitness Drills", category: "Training", from: "brand.600", to: "brand.900" },
  { label: "Team Huddle", category: "Matches", from: "brand.700", to: "brand.500" },
  { label: "Bowling Lab", category: "Facilities", from: "brand.900", to: "gold.700" },
];
