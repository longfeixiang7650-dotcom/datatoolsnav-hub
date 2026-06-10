import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Data Tools Nav",
  description: "Data Tools Nav is an independent directory of data analytics and BI tools, built by Juniper Interactive in Espoo, Finland.",
};

const TIMELINE = [
  { year: "2017", event: "Juniper Interactive founded in Espoo, Finland. Focus on data engineering and analytics platforms." },
  { year: "2019", event: "Team grows to 5. First enterprise data warehouse project with a Nordic fintech company." },
  { year: "2021", event: "Launched internal tooling for comparing BI platforms — the prototype that would become Data Tools Nav." },
  { year: "2024", event: "Data Tools Nav goes public as an independent directory. 40+ tools indexed at launch." },
  { year: "2026", event: "Catalog grows to 50+ tools across 8 categories. 55K+ verified user reviews analyzed from G2, Capterra, and TrustRadius." },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Timeline Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Our Story</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          How a small data engineering studio in Finland ended up building one of the most comprehensive BI tool directories on the web.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <div className="space-y-8">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="relative pl-10">
              {/* Timeline line */}
              {i < TIMELINE.length - 1 && (
                <div className="absolute left-[17px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-slate-700" />
              )}
              {/* Dot */}
              <div className="absolute left-2.5 top-1 w-[30px] h-[30px] rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              {/* Content */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/20 transition-colors">
                <span className="text-xs font-bold text-blue-400 tracking-wider">{t.year}</span>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Today */}
      <section className="glass-card p-8 mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-3">Today</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          Data Tools Nav is maintained by the team at <strong className="text-slate-200">Juniper Interactive</strong> — a boutique software studio in Espoo, Finland.
          We specialize in data engineering and analytics platforms. Our team of 7 brings together expertise in data science, 
          cloud engineering, and full-stack development.
        </p>
        <p className="text-sm text-slate-500 mb-4">
          We evaluate each tool against a consistent framework: feature depth, pricing transparency, real user satisfaction, 
          and integration ecosystem. All ratings are sourced from G2, Capterra, and TrustRadius — not from vendor sponsorships.
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span>📍 Espoo, Finland</span>
          <span>📅 Founded 2017</span>
          <span>👥 Team of 7</span>
          <span>🔧 Data Engineering</span>
        </div>
      </section>

      {/* Team inline */}
      <section>
        <h2 className="text-lg font-bold text-slate-100 mb-4">Team</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Sean Moretti", role: "Founder & CEO" },
            { name: "Layla Martins", role: "Technical Lead" },
            { name: "Robert Schwarz", role: "Backend Developer" },
            { name: "Layla Bernard", role: "Data Scientist" },
          ].map(m => (
            <div key={m.name} className="glass-card p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-400">{m.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">{m.name}</p>
                <p className="text-xs text-slate-500">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
