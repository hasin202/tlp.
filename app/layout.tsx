import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${inter.variable} ${galderglynn.variable} p-12 md:px-32 2xl:px-48 3xl:px-64`}
      >
        <h1 className="text-5xl font-galderglynn mb-4">TLP.</h1>
        {children}
      </body>
    </html>
  );
}
