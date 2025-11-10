import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug, SERVICE_DATA } from "@/lib/services";

type MetaProps = { params: { slug: string } };
export function generateStaticParams(): { slug: string }[] {
  return SERVICE_DATA.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: "服务未找到", description: "未找到该服务" };
  }
  return { title: service.title, description: service.description };
}

type PageProps = {
  params: { slug: string };
};

export default function StoreServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return <div>服务未找到</div>;
  }

  return (
    <>
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