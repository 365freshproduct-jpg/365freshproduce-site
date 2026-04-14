import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import { getSiteContent, isSupportedLocale, supportedLocales } from "@/lib/site-data";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ru: "/ru",
        hy: "/hy",
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}`,
      siteName: content.company.name,
      locale: locale === "en" ? "en_US" : locale,
      type: "website",
      images: [
        {
          url: "/hero-greenhouse.svg",
          width: 1600,
          height: 900,
          alt: content.hero.title,
        },
      ],
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.company.name,
    url: `https://www.auren-greenhouse.com/${locale}`,
    email: content.company.email,
    telephone: content.company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.company.address,
      addressCountry: "AM",
    },
    description: content.metadata.description,
    knowsAbout: [
      "Turnkey greenhouse construction",
      "Climate control systems",
      "Irrigation systems",
      "Cooling and heating systems",
      "Automation and monitoring",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteShell locale={locale} />
    </>
  );
}
