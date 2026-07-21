import { MetadataRoute } from "next";

const BLOG_SLUGS = [
    "best-bi-platforms-2026",
    "data-visualization-tools-guide",
    "data-quality-observability-2026-key-findings",
    "ga4-vs-adobe-vs-mixpanel-2026",
    "essential-data-analytics-tools-2026",
    "dbt-analytics-engineering-guide-2026",
    "embedded-analytics-guide-2026",
    "cloud-data-warehouses-2026-comparison",
    "data-lakehouse-vs-warehouse-vs-lake-2026",
    "airflow-vs-prefect-vs-dagster-2026-orchestration-comparison",
    "bi-platform-selection-smb-2026",
    "data-catalog-tools-compared-2026",
    "reverse-etl-data-activation-2026-guide",
    "data-governance-2026",
    "reverse-etl-operational-analytics-2026",
    "why-we-ditched-spreadsheets-for-sql-notebooks",
    "modern-data-stack-tool-selection-guide-2026",
    "how-to-choose-the-right-data-integration-tool-in-2026-airbyte-vs-fivetran-vs-matillion-vs-custom",
    "why-we-switched-from-tableau-to-apache-superset",
    "data-architecture-modernization-dbt-snowflake",
    "stream-processing-vs-batch-processing-2026-guide",
    "data-contracts-schema-governance-2026",
    "analytics-tools-smb-comparison-2026",
    "modern-etl-pipeline-trends-2026",
    "building-unified-analytics-stack-bigquery-databricks-dbt",
    "real-time-data-streaming-2026-kafka-vs-pulsar-vs-redpanda-vs-kinesis",
    "clickhouse-vs-druid-vs-rockset-vs-materialize-2026",
    "how-to-choose-etl-tool-2026-airbyte-vs-fivetran-vs-matillion-vs-dbt-vs-custom",
    "data-analysis-tools-comparison-2026",
    "real-time-analytics-platforms-2026-stream-processing",
    "data-pipeline-observability-tools-2026",
    "natural-language-query-tools-2026-text-to-sql-comparison",
    "embedded-analytics-2026",
    "choose-right-data-viz-tool-analytics-stack-2026",
    "web-scraping-tools-comparison-for-analysts",
    "top-data-analytics-platforms-bi-2026",
    "state-of-data-integration-2026",
    "data-cleaning-preparation-tools-2026",
    "data-governance-modern-data-stack-2026",
    "python-r-julia-spss-statistical-analysis-2026",
    "data-mesh-2026-practical-guide",
] as const;

const TOOL_SLUGS = [
  "tableau",
    "powerbi",
    "looker",
    "qlik",
    "mode",
    "metabase",
    "superset",
    "lightdash",
    "hex",
    "plotly",
    "fivetran",
    "dbt",
    "airbyte",
    "snowplow",
    "stitch",
    "matillion",
    "snowflake",
    "sisense",
    "domo",
    "airflow",
    "databricks",
    "talend",
    "optimizely",
    "vwo",
    "google-cloud-experimentation-suite",
    "great-expectations",
    "apache-kafka",
    "apache-spark",
] as const;

const CATEGORY_SLUGS = [
  "a-b-testing",
    "analytics",
    "bi-platforms",
    "data-integration",
    "data-visualization",
    "data-warehousing",
] as const;

export async function GET() {
  const baseUrl = "https://datatoolsnav.net";

  const urls: string[] = [];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'].concat(urls).concat(['</urlset>']).join('\n');

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
