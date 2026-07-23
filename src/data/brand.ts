/**
 * Central brand identity config.
 * Single source of truth for all client-specific brand data.
 * Rebranding = edit this one file (+ globals.css colors, cookies.ts products).
 */

export const brand = {
  name: "Sweet Desert",
  legalName: "Sweet Desert, LLC",
  wordmark: "SWEET DESERT",
  fullName: "Sweet Desert",
  tagline:
    "Bringing friends and family together over a box of the best desserts in the world.",
  foundingYear: "2024",
  founders: ["Sweet Desert Team"],

  seo: {
    title: "Sweet Desert | Fresh Baked Cookies and Desserts",
    description:
      "Sweet Desert offers a rotating weekly menu of cookies and desserts baked fresh in-store daily. Order delivery, pickup, or catering.",
    ogDescription:
      "Sweet Desert offers a rotating weekly menu of cookies and desserts baked fresh in-store daily.",
    siteName: "Sweet Desert",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sweetdesert.com",
  },

  contact: {
    supportEmail: "hello@sweetdesert.com",
    phone: "000.000.0000",
    phoneTel: "0000000000",
    hours: "Monday - Friday, 9am - 5pm",
  },

  app: {
    appStore: "#",
    googlePlay: "#",
  },
} as const;
