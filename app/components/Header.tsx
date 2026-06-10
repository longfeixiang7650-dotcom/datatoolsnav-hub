"use client";

import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";
import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "BI Platforms", href: "/category/bi-platforms" },
  { label: "Data Viz", href: "/category/data-visualization" },
  { label: "Guides", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
              Data Tools Nav
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/tools"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm">
              Browse Tools
            </Link>
          </div>

          <button className="md:hidden p-2 text-slate-400 hover:text-slate-100" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-slate-800 pt-2">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}
                className="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg"
                onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
