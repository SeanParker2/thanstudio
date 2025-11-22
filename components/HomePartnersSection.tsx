'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { withBasePath } from '@/lib/site';

/*
 模拟 Logo 数据
 trae, 请注意:
 请创建 /public/logos/ 目录。
 请将设计稿中所有30个logo (白色/透明背景) 保存为 .svg 或 .png 文件放入该目录。
 (为了演示) 我只列出了18个。请您补全所有30个。
*/
const LOGO_DATA = [
  { src: withBasePath('/logos/chuanhang.png'), alt: '传航' },
  { src: withBasePath('/logos/fanqie.png'), alt: '番茄' },
  { src: withBasePath('/logos/fanqiechangting.png'), alt: '番茄畅听' },
  { src: withBasePath('/logos/fanqiexiaoshuo.png'), alt: '番茄小说' },
  { src: withBasePath('/logos/guantai.png'), alt: '冠泰' },
  { src: withBasePath('/logos/hongmei.png'), alt: '洪梅' },
  { src: withBasePath('/logos/huaqiaocheng.png'), alt: '华侨城' },
  { src: withBasePath('/logos/huarun.png'), alt: '华润' },
  { src: withBasePath('/logos/huarunzhidi.png'), alt: '华润置地' },
  { src: withBasePath('/logos/jinritoutiao.png'), alt: '今日头条' },
  { src: withBasePath('/logos/nanfangdianwang.png'), alt: '南方电网' },
  { src: withBasePath('/logos/pengrunda.png'), alt: '鹏润达' },
  { src: withBasePath('/logos/pingshandajuyuan.png'), alt: '坪山大剧院' },
  { src: withBasePath('/logos/qidi.png'), alt: '启迪' },
  { src: withBasePath('/logos/rudanhui.png'), alt: '润达辉' },
  { src: withBasePath('/logos/shenzhenbaoye.png'), alt: '深圳报业' },
  { src: withBasePath('/logos/tangjiashu.png'), alt: '唐家墅' },
  { src: withBasePath('/logos/wenzhouyinhang.png'), alt: '温州银行' },
  { src: withBasePath('/logos/yibao.png'), alt: '怡宝' },
  { src: withBasePath('/logos/yutong.png'), alt: '宇通' },
  { src: withBasePath('/logos/zhonghangjiankang.png'), alt: '中航健康' },
  { src: withBasePath('/logos/zhongjincaifu.png'), alt: '中金财富' },
  { src: withBasePath('/logos/zhongyingmeishu.png'), alt: '中影美术' },
  { src: withBasePath('/logos/zhongyizhizao.png'), alt: '中意智造' },
  { src: withBasePath('/logos/zhuoyue.png'), alt: '卓越' },
  { src: withBasePath('/logos/zizjietiaodong.png'), alt: '字节跳动' },
];

export function HomePartnersSection() {
  const marqueeText = '“我们以解决问题为出发点，主动思考品牌挑战，用创意推动商业与文化的进化。” We create transformative brands that move businesses, people';

  return (
    <>
      {/* 1. 客户 Logo 墙 (灰色背景) */}
      <section className="w-full bg-brand-gray-dark text-brand-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
            {/* 左侧标题 */}
            <div className="md:col-span-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-semibold">客户</h2>
              <p className="text-4xl md:text-5xl font-light opacity-80 mt-2">Partners</p>
            </div>
            {/* 右侧 Logo 网格 */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6 items-center">
                {LOGO_DATA.map((logo) => (
                  <div
                    key={logo.alt}
                    className="relative h-24 w-full max-w-[180px] mx-auto flex justify-center items-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(max-width: 768px) 33vw, 16vw"
                      className="object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 红色滚动横幅 */}
      <section className="w-full bg-brand-red text-brand-white py-5 overflow-hidden">
        <Marquee gradient={false} speed={50} autoFill={true}>
          <span className="text-lg md:text-xl font-medium mx-12">{marqueeText}</span>
        </Marquee>
      </section>
    </>
  );
}
