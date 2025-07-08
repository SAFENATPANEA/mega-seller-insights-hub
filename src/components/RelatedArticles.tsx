import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedArticle {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: string;
  image?: string;
}

interface RelatedArticlesProps {
  currentArticleSlug: string;
  currentCategory: string;
}

const RelatedArticles = ({ currentArticleSlug, currentCategory }: RelatedArticlesProps) => {
  // Related articles data - in a real app, this would come from a CMS or API
  const allArticles = [
    {
      title: "5 Estrategias para Optimizar tu Inventario y Reducir Costos",
      excerpt: "Descubre cómo una gestión inteligente del inventario puede transformar la rentabilidad de tu negocio.",
      slug: "/articulo/optimizar-inventario-reducir-costos",
      category: "Gestión de Inventario",
      readTime: "8 min",
      image: "/lovable-uploads/e9615d23-b2e8-44d5-b037-30d58e0a1c7b.png"
    },
    {
      title: "Análisis de Ventas: KPIs que Todo Dueño de Negocio Debe Conocer",
      excerpt: "Identifica las métricas que realmente importan para tomar decisiones estratégicas que impulsen tu crecimiento.",
      slug: "/articulo/analisis-ventas-kpis-negocio",
      category: "Análisis de Datos",
      readTime: "10 min",
      image: "/lovable-uploads/kpi.png"
    },
    {
      title: "Gestión de Productos: Del Caos al Control Total",
      excerpt: "Organiza tu catálogo de productos como un profesional. Categorización, precios dinámicos y control de stock.",
      slug: "/articulo/gestion-productos-caos-control-total",
      category: "Gestión de Inventario",
      readTime: "7 min",
      image: "/lovable-uploads/661c74a8-8b39-4eb9-9aa9-497448c101f1.png"
    },
    {
      title: "Cómo Fidelizar Clientes con un Sistema POS Inteligente",
      excerpt: "Los datos de tus clientes son oro puro. Te mostramos cómo usar tu sistema POS para crear experiencias personalizadas.",
      slug: "/articulo/fidelizar-clientes-pos-inteligente",
      category: "Atención al Cliente",
      readTime: "6 min",
      image: "/lovable-uploads/b75fd21c-52d4-4ac8-907e-922782fb3614.png"
    }
  ];

  // Filter related articles (same category, excluding current article)
  const relatedArticles = allArticles
    .filter(article => 
      article.slug !== currentArticleSlug && 
      article.category === currentCategory
    )
    .slice(0, 2);

  // If not enough articles in same category, add articles from other categories
  if (relatedArticles.length < 2) {
    const otherArticles = allArticles
      .filter(article => 
        article.slug !== currentArticleSlug && 
        !relatedArticles.find(ra => ra.slug === article.slug)
      )
      .slice(0, 2 - relatedArticles.length);
    
    relatedArticles.push(...otherArticles);
  }

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
          Artículos Relacionados
        </h2>
        <p className="text-gray-600">
          Continúa aprendiendo con estos artículos que te ayudarán a optimizar tu negocio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {relatedArticles.map((article, index) => (
          <article 
            key={index}
            className="elevation-1 corner-medium bg-white overflow-hidden hover:elevation-2 transition-shadow duration-200"
          >
            {article.image && (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="mb-3">
                <span 
                  className="px-3 py-1 text-xs font-medium corner-small"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)'
                  }}
                >
                  {article.category}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{article.readTime}</span>
                
                <Link 
                  to={article.slug}
                  className="inline-flex items-center space-x-1 text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--md-sys-color-primary)' }}
                >
                  <span>Leer más</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All Articles CTA */}
      <div className="text-center mt-8">
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 corner-medium font-medium transition-colors duration-200"
          style={{ 
            backgroundColor: 'var(--md-sys-color-primary)',
            color: 'var(--md-sys-color-on-primary)'
          }}
        >
          <span>Ver todos los artículos</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default RelatedArticles; 