import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Partner with Sweet Desert for brand collaborations, co-branded products, and creative partnerships.",
  openGraph: {
    title: "Collaborate | Sweet Desert",
    description:
      "Partner with Sweet Desert for brand collaborations, co-branded products, and creative partnerships.",
  },
};

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Collaborate", "/collaborate")} />
      {children}
    </>
  );
}
