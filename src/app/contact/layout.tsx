import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us — questions, feedback, and catering support.",
  openGraph: {
    title: "Contact Us | Sweet Desert",
    description:
      "Get in touch with us — questions, feedback, and catering support.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema("Contact", "/contact")} />
      {children}
    </>
  );
}
