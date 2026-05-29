import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How we started and grew into one of the fastest-growing cookie companies.",
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
