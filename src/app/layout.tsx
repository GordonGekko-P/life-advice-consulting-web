import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | von Redecker Guide",
    default: "von Redecker Guide | Strategic Life & Career Solutions",
  },
  description: "No-nonsense guidance for career, personal growth, relationships, and financial success. Solution-oriented consulting by Paul von Redecker.",
  keywords: ["career consulting", "life coaching", "financial advice", "personal development", "relationship counseling", "professional growth"],
  authors: [{ name: "Paul von Redecker", url: "https://vonredeckerguide.com" }],
  creator: "Paul von Redecker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vonredeckerguide.com",
    siteName: "von Redecker Guide",
    title: "von Redecker Guide | Strategic Life & Career Solutions",
    description: "No-nonsense guidance for career, personal growth, relationships, and financial success.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "von Redecker Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "von Redecker Guide | Strategic Life & Career Solutions",
    description: "No-nonsense guidance for career, personal growth, relationships, and financial success.",
    images: ["/og-image.jpg"],
    creator: "@paulvonredecker",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#1E40AF",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
