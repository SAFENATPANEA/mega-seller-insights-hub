
import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  jsonLd?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) updateMetaTag('keywords', seoData.keywords);
    if (seoData.author) updateMetaTag('author', seoData.author);

    // Open Graph meta tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', seoData.ogType || 'website', true);
    if (seoData.ogImage) updateMetaTag('og:image', seoData.ogImage, true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'Insights Hub - MegaSeller POS', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    if (seoData.twitterImage) updateMetaTag('twitter:image', seoData.twitterImage);

    // Robots meta tag
    const robotsContent = [];
    if (seoData.noindex) robotsContent.push('noindex');
    if (seoData.nofollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');
    updateMetaTag('robots', robotsContent.join(', '));

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seoData.canonicalUrl || window.location.href;

    // JSON-LD structured data
    if (seoData.jsonLd) {
      let jsonLdScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (jsonLdScript) {
        jsonLdScript.remove();
      }
      
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify(seoData.jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    // Language and viewport (if not already set)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    document.documentElement.lang = 'es';

  }, [seoData]);
};
