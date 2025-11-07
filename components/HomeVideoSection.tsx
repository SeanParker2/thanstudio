import React from 'react';
import Image from 'next/image';

export function HomeVideoSection() {
  return (
    <section className="w-full bg-brand-white text-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Slogan 文本块 (保持不变) */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-black leading-tight">
            在差异之间寻找方向,
            <br />
            在对比之中看见未来。
          </h2>
          <p className="text-xl md:text-2xl text-brand-gray-dark mt-6">
            Finding direction in difference.
            <br />
            Seeing the future in contrast.
          </p>
        </div>

        {/* 视频播放器 */}
        <div className="mt-16 md:mt-24">
          <div className="relative w-full aspect-video overflow-hidden rounded-md shadow-lg">
            {/* 直接展示视频播放器 */}
            <video
              className="absolute inset-0 w-full h-full"
              src="/videos/studio.mp4"
              controls
              loop
              muted
              playsInline
              preload="metadata"
            >
              您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}