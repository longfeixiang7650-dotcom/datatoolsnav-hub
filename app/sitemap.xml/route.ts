import { MetadataRoute } from "next";

const BLOG_SLUGS = [
    "best-bi-platforms-2026",
    "data-engineering-pipeline-2026-etl-eltd-reverse-etl-tools-comparison",
    "data-visualization-tools-guide",
    "top-data-analytics-data-science-trends-2026",
    "data-quality-observability-2026-key-findings",
    "ga4-vs-adobe-vs-mixpanel-2026",
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
] as const;

const CATEGORY_SLUGS = [
  "a-b-testing",
    "analytics",
    "bi-platforms",
    "data-integration",
    "data-visualization",
    "data-warehousing",
    "['bi-platforms',-'data-visualization']",
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
