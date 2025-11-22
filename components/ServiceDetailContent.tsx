import Link from 'next/link';
import { Service } from '@/lib/services';

export default function ServiceDetailContent({ service }: { service: Service }) {
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
