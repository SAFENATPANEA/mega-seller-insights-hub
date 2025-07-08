import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
  articleData?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section?: string;
    tags?: string[];
  };
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "Mega Seller POS, sistema POS, gestión de inventario, análisis de ventas, fidelización de clientes, retail, comercio electrónico",
  author = "Mega Seller POS",
  ogImage = "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico",
  ogType = "website",
  canonicalUrl,
  structuredData,
  articleData
}: SEOHeadProps) => {
  const fullTitle = `${title} - Insights Hub | Mega Seller POS`;
  const currentUrl = canonicalUrl || window.location.href;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mega Seller POS",
    "url": "https://megaseller.com",
    "logo": "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico",
    "description": "Sistema POS inteligente para optimizar tu negocio retail",
    "sameAs": [
      "https://facebook.com/megasellerpos",
      "https://twitter.com/megasellerpos",
      "https://linkedin.com/company/megasellerpos"
    ]
  };

  // Article structured data if provided
  const articleStructuredData = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": articleData.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mega Seller POS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico"
      }
    },
    "datePublished": articleData.publishedTime,
    "dateModified": articleData.modifiedTime || articleData.publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "articleSection": articleData.section,
    "keywords": articleData.tags?.join(", ")
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Insights Hub - Mega Seller POS" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@megasellerpos" />
      <meta name="twitter:creator" content="@megasellerpos" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1976d2" />
      <meta name="msapplication-TileColor" content="#1976d2" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://megaseller.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://megaseller.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": title,
              "item": currentUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead; 