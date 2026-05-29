import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rewards",
  description:
    "Earn points on every order and unlock exclusive perks with our loyalty program.",
};

export default function RewardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
