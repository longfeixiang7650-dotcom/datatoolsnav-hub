"use client";

import type { Metadata } from "next";
import { ChevronDown, Database, BarChart3, Search, Shield, TrendingUp, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Data Tools Nav",
  description:
    "Frequently asked questions about data analytics tools, BI platforms, and how to choose the right solution for your business.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a data analytics tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A data analytics tool is software that helps organizations collect, process, analyze, and visualize data to derive actionable insights. These tools range from simple spreadsheet-based solutions to enterprise-grade BI platforms with AI-powered analytics. Popular examples include Tableau, Power BI, Looker, and Metabase.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between BI tools and data analytics platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BI (Business Intelligence) tools focus on reporting, dashboards, and historical data analysis for business decision-making. Data analytics platforms typically offer more advanced capabilities including predictive analytics, machine learning integration, and statistical modeling. While the lines are blurring, BI tools excel at visualization and monitoring, while analytics platforms prioritize depth of analysis.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular data tool categories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular data tool categories include BI & Visualization (Tableau, Power BI, Looker), Data Warehousing (Snowflake, BigQuery, Redshift), ETL & Data Integration (Fivetran, Airbyte, Stitch), Data Governance (Alation, Collibra, Atlan), Data Science & ML (Jupyter, Dataiku, Databricks), Analytics Engineering (dbt, LookML), and Embedded Analytics (Metabase, Superset, GoodData).",
      },
    },
    {
      "@type": "Question",
      name: "How do data tool pricing models work?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Data tool pricing generally falls into several models: per-user subscription (Tableau at $15-70/user/mo), compute-based (BigQuery charging per TB scanned), storage-based (Snowflake's per-credit model), tiered feature packages (basic/pro/enterprise), and open-source with paid hosting (Metabase, Superset). Most vendors offer free tiers with limited features or usage caps.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right BI tool for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Consider these factors: team size and technical skill level, data volume and complexity, integration requirements with existing stack, budget constraints, deployment preference (cloud vs on-premise), scalability needs, and specific use cases (ad-hoc analysis, executive dashboards, embedded analytics). Start by defining your core requirements, then compare tools on G2 or Data Tools Nav for verified user reviews.",
      },
    },
    {
      "@type": "Question",
      name: "What is a data platform vs a data tool?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "A data platform is a comprehensive ecosystem that combines multiple capabilities — storage, processing, analytics, and governance — in one integrated solution (e.g., Databricks, Snowflake). A data tool serves a specific function within the data stack, such as visualization (Tableau), transformation (dbt), or quality testing (Great Expectations). Modern data stacks typically combine multiple specialized tools with a central platform.",
      },
    },
    {
      "@type": "Question",
      name: "What is data governance and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Data governance refers to the overall management of data availability, usability, integrity, and security within an organization. It includes data cataloging, lineage tracking, quality monitoring, access control, and compliance management. Proper governance ensures data teams can trust their data, meet regulatory requirements (GDPR, CCPA, SOX), and maintain consistent definitions across the organization.",
      },
    },
    {
      "@type": "Question",
      name: "How do data tool reviews and ratings work on Data Tools Nav?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Our ratings are synthesized from multiple public sources including G2, TrustRadius, and Capterra, combined with our own editorial analysis. We evaluate each tool on features, user reviews, market momentum, innovation, and support quality. All reviews are clearly sourced, and we maintain independence — no vendor can pay for placement or rating changes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the future of data analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Key trends shaping data analytics include AI-powered natural language querying (ask questions in plain English), real-time streaming analytics, augmented analytics with auto-insights, data mesh and data fabric architectures, embedded analytics in SaaS products, and the rise of the semantic layer for consistent business definitions. The global data analytics market is projected to exceed $300 billion by 2030.",
      },
    },
    {
      "@type": "Question",
      name: "What is ETL and do I need an ETL tool?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "ETL (Extract, Transform, Load) is the process of moving data from various source systems into a central data warehouse. ETL tools automate this process — extracting data from APIs, databases, and files; transforming it into analysis-ready formats; and loading it into the warehouse. If your organization works with data from multiple sources, an ETL tool like Fivetran, Airbyte, or Stitch is essential for maintaining a reliable data pipeline.",
      },
    },
  ],
};

