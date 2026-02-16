import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "КЛИНИЧЕСКИЙ ИНСТИТУТ МОЗГА",
  description: "Калькулятор объёма реабилитации",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} antialiased pb-100`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
