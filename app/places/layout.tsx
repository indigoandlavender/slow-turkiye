import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Places | Slow Türkiye",
  description:
    "Discover the ancient cities, hidden valleys, and timeless landscapes of Türkiye. From Cappadocia's fairy chimneys to the Aegean coast's ancient ruins.",
  openGraph: {
    title: "Places | Slow Türkiye",
    description:
      "Discover the ancient cities, hidden valleys, and timeless landscapes of Türkiye.",
    type: "website",
  },
};

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
