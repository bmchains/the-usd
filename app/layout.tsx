import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheUSD — Unified Stablecoin Layer Across Chains",
  description:
    "TheUSD is a stablecoin ecosystem bridging value across networks with a shared unified layer (ایجاد یک لایه یکپارچه مشترک بین تمام شبکه‌ها).",
  metadataBase: new URL("https://theusd.shop"),
  openGraph: {
    title: "TheUSD — Unified Stablecoin Layer Across Chains",
    description:
      "Stablecoin ecosystem bridging value across networks with a shared unified layer.",
    url: "https://theusd.shop",
    siteName: "TheUSD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheUSD — Unified Stablecoin Layer Across Chains",
    description:
      "Stablecoin ecosystem bridging value across networks with a shared unified layer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
