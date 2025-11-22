"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// PlayIcon 辅助组件：居中红色圆形按钮，白色播放图标
const PlayIcon = () => (
  <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
    <div className="bg-brand-red rounded-full w-20 h-20 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
);

export function HomeVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-brand-white text-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Slogan 文本块：新文案与布局 */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-black leading-tight mb-12">
            在想法与现实之间，找到平衡的形。
            <br />
            THAN – Between Ideas and Reality.
          </h2>
        </div>

        {/* 视频容器：封面点击播放 */}
        <div className="mt-16">
          <div className="relative w-full aspect-video overflow-hidden rounded-md shadow-lg">
            {!isPlaying ? (
              <div onClick={() => setIsPlaying(true)} className="relative w-full h-full">
                <Image
                  src={`${basePath}/images/video_mask.png`}
                  alt="视频封面"
                  fill
                  className="object-cover w-full h-full cursor-pointer"
                  priority
                />
                <PlayIcon />
              </div>
            ) : (
              <video
                className="absolute inset-0 w-full h-full"
                src={`${basePath}/videos/studio.mp4`}
                controls
                autoPlay
                muted
                playsInline
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}