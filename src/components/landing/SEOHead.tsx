import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  siteName?: string;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/dashboard_desktop.png",
  ogType = "website",
  siteName = "Automation Aid",
}: SEOHeadProps) => (
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
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content="bg_BG" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="robots" content="index, follow" />
  </Helmet>
);

export default SEOHead;
