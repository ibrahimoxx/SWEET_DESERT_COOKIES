import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press coverage, media assets, and news about Sweet Desert.",
  openGraph: {
    title: "Press | Sweet Desert",
    description:
      "Press coverage, media assets, and news about Sweet Desert.",
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Press", "/press")} />
      {children}
    </>
  );
}
