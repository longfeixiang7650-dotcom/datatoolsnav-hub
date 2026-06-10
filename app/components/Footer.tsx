import { Database, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold text-slate-100">Data Tools Nav</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Independently researched directory of data analytics and BI tools. Built by Juniper Interactive in Espoo, Finland.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="/category/bi-platforms" className="text-sm text-slate-500 hover:text-blue-400">BI Platforms</Link></li>
                <li><Link href="/category/data-visualization" className="text-sm text-slate-500 hover:text-blue-400">Visualization</Link></li>
                <li><Link href="/category/data-integration" className="text-sm text-slate-500 hover:text-blue-400">Integration</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-400">About</Link></li>
                <li><Link href="/blog" className="text-sm text-slate-500 hover:text-blue-400">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-slate-500 hover:text-blue-400">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm text-slate-500 hover:text-blue-400">Terms</Link></li>
                <li><Link href="/disclosure" className="text-sm text-slate-500 hover:text-blue-400">Disclosure</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Data Tools Nav. All rights reserved.</p>
          <p className="text-xs text-slate-600">Built in Espoo, Finland by Juniper Interactive</p>
        </div>
      </div>
    </footer>
  );
}
