import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description: "Cultural stories from Türkiye — history, craft, architecture, and the hidden layers that make Türkiye make sense.",
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
