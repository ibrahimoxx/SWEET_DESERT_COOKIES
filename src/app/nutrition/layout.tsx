import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Nutrition & Allergens",
  description:
    "Nutrition facts and allergen information for our cookies and desserts.",
  openGraph: {
    title: "Nutrition & Allergens | Sweet Desert",
    description:
      "Nutrition facts and allergen information for our cookies and desserts.",
  },
};

export default function NutritionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Nutrition & Allergens", "/nutrition")} />
      {children}
    </>
  );
}
