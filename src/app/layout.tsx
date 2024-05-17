import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stella Lee | Front-end Developer",
  description: "portfolio website",
  keywords: "software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5H1DNF7FDR" />
    </html>
  );
}
