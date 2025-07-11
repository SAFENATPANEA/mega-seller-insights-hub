
export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Insights Hub - MegaSeller POS",
  "description": "El blog de Mega Seller POS, donde compartimos conocimientos y estrategias para optimizar tu negocio.",
  "url": window.location.origin,
  "publisher": {
    "@type": "Organization",
    "name": "MegaSeller POS",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${window.location.origin}/?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const createBlogPostSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico",
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "MegaSeller POS",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url || window.location.href
  },
  "keywords": article.keywords || [],
  "articleSection": "Tecnología POS",
  "inLanguage": "es-ES"
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MegaSeller POS",
  "description": "Sistema de punto de venta inteligente para optimizar tu negocio",
  "url": window.location.origin,
  "logo": "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico",
  "sameAs": [
    // Agregar redes sociales aquí cuando estén disponibles
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  }
});
