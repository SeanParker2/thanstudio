"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { withBasePath } from '@/lib/site';

// 1. 定义传入的幻灯片数据结构
interface Slide {
  id: number;
  imageSrc: string;
  alt: string;
  subtitle: string;
  title: string;
}

// 2. 模拟数据 (占位符，可替换为真实内容)
const MOCK_SLIDES: Slide[] = [
  {
    id: 1,
    imageSrc: withBasePath('/images/hero-image-1.jpeg'),
    alt: "番茄作家助手APP 品牌形象设计",
    subtitle: "今日头条旗下番茄系列针对作家的便捷写作APP",
    title: "「番茄作家助手APP」品牌形象设计",
  },
  {
    id: 2,
    imageSrc: withBasePath('/images/hero-image-2.jpeg'),
    alt: "深圳坪山大剧院 品牌设计&开幕式展览策划",
    subtitle: "这是深圳坪山大剧院的品牌设计与开幕式展览策划项目",
    title: "「深圳坪山大剧院」品牌设计&开幕式展览策划",
  },
  {
    id: 3,
    imageSrc: withBasePath('/images/hero-image-3.jpeg'),
    alt: "中国电影美术学会 品牌设计",
    subtitle: "这是中国电影美术学会的品牌设计项目",
    title: "「中国电影美术学会」品牌设计",
  },
];

export function HeroCarousel() {
  // 3. Embla Carousel hooks
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 4. 更新当前选中索引的函数
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // 5. 绑定事件
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // 6. 箭头点击函数
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // 7. 分页器点击函数
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    // 主容器: 相对定位, 100%视窗高度, 溢出隐藏
    <section className="relative min-h-dvh md:h-screen w-full overflow-hidden">
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {MOCK_SLIDES.map((slide) => (
            <div key={slide.id} className="relative h-full flex-[0_0_100%]">
              {/* 背景图：全屏填充 */}
              <Image
                src={slide.imageSrc}
                alt={slide.alt}
                fill
                sizes="(min-width: 768px) 100vw, 100vw"
                priority
                className="object-cover"
              />

              {/* 幻灯片内容容器: 保证内容与Header/Footer的边距一致 */}
              <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 sm:px-8">
                {/* 左下角文本 */}
              <div className="absolute bottom-24 left-6 sm:left-8 text-white">
                  <p className="text-sm opacity-80">{slide.subtitle}</p>
                  <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 覆盖物: 箭头和分页器 */}
      {/* 修正点 1：控件容器使用视窗宽度进行定位 */}
      <div className="absolute inset-0 z-20 text-white">
        {/* 修正点 2：左右箭头更大且与内容边距一致 */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-8 text-6xl opacity-80 hover:opacity-100 transition-opacity"
          onClick={scrollPrev}
          aria-label="上一张"
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-8 text-6xl opacity-80 hover:opacity-100 transition-opacity"
          onClick={scrollNext}
          aria-label="下一张"
        >
          &gt;
        </button>

        {/* 修正点 3：右下角分页器尺寸与间距升级 */}
        <div className="absolute bottom-24 right-6 sm:right-8 flex gap-4">
          {MOCK_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-12 h-1.5 transition-all duration-300 ${
                index === selectedIndex ? "bg-brand-red opacity-100" : "bg-white opacity-50"
              }`}
              aria-label={`跳转到第 ${index + 1} 张`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
