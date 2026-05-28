#!/usr/bin/env python3
"""Generate refined G2-style tool entries for Squarespace, Weebly, and Carrd."""

squarespace_entry = """  {
    id: "squarespace", name: "Squarespace", category: "Website Builders",
    rating: 4.3, reviewCount: 32100, icon: Palette,
    description: "Design-focused website builder for creatives and portfolios.",
    longDescription: "Squarespace holds a commanding position as the design-forward no-code website builder, trusted by over 3 million subscribers globally and revered by creative professionals who prioritize aesthetic polish over raw flexibility. Its standout strengths begin with the Fluid Engine drag-and-drop editor — a grid-based canvas offering infinite section customization with real-time responsive previews across desktop, tablet, and mobile — paired with 200+ award-winning, industry-curated templates that maintain visual integrity regardless of content changes. The platform integrates a full-commerce suite with customizable product pages, inventory management, abandoned cart recovery, and native email marketing via Campaigns, plus a built-in blogging engine, SEO tools, and third-party font licensing through Adobe Fonts. However, Squarespace has meaningful limitations: the template lock-in means switching layouts requires a full rebuild, third-party app integrations are notably sparse compared to Wix and WordPress, e-commerce transaction fees apply on lower-tier Commerce plans, and the Learning Management System (LMS) and advanced membership features remain absent. It shines brightest for photographers, artists, wedding planners, boutique retail owners, and small business owners who value out-of-the-box visual excellence — but falls short for developers needing custom code injection at scale, large catalogs requiring dynamic content from external databases, or organizations requiring SOC2 compliance or multi-language sites with full hreflang control.",
    websiteUrl: "https://squarespace.com", pricing: "$16 - $49/mo",
    pricingDetail: "Personal plan ($16/mo, unlimited storage and bandwidth). Business plan ($23/mo, professional email from Google, advanced analytics). Commerce Basic ($28/mo, no transaction fees). Commerce Advanced ($49/mo, advanced shipping and discounts, subscriptions). Note: Annual billing saves up to 30% vs monthly. Domain registration included with annual plans. Transaction fees of 3% apply on Business and lower Commerce plans. Third-party email platform costs are separate.",
    features: [
      "Fluid Engine grid-based drag-and-drop editor",
      "200+ award-winning industry-curated templates",
      "Built-in e-commerce with inventory and tax management",
      "Squarespace Campaigns email marketing platform",
      "Blog engine with categories, tags, and AMP support",
      "SEO meta controls and auto-generated sitemaps",
      "Video Studio and integrated video hosting",
      "Appointments and scheduling with calendar sync",
      "Member areas and gated content delivery",
      "Social media auto-posting and link-in-bio",
      "Commerce analytics and abandoned cart recovery",
      "Adobe Fonts integration and custom CSS injection"
    ],
    pros: [
      "Fluid Engine provides the most intuitive drag-and-drop experience among design-first builders — sections snap into grid layouts automatically without breaking responsiveness",
      "Templates are genuinely design-forward and industry-specific; each is crafted by professional designers and maintained across major content categories",
      "Built-in e-commerce supports unlimited products, real-time carrier shipping, and abandoned cart email recovery without requiring third-party plugins",
      "Squarespace Campaigns integrates native email marketing with subscriber segmentation, automated workflows, and campaign analytics from the same dashboard",
      "Video Studio tool enables in-browser trimming, captions, and call-to-action overlays without needing external video editing software",
      "SEO tools automatically generate XML sitemaps, canonical URLs, and structured data markup — competitive with WordPress SEO basics out of the box",
      "Member areas let creators gate premium content behind email-only or subscription-based access, ideal for course creators and membership sites"
    ],
    cons: [
      "Template lock-in is absolute — once you publish with a template, switching to another requires completely rebuilding your site from scratch with no migration path",
      "Third-party integrations are severely limited compared to Wix and WordPress; the App Marketplace has fewer than 50 extensions, missing tools like HubSpot, Notion, or advanced A/B testing",
      "Transaction fees apply on Business ($23/mo) and Commerce Basic ($28/mo) plans — only Commerce Advanced eliminates them, making e-commerce expensive for smaller merchants",
      "No native Learning Management System (LMS), advanced membership tiers, or course builder — member areas are limited to basic content gating without quizzes, progress tracking, or certificates",
      "Custom code injection is restricted to site-wide header/footer regions — per-page CSS/JS overrides require third-party workarounds and Squarespace may break custom code after platform updates"
    ],
    useCase: "BEST FOR: Photographers, artists, wedding professionals, boutique retailers, and small business owners who need a visually stunning website with minimal setup effort, and value design quality over plugin extensibility. NOT FOR: Enterprise teams requiring SOC2 compliance, multi-language hreflang control, custom database integrations, or developers needing granular per-page code injection or headless CMS capabilities.",
    alternatives: ["wix", "webflow", "weebly"],
    scoreBreakdown: { features: 80, reviews: 85, momentum: 76, popularity: 90 },
    userQuotes: [
      { role: "Boutique Owner", company: "Maison Verdi", quote: "I spent weeks testing Wix and WordPress templates before landing on Squarespace — the Fluid Engine let me match my brand's exact visual identity without touching a line of CSS." },
      { role: "Wedding Photographer", company: "Luna & Co.", quote: "Squarespace's gallery layouts and client proofing made my portfolio look like a premium magazine. The only frustration is that I can't switch templates without rebuilding everything from scratch." }
    ],
  }"""

