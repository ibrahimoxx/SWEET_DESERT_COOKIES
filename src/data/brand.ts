/**
 * Central brand identity config.
 * Single source of truth for all client-specific brand data.
 * Rebranding = edit this one file (+ globals.css colors, cookies.ts products).
 */

export const brand = {
  name: "Crumbl",
  legalName: "Crumbl, LLC",
  wordmark: "CRUMBL",
  fullName: "Crumbl Cookies",
  tagline:
    "Bringing friends and family together over a box of the best cookies in the world.",
  foundingYear: "2017",
  founders: ["Jason McGowan", "Sawyer Hemsley"],

  seo: {
    title: "Crumbl Cookies | Fresh Baked Cookies and Desserts",
    description:
      "Crumbl offers a rotating weekly menu of cookies and desserts baked fresh in-store daily. Order delivery, pickup, or catering from 1,000+ locations.",
    ogDescription:
      "Crumbl offers a rotating weekly menu of cookies and desserts baked fresh in-store daily.",
    siteName: "Crumbl Cookies",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://crumblcookies.com",
  },

  contact: {
    supportEmail: "support@crumblcookies.com",
    phone: "888.594.0025",
    phoneTel: "8885940025",
    hours: "Monday - Friday, 9am - 4pm MT",
  },

  app: {
    appStore: "https://apps.apple.com/us/app/crumbl-cookies/id1474607532",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.crumbl.crumblcookies",
  },
} as const;
