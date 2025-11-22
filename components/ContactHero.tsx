import React from 'react';

export function ContactHero() {
  return (
    <section className="bg-brand-white text-brand-black">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <h2 className="font-semibold text-5xl md:text-6xl">让我们开始对话</h2>
          <p className="text-xl md:text-2xl text-brand-gray-dark mt-6 leading-relaxed">
            我们已准备好倾听。无论是关于一个新项目、职业机会，还是仅仅打个招呼。
          </p>

          <div className="mt-16 flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="font-semibold text-sm text-brand-gray-dark mb-2">通用邮箱</h4>
              <a
                href="mailto:1308973470@qq.com"
                className="text-lg font-semibold text-brand-black hover:text-brand-red transition-colors"
              >
                1308973470@qq.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-brand-gray-dark mb-2">Address</h4>
              <p className="text-lg font-semibold text-brand-black">
                Bao&apos;an District, Shenzhen, Guangdong Province
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}