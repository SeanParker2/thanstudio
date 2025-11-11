import React from 'react';
import Image from 'next/image';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function StoryIntro() {
  return (
    <section className="bg-brand-white text-brand-black py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* 左侧文本列 */}
          <div>
            <h2 className="font-semibold text-3xl md:text-4xl leading-relaxed">
              THAN Studio是一家平面设计公司，对工作充满雄心，对世界充满乐观。我们致力于帮助客户打破常规，重新定义期望，并激发积极的变革。以解决问题为出发点，主动思考品牌挑战，用创意推动商业与文化的进化。
            </h2>
            <p className="text-lg text-brand-gray-dark mt-8 leading-relaxed">
              THAN Studio is a global brand consultancy that's ambitious for the work and optimistic for the world. We're here to help our clients defy convention, redefine expectations and ignite positive change.
            </p>
          </div>

          {/* 右侧图片列 */}
          <div>
            <Image
              src={`${basePath}/images/story1.jpg`}
              alt="工作室团队"
              width={500}
              height={600}
              className="w-[60%] h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryIntro;