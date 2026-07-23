export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  stat: string;
  label: string;
}

export const milestones: Milestone[] = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Sweet Desert was born from a passion for bringing people together through exceptional desserts. Our first location opened its doors to the community.",
  },
  {
    year: "2024",
    title: "Our Signature Style",
    description:
      "We developed our signature packaging and open-kitchen concept, letting customers watch every treat come to life in real time.",
  },
  {
    year: "2025",
    title: "Growing Community",
    description:
      "Sweet Desert expanded its presence, building a loyal community of dessert lovers who keep coming back for our weekly rotating menu.",
  },
  {
    year: "Today",
    title: "A Sweet Celebration",
    description:
      "With a rotating menu and a passionate community, Sweet Desert continues to bring friends and family together one treat at a time.",
  },
];

export const companyStats: Stat[] = [
  { stat: "1+", label: "Locations" },
  { stat: "Weekly", label: "Rotating Menu" },
  { stat: "2024", label: "Year Founded" },
  { stat: "6", label: "New Flavors Weekly" },
];
