'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const darkHeroPages = ['/', '/story'];
  const isDarkHeroPage = darkHeroPages.includes(pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 shadow-lg transition-colors duration-300 ${isScrolled || !isDarkHeroPage ? 'bg-brand-black' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo：替换为图片 */}
        <Link href="/" aria-label="工作室Logo，返回首页">
          <Image
            src="/logos/main_logo.png"
            alt="工作室 Logo"
            width={100}
            height={30}
            className="object-contain"
            priority
          />
        </Link>

        {/* 导航链接 */}
        <div className="flex items-center gap-6 sm:gap-8">
          <NavLink href="/work" pathname={pathname}>Work</NavLink>
          <NavLink href="/story" pathname={pathname}>Story</NavLink>
          <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
          <NavLink href="/store" pathname={pathname}>Store</NavLink>
        </div>
      </nav>
    </header>
  );
}

// 3. 辅助组件：统一处理导航链接样式
interface NavLinkProps { href: string; children: React.ReactNode; pathname: string }
function NavLink({ href, children, pathname }: NavLinkProps) {
  const isActive = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${isActive ? 'text-brand-red' : 'text-white hover:opacity-70'}`}
    >
      {children}
    </Link>
  );
}