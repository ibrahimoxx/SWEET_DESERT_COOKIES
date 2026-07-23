interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Order", href: "/order" },
  { label: "Locations", href: "/stores" },
  { label: "Catering", href: "/catering" },
  { label: "Gift Cards", href: "/giftcards" },
  { label: "Merch", href: "#", external: true },
];

export const footerCompanyLinks = [
  { label: "Order", href: "/order" },
  { label: "Our Story", href: "/our-story" },
  { label: "Rewards", href: "/rewards" },
  { label: "Nutrition & Allergy", href: "/nutrition" },
  { label: "Support", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Gift Card Balance", href: "/giftcards" },
  { label: "Flavors Map", href: "/stores" },
  { label: "Dirty Sodas", href: "/dirty-sodas" },
] as const;

export const footerGetInvolvedLinks = [
  { label: "Press", href: "/press" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Franchising", href: "/franchising" },
  { label: "Franchise Store Jobs", href: "/jobs" },
  { label: "HQ Careers", href: "/careers" },
  { label: "Community", href: "/community" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
] as const;
