import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order cookies for pickup, delivery, or catering from a location near you.",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
