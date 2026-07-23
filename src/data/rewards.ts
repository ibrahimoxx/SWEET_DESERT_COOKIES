export const rewardsTiers = [
  {
    name: "Bronze",
    color: "#CD7F32",
    pointsPerDollar: 10,
    threshold: 0,
    perks: ["Exclusive member offers via notifications"],
  },
  {
    name: "Silver",
    color: "#C0C0C0",
    pointsPerDollar: 11,
    threshold: 500,
    perks: [
      "Exclusive member offers via notifications",
      "Birthday free single voucher",
    ],
  },
  {
    name: "Gold",
    color: "#FFD700",
    pointsPerDollar: 12,
    threshold: 1500,
    perks: [
      "Exclusive member offers via notifications",
      "Birthday free single voucher",
      "Complimentary gift wrapping with bow/sticker",
      "Early access to weekly product video",
    ],
  },
  {
    name: "Pink",
    color: "#FFB9CD",
    pointsPerDollar: 13,
    threshold: 2500,
    perks: [
      "Exclusive member offers via notifications",
      "Birthday free single voucher",
      "Complimentary gift wrapping with bow/sticker",
      "Early access to weekly product video",
      "5% pre-order discount (Sundays 12-6pm MST)",
    ],
  },
] as const;
