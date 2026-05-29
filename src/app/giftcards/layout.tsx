import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Send the gift of cookies. Digital and physical gift cards for every occasion.",
};

export default function GiftcardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
