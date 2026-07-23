import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Dirty Sodas",
  description:
    "Discover our signature dirty sodas — bold, creative drinks that pair perfectly with our cookies.",
  openGraph: {
    title: "Dirty Sodas | Sweet Desert",
    description:
      "Discover our signature dirty sodas — bold, creative drinks that pair perfectly with our cookies.",
  },
};

export default function DirtySodasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Dirty Sodas", "/dirty-sodas")} />
      {children}
    </>
  );
}
