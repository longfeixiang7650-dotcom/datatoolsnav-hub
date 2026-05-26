import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "NoCode Tool Hub — Best No-Code Tools & Platform Reviews 2026",
    template: "%s — NoCode Tool Hub",
  },
  description:
    "Compare 69+ no-code tools with verified reviews, pricing breakdowns, and expert comparisons. Find the perfect no-code platform for your business. Webflow, Bubble, Airtable, Zapier and more.",
  keywords: [
    "no-code tools",
    "low-code platforms",
    "no-code development",
    "website builders no code",
    "app builders no code",
    "no-code automation",
    "no-code database",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NoCode Tool Hub",
    title: "NoCode Tool Hub — Best No-Code Tools & Platform Reviews 2026",
    description:
      "Compare 69+ no-code tools with verified reviews, pricing, and expert comparisons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Background Effects */}
        <div className="aurora-bg" />
        <div className="grid-pattern" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
