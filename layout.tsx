import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HNSN Scrap Marketplace",
  description: "Starter Next.js portal for supplier and admin workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
