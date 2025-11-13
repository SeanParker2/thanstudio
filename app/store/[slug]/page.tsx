import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug, SERVICE_DATA } from "@/lib/services";
import { notFound } from "next/navigation";
import { getBaseUrl } from "@/lib/site";

type MetaProps = { params: { slug: string } };
// 强制静态化，确保在输出为 export 时按静态路径渲染
export const dynamic = 'force-static';
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return SERVICE_DATA.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray((params as any).slug) ? (params as any).slug[0] : '';
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "服务未找到", description: "未找到该服务" };
  }
  return { title: service.title, description: service.description, alternates: { canonical: `${getBaseUrl()}/store/${slug}` } };
}

type PageProps = {
  params: { slug: string };
};

export default async function StoreServiceDetailPage(props: PageProps) {
  const { params } = props;
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray((params as any)?.slug) ? (params as any).slug[0] : '';
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.heroDescription || service.description,
            areaServed: 'China',
            offers: (service.pricing?.items || []).map((i) => ({
              '@type': 'Offer',
              name: i.name,
              price: i.price?.replace(/[^0-9.]/g, '') || undefined,
              priceCurrency: 'CNY',
              availability: 'https://schema.org/InStock',
            })),
          }),
        }}
      />
      {/* Hero */}
      <section className="bg-brand-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-semibold">{service.heroTitle}</h1>
          <p className="text-2xl text-brand-gray-dark mt-6 max-w-3xl">
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Left: content */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-semibold mb-8">服务内容</h3>
              <ul className="list-disc list-inside space-y-4 text-lg text-brand-gray-dark">
                {service.serviceIncludes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {service.valueProposition?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">为何选择我们</h4>
                  <ul className="space-y-3 text-brand-gray-dark">
                    {service.valueProposition.map((v, i) => (
                      <li key={i}>• {v}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.deliverables?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">交付物清单</h4>
                  <ul className="space-y-3 text-brand-gray-dark">
                    {service.deliverables.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.methodology?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">方法论</h4>
                  <ul className="space-y-3 text-brand-gray-dark">
                    {service.methodology.map((m, i) => (
                      <li key={i}>• {m}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.outcomes?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">预期成果</h4>
                  <ul className="space-y-3 text-brand-gray-dark">
                    {service.outcomes.map((o, i) => (
                      <li key={i}>• {o}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.processSteps?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">执行流程</h4>
                  <ol className="space-y-3 text-brand-gray-dark">
                    {service.processSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-red text-white text-sm mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-lg">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              {service.pricing?.items?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-4">{service.pricing.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.pricing.items.map((pkg, i) => (
                      <div key={i} className="rounded-lg border border-gray-200 bg-white p-6">
                        <div className="text-xl font-semibold">{pkg.name}</div>
                        {pkg.price ? (
                          <div className="mt-2 text-brand-red font-bold">{pkg.price}</div>
                        ) : null}
                        <ul className="mt-4 space-y-2 text-brand-gray-dark">
                          {pkg.features.map((f, idx) => (
                            <li key={idx}>• {f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {service.timeline?.phases?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">时间线</h4>
                  <div className="text-brand-gray-dark">整体周期：{service.timeline?.duration}</div>
                  <ul className="mt-4 space-y-2 text-brand-gray-dark">
                    {service.timeline.phases.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {(service.teamRoles?.length || service.artifacts?.length) ? (
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {service.teamRoles?.length ? (
                    <div>
                      <h4 className="text-xl font-semibold mb-4">团队角色</h4>
                      <ul className="space-y-2 text-brand-gray-dark">
                        {service.teamRoles.map((r, i) => (
                          <li key={i}>• {r}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {service.artifacts?.length ? (
                    <div>
                      <h4 className="text-xl font-semibold mb-4">交付资产</h4>
                      <ul className="space-y-2 text-brand-gray-dark">
                        {service.artifacts.map((a, i) => (
                          <li key={i}>• {a}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {service.ctaNote ? (
                <div className="mt-16 rounded-lg border border-brand-red/30 bg-brand-red/10 p-6">
                  <div className="text-brand-black">{service.ctaNote}</div>
                </div>
              ) : null}

              {service.faqs?.length ? (
                <div className="mt-16">
                  <h4 className="text-xl font-semibold mb-6">常见问题</h4>
                  <div className="space-y-6">
                    {service.faqs.map((faq, i) => (
                      <div key={i}>
                        <div className="text-lg font-semibold">{faq.question}</div>
                        <div className="mt-2 text-brand-gray-dark">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Right: sidebar */}
            <div className="md:col-span-1">
              <div>
                <h4 className="text-xl font-semibold mb-4">相关案例</h4>
                <ul className="space-y-3">
                  {service.relatedCases.map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/work/${c.slug}`}
                        className="block text-brand-black hover:text-brand-red transition-colors text-lg"
                      >
                        {c.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-block bg-brand-red text-brand-white font-semibold py-4 px-8 rounded-md hover:opacity-80 transition-opacity"
                >
                  咨询此项服务
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// 提示：在 output: 'export' 下，使用 dynamicParams 可能导致构建/预览行为异常，这里移除以确保 params 正确传递
