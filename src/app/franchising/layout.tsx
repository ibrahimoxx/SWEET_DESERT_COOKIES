import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Franchising",
  description:
    "Own a Sweet Desert franchise. Learn about opportunities to bring fresh cookies to your community.",
  openGraph: {
    title: "Franchising | Sweet Desert",
    description:
      "Own a Sweet Desert franchise. Learn about opportunities to bring fresh cookies to your community.",
  },
};

export default function FranchisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Franchising", "/franchising")} />
      {children}
    </>
  );
}
