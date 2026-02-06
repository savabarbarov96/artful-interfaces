import { Helmet } from "react-helmet-async";

const SITE_ORIGIN = "https://automationaid.bg";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  siteName?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/dashboard_desktop.png",
  ogType = "website",
  siteName = "Automation Aid",
  structuredData,
}: SEOHeadProps) => {
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_ORIGIN}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="bg_BG" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="robots" content="index, follow" />
      <html lang="bg" />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(structuredData)
              ? { "@context": "https://schema.org", "@graph": structuredData }
              : structuredData
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
