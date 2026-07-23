import { brand } from "@/data/brand";

export interface CateringFeature {
  title: string;
  description: string;
  icon: string;
}

export const cateringFeatures: CateringFeature[] = [
  {
    title: "Schedule Ahead",
    description:
      "Need more cookies? Place an order in advance and make your event a hit! Download the app or order online to schedule your catering.",
    icon: "📅",
  },
  {
    title: "Weekly Rotating Flavors",
    description:
      "With our expansive menu of weekly rotating flavors, Sweet Desert has something for everyone. New flavors drop every week.",
    icon: "🍪",
  },
  {
    title: "White Glove Service",
    description:
      "We're excited to offer a white glove service tailored specifically for large orders. Our catering specialists handle everything.",
    icon: "🤝",
  },
];

export const cateringEventTypes: string[] = [
  "Weddings",
  "Corporate Events",
  "Birthday Parties",
  "School Functions",
  "Community Gatherings",
  "Holiday Celebrations",
];

export const cateringContact = {
  phone: brand.contact.phone,
  phoneTel: brand.contact.phoneTel,
  hours: brand.contact.hours,
};

export const cateringPackages = {
  minSize: 48,
  increment: 12,
  sizes: [48, 96],
};
