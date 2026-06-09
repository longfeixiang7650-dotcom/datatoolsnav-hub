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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a1a4e] border border-[#3b2566] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] pulse-dot" />
            <span className="text-sm font-medium text-[#a78bfa]">
              {ALL_TOOLS.length} Data Tools Reviewed
            </span>
            <span className="mx-2 text-[#3b2566]">|</span>
            <span className="text-sm font-medium text-[#F59E0B]">
              {BLOG_POSTS.length} Expert Guides
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#e8e0f7] tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Unlock Data Insights.{" "}
            <span className="text-gradient" style={{ textShadow: "0 0 40px rgba(109,58,255,0.3)" }}>
              Drive Decisions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#c4b5fd] max-w-2xl mb-10 leading-relaxed">
            Compare 50+ data analytics platforms with real G2 ratings and expert comparisons.
            Find the perfect BI tool for your business — no coding required.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-[640px] flex items-center relative">
            <div className="w-full flex items-center rounded-full border border-[#3b2566] bg-[#1a1233] transition-all duration-300">
              <Search className="ml-5 w-5 h-5 text-[#a78bfa] flex-shrink-0" />
              <input
                type="search"
                placeholder="Search data tools, BI platforms, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 px-3 bg-transparent text-[#e8e0f7] placeholder:text-[#a78bfa] outline-none text-base"
              />
              <Link
                href={filteredTools.length > 0 ? `/tools/${filteredTools[0].id}` : "/"}
                className="mr-2 px-6 py-2.5 bg-[#6d3aff] hover:bg-[#6d3aff] text-white text-sm font-medium rounded-full transition-colors flex-shrink-0"
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
                  ? "bg-[#6d3aff] text-white border-[#6d3aff]"
                  : "bg-[#1a1233] text-[#c4b5fd] border-[#3b2566] hover:text-[#e8e0f7] hover:border-[#4c2d82]"
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
                    ? "bg-[#6d3aff] text-white border-[#6d3aff]"
                    : "bg-[#1a1233] text-[#c4b5fd] border-[#3b2566] hover:text-[#e8e0f7] hover:border-[#4c2d82]"
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
            <Layers className="w-5 h-5 text-[#6d3aff]" />
            <h2 className="text-lg font-bold text-[#e8e0f7]">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categoryStats.map(([cat, stats]) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className="bg-[#1a1233] border border-[#3b2566] rounded-xl p-4 hover:border-[#4c2d82] transition-all text-left group"
              >
                <p className="text-sm font-bold text-[#e8e0f7] group-hover:text-[#6d3aff] transition-colors">
                  {cat}
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-[#a78bfa]">
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6d3aff]/20 to-[#a78bfa]/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#e8e0f7]">Editor&apos;s Picks</h2>
                <p className="text-sm text-[#c4b5fd]">Top-rated data tools our team recommends</p>
              </div>
            </div>
            <Link
              href="/"
              className="hidden md:flex items-center gap-1 text-sm text-[#6d3aff] hover:text-[#a78bfa] transition-colors"
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
                  className="group bg-[#1a1233] border border-[#3b2566] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-[#2a1a4e] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#6d3aff]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center text-[10px] font-bold text-black">
                        #{idx + 1}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#e8e0f7] group-hover:text-[#6d3aff] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#6d3aff] bg-[#2a1a4e] px-2 py-0.5 rounded mt-1">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#2a1a4e] px-2 py-1 rounded-md shrink-0">
                      <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-xs font-bold text-[#e8e0f7]">{tool.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#c4b5fd] leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#3b2566] text-xs text-[#a78bfa]">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1233] border border-[#3b2566] rounded-full text-sm text-[#6d3aff] hover:text-[#a78bfa] transition-colors"
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
              <h2 className="text-2xl md:text-[2rem] font-bold text-[#e8e0f7] tracking-tight">
                {selectedCategory ? `${selectedCategory} Tools` : "All Data Tools"}
              </h2>
              <p className="text-[#c4b5fd] mt-1 text-base">
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
                    <article className="bg-[#1a1233] border border-[#3b2566] rounded-xl p-6 card-hover h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#2a1a4e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[#6d3aff]" />
                        </div>
                        <div className="flex items-center gap-1 bg-[#2a1a4e] px-2 py-1 rounded-md border border-[#3b2566]">
                          <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="text-sm font-semibold text-[#e8e0f7]">{tool.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#e8e0f7] mb-1 group-hover:text-[#6d3aff] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#6d3aff] bg-[#2a1a4e] px-2.5 py-1 rounded-md mb-3">
                        {tool.category}
                      </span>
                      <p className="text-sm text-[#c4b5fd] mb-6 leading-relaxed flex-grow">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#3b2566]">
                        <span className="text-sm text-[#6d3aff] font-semibold group-hover:text-[#a78bfa] transition-colors flex items-center">
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
              <p className="text-lg text-[#c4b5fd]">No tools found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-4 px-5 py-2 text-sm font-medium text-white bg-[#6d3aff] rounded-lg hover:bg-[#6d3aff] transition-colors"
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
              <div className="w-10 h-10 rounded-xl bg-[#2a1a4e] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#e8e0f7]">Latest Expert Guides</h2>
                <p className="text-sm text-[#c4b5fd]">In-depth comparisons and buying advice</p>
              </div>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-1 text-sm text-[#6d3aff] hover:text-[#a78bfa] transition-colors"
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
                <article className="bg-[#1a1233] border border-[#3b2566] rounded-xl p-6 card-hover h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6d3aff] bg-[#2a1a4e] px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#a78bfa]">{post.readTime} min read</span>
                  </div>
                  <h3 className="font-bold text-[#e8e0f7] mb-3 group-hover:text-[#6d3aff] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#c4b5fd] leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#3b2566] text-xs text-[#a78bfa]">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1233] border border-[#3b2566] rounded-full text-sm text-[#6d3aff] hover:text-[#a78bfa] transition-colors"
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
              <h2 className="text-2xl font-bold text-[#e8e0f7]">Trending Tools</h2>
              <p className="text-sm text-[#c4b5fd]">Highest-rated data tools this month</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#1a1233] border border-[#3b2566] rounded-xl p-4 card-hover flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2a1a4e] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#6d3aff]" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-xs font-bold text-[#e8e0f7]">{tool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#e8e0f7] group-hover:text-[#6d3aff] transition-colors truncate mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[#a78bfa] truncate">{tool.category}</p>
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
            <div className="w-10 h-10 rounded-xl bg-[#2a1a4e] flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#6d3aff]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#e8e0f7]">Popular Categories</h2>
              <p className="text-sm text-[#c4b5fd]">Browse tools by category</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topCategories.map(([cat, stats]) => {
              const CatIcon = getCategoryIcon(cat);
              return (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-[#1a1233] border border-[#3b2566] rounded-xl p-4 hover:border-[#4c2d82] transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2a1a4e] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <CatIcon className="w-5 h-5 text-[#6d3aff]" />
                  </div>
                  <p className="text-sm font-bold text-[#e8e0f7] group-hover:text-[#6d3aff] transition-colors">
                    {cat}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1 text-xs text-[#a78bfa]">
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
          <div className="bg-gradient-to-r from-[#1a1233] to-[#2a1a4e] border border-[#3b2566] rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#e8e0f7]">{ALL_TOOLS.length}</p>
                <p className="text-sm text-[#c4b5fd] mt-1">Tools Reviewed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#e8e0f7]">{BLOG_POSTS.length}</p>
                <p className="text-sm text-[#c4b5fd] mt-1">Expert Guides</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#e8e0f7]">
                  {CATEGORIES.length}
                </p>
                <p className="text-sm text-[#c4b5fd] mt-1">Categories</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#e8e0f7]">99+</p>
                <p className="text-sm text-[#c4b5fd] mt-1">Expert Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
