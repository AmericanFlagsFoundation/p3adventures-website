import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "P3 Adventures | Explore the Extraordinary",
    template: "%s | P3 Adventures",
  },
  description:
    "P3 Adventures offers curated adventure travel experiences — from the colorful streets of the Caribbean to the jungles of Central America. Explore the extraordinary.",
  keywords: [
    "adventure travel",
    "travel experiences",
    "Caribbean",
    "Latin America",
    "P3 Adventures",
    "explore",
    "vacation",
    "tours",
  ],
  openGraph: {
    title: "P3 Adventures | Explore the Extraordinary",
    description:
      "Curated adventure travel experiences that take you beyond the ordinary.",
    url: "https://p3adventures.com",
    siteName: "P3 Adventures",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P3 Adventures | Explore the Extraordinary",
    description: "Curated adventure travel experiences that take you beyond the ordinary.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-sand-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
