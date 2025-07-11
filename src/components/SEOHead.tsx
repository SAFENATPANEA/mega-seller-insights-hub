
import { useSEO } from '../hooks/useSEO';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'blog';
  canonicalUrl?: string;
  jsonLd?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  author,
  ogImage = "https://dhquwautvymwazbaojgf.storage.supabase.co/v1/object/public/pos-bucket//mega-seller-logo.ico",
  ogType = 'website',
  canonicalUrl,
  jsonLd,
  noindex = false,
  nofollow = false
}: SEOHeadProps) => {
  
  useSEO({
    title: `${title} | Insights Hub - MegaSeller POS`,
    description,
    keywords,
    author,
    ogTitle: `${title} | Insights Hub - MegaSeller POS`,
    ogDescription: description,
    ogImage,
    ogType,
    twitterTitle: `${title} | Insights Hub - MegaSeller POS`,
    twitterDescription: description,
    twitterImage: ogImage,
    canonicalUrl,
    jsonLd,
    noindex,
    nofollow
  });

  return null;
};

export default SEOHead;
