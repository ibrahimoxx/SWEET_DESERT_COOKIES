import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find a bakery near you. Search by city, state, or zip code.",
};

export default function StoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
