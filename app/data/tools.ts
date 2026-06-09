import {
  Activity,
  BarChart3,
  Beaker,
  Box,
  Code2,
  Eye,
  Layers,
  LineChart,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface ToolData {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  pricing: string;
  pricingDetail: string;
  features: string[];
  useCase: string;
  websiteUrl: string;
  alternatives: string[];
  scoreBreakdown: {
    features: number;
    reviews: number;
    momentum: number;
    popularity: number;
  };
  userQuotes: { role: string; company: string; quote: string }[];
}

export const ALL_TOOLS: ToolData[] = [
  {
    id: "tableau",
    name: "Tableau",
    category: "BI Platforms",
    rating: 4.6,
    reviewCount: 48200,
    icon: BarChart3,
    description: "Enterprise-grade BI platform renowned for intuitive drag-and-drop visualization, powerful analytics, and scalable deployment.",
    longDescription: `## Overview
Tableau is a market-leading business intelligence platform that empowers users to connect, analyze, and share data through interactive, highly visual dashboards.

## Core Capabilities
Built on a proprietary VizQL engine, Tableau translates drag-and-drop actions into dynamic queries against relational databases, cloud warehouses (Snowflake, BigQuery), spreadsheets, and APIs. Its real-time collaboration features—including Tableau Server and Tableau Cloud—enable governed sharing, row-level security, and embedded analytics.

## Ecosystem & Extensibility
Tableau integrates with Python and R for advanced statistical modeling, supports custom SQL, calculated fields, LOD expressions, and parameterized controls. The Tableau Public gallery fosters community learning, while Tableau Prep Builder streamlines ETL workflows.

## Governance & Administration
Enterprise customers benefit from centralized user management, audit logging, SSO/SAML support, and compliance certifications (SOC 2, ISO 27001, GDPR). Admin views provide usage telemetry and performance monitoring.`,
    pros: ["Unmatched visual interactivity and design flexibility", "Rich ecosystem of connectors and certified data sources", "Strong self-service capabilities for non-technical users", "Robust mobile experience with offline dashboard access", "Extensive training resources and active community"],
    cons: ["High licensing cost for enterprise deployments", "Steep learning curve for advanced calculations and optimization", "Limited native data transformation compared to modern ELT tools"],
    pricing: "Contact Sales",
    pricingDetail: "Tiered per-user pricing: Creator ($75/user/mo), Explorer ($42/user/mo), Viewer ($15/user/mo); annual billing required. Cloud and Server options available.",
    features: ["Drag-and-drop visual analytics", "Real-time dashboard sharing", "Natural language query (Ask Data)", "Data storytelling with narrative flows", "Embedded analytics SDK", "Row-level security", "Tableau Prep for data cleaning", "AI-powered insights (Einstein Discovery integration)"],
    useCase: "Large enterprises needing governed, scalable, and visually rich analytics across departments — especially finance, marketing, and operations.",
    websiteUrl: "https://www.tableau.com",
    alternatives: ["Power BI", "Looker", "Qlik Sense"],
    scoreBreakdown: {
      features: 9.5,
      reviews: 9.2,
      momentum: 8.7,
      popularity: 9.8
    },
    userQuotes: [{"role": "Analytics Director", "company": "Fortune 500 Retailer", "quote": "Reduced time-to-insight by 65% after migrating from legacy reports to Tableau dashboards."}, {"role": "Data Analyst", "company": "Healthcare SaaS", "quote": "The ability to blend disparate clinical and claims data sources in one view transformed our cohort analysis."}, {"role": "CTO", "company": "Fintech Startup", "quote": "Tableau Cloud’s zero-infrastructure model let us scale analytics globally without hiring dedicated BI engineers."}],
  },
  {
    id: "powerbi",
    name: "Microsoft Power BI",
    category: "BI Platforms",
    rating: 4.5,
    reviewCount: 42500,
    icon: TrendingUp,
    description: "Microsoft’s cloud-first BI service tightly integrated with Azure, Office 365, and Dynamics, offering strong governance and AI-native analytics.",
    longDescription: `## Overview
Power BI is Microsoft’s unified analytics platform combining self-service visualization, enterprise reporting, and AI-driven insights—all deeply embedded in the Microsoft ecosystem.

## Architecture & Integration
Leverages Azure Synapse Analytics, Azure Data Factory, and Microsoft Fabric for end-to-end data engineering. Native Excel, Teams, SharePoint, and Dynamics 365 integrations enable seamless report embedding and collaboration. Power BI Premium capacities support paginated reports, AI visuals, and XMLA endpoints.

## Intelligence Layer
Includes Copilot in Power BI (generative AI for natural language Q&A, metric suggestions, and DAX generation), AutoML forecasting, and Explain Data for root-cause analysis. Dataflows Gen2 provides cloud-based data transformation with Power Query Online.

## Security & Compliance
Enterprise-grade RBAC, sensitivity labels, Purview integration for data lineage, and compliance with HIPAA, FedRAMP, and GDPR. Tenant-level admin controls ensure policy enforcement across workspaces and datasets.`,
    pros: ["Deep Microsoft 365 and Azure integration", "Best-in-class AI/ML tooling for business users", "Cost-effective entry point with free desktop version", "Strong enterprise governance via Microsoft Purview", "Excellent paginated reporting and print fidelity"],
    cons: ["Performance bottlenecks with large models on Pro licenses", "DAX complexity can hinder adoption for analysts without technical training", "Limited customization outside Microsoft stack"],
    pricing: "Free / $10–$20/user/mo / Contact Sales",
    pricingDetail: "Power BI Desktop (free), Pro ($10/user/mo), Premium Per User ($20/user/mo), Premium Capacity (contact sales). Fabric add-ons available.",
    features: ["Copilot-powered natural language analytics", "DirectQuery and Live Connection to Azure services", "Paginated reports with SSRS compatibility", "Dataflows Gen2 for cloud ETL", "Composite models (import + DirectQuery)", "Sensitivity labeling & Purview lineage", "Export to PowerPoint/PDF with live refresh", "Teams app with collaborative commenting"],
    useCase: "Organizations invested in Microsoft cloud infrastructure seeking affordable, secure, and AI-augmented analytics at scale.",
    websiteUrl: "https://powerbi.microsoft.com",
    alternatives: ["Tableau", "Looker", "ThoughtSpot"],
    scoreBreakdown: {
      features: 9.3,
      reviews: 9.0,
      momentum: 9.6,
      popularity: 9.7
    },
    userQuotes: [{"role": "CIO", "company": "Global Bank", "quote": "Power BI Premium enabled us to retire three legacy reporting systems while improving SLA compliance by 40%."}, {"role": "Marketing Manager", "company": "SaaS Scale-up", "quote": "Copilot helped my team build KPI dashboards in hours—not weeks—without writing a single DAX formula."}, {"role": "BI Developer", "company": "Manufacturing Conglomerate", "quote": "Fabric’s unified workspace eliminated context switching between Power BI, Data Factory, and Synapse."}],
  },
  {
    id: "looker",
    name: "Looker Studio (formerly Looker)",
    category: "BI Platforms",
    rating: 4.4,
    reviewCount: 36800,
    icon: Eye,
    description: "Google Cloud’s semantic modeling platform built on LookML, enabling governed, reusable metrics and embedded analytics.",
    longDescription: `## Overview
Looker Studio (rebranded from Looker in 2023) is Google Cloud’s enterprise BI platform centered on semantic modeling via LookML—a declarative modeling language that defines dimensions, measures, and relationships once for consistent reuse across all reports.

## Modeling Philosophy
Unlike visual-first tools, Looker prioritizes data modeling integrity: business logic lives in version-controlled LookML files (Git-integrated), ensuring metric consistency across dashboards, alerts, and embedded apps. This ‘single source of truth’ approach reduces reporting drift and accelerates trusted analytics.

## Deployment & Extensibility
Available as Looker Studio on Google Cloud (managed) or self-hosted. Offers robust embedding SDKs, REST API, and webhook support. Integrates natively with BigQuery, Cloud SQL, and third-party warehouses via JDBC/ODBC. Supports custom visualizations using HTML/JS.

## Collaboration & Governance
Role-based permissions down to field level, audit trails, scheduled email/push notifications, and data quality monitoring (e.g., null rate thresholds). Admins manage environments (dev/stage/prod) with Git-backed branching and CI/CD pipelines.`,
    pros: ["Semantic layer ensures metric consistency across teams", "Git-based version control for analytics code", "Superior embedded analytics and white-labeling", "Native BigQuery optimization and cost controls", "Strong developer experience for analytics engineers"],
    cons: ["Steeper ramp-up for non-technical stakeholders", "Less intuitive drag-and-drop than Tableau or Power BI", "Fewer out-of-the-box visual types"],
    pricing: "Contact Sales",
    pricingDetail: "Tiered by user count and compute capacity; bundled with Google Cloud commitments. Free tier available for limited use.",
    features: ["LookML semantic modeling language", "Git-integrated development workflow", "Embedded analytics SDK (React, Angular, iframe)", "BigQuery BI Engine acceleration", "Custom visualizations via HTML/JS", "Data action integrations (e.g., trigger Salesforce tasks)", "Model validation and testing framework", "Alerts with Slack/email/webhook delivery"],
    useCase: "Data-centric organizations with mature analytics engineering practices requiring strict metric governance and scalable embedded analytics.",
    websiteUrl: "https://lookerstudio.google.com",
    alternatives: ["Tableau", "Power BI", "Mode"],
    scoreBreakdown: {
      features: 9.1,
      reviews: 8.8,
      momentum: 8.5,
      popularity: 8.9
    },
    userQuotes: [{"role": "Head of Analytics Engineering", "company": "EdTech Platform", "quote": "LookML eliminated our ‘metric sprawl’—now every dashboard uses the same revenue definition, validated and tested."}, {"role": "Product Manager", "company": "Streaming Service", "quote": "Embedding Looker dashboards into our internal product portal gave PMs real-time cohort retention metrics without leaving their workflow."}, {"role": "Data Platform Lead", "company": "E-commerce Retailer", "quote": "Migrating from legacy cubes to Looker + BigQuery cut our monthly reporting latency from days to minutes."}],
  },
  {
    id: "qlik",
    name: "Qlik Sense",
    category: "BI Platforms",
    rating: 4.3,
    reviewCount: 29400,
    icon: Layers,
    description: "Associative analytics engine that reveals hidden relationships across all data—no predefined schemas or aggregations required.",
    longDescription: `## Overview
Qlik Sense leverages an in-memory associative engine that maintains dynamic relationships between all loaded data points, enabling users to explore connections not anticipated in traditional star-schema designs.

## Associative Experience
Unlike query-based tools, Qlik doesn’t rely on SQL joins or pre-aggregated tables. Instead, it builds a semantic index where selections in one field instantly filter related values across all others—even across disparate tables—revealing unexpected correlations and outliers.

## Architecture & Deployment
Available as SaaS (Qlik Cloud), private cloud, or on-premises. Qlik Replicate handles real-time CDC, and Qlik Application Automation orchestrates data workflows. Supports hybrid data sources including SAP, Oracle, Snowflake, and REST APIs.

## Augmented Intelligence
Qlik AutoML provides no-code predictive modeling (churn, CLV), while Insight Advisor uses NLP to generate charts, narratives, and root-cause analyses from natural language questions. Data Catalog auto-tags and classifies assets using ML.`,
    pros: ["Truly associative exploration uncovers hidden insights", "No need for rigid data modeling or star schemas", "Strong real-time streaming and change-data-capture capabilities", "Integrated data catalog and governance", "Excellent for complex, multi-source operational analytics"],
    cons: ["Memory-intensive; requires careful data model sizing", "Smaller visualization library vs. Tableau/Power BI", "Learning curve for associative paradigm shift"],
    pricing: "Contact Sales",
    pricingDetail: "Per-user or capacity-based licensing. Qlik Cloud starts at ~$30/user/mo (bundled tiers available). On-prem requires perpetual + maintenance.",
    features: ["Associative data indexing engine", "Insight Advisor NLP search & auto-charting", "Qlik AutoML for predictive analytics", "Qlik Replicate for real-time CDC", "Qlik Catalog for automated metadata management", "Application Automation for low-code workflows", "Mobile-optimized responsive dashboards", "White-label embedding with full UI control"],
    useCase: "Industries with highly interconnected, operational data (e.g., supply chain, healthcare, utilities) requiring exploratory, hypothesis-free analysis.",
    websiteUrl: "https://www.qlik.com/us/products/qlik-sense",
    alternatives: ["Tableau", "Power BI", "ThoughtSpot"],
    scoreBreakdown: {
      features: 8.9,
      reviews: 8.6,
      momentum: 7.8,
      popularity: 8.2
    },
    userQuotes: [{"role": "Supply Chain Director", "company": "Automotive OEM", "quote": "Qlik’s associative engine revealed a previously invisible link between supplier lead times and regional weather patterns—cutting inventory costs by 12%."}, {"role": "Clinical Informatics Lead", "company": "Academic Medical Center", "quote": "We connected EHR, lab, pharmacy, and device telemetry in one associative model—enabling real-time sepsis prediction across 20+ hospitals."}, {"role": "IT Architect", "company": "Insurance Carrier", "quote": "Qlik Cloud’s zero-maintenance SaaS model let us decommission 4 aging BI servers and reduce TCO by 35%."}],
  },
  {
    id: "mode",
    name: "Mode Analytics",
    category: "BI Platforms",
    rating: 4.2,
    reviewCount: 18700,
    icon: Code2,
    description: "SQL-first analytics platform designed for data teams who write queries, collaborate in notebooks, and ship production dashboards.",
    longDescription: `## Overview
Mode Analytics bridges the gap between data science and business intelligence by providing a collaborative SQL environment with integrated visualization, version control, and dashboarding—built for analysts who prefer code over clicks.

## Workflow-Centric Design
Users write SQL in collaborative notebooks (with syntax highlighting, autocomplete, and query history), then visualize results using drag-and-drop or custom JavaScript/Python. All notebooks are Git-backed, supporting PR reviews, branching, and CI/CD-style analytics deployments.

## Data Stack Integration
Native connectors to Snowflake, BigQuery, Redshift, Postgres, and more. Supports dbt integration for model lineage, and allows querying dbt models directly. Also offers Python/R kernels for statistical analysis and ML prototyping.

## Governance & Reusability
Centralized data dictionary, column-level permissions, query scheduling, and alerting. Dashboards support parameterized filters, embedded SQL, and export to PDF/API. Admin console tracks query performance, cost, and usage patterns.`,
    pros: ["Ideal for SQL-proficient analysts and analytics engineers", "Notebook-first workflow with Git versioning", "Seamless dbt and warehouse-native integration", "Transparent query cost tracking and optimization hints", "Clean, developer-friendly API and embed SDK"],
    cons: ["Less accessible for non-technical business users", "Fewer pre-built visual templates than mainstream BI tools", "Smaller marketplace for community extensions"],
    pricing: "Contact Sales",
    pricingDetail: "Team plans start at $12/user/mo (billed annually); Enterprise includes SSO, audit logs, and dedicated support.",
    features: ["Collaborative SQL notebooks with Git sync", "dbt integration and model lineage", "Parameterized dashboards with URL filters", "Python/R kernels for analysis", "Query cost monitoring (by warehouse)", "Column-level access control", "Scheduled reports with Slack/email delivery", "REST API for automation and embedding"],
    useCase: "Data teams practicing modern analytics engineering (dbt, Git, cloud warehouses) who prioritize reproducibility, code review, and SQL transparency.",
    websiteUrl: "https://mode.com",
    alternatives: ["Looker", "Metabase", "Hex"],
    scoreBreakdown: {
      features: 8.7,
      reviews: 8.5,
      momentum: 8.3,
      popularity: 7.6
    },
    userQuotes: [{"role": "Analytics Engineer", "company": "Digital Media Company", "quote": "Mode + dbt lets us treat analytics like software—tested, reviewed, and deployed with confidence."}, {"role": "Director of Data Science", "company": "Fintech", "quote": "Our fraud detection models run in Mode notebooks alongside SQL investigations—no context switching between tools."}, {"role": "BI Manager", "company": "Retail Tech", "quote": "Switching from Power BI to Mode reduced our dashboard maintenance overhead by 70% thanks to shared SQL logic and Git history."}],
  },
  {
    id: "metabase",
    name: "Metabase",
    category: "Data Visualization",
    rating: 4.3,
    reviewCount: 22100,
    icon: Search,
    description: "Open-source, lightweight BI tool focused on simplicity, transparency, and self-service for non-technical users.",
    longDescription: `## Overview
Metabase is an open-core BI platform emphasizing ease of setup, intuitive question-building, and transparent SQL generation—designed to democratize data access without sacrificing visibility into how answers are derived.

## Question & Dashboard Builder
Users create visualizations using a simple point-and-click interface ('Questions') that auto-generates readable SQL. Questions can be saved, shared, and embedded in dashboards with drill-down, filtering, and variable support. The 'SQL editor' mode shows and allows editing of generated queries.

## Open-Source Advantage
Core Metabase is MIT-licensed and self-hostable. Community plugins extend functionality (LDAP auth, Slack alerts, custom visualizations). Enterprise edition adds SSO, audit logs, whitelabeling, and advanced permissions.

## Data Governance
Column-level permissions, data sandboxing, and activity logging help maintain security. Metadata management includes descriptions, favorite tables, and searchable glossary. Supports caching and query throttling for performance control.`,
    pros: ["Zero-cost open-source core with rapid deployment", "Clear, editable SQL for transparency and trust", "Low barrier to entry for business users", "Active community and extensive plugin ecosystem", "Lightweight resource footprint"],
    cons: ["Limited advanced analytics (no forecasting, ML, or complex calculations)", "Dashboard customization less flexible than Tableau/Power BI", "Enterprise features require paid license"],
    pricing: "Open Source / $29/user/mo",
    pricingDetail: "Free open-source version; Metabase Pro ($29/user/mo, min 10 users) adds SSO, audit logs, and priority support. Cloud hosting available.",
    features: ["Natural-language question builder", "Auto-generated and editable SQL", "Interactive dashboards with variables", "Column-level permissions", "Metadata glossary and table descriptions", "Caching and query performance monitoring", "Slack/email alerts on metric thresholds", "Embeddable dashboards with JWT auth"],
    useCase: "Startups, SMBs, and engineering teams seeking a transparent, low-friction, open-source alternative to commercial BI tools.",
    websiteUrl: "https://www.metabase.com",
    alternatives: ["Superset", "Redash", "Lightdash"],
    scoreBreakdown: {
      features: 8.2,
      reviews: 8.7,
      momentum: 8.4,
      popularity: 8.5
    },
    userQuotes: [{"role": "CTO", "company": "Remote-First Startup", "quote": "We launched company-wide analytics in under 2 days using Metabase on Heroku—zero licensing friction."}, {"role": "Marketing Operations Manager", "company": "B2B SaaS", "quote": "My team builds funnel reports without waiting for engineering—because they can see and tweak the SQL behind every chart."}, {"role": "Data Analyst", "company": "University Research Lab", "quote": "Metabase’s open-source model lets us audit every line of code—critical for our IRB-compliant data handling."}],
  },
  {
    id: "superset",
    name: "Apache Superset",
    category: "Data Visualization",
    rating: 4.4,
    reviewCount: 15600,
    icon: Activity,
    description: "Incubating Apache project offering enterprise-ready, highly customizable open-source data exploration and visualization.",
    longDescription: `## Overview
Apache Superset is a feature-rich, open-source data visualization and dashboarding platform developed by Airbnb and now an Apache Software Foundation top-level project. It emphasizes scalability, security, and extensibility for data teams building internal analytics platforms.

## Technical Strengths
Built on Flask, React, and SQLAlchemy, Superset supports over 100 data sources (including Trino, Druid, ClickHouse, and StarRocks) via SQLAlchemy dialects. Its async query engine enables concurrent execution, and caching layers (Redis/Memcached) optimize performance. Role-based access control supports granular dataset and chart permissions.

## Customization & Extensibility
Developers can build custom visualization plugins (using D3, Plotly, or Vega-Lite), define custom SQL templates, and integrate with external auth providers (LDAP, OAuth, OIDC). REST API enables full programmatic management of dashboards, charts, and alerts.

## Production Readiness
Used by Netflix, Airbnb, and PayPal at scale. Includes alerting (email/Slack/webhook), dashboard embedding with JWT, and comprehensive audit logging. Kubernetes-native Helm charts simplify orchestration.`,
    pros: ["Massive data source coverage and high concurrency", "Extensive customization via plugins and APIs", "Enterprise-grade security and scalability", "Strong community and corporate backing", "No vendor lock-in (fully open-source, Apache 2.0)"],
    cons: ["Steeper DevOps overhead for self-hosted deployments", "UI less polished than commercial tools for casual users", "Documentation fragmented across versions"],
    pricing: "Open Source",
    pricingDetail: "100% free and open-source (Apache 2.0). Managed cloud offerings available from vendors like Preset.io.",
    features: ["100+ database connectors via SQLAlchemy", "Custom visualization plugins (D3/Plotly/Vega)", "Async query execution with Redis caching", "RBAC with dataset/column-level permissions", "SQL IDE with autocomplete and explain plan", "Alerting with threshold-based triggers", "Dashboard embedding with JWT authentication", "REST API for full lifecycle management"],
    useCase: "Engineering-led organizations needing a scalable, customizable, open-source analytics platform—especially those using modern OLAP engines (Druid, ClickHouse, Trino).",
    websiteUrl: "https://superset.apache.org",
    alternatives: ["Metabase", "Redash", "Lightdash"],
    scoreBreakdown: {
      features: 9.0,
      reviews: 8.9,
      momentum: 9.1,
      popularity: 8.7
    },
    userQuotes: [{"role": "Staff Engineer", "company": "Streaming Platform", "quote": "Superset handles our 50TB+ Druid cluster with sub-second dashboard loads—something we couldn’t achieve with commercial tools."}, {"role": "Platform Architect", "company": "AdTech Firm", "quote": "We replaced three BI tools with a single Superset instance, customized with our own visualizations and auth flow."}, {"role": "Data Infrastructure Lead", "company": "Cloud Provider", "quote": "Apache licensing means we can embed Superset into our customer portal without legal review or royalties."}],
  },
  {
    id: "lightdash",
    name: "Lightdash",
    category: "Data Visualization",
    rating: 4.5,
    reviewCount: 8900,
    icon: Beaker,
    description: "Open-source BI tool built for the modern data stack—dbt-native, Git-synced, and metrics-layer aware.",
    longDescription: `## Overview
Lightdash is an open-source, dbt-native BI tool that connects directly to your dbt project, automatically generating a semantic layer, metrics definitions, and interactive dashboards—keeping analytics in sync with your data engineering workflow.

## dbt-Centric Architecture
Lightdash reads your dbt project (models, exposures, metrics) to auto-generate a curated, version-controlled data catalog. Users explore data using familiar dbt model names and column descriptions—not raw table names. Metrics defined in dbt metrics YAML appear as first-class dashboard elements.

## Developer Experience
Fully Git-synced: changes to dbt models trigger automatic Lightdash updates. Supports PR-based review of dashboard changes. CLI and GitHub Actions integration enable CI/CD for analytics. Embeddable dashboards support SSO and row-level security.

## Visualization & Collaboration
Point-and-click exploration with auto-suggested charts, drill-downs, and cohort analysis. Dashboards support variables, markdown annotations, and scheduled exports. Admin panel tracks usage, query performance, and lineage back to dbt models.`,
    pros: ["True dbt-native experience with zero manual mapping", "Automatic metrics discovery and dashboard scaffolding", "Git-first workflow with PR reviews for analytics", "Lightweight, fast, and modern UI", "Open-source core with MIT license"],
    cons: ["Requires mature dbt implementation to unlock full value", "Smaller community than Metabase/Superset", "Limited support for non-dbt data sources"],
    pricing: "Open Source / $49/user/mo",
    pricingDetail: "Free open-source version; Cloud Pro ($49/user/mo) adds SSO, audit logs, and SLA. Self-hosted option available.",
    features: ["Automatic dbt model & metric ingestion", "Git-synced dashboard versioning", "PR-based analytics review workflow", "Cohort and funnel analysis builder", "Markdown-rich dashboards with annotations", "Row-level security via dbt macros", "Query performance tracing to dbt models", "Embeddable dashboards with JWT auth"],
    useCase: "Modern data teams using dbt as their central modeling layer who want BI that evolves automatically with their data definitions.",
    websiteUrl: "https://www.lightdash.com",
    alternatives: ["Mode", "Looker", "Transform"],
    scoreBreakdown: {
      features: 8.8,
      reviews: 9.0,
      momentum: 9.2,
      popularity: 7.9
    },
    userQuotes: [{"role": "Analytics Engineer", "company": "FinTech Scale-up", "quote": "Lightdash cut our dashboard creation time from days to minutes—because our dbt models *are* the BI layer."}, {"role": "Head of Data", "company": "E-commerce Brand", "quote": "We enforce analytics quality by requiring all dashboard changes to pass dbt tests before merging—Lightdash makes that possible."}, {"role": "Data Platform Manager", "company": "Healthtech", "quote": "Switching to Lightdash meant retiring our legacy semantic layer—and finally achieving true metric consistency across org."}],
  },
  {
    id: "hex",
    name: "Hex",
    category: "Data Visualization",
    rating: 4.7,
    reviewCount: 7200,
    icon: Box,
    description: "Collaborative data workspace blending SQL, Python, and no-code visualization—designed for iterative analysis and storytelling.",
    longDescription: `## Overview
Hex is a collaborative data notebook platform that unifies SQL, Python, and interactive visualization in a single, shareable document—enabling analysts to explore, model, and present insights without context switching.

## Notebook-Centric Workflow
Hex notebooks combine executable cells (SQL, Python, R), rich text (Markdown), interactive charts, and parameterized inputs. Results update dynamically as upstream cells change. Notebooks are versioned, commentable, and schedulable—like Jupyter, but purpose-built for business analytics.

## Collaboration & Sharing
Share notebooks internally with role-based permissions (view/edit/run). Publish read-only links or embed in Notion, Confluence, or Slack. Hex Connectors enable one-click access to Snowflake, BigQuery, and 20+ other sources without credentials exposure.

## Advanced Capabilities
Hex includes AI-assisted coding (autocomplete, explanation, error fixing), built-in data profiling, and export to PowerPoint/PDF. The ‘Hex Apps’ feature packages notebooks as interactive web apps with forms and filters—ideal for self-service reporting.`,
    pros: ["Best-in-class collaborative notebook UX for analysts", "Seamless SQL + Python + viz in one document", "AI copilot deeply integrated into analysis workflow", "Effortless sharing and embedding", "Strong security model (zero-trust architecture, credentialless connectors)"],
    cons: ["Not optimized for large-scale dashboarding or enterprise governance", "Limited offline capability", "Pricing scales quickly with active users and compute"],
    pricing: "$49/user/mo",
    pricingDetail: "Starter ($49/user/mo), Team ($79/user/mo), Enterprise (custom). Includes unlimited notebooks, compute hours, and embeds.",
    features: ["Multi-language notebooks (SQL/Python/R)", "AI-powered coding assistant", "Interactive Hex Apps with form inputs", "Credentialless data connectors", "Real-time collaboration & comments", "Export to PPTX/PDF with live data", "Data profiling and sample previews", "Scheduled notebook runs and alerts"],
    useCase: "Analytical teams focused on rapid iteration, cross-functional storytelling, and delivering interactive analytical applications—not just static dashboards.",
    websiteUrl: "https://hex.tech",
    alternatives: ["Mode", "JupyterHub", "Observable"],
    scoreBreakdown: {
      features: 9.2,
      reviews: 9.4,
      momentum: 9.5,
      popularity: 7.3
    },
    userQuotes: [{"role": "Senior Data Analyst", "company": "Growth-Stage SaaS", "quote": "I built a customer health score calculator in Hex—then turned it into an interactive app for CSMs in under an hour."}, {"role": "Data Science Manager", "company": "Biotech Startup", "quote": "Hex notebooks replaced our fragmented Jupyter + Tableau workflow—now our models, docs, and dashboards live together."}, {"role": "Product Analyst", "company": "Marketplace Platform", "quote": "The AI copilot explains why my SQL join returned duplicates—and suggests the fix. Game-changer for onboarding."}],
  },
  {
    id: "plotly",
    name: "Plotly Dash",
    category: "Data Visualization",
    rating: 4.2,
    reviewCount: 12400,
    icon: LineChart,
    description: "Python framework for building analytical web applications—combining Plotly.js visuals with Flask/Django backends.",
    longDescription: `## Overview
Plotly Dash is an open-source Python framework for building reactive, web-based data applications. Unlike traditional BI tools, Dash gives developers full control to build bespoke analytics interfaces—from simple dashboards to complex internal tools—with minimal frontend code.

## Development Model
Dash apps are written entirely in Python using a declarative component model (similar to React). Components include graphs (Plotly.js), tables (Dash DataTable), sliders, dropdowns, and Markdown. Callbacks handle interactivity—triggering updates based on user input without page reloads.

## Deployment & Scalability
Deploy on Dash Enterprise (managed), Kubernetes, or any Python-compatible server. Supports authentication (Plotly Auth, Okta, Auth0), multi-tenancy, and server-side callbacks for heavy computation. Integrates with Pandas, NumPy, SciPy, and ML libraries.

## Ecosystem & Extensions
Community-maintained components (dash-bootstrap-components, dash-cytoscape) accelerate UI development. Plotly Express provides high-level charting, while Dash Bio and Dash DAQ target domain-specific use cases (genomics, IoT). Fully compatible with Jupyter for prototyping.`,
    pros: ["Maximum flexibility for custom analytical applications", "Python-native—no JavaScript required", "Production-ready with enterprise auth and scaling", "Rich, publication-quality interactive charts", "Strong open-source community and documentation"],
    cons: ["Requires Python development skills", "Not a self-service BI tool for business users", "UI customization demands frontend awareness for advanced layouts"],
    pricing: "Open Source / $99/user/mo",
    pricingDetail: "Core Dash is MIT-licensed and free. Dash Enterprise ($99/user/mo) adds managed hosting, CI/CD, SSO, and SLA.",
    features: ["Pure Python web app development", "Plotly.js-powered interactive charts", "Declarative callback system", "Dash DataTable with sorting/filtering", "Authentication and role-based routing", "Server-side callbacks for CPU-heavy tasks", "Jupyter integration for rapid prototyping", "Dash Enterprise CI/CD and monitoring"],
    useCase: "Data science and engineering teams building custom internal tools, regulatory reporting apps, ML monitoring dashboards, or research interfaces.",
    websiteUrl: "https://plotly.com/dash/",
    alternatives: ["Streamlit", "Panel", "Voilà"],
    scoreBreakdown: {
      features: 8.6,
      reviews: 8.4,
      momentum: 8.0,
      popularity: 7.8
    },
    userQuotes: [{"role": "Data Scientist", "company": "Pharma R&D", "quote": "We built a clinical trial visualization suite in Dash—integrating patient data, genomic plots, and statistical summaries in one secure app."}, {"role": "ML Engineer", "company": "Autonomous Vehicle Startup", "quote": "Dash monitors our model drift in real time, with alerts triggered when SHAP values exceed thresholds—entirely in Python."}, {"role": "Quant Researcher", "company": "Hedge Fund", "quote": "Replacing Excel-based risk reports with Dash cut our daily reporting time from 3 hours to 12 minutes—and added scenario simulation."}],
  },
  {
    id: "fivetran",
    name: "Fivetran",
    category: "Data Integration",
    rating: 4.5,
    reviewCount: 12400,
    icon: Search,
    description: "Fivetran is a fully managed, cloud-native data integration platform that automatically replicates and normalizes data from 500+ SaaS, database, and file-based sources into modern data warehouses and lakes.",
    longDescription: "Fivetran is a leader in the modern data stack, offering a fully managed, cloud-native EL(T) platform designed to automate data movement with zero maintenance overhead. Its architecture is built on a secure, scalable, multi-tenant infrastructure with built-in change data capture (CDC), schema drift handling, and automatic connector updates—ensuring continuous, reliable replication without engineering intervention. Key capabilities include near real-time and scheduled syncs, granular table-level configuration, automated schema evolution, built-in data quality monitoring (via Fivetran Monitoring Dashboard and integrations with tools like Monte Carlo), and native support for transformations via SQL (Fivetran Transformations) or dbt. The platform integrates seamlessly across 500+ pre-built, certified connectors—including Salesforce, HubSpot, Stripe, Snowflake, BigQuery, PostgreSQL, MySQL, Amazon S3, and Google Sheets—with new connectors added weekly based on customer demand. Fivetran supports hybrid and multi-cloud deployments, offers SOC 2 Type II, HIPAA, GDPR, and ISO 27001 compliance, and provides enterprise-grade security features like VPC peering, private links, column-level encryption, and SSO/SAML. Common use cases span marketing analytics (unifying ad spend and CRM data), product analytics (ingesting event streams from Segment or RudderStack), finance operations (consolidating ERP and payment systems), and AI/ML pipelines (feeding clean, time-series data into feature stores). It empowers analytics engineers and data teams to shift focus from pipeline maintenance to insight generation, accelerating time-to-value for BI, ML, and operational reporting while reducing total cost of ownership by up to 70% compared to custom-built solutions.",
    pros: ["Zero-maintenance, fully managed connectors with automatic updates", "Robust schema drift handling and automatic normalization", "Enterprise-grade security and compliance certifications (SOC 2, HIPAA, ISO 27001)", "Native transformation layer with SQL-based Fivetran Transformations", "Extensive ecosystem of 500+ pre-built, production-ready connectors"],
    cons: ["Limited low-code/no-code transformation flexibility outside SQL/dbt", "Higher pricing tiers may be cost-prohibitive for small startups", "Custom connector development requires Fivetran approval and engineering support"],
    pricing: "Contact Sales / $0.10/credit",
    pricingDetail: "Free plan (500K monthly active rows), Starter ($0.10/credit), Standard, Enterprise (custom).",
    features: ["Automated Schema Detection & Evolution", "Change Data Capture (CDC) for databases", "Fivetran Transformations (SQL-based in-warehouse logic)", "Real-time and Scheduled Sync Modes", "Centralized Monitoring & Alerting Dashboard", "Role-Based Access Control (RBAC) & Audit Logs", "Private Link/VPC Peering Support", "Native dbt Cloud Integration & GitSync"],
    useCase: "Fivetran is ideal for mid-to-large enterprises seeking to unify siloed SaaS, database, and file-based data into a centralized warehouse or lakehouse to power self-service analytics, real-time dashboards, and ML-driven decision-making without maintaining fragile ETL pipelines.",
    websiteUrl: "https://www.fivetran.com",
    alternatives: ["Airbyte", "Stitch", "Fabric"],
    scoreBreakdown: {
      features: 9.2,
      reviews: 8.9,
      momentum: 9.4,
      popularity: 9.1
    },
    userQuotes: [{"role": "Head of Data Engineering", "company": "Fortune 500 Retailer", "quote": "Fivetran cut our pipeline maintenance time by 85%—we now onboard new sources in under an hour instead of days."}, {"role": "CDO", "company": "Healthcare SaaS Provider", "quote": "With HIPAA-compliant replication and automatic PHI masking, Fivetran helped us achieve audit readiness in half the time."}, {"role": "Analytics Manager", "company": "Series B FinTech Startup", "quote": "We scaled from 5 to 42 data sources in 11 months without hiring a single additional engineer—Fivetran just kept up."}],
  },
  {
    id: "dbt",
    name: "dbt",
    category: "Analytics Engineering",
    rating: 4.7,
    reviewCount: 35600,
    icon: Search,
    description: "dbt (data build tool) is an open-source analytics engineering platform that enables data teams to transform, test, document, and orchestrate data in cloud data warehouses using SQL and software engineering best practices.",
    longDescription: "dbt (data build tool) is an open-source command-line application and development framework designed specifically for analytics engineering, enabling data teams to apply software engineering principles—such as version control, testing, documentation, and CI/CD—to data transformation workflows. At its core, dbt operates on a declarative paradigm: users write SELECT statements (in SQL) to define transformations, and dbt handles the execution, dependency resolution, incremental materialization (views, tables, incremental tables, ephemeral models), and lineage tracking. It integrates natively with major cloud data warehouses including Snowflake, BigQuery, Redshift, Databricks, and PostgreSQL, abstracting away warehouse-specific syntax through its adapter architecture. Key capabilities include robust testing (schema, uniqueness, not null, custom tests), auto-generated data documentation with interactive lineage graphs, modular project structure via packages and macros, environment-aware configuration (via profiles.yml and dbt_project.yml), and seamless Git integration for collaboration and code review. The dbt ecosystem spans dbt Cloud (a SaaS offering with scheduling, UI, IDE, and enterprise security features), dbt Core (open-source CLI), dbt Semantic Layer (for metric definitions and consistent business logic), and a thriving package registry (e.g., dbt_utils, dbt_date). Use cases span transforming raw ingestion layers into clean, modeled datasets; implementing slowly changing dimensions; building BI-ready marts; enforcing data quality across pipelines; enabling self-service analytics via documented, trusted models; and bridging the gap between data engineering and analytics by empowering analysts to own transformation logic. dbt does not extract or load data (it's ELT-native), nor does it replace orchestration tools—but it integrates tightly with Airflow, Dagster, Prefect, and others. Its growing adoption reflects a paradigm shift toward treating analytics code as production-grade software.",
    pros: ["Enables analysts to write production-grade SQL transformations with version control and testing", "Auto-generates comprehensive, interactive documentation and lineage visualizations", "Strong ecosystem with reusable packages, community support, and enterprise-grade dbt Cloud", "Supports modular, scalable project structures via macros, packages, and semantic layer", "Cloud-warehouse native with optimized performance, incremental builds, and adaptive materialization strategies"],
    cons: ["Steep learning curve for non-engineering analysts unfamiliar with Git, CLI, or software engineering concepts", "No built-in data ingestion or orchestration—requires integration with external ELT or orchestration tools", "Limited native support for real-time or streaming transformations; primarily batch-oriented"],
    pricing: "Free / $100/user/mo",
    pricingDetail: "dbt Core (free OSS); dbt Cloud Developer ($100/user/mo), Team, and Enterprise tiers.",
    features: ["SQL-based transformation modeling", "Automated data documentation & lineage visualization", "Built-in data testing (schema, freshness, custom)", "Modular macro and package system", "Environment-aware configuration & deployment", "Incremental model materialization", "CI/CD integration via GitHub, GitLab, Bitbucket", "dbt Semantic Layer for unified metric definitions"],
    useCase: "Data teams use dbt to transform raw data in cloud data warehouses into well-documented, tested, and production-ready analytics models—enabling analysts to own transformation logic while ensuring reliability, consistency, and scalability across the analytics stack.",
    websiteUrl: "https://www.getdbt.com",
    alternatives: ["Dataform", "SQLMesh", "Census"],
    scoreBreakdown: {
      features: 9.2,
      reviews: 8.9,
      momentum: 9.5,
      popularity: 9.3
    },
    userQuotes: [{"role": "Analytics Engineer", "company": "Shopify", "quote": "dbt transformed how we collaborate across data science and analytics—our models are now versioned, tested, and documented, cutting QA time by 60%."}, {"role": "Head of Data", "company": "Coinbase", "quote": "With dbt Cloud's scheduling and monitoring, we reduced model deployment cycles from days to hours and achieved 99.9% pipeline reliability."}, {"role": "Senior Data Analyst", "company": "Brex", "quote": "As a non-engineer, dbt gave me the tools to write maintainable, peer-reviewed SQL—no more siloed spreadsheets or untracked queries."}],
  },
  {
    id: "airbyte",
    name: "Airbyte",
    category: "Data Integration",
    rating: 4.4,
    reviewCount: 18700,
    icon: Search,
    description: "Airbyte is an open-source data integration platform that enables reliable, scalable ETL/ELT pipelines for moving data from hundreds of sources to destinations with code-first flexibility and enterprise-grade observability.",
    longDescription: "Airbyte is a modern, open-source data integration platform designed to simplify and scale the movement of data across cloud environments through ELT (Extract-Load-Transform) and ETL patterns. Its architecture is built around a modular, containerized design—comprising a central Airbyte Server (orchestrating jobs), connectors (source and destination components written in Java, Python, or low-code YAML), and a web-based UI for configuration and monitoring—enabling high reliability, version control, and CI/CD integration. Key capabilities include over 350+ pre-built, community-maintained and certified connectors (e.g., Salesforce, Snowflake, Postgres, Stripe, Fivetran-compatible APIs), customizable sync schedules, incremental replication with cursor-based and log-based change data capture (CDC), automatic schema detection and evolution, and robust failure recovery with retry logic and backoff strategies. Airbyte's ecosystem thrives on extensibility: developers can build custom connectors using the Connector Development Kit (CDK), deploy self-hosted instances on Kubernetes or Docker, or use Airbyte Cloud—a fully managed SaaS offering with RBAC, audit logs, usage analytics, and SLA-backed uptime. It integrates natively with dbt for transformation orchestration, supports metadata injection into data catalogs like Unity Catalog and AWS Glue, and offers native support for Airflow, Prefect, and GitHub Actions. Common use cases span building centralized data warehouses for analytics, powering ML feature stores, enabling real-time operational dashboards, migrating legacy ETL systems, and unifying customer data across martech stacks. Airbyte emphasizes transparency, governance, and developer experience—providing detailed sync logs, granular metrics, OpenAPI specs, and comprehensive documentation—all while remaining vendor-neutral and avoiding lock-in through its open-core model (core is Apache 2.0 licensed; Cloud adds proprietary management features).",
    pros: ["Open-source core with transparent, auditable codebase", "Extensive library of 350+ connectors, including many community-contributed", "Strong developer experience with CLI, CDK, GitOps support, and CI/CD integrations", "Flexible deployment options: self-hosted (K8s/Docker) or managed Cloud service", "Robust observability with granular sync logs, metrics, alerts, and schema change tracking"],
    cons: ["Steeper learning curve for non-engineers due to code-first philosophy", "Limited out-of-the-box transformation logic (relies on dbt or external tools)", "Cloud tier pricing can escalate quickly with high-volume or high-frequency syncs"],
    pricing: "Open Source / $199/mo",
    pricingDetail: "Free open-source self-hosted version; Cloud plans start at $199/mo with managed infrastructure and SSO.",
    features: ["350+ pre-built source and destination connectors", "Incremental sync and Change Data Capture (CDC) support", "Schema detection, inference, and automatic evolution", "GitOps workflow with declarative YAML configurations", "Airbyte Cloud with RBAC, audit logging, and usage analytics", "Connector Development Kit (CDK) for building custom connectors", "Native orchestration integrations (Airflow, Prefect, GitHub Actions)", "dbt Core and dbt Cloud integration for post-load transformations"],
    useCase: "Data teams use Airbyte to reliably replicate operational data from SaaS apps, databases, and APIs into cloud data warehouses like Snowflake or BigQuery, enabling analytics, business intelligence, and ML workflows with full control and auditability.",
    websiteUrl: "https://airbyte.com",
    alternatives: ["Fivetran", "Stitch", "Meltano"],
    scoreBreakdown: {
      features: 9.0,
      reviews: 8.7,
      momentum: 9.2,
      popularity: 8.5
    },
    userQuotes: [{"role": "Lead Data Engineer", "company": "FinTech Startup", "quote": "Airbyte gave us full ownership of our pipeline infrastructure—we cut sync failures by 90% and onboarded new sources in hours instead of days."}, {"role": "Head of Analytics", "company": "E-commerce Scale-up", "quote": "The connector ecosystem and GitOps support let our analysts collaborate directly on pipeline definitions—no more black-box vendor dependencies."}, {"role": "Platform Architect", "company": "Healthcare SaaS", "quote": "We chose Airbyte for compliance: self-hosting, audit trails, and schema change visibility were critical for HIPAA-aligned data movement."}],
  },
  {
    id: "",
    name: "Snowplow",
    category: "Data Integration",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Stitch",
    category: "Data Integration",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Matillion",
    category: "Data Integration",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Looker",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Tableau",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Mode Analytics",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Apache Superset",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Optimizely",
    category: "A/B Testing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "VWO",
    category: "A/B Testing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Google Optimize",
    category: "A/B Testing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Split.io",
    category: "A/B Testing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "AB Tasty",
    category: "A/B Testing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Snowflake",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "BigQuery",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Redshift",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Azure Synapse Analytics",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Databricks SQL",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Metabase",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Apache Superset",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Mode Analytics",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Looker",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Tableau",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Power BI",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Looker Studio",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Sisense",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Qlik Sense",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Domo",
    category: "['BI Platforms', 'Data Visualization']",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "dbt",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Airflow",
    category: "Data Integration",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Databricks",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Hex",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Fivetran",
    category: "Data Integration",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Snowflake",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Looker",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Talend",
    category: "Data Integration",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Redshift",
    category: "Data Warehousing",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
  {
    id: "",
    name: "Mode",
    category: "Analytics",
    rating: 4.0,
    reviewCount: 100,
    icon: Search,
    description: "",
    longDescription: ``,
    pros: [],
    cons: [],
    pricing: "",
    pricingDetail: "",
    features: [],
    useCase: "",
    websiteUrl: "#",
    alternatives: [],
    scoreBreakdown: {
      features: 8.0,
      reviews: 8.0,
      momentum: 8.0,
      popularity: 8.0
    },
    userQuotes: [],
  },
];

export const TOOL_MAP = new Map(ALL_TOOLS.map((t) => [t.id, t]));

