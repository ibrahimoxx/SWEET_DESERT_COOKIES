import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career at Sweet Desert. Explore roles in baking, operations, and corporate.",
  openGraph: {
    title: "Careers | Sweet Desert",
    description:
      "Build a career at Sweet Desert. Explore roles in baking, operations, and corporate.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Careers", "/careers")} />
      {children}
    </>
  );
}
