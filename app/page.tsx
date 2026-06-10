"use client";

import { useState } from "react";
import { Search, Star, Database, BarChart3, LineChart, Layers, ArrowRight, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  { id: "tableau", name: "Tableau", cat: "BI Platforms", rating: 4.4, reviews: 8700, desc: "Industry-leading data visualization platform with drag-and-drop analytics." },
  { id: "power-bi", name: "Power BI", cat: "BI Platforms", rating: 4.5, reviews: 14500, desc: "Microsoft\'s business analytics service with deep Excel and Azure integration." },
  { id: "looker", name: "Looker Studio", cat: "BI Platforms", rating: 4.3, reviews: 4200, desc: "Google Cloud\'s unified analytics platform with semantic modeling via LookML." },
  { id: "metabase", name: "Metabase", cat: "BI Platforms", rating: 4.3, reviews: 2800, desc: "Open-source BI tool with smart querying and easy embedding." },
  { id: "grafana", name: "Grafana", cat: "Data Visualization", rating: 4.6, reviews: 5600, desc: "Open-source observability and data visualization platform." },
  { id: "d3js", name: "D3.js", cat: "Data Visualization", rating: 4.5, reviews: 1200, desc: "JavaScript library for producing dynamic, interactive data visualizations." },
  { id: "fivetran", name: "Fivetran", cat: "Data Integration", rating: 4.3, reviews: 2100, desc: "Fully managed data pipeline platform with 500+ pre-built connectors." },
  { id: "airbyte", name: "Airbyte", cat: "Data Integration", rating: 4.4, reviews: 1800, desc: "Open-source ELT platform with 350+ connectors and data protocol." },
  { id: "dbt", name: "dbt", cat: "Analytics Engineering", rating: 4.6, reviews: 3200, desc: "SQL-first transformation tool that brings software engineering best practices to analytics." },
  { id: "snowflake", name: "Snowflake", cat: "Data Warehousing", rating: 4.5, reviews: 9600, desc: "Cloud-native data warehouse with elastic compute and storage separation." },
  { id: "thoughtspot", name: "ThoughtSpot", cat: "BI Platforms", rating: 4.3, reviews: 1500, desc: "Search-driven analytics platform with AI-powered natural language query." },
  { id: "sigma", name: "Sigma Computing", cat: "BI Platforms", rating: 4.5, reviews: 900, desc: "Direct SQL analytics on cloud data warehouses with zero data movement." },
];

const CATS = ["All", "BI Platforms", "Data Visualization", "Data Integration", "Analytics Engineering", "Data Warehousing"];
const HERO_STATS = [
  { label: "Tools Cataloged", value: "50+" },
  { label: "Categories", value: "8" },
  { label: "Verified Reviews", value: "55K+" },
  { label: "G2 Ratings", value: "Sourced" },
];
const BLOG_TEASERS = [
  { slug: "best-bi-platforms-2026", title: "BI Platforms Compared 2026", desc: "Tableau vs Power BI vs Looker — a data-driven deep dive.", date: "Jun 2026" },
  { slug: "data-visualization-tools-guide", title: "Data Viz Tools Guide", desc: "From executive dashboards to interactive exploratory analytics.", date: "May 2026" },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = TOOLS.filter(t =>
    (cat === "All" || t.cat === cat) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.1)_0%,transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 mb-6">
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-medium text-blue-300">50+ Data Tools Indexed</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Navigate the{" "}
              <span className="gradient-text">Modern Data Stack</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Independently researched directory of BI platforms, data visualization tools, ETL pipelines, and analytics engineering stacks. No fluff, just facts.
            </p>
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input type="text" placeholder="Search data tools..." value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 text-base" />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {HERO_STATS.map(s => (
              <div key={s.label} className="glass-card p-4 text-center">
                <p className="text-xl font-bold text-slate-100">{s.value}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CATS.filter(c => c !== "All").map(c => (
              <Link key={c} href={`/category/${c.toLowerCase().replace(/ /g, "-")}`}
                className="glass-card p-4 card-hover group">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <Layers className="w-4 h-4 text-blue-400" />
                </div>
                <p className="font-medium text-slate-200 text-sm">{c}</p>
                <p className="text-xs text-slate-500 mt-1">{TOOLS.filter(t => t.cat === c).length} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tool grid with tabs */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Tools Directory</h2>
            <Link href="/tools" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  cat === c ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-600"
                }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(t => (
              <Link key={t.id} href={`/tools/${t.id}`}
                className="glass-card p-5 card-hover group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-slate-100 group-hover:text-blue-400 transition-colors text-sm">{t.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-slate-300">{t.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 bg-slate-800 px-2 py-0.5 rounded">{t.cat}</span>
                  <span className="text-xs text-slate-600">{t.reviews.toLocaleString()} reviews</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 className="section-title">Latest Research</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BLOG_TEASERS.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="glass-card p-6 card-hover group flex items-start justify-between">
                <div>
                  <p className="text-xs text-slate-600 mb-1">{p.date}</p>
                  <h3 className="font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
