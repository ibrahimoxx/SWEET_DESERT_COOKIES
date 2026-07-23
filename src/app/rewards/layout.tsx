import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Rewards",
  description:
    "Earn points on every order and unlock exclusive perks with our loyalty program.",
  openGraph: {
    title: "Rewards | Sweet Desert",
    description:
      "Earn points on every order and unlock exclusive perks with our loyalty program.",
  },
};

export default function RewardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Rewards", "/rewards")} />
      {children}
    </>
  );
}
