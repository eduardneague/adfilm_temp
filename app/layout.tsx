import type { Metadata } from "next";
import { Montserrat } from "@next/font/google";
import local from '@next/font/local'
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: 'swap', variable: '--font-montserrat' });

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
    <html lang="en">
      <body className = {`${montserrat.variable}`}>{children}</body>
    </html>
  );
}
