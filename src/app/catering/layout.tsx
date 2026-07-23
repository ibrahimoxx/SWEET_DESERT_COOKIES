import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Cookie catering for weddings, corporate events, and celebrations. Schedule large orders with white glove service.",
  openGraph: {
    title: "Catering | Sweet Desert",
    description:
      "Cookie catering for weddings, corporate events, and celebrations. Schedule large orders with white glove service.",
  },
};

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Catering", "/catering")} />
      {children}
    </>
  );
}
