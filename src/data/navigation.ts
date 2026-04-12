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
  { label: "Merch", href: "https://merch.crumbl.com/", external: true },
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
  { label: "Crumbl Cares", href: "/crumbl-cares" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/CrumblCookies", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/crumblcookies", icon: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@crumblcookies", icon: "tiktok" },
  { label: "X", href: "https://x.com/CrumblCookies", icon: "x" },
  { label: "YouTube", href: "https://www.youtube.com/@CrumblCookies", icon: "youtube" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/crumbl-cookies", icon: "linkedin" },
  { label: "Pinterest", href: "https://www.pinterest.com/crumblcookies", icon: "pinterest" },
] as const;
