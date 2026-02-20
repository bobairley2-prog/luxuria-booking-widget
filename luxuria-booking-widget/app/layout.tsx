import type { Metadata } from "next";
import { Inter, Crimson_Pro } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Luxuria | Find Your Perfect Luxury Escape",
  description: "Search and book the world's finest luxury hotels and resorts with direct inventory access and personalized service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
