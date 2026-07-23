import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Sweet Desert gives back. Learn about our community programs and charitable initiatives.",
  openGraph: {
    title: "Community | Sweet Desert",
    description:
      "Sweet Desert gives back. Learn about our community programs and charitable initiatives.",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Community", "/community")} />
      {children}
    </>
  );
}
