import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, baking tips, and sweet inspiration from the Sweet Desert team.",
  openGraph: {
    title: "Blog | Sweet Desert",
    description:
      "Stories, baking tips, and sweet inspiration from the Sweet Desert team.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Blog", "/blog")} />
      {children}
    </>
  );
}
