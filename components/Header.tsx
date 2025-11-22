'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const darkHeroPages = ['/', '/story'];
  const isDarkHeroPage = darkHeroPages.includes(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 shadow-lg transition-colors duration-300 ${isScrolled || !isDarkHeroPage ? 'bg-brand-black' : 'bg-transparent'}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo：替换为图片 */}
        <Link href="/" aria-label="工作室Logo，返回首页">
          <Image
            src={withBasePath('/logos/main_logo.png')}
            alt="工作室 Logo"
            width={100}
            height={30}
            className="object-contain"
            priority
          />
        </Link>

        {/* 导航链接 - 桌面端可见 */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          <NavLink href="/work" pathname={pathname}>Work</NavLink>
          <NavLink href="/story" pathname={pathname}>Story</NavLink>
          <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
          <NavLink href="/store" pathname={pathname}>Store</NavLink>
        </div>

        {/* 汉堡包按钮 - 移动端可见 */}
        <button
          aria-label="打开移动端菜单"
          className="md:hidden z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // X 图标
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // 汉堡图标
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* 移动端全屏菜单 */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8">
          <Link href="/work" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white hover:opacity-80">
            Work
          </Link>
          <Link href="/story" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white hover:opacity-80">
            Story
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white hover:opacity-80">
            Contact
          </Link>
          <Link href="/store" onClick={() => setIsMenuOpen(false)} className="text-3xl text-white hover:opacity-80">
            Store
          </Link>
        </div>
      )}
    </header>
  );
}

// 3. 辅助组件：统一处理导航链接样式
interface NavLinkProps { href: string; children: React.ReactNode; pathname: string }
function NavLink({ href, children, pathname }: NavLinkProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pathNoBase = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  const isActive = pathNoBase.startsWith(href);
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${isActive ? 'text-brand-red' : 'text-white hover:opacity-70'}`}
    >
      {children}
    </Link>
  );
}
