import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Data Tools Nav — Best Data Analytics & BI Tools Directory 2026",
    template: "%s — Data Tools Nav",
  },
  description:
    "Discover 50+ data analytics and business intelligence tools with verified reviews, pricing breakdowns, and expert comparisons. Find the perfect BI platform for your business. Tableau, Power BI, Looker, Metabase and more.",
  keywords: [
    "data tools", "BI platforms", "business intelligence",
    "analytics tools", "data visualization", "BI software",
    "data analytics", "dashboard tools",
  ],
  verification: { google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo" },
  openGraph: {
    type: "website", locale: "en_US", siteName: "Data Tools Nav",
    title: "Data Tools Nav — Best Data Analytics & BI Tools Directory 2026",
    description: "Discover 50+ data analytics and business intelligence tools with verified reviews, pricing, and expert comparisons.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