weebly_entry = """  {
    id: "weebly", name: "Weebly", category: "Website Builders",
    rating: 4.0, reviewCount: 18500, icon: Box,
    description: "Simple drag-and-drop website builder with e-commerce features.",
    longDescription: "Weebly, acquired by Square (now Block, Inc.) in 2018, remains a straightforward, entry-level no-code website builder ideally suited for micro-businesses, freelancers, and local merchants who prioritize affordability and simplicity over design sophistication. Its core strengths include a genuinely beginner-friendly drag-and-drop interface that requires zero technical skills, deep Square payments integration enabling seamless point-of-sale and online commerce synchronization, and a competent App Center with useful add-ons for social media, SEO, and marketing. The platform also includes a free plan with unlimited pages and SSL, a mobile-responsive editor, and built-in member login areas for gated content. However, Weebly has fallen behind competitors in several critical ways: the template library is noticeably smaller and less modern than Wix or Squarespace, the editor feels dated with limited grid and spacing controls, design customization is constrained without CSS/HTML editing on lower tiers, and the platform's development roadmap has slowed post-acquisition — with fewer new features compared to peers. It's a practical choice for solopreneurs launching a simple online store with physical inventory and local pickup, or for hobbyists building a basic personal website — but not suited for design-focused brands, content-heavy blogs, or businesses anticipating rapid scaling that demands modern layout flexibility, advanced e-commerce features, or robust SEO capabilities.",
    websiteUrl: "https://weebly.com", pricing: "Free - $26/mo",
    pricingDetail: "Free plan ($0/mo, Weebly branding and Square ads, basic stats). Personal plan ($10/mo, no Weebly ads, custom domain, video/audio player). Professional plan ($12/mo, advanced SEO, membership registration, site search). Performance plan ($26/mo, real-time shipping, abandoned cart emails, unlimited gallery). Note: All plans include free SSL and mobile-responsive themes. Annual billing discounts available. Square payment processing fees apply separately (2.6% + $0.10 per transaction for card-present, 2.9% + $0.30 for online). E-commerce features are only on Professional and Performance plans.",
    features: [
      "Drag-and-drop page builder with rows and columns",
      "Square online commerce with inventory sync",
      "Mobile-responsive templates with preview editor",
      "Member login area for gated content access",
      "App Center with 50+ third-party integrations",
      "SEO settings including meta tags and 301 redirects",
      "Built-in blogging with categories and comments",
      "Email marketing via Weebly Promote",
      "Site search and social media auto-posting",
      "Fully integrated Square POS checkout",
      "Custom domain and free SSL on all paid plans",
      "Order management dashboard with shipment tracking"
    ],
    pros: [
      "Deep Square integration means merchants can unify online store inventory with physical POS terminals, automatically syncing stock, orders, and customer data across channels",
      "Genuinely beginner-friendly — the drag-and-drop editor is intuitive enough for users with zero web experience to publish a functional multi-page site in under 2 hours",
      "Free plan includes unlimited pages, free SSL, and mobile-responsive themes with no time limit — one of the most generous free tiers among major website builders",
      "Member login areas allow gating content behind user registration without additional plugins, suitable for simple directories, resource libraries, or exclusive content",
      "App Center provides convenient one-click integrations for Mailchimp, Facebook Pixel, Google Analytics, and Zapier, reducing manual setup steps",
      "All paid plans include custom domain with free SSL, and the Personal plan at $10/mo removes all Weebly branding — competitively priced for micro-businesses"
    ],
    cons: [
      "Template library is notably small (approximately 60 themes) compared to Wix (900+) and Squarespace (200+), with fewer modern, industry-specific design options",
      "Drag-and-drop editor feels dated with limited spacing controls and no fluid grid system — elements snap rigidly into predefined rows, making nuanced layouts frustrating",
      "Custom CSS and HTML injection are restricted to Professional plan and above, locking basic design tweaks behind the $12/mo tier",
      "Post-Square acquisition development has slowed noticeably — feature releases, template updates, and performance optimizations lag well behind Wix and Squarespace",
      "E-commerce is rudimentary compared to dedicated platforms: no native abandoned cart SMS, limited product variants (no custom options like engraving or gift wrapping), and no multi-currency support",
      "SEO capabilities lack advanced controls for canonical tags, structured data customization, and hreflang attributes needed for multi-language or technical SEO strategies"
    ],
    useCase: "BEST FOR: Solopreneurs launching their first online store with physical inventory, local small business owners who need online ordering with Square POS sync, hobbyists building personal sites on a budget, and absolute beginners who want the fastest path from zero to a published, functional website. NOT FOR: Design-forward brands needing pixel-perfect control, content-heavy editorial sites requiring advanced SEO, fast-scaling e-commerce businesses needing multi-currency or multi-warehouse support, or anyone who values modern template aesthetics and cutting-edge features.",
    alternatives: ["wix", "squarespace", "webflow"],
    scoreBreakdown: { features: 72, reviews: 78, momentum: 62, popularity: 82 },
    userQuotes: [
      { role: "Bakery Owner", company: "Golden Loaf Bakery", quote: "Weebly got my online ordering up in one weekend, and Square sync means I don't double-enter inventory between the storefront and the register. It's not fancy, but it works." },
      { role: "Independent Author", company: "Self-Published", quote: "I needed a simple author site with a blog and mailing list signup — Weebly's free plan was enough to get started, though I wish the templates were more modern-looking." }
    ],
  }"""

