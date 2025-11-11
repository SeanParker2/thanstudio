import React from 'react';
import Image from 'next/image';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function StoryManifesto() {
  return (
    <section className="bg-brand-white text-brand-black py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* 顶部 Slogan（居中） */}
        <div>
          <h1 className="text-9xl font-serif text-center text-brand-gray-light">“</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-center max-w-3xl mx-auto">
            从差异出发，用反向的视角重塑问题，并把这种思维带入每一次设计与每一处生活。
          </h2>
          <p className="text-xl text-center mt-4">Think Beyond. Live THAN.</p>
        </div>

        {/* 主内容：双栏布局 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* 左侧图片列 */}
          <div>
            <Image
              src={`${basePath}/images/story2.jpg`}
              alt="工作室白板"
              width={450}
              height={600}
              className="w-[60%] h-auto mx-auto"
            />
          </div>

          {/* 右侧文案列：5项 + 结尾段落 */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-4 gap-4">
              <h4 className="col-span-1 font-semibold text-brand-black">我们的使命</h4>
              <p className="col-span-3 text-brand-gray-dark leading-relaxed">看见问题、拆解问题，并用创造性的方式给出答案。</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <h4 className="col-span-1 font-semibold text-brand-black">我们的团队</h4>
              <p className="col-span-3 text-brand-gray-dark leading-relaxed">由一群对设计充满热忱的天才组成，他们不仅拥有丰富的专业知识，更有着无限的创意和对美的追求。</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <h4 className="col-span-1 font-semibold text-brand-black">我们的服务</h4>
              <p className="col-span-3 text-brand-gray-dark leading-relaxed">从品牌标识设计到广告宣传，从包装设计到数字媒体，我们提供全方位的平面设计服务。</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <h4 className="col-span-1 font-semibold text-brand-black">我们的工作</h4>
              <p className="col-span-3 text-brand-gray-dark leading-relaxed">我们的目标是帮助您的品牌在竞争激烈的市场中脱颖而出，让您的产品和信息以最吸引人的方式呈现给世界。</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <h4 className="col-span-1 font-semibold text-brand-black">我们的承诺</h4>
              <p className="col-span-3 text-brand-gray-dark leading-relaxed">我们相信沟通是设计的灵魂。因此，我们与客户紧密合作，倾听他们的需求，理解他们的愿景，并将其转化为令人难忘的设计作品。</p>
            </div>

            {/* 结尾段落 */}
            <p className="mt-10 text-brand-gray-dark leading-relaxed">
              每一次设计，我们都致力于超越客户的期望。我们不仅仅是在设计，我们是在创造未来。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryManifesto;