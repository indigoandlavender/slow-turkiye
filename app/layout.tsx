import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://slowturkiye.com"),
  title: {
    default: "Slow Türkiye | Private Journeys Through Türkiye",
    template: "%s | Slow Türkiye",
  },
  description: "Thoughtful private journeys across Türkiye — designed for travellers who prefer ease and deep immersion. From Cappadocia to the Aegean coast, crafted around what matters to you.",
  keywords: ["turkiye private tours", "luxury turkey travel", "cappadocia journeys", "istanbul tours", "aegean coast turkey", "turkiye itinerary", "private guide turkey", "turkey travel agency"],
  authors: [{ name: "Slow Türkiye" }],
  creator: "Slow Türkiye",
  publisher: "Slow Türkiye",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slowturkiye.com",
    siteName: "Slow Türkiye",
    title: "Slow Türkiye | Private Journeys Through Türkiye",
    description: "Thoughtful private journeys across Türkiye — designed for travellers who prefer ease and deep immersion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Slow Türkiye - Private journeys through Türkiye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slow Türkiye | Private Journeys Through Türkiye",
    description: "Thoughtful private journeys across Türkiye — designed for travellers who prefer ease and deep immersion.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://slowturkiye.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CSBQECNF60"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CSBQECNF60');
          `}
        </Script>
      </head>
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
