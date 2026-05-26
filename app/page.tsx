"use client";

import { useState, useMemo } from "react";
import { Search, Star, ArrowRight, BookOpen, Layers, Sparkles, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Top-rated picks (top 6 by rating)
  const editorPicks = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 6),
    []
  );

  // Latest blog posts
  const latestPosts = useMemo(
    () => [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
    []
  );

  // Category stats
  const categoryStats = useMemo(() => {
    const stats: Record<string, { count: number; avgRating: number }> = {};
    for (const t of ALL_TOOLS) {
      if (!stats[t.category]) stats[t.category] = { count: 0, avgRating: 0 };
      stats[t.category].count++;
      stats[t.category].avgRating += t.rating;
    }
    for (const key of Object.keys(stats)) {
      stats[key].avgRating = Math.round((stats[key].avgRating / stats[key].count) * 10) / 10;
    }
    return Object.entries(stats).slice(0, 8);
  }, []);

  // Trending tools (top 8 by rating)
  const trendingTools = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 8),
    []
  );

  // Top categories (all, for grid display)
  const topCategories = useMemo(() => {
    const stats: Record<string, { count: number; avgRating: number }> = {};
    for (const t of ALL_TOOLS) {
      if (!stats[t.category]) stats[t.category] = { count: 0, avgRating: 0 };
      stats[t.category].count++;
      stats[t.category].avgRating += t.rating;
    }
    for (const key of Object.keys(stats)) {
      stats[key].avgRating = Math.round((stats[key].avgRating / stats[key].count) * 10) / 10;
    }
    return Object.entries(stats).sort((a, b) => b[1].count - a[1].count);
  }, []);

  // Icon mapping for categories
  function getCategoryIcon(cat: string) {
    const tool = ALL_TOOLS.find(t => t.category === cat);
    return tool?.icon || Layers;
  }

  return (
    <div className="relative">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f3d22] border border-[#14532D] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#34D399] pulse-dot" />
            <span className="text-sm font-medium text-[#34D399]">
              {ALL_TOOLS.length} Enterprise Tools Curated
            </span>
            <span className="mx-2 text-[#14532D]">|</span>
            <span className="text-sm font-medium text-[#F59E0B]">
              {BLOG_POSTS.length} Expert Guides
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#D1FAE5] tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Find the Perfect Software to{" "}
            <span className="text-gradient" style={{ textShadow: "0 0 40px rgba(59,130,246,0.3)" }}>
              Scale Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#6EE7B7] max-w-2xl mb-10 leading-relaxed">
            Compare top-tier B2B solutions with verified reviews and AI-driven insights.
            Maximize your enterprise productivity today.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-[640px] flex items-center relative">
            <div className="w-full flex items-center rounded-full border border-[#14532D] bg-[#0A2E1A] transition-all duration-300">
              <Search className="ml-5 w-5 h-5 text-[#34D399] flex-shrink-0" />
              <input
                type="search"
                placeholder="Search tools, categories, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 px-3 bg-transparent text-[#D1FAE5] placeholder:text-[#34D399] outline-none text-base"
              />
              <Link
                href={filteredTools.length > 0 ? `/tools/${filteredTools[0].id}` : "/"}
                className="mr-2 px-6 py-2.5 bg-[#059669] hover:bg-[#059669] text-white text-sm font-medium rounded-full transition-colors flex-shrink-0"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
                !selectedCategory
                  ? "bg-[#059669] text-white border-[#059669]"
                  : "bg-[#0A2E1A] text-[#6EE7B7] border-[#14532D] hover:text-[#D1FAE5] hover:border-[#166534]"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#059669] text-white border-[#059669]"
                    : "bg-[#0A2E1A] text-[#6EE7B7] border-[#14532D] hover:text-[#D1FAE5] hover:border-[#166534]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATEGORY STATS STRIP (like G2 category overview) ========== */}
      <section className="relative pb-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-[#059669]" />
            <h2 className="text-lg font-bold text-[#D1FAE5]">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categoryStats.map(([cat, stats]) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className="bg-[#0A2E1A] border border-[#14532D] rounded-xl p-4 hover:border-[#166534] transition-all text-left group"
              >
                <p className="text-sm font-bold text-[#D1FAE5] group-hover:text-[#059669] transition-colors">
                  {cat}
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-[#34D399]">
                  <span>{stats.count} tools</span>
                  <span className="flex items-center gap-1 text-[#F59E0B]">
                    <Star className="w-3 h-3 fill-[#F59E0B]" /> {stats.avgRating}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EDITOR'S PICKS (G2-style featured section) ========== */}
      <section className="relative pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#059669]/20 to-[#34D399]/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#34D399]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#D1FAE5]">Editor&apos;s Picks</h2>
                <p className="text-sm text-[#6EE7B7]">Top-rated enterprise tools our team recommends</p>
              </div>
            </div>
            <Link
              href="/"
              className="hidden md:flex items-center gap-1 text-sm text-[#059669] hover:text-[#34D399] transition-colors"
            >
              View All Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {editorPicks.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0A2E1A] border border-[#14532D] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-[#0f3d22] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#059669]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center text-[10px] font-bold text-black">
                        #{idx + 1}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#D1FAE5] group-hover:text-[#059669] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#059669] bg-[#0f3d22] px-2 py-0.5 rounded mt-1">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#0f3d22] px-2 py-1 rounded-md shrink-0">
                      <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-xs font-bold text-[#D1FAE5]">{tool.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6EE7B7] leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#14532D] text-xs text-[#34D399]">
                    <span>★ Best for: {tool.useCase.split(".")[0]}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile View All button */}
          <div className="mt-6 text-center md:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A2E1A] border border-[#14532D] rounded-full text-sm text-[#059669] hover:text-[#34D399] transition-colors"
            >
              View All Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TOOLS GRID ========== */}
      <section className="relative pb-20 px-6" id="all-tools">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-[2rem] font-bold text-[#D1FAE5] tracking-tight">
                {selectedCategory ? `${selectedCategory} Tools` : "All Enterprise Tools"}
              </h2>
              <p className="text-[#6EE7B7] mt-1 text-base">
                {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {/* Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link href={`/tools/${tool.id}`} key={tool.id} className="group">
                    <article className="bg-[#0A2E1A] border border-[#14532D] rounded-xl p-6 card-hover h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#0f3d22] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[#059669]" />
                        </div>
                        <div className="flex items-center gap-1 bg-[#0f3d22] px-2 py-1 rounded-md border border-[#14532D]">
                          <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="text-sm font-semibold text-[#D1FAE5]">{tool.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#D1FAE5] mb-1 group-hover:text-[#059669] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#059669] bg-[#0f3d22] px-2.5 py-1 rounded-md mb-3">
                        {tool.category}
                      </span>
                      <p className="text-sm text-[#6EE7B7] mb-6 leading-relaxed flex-grow">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#14532D]">
                        <span className="text-sm text-[#059669] font-semibold group-hover:text-[#34D399] transition-colors flex items-center">
                          View Details <ArrowRight className="ml-1.5 w-4 h-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-[#6EE7B7]">No tools found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-4 px-5 py-2 text-sm font-medium text-white bg-[#059669] rounded-lg hover:bg-[#059669] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========== LATEST FROM BLOG ========== */}
      <section className="relative pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f3d22] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#D1FAE5]">Latest Expert Guides</h2>
                <p className="text-sm text-[#6EE7B7]">In-depth comparisons and buying advice</p>
              </div>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-1 text-sm text-[#059669] hover:text-[#34D399] transition-colors"
            >
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-[#0A2E1A] border border-[#14532D] rounded-xl p-6 card-hover h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#059669] bg-[#0f3d22] px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#34D399]">{post.readTime} min read</span>
                  </div>
                  <h3 className="font-bold text-[#D1FAE5] mb-3 group-hover:text-[#059669] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6EE7B7] leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#14532D] text-xs text-[#34D399]">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="mx-1">·</span>
                    {post.author}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A2E1A] border border-[#14532D] rounded-full text-sm text-[#059669] hover:text-[#34D399] transition-colors"
            >
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TRENDING TOOLS ========== */}
      <section className="relative pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B]/20 to-[#EF4444]/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#D1FAE5]">Trending Tools</h2>
              <p className="text-sm text-[#6EE7B7]">Highest-rated enterprise software this month</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0A2E1A] border border-[#14532D] rounded-xl p-4 card-hover flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0f3d22] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#059669]" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-xs font-bold text-[#D1FAE5]">{tool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#D1FAE5] group-hover:text-[#059669] transition-colors truncate mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[#34D399] truncate">{tool.category}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== POPULAR CATEGORIES ========== */}
      <section className="relative pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#0f3d22] flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#059669]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#D1FAE5]">Popular Categories</h2>
              <p className="text-sm text-[#6EE7B7]">Browse tools by category</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topCategories.map(([cat, stats]) => {
              const CatIcon = getCategoryIcon(cat);
              return (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-[#0A2E1A] border border-[#14532D] rounded-xl p-4 hover:border-[#166534] transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f3d22] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <CatIcon className="w-5 h-5 text-[#059669]" />
                  </div>
                  <p className="text-sm font-bold text-[#D1FAE5] group-hover:text-[#059669] transition-colors">
                    {cat}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1 text-xs text-[#34D399]">
                    <span>{stats.count} tools</span>
                    <span className="flex items-center gap-0.5 text-[#F59E0B]">
                      <Star className="w-3 h-3 fill-[#F59E0B]" /> {stats.avgRating}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TRUST SIGNALS (stats strip) ========== */}
      <section className="relative pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#0A2E1A] to-[#0f3d22] border border-[#14532D] rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#D1FAE5]">{ALL_TOOLS.length}</p>
                <p className="text-sm text-[#6EE7B7] mt-1">Tools Reviewed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#D1FAE5]">{BLOG_POSTS.length}</p>
                <p className="text-sm text-[#6EE7B7] mt-1">Expert Guides</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#D1FAE5]">
                  {CATEGORIES.length}
                </p>
                <p className="text-sm text-[#6EE7B7] mt-1">Categories</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#D1FAE5]">99+</p>
                <p className="text-sm text-[#6EE7B7] mt-1">Data Sources</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
