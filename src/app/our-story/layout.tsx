import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Sweet Desert started and grew into a beloved destination for fresh baked cookies and desserts.",
  openGraph: {
    title: "Our Story | Sweet Desert",
    description:
      "How Sweet Desert started and grew into a beloved destination for fresh baked cookies and desserts.",
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Our Story", "/our-story")} />
      {children}
    </>
  );
}
