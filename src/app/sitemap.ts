import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crumblcookies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/order",
    "/stores",
    "/catering",
    "/giftcards",
    "/rewards",
    "/our-story",
    "/nutrition",
    "/contact",
    "/franchising",
    "/blog",
    "/press",
    "/jobs",
    "/careers",
    "/crumbl-cares",
    "/dirty-sodas",
    "/collaborate",
    "/privacy",
    "/termsandconditions",
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
