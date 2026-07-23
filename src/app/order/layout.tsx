import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order cookies for pickup, delivery, or catering from a location near you.",
  openGraph: {
    title: "Order | Sweet Desert",
    description:
      "Order cookies for pickup, delivery, or catering from a location near you.",
  },
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Order", "/order")} />
      {children}
    </>
  );
}
