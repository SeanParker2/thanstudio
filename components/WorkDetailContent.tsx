import Image from 'next/image';
import Link from 'next/link';
import { Project, PROJECT_DATA } from '@/lib/projects';

export default function WorkDetailContent({ project }: { project: Project }) {
  const nextProject =
    PROJECT_DATA.find((p) => p.id === (project.id % PROJECT_DATA.length) + 1) || PROJECT_DATA[0];
  const isTomato = project.slug === 'tomato-writer-app';

  return (
    <article className="bg-brand-white text-brand-black">
      {/* 1. Hero 大图 */}
      <section className="pt-24 md:pt-32 px-6 max-w-6xl mx-auto">
        <div className="relative w-full aspect-video md:aspect-21/9 overflow-hidden rounded-lg shadow-sm">
          <Image src={project.imageSrc} alt={project.title} fill className="object-cover" priority />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
          <div>
            <h4 className="text-sm font-bold text-brand-gray-dark mb-1">{isTomato ? '客户' : 'Client'}</h4>
            <p className="text-lg font-medium">{project.client}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-gray-dark mb-1">{isTomato ? '年份' : 'Year'}</h4>
            <p className="text-lg font-medium">{project.year}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-gray-dark mb-1">{isTomato ? '服务' : 'Services'}</h4>
            <ul className="text-lg font-medium">
              {(project.services || []).map((s) => (
                <li key={s} className="leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-gray-dark mb-1">{isTomato ? '角色' : 'Role'}</h4>
            <p className="text-lg font-medium">{isTomato ? '艺术指导与设计' : 'Art Direction & Design'}</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* 左侧: 概述 */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-semibold mb-6">{isTomato ? '项目概述' : 'Overview'}</h3>
            <p className="text-xl font-medium leading-relaxed text-brand-black">{project.overview}</p>
          </div>

          {/* 右侧: 挑战与方案 */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-12">
            <div>
              <h4 className="text-sm font-bold text-brand-gray-dark mb-3 uppercase tracking-wide">
                {isTomato ? '设计挑战' : 'The Challenge'}
              </h4>
              <p className="text-lg leading-relaxed text-brand-gray-dark">{project.challenge}</p>
            </div>
            {isTomato && project.designThinking && (
              <div>
                <h4 className="text-sm font-bold text-brand-gray-dark mb-3 uppercase tracking-wide">设计思考</h4>
                <p className="text-lg leading-relaxed text-brand-gray-dark">{project.designThinking}</p>
              </div>
            )}
            <div>
              <h4 className="text-sm font-bold text-brand-gray-dark mb-3 uppercase tracking-wide">
                {isTomato ? '解决方案' : 'The Solution'}
              </h4>
              <p className="text-lg leading-relaxed text-brand-gray-dark">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 动态画廊 (Gallery) */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-dense">
          {(project.gallery || []).map((img, index) => {
            const v = ['wide', 'std', 'std', 'tall', 'std', 'wide', 'std', 'tall', 'std'][index % 9];
            const span = v === 'wide' ? 'md:col-span-12 lg:col-span-8' : v === 'tall' ? 'md:col-span-4 lg:col-span-4' : 'md:col-span-6 lg:col-span-4';
            const aspect = v === 'wide' ? 'aspect-video' : v === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]';
            return (
              <div key={index} className={`${span}`}>
                <div className={`relative ${aspect} rounded-xl overflow-hidden shadow-sm group`}>
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 底部导航 (Next Project) */}
      <section className="border-t border-gray-100">
        <Link
          href={`/work/${nextProject.slug}`}
          className="block group relative overflow-hidden py-32 text-center bg-gray-50 hover:bg-brand-black transition-colors duration-500"
        >
          <div className="relative z-10">
            <p className="text-sm font-bold text-brand-gray-dark group-hover:text-brand-gray-light mb-4 tracking-widest uppercase transition-colors">
              Next Project
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold text-brand-black group-hover:text-white transition-colors">
              {nextProject.title}
            </h2>
          </div>
        </Link>
      </section>
    </article>
  );
}