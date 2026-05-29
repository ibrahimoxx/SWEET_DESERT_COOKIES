import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutrition & Allergens",
  description:
    "Nutrition facts and allergen information for our cookies and desserts.",
};

export default function NutritionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
