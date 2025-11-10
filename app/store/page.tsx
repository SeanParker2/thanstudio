export const metadata = {
  title: '我们的服务',
  description: '探索 THAN Studio 的专业服务，涵盖品牌全案、视觉识别、包装与数字体验设计。',
};
import { StoreServiceGrid } from "@/components/StoreServiceGrid";

export default function StorePage() {
  return (
    <>
      <section className="bg-brand-white text-brand-black pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-5xl md:text-6xl">我们的服务</h2>
            <p className="text-xl md:text-2xl text-brand-gray-dark mt-6 leading-relaxed">
              我们将复杂的挑战转化为清晰、有力的品牌解决方案。探索我们如何帮助您。
            </p>
          </div>
        </div>
      </section>
      <StoreServiceGrid />
    </>
  );
}