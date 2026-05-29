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
    year: "2017",
    title: "The Beginning",
    description:
      "Co-founders Jason McGowan and Sawyer Hemsley teamed up on a quest to bake the perfect chocolate chip cookie. The first Crumbl location opened in Logan, Utah.",
  },
  {
    year: "2018",
    title: "The Iconic Pink Box",
    description:
      "Sawyer Hemsley developed the iconic 4-pack pink box with college classmates, creating the signature Crumbl packaging known worldwide.",
  },
  {
    year: "2019",
    title: "Rapid Growth",
    description:
      "Crumbl expanded to dozens of locations across multiple states, with lines forming around the block for the weekly rotating menu.",
  },
  {
    year: "2020",
    title: "Going Viral",
    description:
      "Crumbl became a social media sensation, with millions of views on TikTok and Instagram as fans shared their weekly flavor reviews.",
  },
  {
    year: "2023",
    title: "1,000 Bakeries",
    description:
      "Crumbl surpassed 1,000 bakery locations nationwide, making it the fastest-growing cookie company in America.",
  },
  {
    year: "Today",
    title: "A Sweet Celebration",
    description:
      "With 300+ rotating flavors and a passionate community of cookie lovers, Crumbl continues to bring friends and family together.",
  },
];

export const companyStats: Stat[] = [
  { stat: "1,000+", label: "Bakeries Nationwide" },
  { stat: "300+", label: "Unique Flavors" },
  { stat: "2017", label: "Year Founded" },
  { stat: "6", label: "New Flavors Weekly" },
];
