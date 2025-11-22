import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    // 默认文字颜色改为浅灰，符合设计稿
    <footer className="bg-brand-black text-brand-gray-light">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* 第1列: Contact */}
          <div className="text-sm">
            <h3 className="font-semibold text-brand-white mb-4">Contact</h3>
            {/* 修正点 2：移除冗余的 text-brand-gray-light */}
            <Link
              href="mailto:1308973470@qq.com"
              className="block hover:text-brand-white transition-colors mb-2"
            >
              1308973470@qq.com
            </Link>
          </div>

          {/* 第2列: Address */}
          <div className="text-sm">
            <h3 className="font-semibold text-brand-white mb-4">Address</h3>
            {/* 修正点 2：移除冗余的 text-brand-gray-light */}
            <p className="mb-2">Bao&apos;an District, Shenzhen, Guangdong Province</p>
            <p className="mb-2">+86 18089898850</p>
          </div>

          {/* 第3列: Follow */}
          <div className="text-sm">
            <h3 className="font-semibold text-brand-white mb-4">Follow</h3>
            {/* 修正点 2：移除冗余的 text-brand-gray-light */}
            <Link
              href="#"
              target="_blank"
              className="block hover:text-brand-white transition-colors mb-2"
            >
              Instagram
            </Link>
            <Link
              href="#"
              target="_blank"
              className="block hover:text-brand-white transition-colors mb-2"
            >
              小红书
            </Link>
            <Link
              href="#"
              target="_blank"
              className="block hover:text-brand-white transition-colors mb-2"
            >
              抖音
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}