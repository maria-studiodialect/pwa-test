import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA Greencubes",
  description: "Greencubes offline experiment",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "icons/gc-icon-512.png" },
    { rel: "icon", url: "icons/gc-icon-512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
