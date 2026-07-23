import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Send the gift of cookies. Digital and physical gift cards for every occasion.",
  openGraph: {
    title: "Gift Cards | Sweet Desert",
    description:
      "Send the gift of cookies. Digital and physical gift cards for every occasion.",
  },
};

export default function GiftcardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Gift Cards", "/giftcards")} />
      {children}
    </>
  );
}