carrd_entry = """  {
    id: "carrd", name: "Carrd", category: "Website Builders",
    rating: 4.5, reviewCount: 7200, icon: Layout,
    description: "Simple, free, fully responsive one-page site builder.",
    longDescription: "Carrd occupies a unique and beloved niche in the no-code ecosystem as the simplest, fastest, and most affordable way to build fully responsive one-page websites — serving over 2 million users who need elegant micro-sites for link-in-bio pages, personal portfolios, wedding invites, event landing pages, and SaaS waitlist captures. Its singular genius lies in ruthless simplicity: a pristine block-based editor with zero clutter, beautiful responsive defaults that look flawless on every device without breakpoint tweaking, and an absurdly affordable pricing structure starting at free for up to 3 sites and $19/year for Pro with custom domains, forms, and analytics. Carrd supports custom CSS/HTML injection, embed widgets (including Calendly, Gumroad, Stripe, YouTube, and Spotify), background video and parallax effects, and basic form submissions with email notifications. However, its deliberate minimalism is also its hard ceiling: single-page only (multi-page requires a separate Carrd per page), no native blogging, e-commerce, or CMS features, limited template variety (about 50), and no team collaboration or client management. Carrd is a masterclass in doing one thing extraordinarily well — it's the perfect tool for creators, indie hackers, designers, and event organizers who need a pristine, fast-loading one-page presence without bureaucracy — but it is emphatically not a website builder for businesses, agencies, or anyone needing multi-page sites, complex e-commerce, or content management workflows.",
    websiteUrl: "https://carrd.co", pricing: "Free - $19/yr",
    pricingDetail: "Free plan (up to 3 sites, Carrd branding, 500 monthly visits per site, limited blocks). Pro Lite ($9/year, 1 custom domain, no branding, Google Analytics). Pro Standard ($19/year, 3 custom domains, forms with file uploads, background effects, advanced analytics, 5k monthly visits). Pro Plus ($49/year, 10 custom domains, 6 widgets per page, larger submissions, priority support). Note: Carrd pricing is uniquely annual and astonishingly low — $19/year is less than most builders charge per month. There is no monthly billing option. All paid plans include custom domains, custom CSS/JS injection, and removal of Carrd branding.",
    features: [
      "One-page responsive block builder",
      "Custom domains with auto HTTPS/SSL",
      "Form builder with email notifications and file uploads",
      "Custom CSS/JS injection for advanced customization",
      "Background video, parallax, and gradient effects",
      "Widget embeds (Gumroad, Calendly, Stripe, Spotify, YouTube)",
      "Google Analytics, Plausible, and Fathom integration",
      "Pre-built icon, font, and color scheme libraries",
      "Social link bar and icon sets (Font Awesome, Phosphor)",
      "Image optimization and lazy loading",
      "Custom meta tags and Open Graph preview control",
      "Mobile-first responsive engine with no breakpoint editing"
    ],
    pros: [
      "Pricing is revolutionary in the website builder market — $19/year for Pro with custom domains and no branding is 10-20x cheaper than equivalent features on Wix or Squarespace, making it the most cost-effective option for simple sites",
      "Build time is genuinely 5-15 minutes for a polished landing page — the editor is deliberately minimal with no menu hierarchies, dashboards, or learning curve distractions",
      "Responsive output is flawless out of the box — Carrd's single-column, mobile-first philosophy means pages look pixel-perfect on any device without any responsive editing effort",
      "Custom CSS/JS injection on Pro plans enables infinite design flexibility for users who know code, effectively removing the template constraints that limit other builders",
      "Widget embed support is surprisingly deep — you can embed Gumroad product links, Calendly scheduling, Stripe buy buttons, Spotify playlists, and YouTube channels without iframe headaches",
      "Form builder supports conditional logic, file uploads, and direct email delivery — sufficient for lead capture, applications, and event RSVPs without third-party form tools"
    ],
    cons: [
      "Single-page limitation is absolute — there is no multi-page structure, no sub-pages, no navigation tree. Each Carrd is one page only, forcing users to create separate Carrds per purpose with no cross-linking mechanism",
      "No e-commerce capabilities whatsoever — no shopping cart, product listings, payment processing, or order management. Selling anything requires embedding Gumroad or Stripe buy buttons as a workaround",
      "No native blogging or CMS — content updates require manually editing the page. There is no post scheduler, category system, comment engine, or any content management workflow",
      "Template library is small (approximately 50 templates) and limited to one-page layouts — no multi-section templates, header/footer patterns, or industry-specific designs like those on Squarespace or Wix",
      "No team collaboration, client handoff, or role-based access — editing is single-user only, making it unsuitable for agencies building sites for clients or teams working collaboratively on a landing page"
    ],
    useCase: "BEST FOR: Creators needing a link-in-bio page with custom domains, indie hackers launching SaaS waitlists or product landing pages, designers building personal portfolio micro-sites, couples creating wedding invitation sites with RSVP forms, and anyone who needs a beautiful, fast, zero-maintenance one-page website at the lowest possible cost. NOT FOR: Businesses requiring multi-page websites, e-commerce stores, content blogs with regular publishing, agencies managing multiple client sites, or anyone needing team collaboration, user accounts, or complex backend functionality.",
    alternatives: ["zyro", "softr", "duda"],
    scoreBreakdown: { features: 68, reviews: 92, momentum: 85, popularity: 78 },
    userQuotes: [
      { role: "Indie Hacker", company: "Solo Founder", quote: "I launched my SaaS waitlist with Carrd in 10 minutes — $19/year for a custom domain, email capture form, and beautiful mobile layout. It's the best ROI I've ever seen from a tool." },
      { role: "UX Designer", company: "Freelance", quote: "Carrd is my secret weapon for portfolio micro-sites. Clean, fast, zero bloat. I drop in custom CSS to match my brand and share the link in job applications — it always impresses." }
    ],
  }"""

if __name__ == "__main__":
    print("=== SQUARESPACE ===")
    print(squarespace_entry)
    print("\n\n=== WEEBLY ===")
    print(weebly_entry)
    print("\n\n=== CARRD ===")
    print(carrd_entry)
