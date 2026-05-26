"use client";
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Product: [
    { name: 'Browse Tools', href: '/' },
    { name: 'Categories', href: '/' },
    { name: 'Comparisons', href: '/' },
    { name: 'API Access', href: '/' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '/' },
    { name: 'Help Center', href: '/contact' },
    { name: 'Community', href: '#' },
    { name: 'Status', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Affiliate Disclosure', href: '/disclosure' },
    { name: 'Cookie Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#14532D] bg-[#052014]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand Column */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#059669] to-[#34D399] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#D1FAE5]">NoCode Hub</span>
            </Link>
            <p className="text-sm text-[#6EE7B7] leading-relaxed mb-6">
              The most comprehensive directory of no-code tools. Discover, compare, and integrate the best platforms for building without code.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#0A2E1A] border border-[#14532D] flex items-center justify-center text-[#6EE7B7] hover:text-[#059669] hover:border-[#166534] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#0A2E1A] border border-[#14532D] flex items-center justify-center text-[#6EE7B7] hover:text-[#059669] hover:border-[#166534] transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#0A2E1A] border border-[#14532D] flex items-center justify-center text-[#6EE7B7] hover:text-[#059669] hover:border-[#166534] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-[#D1FAE5] mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#6EE7B7] hover:text-[#059669] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#14532D] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#34D399]">
            &copy; {new Date().getFullYear()} NoCode Tool Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#34D399] hover:text-[#6EE7B7] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[#34D399] hover:text-[#6EE7B7] transition-colors">
              Terms
            </Link>
            <a href="#" className="text-sm text-[#34D399] hover:text-[#6EE7B7] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
