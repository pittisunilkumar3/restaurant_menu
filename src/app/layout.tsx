import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saffron & Smoke | Seasonal Indian Kitchen",
  description:
    "Explore the Saffron and Smoke seasonal Indian menu, discover vegetarian and vegan dishes, and share your restaurant rating.",
  openGraph: {
    title: "Saffron & Smoke | Seasonal Indian Kitchen",
    description:
      "Seasonal Indian dishes made for sharing. Browse the menu and rate your visit.",
    type: "website",
    images: [
      {
        url: "/saffron-table.jpg",
        width: 1400,
        height: 1866,
        alt: "Indian curries and rice served at Saffron and Smoke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
