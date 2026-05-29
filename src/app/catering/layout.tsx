import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Cookie catering for weddings, corporate events, and celebrations. Schedule large orders with white glove service.",
};

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
