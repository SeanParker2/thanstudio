import React from 'react';
export const metadata = {
  title: '联系我们',
  description: '与 THAN Studio 取得联系，开启项目合作或加入我们的团队。',
};
import { ContactHero } from '@/components/ContactHero';
import { ContactFormSection } from '@/components/ContactFormSection';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}