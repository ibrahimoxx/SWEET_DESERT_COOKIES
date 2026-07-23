import { brand } from "@/data/brand";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: brand.name,
    url: brand.seo.url,
    description: brand.seo.description,
    telephone: brand.contact.phoneTel,
    email: brand.contact.supportEmail,
    servesCuisine: "Desserts",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: brand.seo.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${brand.seo.url}${path}`,
      },
    ],
  };
}

export function productSchema(name: string, description: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };
}
