import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "工作室官网",
  description: "由trae构建",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head></head>
      <body className="font-sans bg-brand-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
