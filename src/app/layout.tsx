import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crumbl Cookies | Fresh Baked Cookies and Desserts",
  description:
    "Crumbl offers a rotating weekly menu of cookies and desserts baked fresh in-store daily. Order delivery, pickup, or catering from 1,000+ locations.",
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Crumbl Cookies | Fresh Baked Cookies and Desserts",
    description:
      "Crumbl offers a rotating weekly menu of cookies and desserts baked fresh in-store daily.",
    url: "https://crumblcookies.com",
    siteName: "Crumbl Cookies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
