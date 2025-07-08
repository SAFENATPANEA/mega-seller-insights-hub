import { Calendar, User, Clock, ArrowLeft, CheckCircle, TrendingUp, DollarSign, Package, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RelatedArticles from '../components/RelatedArticles';
import Breadcrumbs from '../components/Breadcrumbs';
import SocialShare from '../components/SocialShare';
import TableOfContents from '../components/TableOfContents';
import FAQSchema from '../components/FAQSchema';
import OptimizedImage from '../components/OptimizedImage';

const ArticleInventoryOptimization = () => {
  // SEO Data for this article
  const seoData = {
    title: "5 Estrategias para Optimizar tu Inventario y Reducir Costos",
    description: "Descubre cómo una gestión inteligente del inventario puede transformar la rentabilidad de tu negocio. Aprende técnicas probadas que utilizan los retailers más exitosos para reducir costos hasta en un 30%.",
    keywords: "optimizar inventario, reducir costos, gestión inventario, análisis ABC, punto reorden, stock seguridad, sistema POS, retail, negocio",
    ogImage: "/lovable-uploads/e9615d23-b2e8-44d5-b037-30d58e0a1c7b.png",
    ogType: "article"
  };

  // Article structured data
  const articleData = {
    publishedTime: "2024-12-15T00:00:00Z",
    author: "María González",
    section: "Gestión de Inventario",
    tags: ["inventario", "costos", "retail", "optimización", "sistema POS", "análisis ABC", "punto reorden"]
  };

  // FAQ data for SEO
  const faqData = [
    {
      question: "¿Cuánto puedo ahorrar optimizando mi inventario?",
      answer: "Una gestión inteligente del inventario puede reducir costos hasta en un 30%. Los retailers más exitosos ahorran entre 15-25% en costos de inventario implementando estas estrategias."
    },
    {
      question: "¿Qué es el análisis ABC del inventario?",
      answer: "El análisis ABC clasifica tus productos en tres categorías: A (20% de productos que generan 80% de ingresos), B (30% de productos con contribución moderada) y C (50% de productos con baja contribución)."
    },
    {
      question: "¿Cómo calculo el punto de reorden?",
      answer: "Punto de Reorden = (Demanda Promedio × Tiempo de Lead) + Stock de Seguridad. Por ejemplo: (50 unidades/día × 7 días) + 100 unidades = 450 unidades."
    },
    {
      question: "¿Qué sistema POS recomiendan para gestión de inventario?",
      answer: "Recomendamos sistemas POS que incluyan reportes automáticos, alertas de stock bajo, análisis de rotación y integración con códigos de barras para máxima eficiencia."
    }
  ];

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        ogType={seoData.ogType}
        articleData={articleData}
      />
      <FAQSchema faqs={faqData} />
      
      <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: "Blog", path: "/" },
              { label: "Gestión de Inventario" }
            ]}
          />

          {/* Article Header */}
          <article className="elevation-1 corner-large bg-white overflow-hidden mb-8">
            <div className="aspect-video overflow-hidden">
              <OptimizedImage 
                src="/lovable-uploads/e9615d23-b2e8-44d5-b037-30d58e0a1c7b.png" 
                alt="5 Estrategias para Optimizar tu Inventario y Reducir Costos"
                className="w-full h-full"
                loading="eager"
              />
            </div>

            <div className="p-8">
              <div className="mb-6">
                <span 
                  className="px-4 py-2 text-sm font-medium corner-small"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-primary)',
                    color: 'var(--md-sys-color-on-primary)'
                  }}
                >
                  Artículo Destacado
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                5 Estrategias para Optimizar tu Inventario y Reducir Costos
              </h1>

              {/* Table of Contents */}
              <TableOfContents 
                headings={[
                  { id: 'analisis-abc', text: '1. Implementa el Análisis ABC de tu Inventario', level: 2 },
                  { id: 'puntos-reorden', text: '2. Establece Puntos de Reorden Inteligentes', level: 2 },
                  { id: 'precios-dinamicos', text: '3. Optimiza tus Precios con Estrategias Dinámicas', level: 2 },
                  { id: 'codigos-barras', text: '4. Implementa un Sistema de Códigos de Barras', level: 2 },
                  { id: 'reportes-analytics', text: '5. Utiliza Reportes y Analytics Avanzados', level: 2 },
                  { id: 'conclusion', text: 'Conclusión', level: 2 }
                ]}
              />

              <div className="flex items-center space-x-6 text-sm mb-8" style={{ color: 'var(--md-sys-color-outline)' }}>
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>María González</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>15 Dic 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>8 min lectura</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La gestión inteligente del inventario es uno de los factores más críticos para el éxito de cualquier negocio retail. 
                  Un inventario mal gestionado puede representar hasta el 30% de los costos operativos de una empresa. 
                  En este artículo, te compartimos cinco estrategias probadas que utilizan los retailers más exitosos para optimizar 
                  su inventario y reducir costos significativamente.
                </p>

                {/* Strategy 1 */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 corner-medium flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                    >
                      <BarChart3 size={24} />
                    </div>
                    <h2 id="analisis-abc" className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      1. Implementa el Análisis ABC de tu Inventario
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    El análisis ABC es una técnica fundamental que clasifica tus productos en tres categorías según su importancia económica:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div 
                      className="p-4 corner-medium"
                      style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                    >
                      <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>Productos A (20%)</h4>
                      <p className="text-sm" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                        Representan el 80% de tus ingresos. Requieren monitoreo constante y stock optimizado.
                      </p>
                    </div>
                    <div 
                      className="p-4 corner-medium"
                      style={{ backgroundColor: 'var(--md-sys-color-secondary-container)' }}
                    >
                      <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-secondary-container)' }}>Productos B (30%)</h4>
                      <p className="text-sm" style={{ color: 'var(--md-sys-color-on-secondary-container)' }}>
                        Contribuyen con el 15% de ingresos. Revisión periódica y stock moderado.
                      </p>
                    </div>
                    <div 
                      className="p-4 corner-medium"
                      style={{ backgroundColor: 'var(--md-sys-color-tertiary-container)' }}
                    >
                      <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-tertiary-container)' }}>Productos C (50%)</h4>
                      <p className="text-sm" style={{ color: 'var(--md-sys-color-on-tertiary-container)' }}>
                        Solo el 5% de ingresos. Stock mínimo y revisión esporádica.
                      </p>
                    </div>
                  </div>

                  <div 
                    className="p-4 corner-medium border-l-4"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-surface-variant)',
                      borderColor: 'var(--md-sys-color-primary)'
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      💡 <strong>Tip Práctico:</strong> Utiliza tu sistema POS para generar reportes de ventas por producto y 
                      clasifica automáticamente tus productos según su contribución a los ingresos.
                    </p>
                  </div>
                </div>

                {/* Strategy 2 */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 corner-medium flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--md-sys-color-secondary)', color: 'var(--md-sys-color-on-secondary)' }}
                    >
                      <TrendingUp size={24} />
                    </div>
                    <h2 id="puntos-reorden" className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      2. Establece Puntos de Reorden Inteligentes
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Los puntos de reorden te ayudan a evitar tanto el exceso como la falta de inventario. 
                    La fórmula básica incluye tres componentes clave:
                  </p>

                  <div 
                    className="p-6 corner-medium mb-6"
                    style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}
                  >
                    <h4 className="font-bold mb-4 text-center" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      Punto de Reorden = (Demanda Promedio × Tiempo de Lead) + Stock de Seguridad
                    </h4>
                    
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>50 unidades/día</div>
                        <p className="text-sm text-gray-600">Demanda Promedio</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>7 días</div>
                        <p className="text-sm text-gray-600">Tiempo de Lead</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>100 unidades</div>
                        <p className="text-sm text-gray-600">Stock de Seguridad</p>
                      </div>
                    </div>
                  </div>

                  <ul className="list-none space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-primary)' }} />
                      <span className="text-gray-700">Analiza tu historial de ventas de los últimos 6-12 meses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-primary)' }} />
                      <span className="text-gray-700">Considera la estacionalidad y tendencias del mercado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--md-sys-color-primary)' }} />
                      <span className="text-gray-700">Ajusta los puntos según la confiabilidad de tus proveedores</span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 3 */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 corner-medium flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--md-sys-color-tertiary)', color: 'var(--md-sys-color-on-tertiary)' }}
                    >
                      <DollarSign size={24} />
                    </div>
                    <h2 id="precios-dinamicos" className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      3. Optimiza tus Precios con Estrategias Dinámicas
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Los precios dinámicos pueden ayudarte a mover inventario lento y maximizar ganancias en productos de alta demanda.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div 
                      className="p-4 corner-medium"
                      style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                    >
                      <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>Productos de Baja Rotación</h4>
                      <ul className="text-sm space-y-1" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                        <li>• Descuentos progresivos</li>
                        <li>• Paquetes promocionales</li>
                        <li>• Liquidación estratégica</li>
                      </ul>
                    </div>
                    <div 
                      className="p-4 corner-medium"
                      style={{ backgroundColor: 'var(--md-sys-color-secondary-container)' }}
                    >
                      <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-secondary-container)' }}>Productos de Alta Demanda</h4>
                      <ul className="text-sm space-y-1" style={{ color: 'var(--md-sys-color-on-secondary-container)' }}>
                        <li>• Precios premium</li>
                        <li>• Bundles exclusivos</li>
                        <li>• Ofertas limitadas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategy 4 */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 corner-medium flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                    >
                      <Package size={24} />
                    </div>
                    <h2 id="codigos-barras" className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      4. Implementa un Sistema de Códigos de Barras
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    La automatización del control de inventario reduce errores humanos y mejora la precisión de tus conteos.
                  </p>

                  <div className="bg-blue-50 p-6 corner-medium mb-6">
                    <h4 className="font-bold mb-4 text-blue-900">Beneficios del Sistema de Códigos de Barras:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-blue-800">
                        <li>• Reducción del 95% en errores de inventario</li>
                        <li>• Ahorro de 8-10 horas semanales en conteos</li>
                        <li>• Actualización en tiempo real del stock</li>
                      </ul>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Mejor control de productos perecederos</li>
                        <li>• Trazabilidad completa de productos</li>
                        <li>• Integración con sistemas POS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategy 5 */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 corner-medium flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--md-sys-color-secondary)', color: 'var(--md-sys-color-on-secondary)' }}
                    >
                      <BarChart3 size={24} />
                    </div>
                    <h2 id="reportes-analytics" className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      5. Utiliza Reportes y Analytics Avanzados
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Los datos son tu mejor aliado para tomar decisiones informadas sobre tu inventario.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 corner-medium bg-green-50">
                      <div className="text-2xl font-bold text-green-600 mb-2">Rotación de Inventario</div>
                      <p className="text-sm text-green-700">Mide qué tan rápido vendes tu inventario</p>
                    </div>
                    <div className="text-center p-4 corner-medium bg-blue-50">
                      <div className="text-2xl font-bold text-blue-600 mb-2">Días de Inventario</div>
                      <p className="text-sm text-blue-700">Calcula cuántos días tienes de stock</p>
                    </div>
                    <div className="text-center p-4 corner-medium bg-purple-50">
                      <div className="text-2xl font-bold text-purple-600 mb-2">Margen por Producto</div>
                      <p className="text-sm text-purple-700">Identifica productos más rentables</p>
                    </div>
                  </div>

                  <div 
                    className="p-4 corner-medium border-l-4"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-surface-variant)',
                      borderColor: 'var(--md-sys-color-primary)'
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      📊 <strong>Métrica Clave:</strong> Un negocio bien optimizado mantiene una rotación de inventario de 4-6 veces por año, 
                      lo que significa que renueva completamente su inventario cada 2-3 meses.
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="mb-8">
                  <h2 id="conclusion" className="text-2xl font-bold mb-4" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    Conclusión
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    La optimización del inventario no es un proceso de una sola vez, sino una práctica continua que requiere 
                    monitoreo constante y ajustes basados en datos. Implementando estas cinco estrategias, podrás reducir 
                    significativamente tus costos de inventario y mejorar la rentabilidad de tu negocio.
                  </p>
                </div>

                                {/* Call to Action */}
                <div 
                  className="p-6 corner-medium text-center"
                  style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    ¿Listo para Optimizar tu Inventario?
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    Descubre cómo nuestro sistema POS puede ayudarte a implementar estas estrategias de manera automática.
                  </p>
                  <button 
                    className="px-6 py-3 corner-medium font-medium transition-colors duration-200"
                    style={{ 
                      backgroundColor: 'var(--md-sys-color-primary)',
                      color: 'var(--md-sys-color-on-primary)'
                    }}
                  >
                    Solicitar Demo Gratuita
                  </button>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    Preguntas Frecuentes
                  </h2>
                  <div className="space-y-6">
                    {faqData.map((faq, index) => (
                      <div key={index} className="border border-gray-200 corner-medium p-6">
                        <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

            {/* Social Share */}
            <SocialShare 
              title="5 Estrategias para Optimizar tu Inventario y Reducir Costos"
              url="https://megaseller.com/articulo/optimizar-inventario-reducir-costos"
              description="Descubre cómo una gestión inteligente del inventario puede transformar la rentabilidad de tu negocio."
            />

            {/* Related Articles */}
            <RelatedArticles 
              currentArticleSlug="/articulo/optimizar-inventario-reducir-costos"
              currentCategory="Gestión de Inventario"
            />

          {/* Newsletter */}
          <Newsletter />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ArticleInventoryOptimization;
