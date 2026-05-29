import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchising",
  description:
    "Own a franchise. Learn about opportunities to bring cookies to your community.",
};

export default function FranchisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
