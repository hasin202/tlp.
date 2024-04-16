import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./modules/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "TLP.",
  description: "self improvement journal",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const galderglynn = localFont({
  src: "../public/font/galderglynn.otf",
  display: "swap",
  variable: "--font-galderglynn",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${galderglynn.variable} font-sans`}>
        <div className="py-6 md:py-0">
          {/* <h1 className="text-5xl font-galderglynn mb-4">TLP.</h1> */}
          {/* <p className="xs:bg-organge-500 bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500 2xl:bg-purple-500">
            bp
          </p> */}
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
