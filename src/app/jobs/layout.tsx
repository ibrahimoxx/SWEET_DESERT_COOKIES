import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Join the Sweet Desert team. Browse open positions at our bakeries and headquarters.",
  openGraph: {
    title: "Jobs | Sweet Desert",
    description:
      "Join the Sweet Desert team. Browse open positions at our bakeries and headquarters.",
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Jobs", "/jobs")} />
      {children}
    </>
  );
}
