import { HeroCarousel } from "@/components/HeroCarousel";
import { HomeVideoSection } from "@/components/HomeVideoSection";
import { HomePartnersSection } from "@/components/HomePartnersSection"; // 1. 导入

export default function HomePage() {
  return (
    <>
      {/* 第一屏: 全屏轮播。它本身是 h-screen，Header 为 fixed */}
  <HeroCarousel />

      {/* 第二屏: Slogan + 视频 (组件自带白色背景) */}
      <HomeVideoSection />

      {/* 第三屏: 客户 + Marquee (灰色/红色背景) */}
      <HomePartnersSection />
    </>
  );
}