const FAQ_LIST = [
  {
    icon: Database,
    name: "What is a data analytics tool?",
    text: "A data analytics tool is software that helps organizations collect, process, analyze, and visualize data to derive actionable insights. These tools range from simple spreadsheet-based solutions to enterprise-grade BI platforms with AI-powered analytics. Popular examples include Tableau, Power BI, Looker, and Metabase. The right tool depends on your team's technical expertise, data volume, and specific use cases.",
  },
  {
    icon: BarChart3,
    name: "What's the difference between BI tools and data analytics platforms?",
    text: "BI (Business Intelligence) tools focus on reporting, dashboards, and historical data analysis for business decision-making. Data analytics platforms typically offer more advanced capabilities including predictive analytics, machine learning integration, and statistical modeling. While the lines are blurring, BI tools excel at visualization and monitoring, while analytics platforms prioritize depth of analysis.",
  },
  {
    icon: Zap,
    name: "What are the most popular data tool categories?",
    text: "Popular data tool categories include BI & Visualization (Tableau, Power BI, Looker), Data Warehousing (Snowflake, BigQuery, Redshift), ETL & Data Integration (Fivetran, Airbyte, Stitch), Data Governance (Alation, Collibra, Atlan), Data Science & ML (Jupyter, Dataiku, Databricks), Analytics Engineering (dbt, LookML), and Embedded Analytics (Metabase, Superset, GoodData). Each category addresses specific needs in the modern data stack.",
  },
  {
    icon: Shield,
    name: "How do data tool pricing models work?",
    text: "Data tool pricing generally falls into several models: per-user subscription (Tableau at $15-70/user/mo), compute-based (BigQuery charging per TB scanned), storage-based (Snowflake's per-credit model), tiered feature packages (basic/pro/enterprise), and open-source with paid hosting (Metabase, Superset). Most vendors offer free tiers with limited features or usage caps, making it easy to evaluate tools before committing.",
  },
  {
    icon: Search,
    name: "How do I choose the right BI tool for my business?",
    text: "Consider these factors: team size and technical skill level, data volume and complexity, integration requirements with existing stack, budget constraints, deployment preference (cloud vs on-premise), scalability needs, and specific use cases (ad-hoc analysis, executive dashboards, embedded analytics). Start by defining your core requirements, then compare tools on G2 or Data Tools Nav for verified user reviews and feature comparisons.",
  },
  {
    icon: TrendingUp,
    name: "What is a data platform vs a data tool?",
    text: "A data platform is a comprehensive ecosystem that combines multiple capabilities — storage, processing, analytics, and governance — in one integrated solution (e.g., Databricks, Snowflake). A data tool serves a specific function within the data stack, such as visualization (Tableau), transformation (dbt), or quality testing (Great Expectations). Modern data stacks typically combine multiple specialized tools with a central platform.",
  },
  {
    icon: Users,
    name: "What is data governance and why does it matter?",
    text: "Data governance refers to the overall management of data availability, usability, integrity, and security within an organization. It includes data cataloging, lineage tracking, quality monitoring, access control, and compliance management. Proper governance ensures data teams can trust their data, meet regulatory requirements (GDPR, CCPA, SOX), and maintain consistent definitions across the organization.",
  },
  {
    icon: Star,
    name: "How do data tool reviews and ratings work on Data Tools Nav?",
    text: "Our ratings are synthesized from multiple public sources including G2, TrustRadius, and Capterra, combined with our own editorial analysis. We evaluate each tool on features, user reviews, market momentum, innovation, and support quality. All reviews are clearly sourced, and we maintain independence — no vendor can pay for placement or rating changes.",
  },
  {
    icon: BarChart3,
    name: "What is the future of data analytics?",
    text: "Key trends shaping data analytics include AI-powered natural language querying (ask questions in plain English), real-time streaming analytics, augmented analytics with auto-insights, data mesh and data fabric architectures, embedded analytics in SaaS products, and the rise of the semantic layer for consistent business definitions. The global data analytics market is projected to exceed $300 billion by 2030.",
  },
  {
    icon: Database,
    name: "What is ETL and do I need an ETL tool?",
    text: "ETL (Extract, Transform, Load) is the process of moving data from various source systems into a central data warehouse. ETL tools automate this process — extracting data from APIs, databases, and files; transforming it into analysis-ready formats; and loading it into the warehouse. If your organization works with data from multiple sources, an ETL tool like Fivetran, Airbyte, or Stitch is essential for maintaining a reliable data pipeline.",
  },
];

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative pt-32 pb-20 px-6">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a1a4e] border border-[#3b2566] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] pulse-dot" />
            <span className="text-sm font-medium text-[#a78bfa]">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e8e0f7] tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#c4b5fd] max-w-2xl mx-auto">
            Everything you need to know about data analytics tools, BI platforms, and choosing the right solution.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1233] border border-[#3b2566] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[#2a1a4e]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6d3aff]/20 to-[#a78bfa]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#a78bfa]" />
                  </div>
                  <span className="flex-1 text-base font-semibold text-[#e8e0f7]">
                    {item.name}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#a78bfa] transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-0">
                    <div className="h-px bg-[#3b2566] mb-4" />
                    <p className="text-[#c4b5fd] leading-relaxed">{item.text}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
