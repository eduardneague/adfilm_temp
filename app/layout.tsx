import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "adfilm",
  description: "adfilm application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={montserrat.className}>
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
