import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "best-no-code-website-builders-2026",
  "top-no-code-app-builders-entrepreneurs",
  "no-code-automation-zapier-vs-make-vs-n8n",
  "airtable-vs-nocodb-vs-budibase-database-comparison",
  "build-saas-without-code-step-by-step-guide",
  "best-no-code-ecommerce-platforms-2026",
  "nocode-vs-lowcode-difference-choose",
  "canva-vs-figma-vs-penpot-design-tools-2026",
  "internal-tools-no-code-budibase-retool",
  "mobile-app-development-no-code-flutterflow-draftbit-glide",
  "nocode-vs-lowcode-2026-comparison-guide",
  "webflow-vs-bubble-vs-framer-2026",
  "flutterflow-vs-draftbit-vs-adalo-2026",
  "nocode-lowcode-mid-2026-ai-enterprise-trends",
];

const TOOL_SLUGS = [
  "webflow", "bubble", "wix", "squarespace", "weebly", "carrd", "framer", "unbounce", "duda", "softr", "dorik", "tilda", "pixpa", "zyro", "bookmark", "flutterflow", "draftbit", "adalo", "glide", "thunkable", "bravo-studio", "appgyver", "zapier", "make", "n8n", "pipedream", "parabola", "tray-io", "workato", "relay-app", "figma", "canva", "penpot", "balsamiq", "sketch", "lunacy", "creatie", "ecwid", "gumroad", "selldone", "shift4shop", "printful", "podia", "payhip", "sambercart", "airtable", "nocodb", "supabase", "firebase", "xano", "backendless", "rowy", "budibase", "hubspot-crm", "mailchimp", "activecampaign", "convertkit", "intercom", "freshsales", "teachable", "thinkific", "kajabi", "learnworlds", "mighty-networks", "circle",
]

export async function GET() {
  const baseUrl = "https://nocode-tools.net";

  const staticPages = [
    { url: `${baseUrl}`, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.5 },
    { url: `${baseUrl}/privacy`, priority: 0.4 },
    { url: `${baseUrl}/terms`, priority: 0.4 },
    { url: `${baseUrl}/disclosure`, priority: 0.3 },
    { url: `${baseUrl}/faq`, priority: 0.6 },
  ];

  const toolPages = TOOL_SLUGS.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    priority: 0.8,
  }));

  const blogPages = BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
  }));

  const allPages = [...staticPages, ...toolPages, ...blogPages];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
