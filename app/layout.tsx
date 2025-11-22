import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getBaseUrl } from "@/lib/site";

const baseUrl = getBaseUrl();
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | THAN Studio',
    default: 'THAN Studio - 创意设计工作室',
  },
  description:
    '我们是一家平面设计公司，致力于帮助客户打破常规，重新定义期望，并激发积极的变革。',
  keywords: ['THAN Studio', '平面设计', '品牌设计', '视觉识别', '包装设计', '数字体验'],
  openGraph: {
    title: 'THAN Studio',
    description:
      '我们是一家平面设计公司，致力于帮助客户打破常规，重新定义期望，并激发积极的变革。',
    url: baseUrl,
    siteName: 'THAN Studio',
    images: [
      {
        url: '/images/hero-image-2.jpeg',
        width: 1200,
        height: 630,
        alt: 'THAN Studio',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THAN Studio',
    description:
      '我们是一家平面设计公司，致力于帮助客户打破常规，重新定义期望，并激发积极的变革。',
    images: ['/images/hero-image-2.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'THAN Studio',
              url: baseUrl,
              logo: '/logos/main_logo.png',
            }),
          }}
        />
      </head>
      <body className="font-sans bg-brand-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
