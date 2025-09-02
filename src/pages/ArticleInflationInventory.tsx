import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { createBlogPostSchema, createBreadcrumbSchema } from '../utils/structuredData';
import AccessibilitySkipLink from '../components/AccessibilitySkipLink';

const ArticleInflationInventory = () => {
  const article = {
    title: "La importancia de la gestión de inventario para no perder dinero en inflación",
    description: "Descubre cómo una gestión inteligente del inventario puede protegerte de las pérdidas por inflación. Aprende estrategias de alertas de stock bajo y control de ganancias que utilizan los retailers más exitosos.",
    author: "Patricia Morales",
    datePublished: "2024-12-20",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    url: window.location.href,
    keywords: ["gestión de inventario", "inflación", "control de costos", "alertas de stock", "rentabilidad", "POS", "pérdidas financieras"]
  };

  const breadcrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Blog", url: "/" },
    { name: "Gestión de Inventario", url: "/?category=Gestión%20de%20Inventario" },
    { name: article.title, url: window.location.href }
  ];

  const blogPostSchema = createBlogPostSchema(article);
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs);
  const combinedSchema = [blogPostSchema, breadcrumbSchema];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <SEOHead
        title={article.title}
        description={article.description}
        keywords={article.keywords.join(', ')}
        author={article.author}
        ogType="article"
        ogImage={article.image}
        canonicalUrl={article.url}
        jsonLd={combinedSchema}
      />
      
      <AccessibilitySkipLink />
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-600" aria-current="page">{breadcrumb.name}</span>
                ) : (
                  <a 
                    href={breadcrumb.url}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {breadcrumb.name}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <article>
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                Gestión de Inventario
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">PM</span>
                </div>
                <span>Por {article.author}</span>
              </div>
              <span>•</span>
              <time dateTime="2024-12-20">20 Dic 2024</time>
              <span>•</span>
              <span>10 min lectura</span>
            </div>
            
            <img 
              src={article.image}
              alt="Gestión de inventario para protección contra inflación"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
              loading="eager"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              En tiempos de inflación creciente, cada peso cuenta más que nunca. Una gestión inteligente del inventario 
              no solo evita que se te agoten los productos, sino que puede ser la diferencia entre mantener tu rentabilidad 
              o ver cómo la inflación devora tus ganancias silenciosamente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              El Costo Oculto de la Mala Gestión de Inventario
            </h2>
            
            <p className="mb-6">
              Cuando no tienes control sobre tu inventario, la inflación actúa como un enemigo silencioso. 
              Los productos que compraste hace tres meses a un precio, hoy los vendes al mismo precio pero 
              el costo de reposición se disparó. Es como tener un agujero en tu bolsillo que no puedes ver.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800 mb-2">⚠️ Alerta de Pérdida Financiera</h3>
                  <p className="text-sm text-red-700">
                    Un negocio promedio pierde entre el 15-25% de su rentabilidad anual por mala gestión 
                    de inventario durante períodos inflacionarios. ¿Puedes permitirte ese lujo?
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Estrategias Anti-Inflación para tu Inventario
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Alertas de Stock Bajo Inteligentes</h3>
            
            <p className="mb-4">
              No se trata solo de saber cuándo se te acaba un producto. Se trata de anticipar 
              cuándo el precio va a subir y actuar antes que la competencia.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-800 mb-3">🎯 Configuración de Alertas Estratégicas:</h4>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Productos de rotación alta:</strong> Alerta al 25% del stock mínimo</li>
                <li>• <strong>Productos estacionales:</strong> Alerta 45 días antes de temporada alta</li>
                <li>• <strong>Productos con proveedores únicos:</strong> Alerta al 40% del stock</li>
                <li>• <strong>Productos con tendencia alcista de precios:</strong> Alerta al 35%</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Control de Ganancias en Tiempo Real</h3>
            
            <p className="mb-4">
              Tu sistema POS debe mostrar no solo el precio de venta, sino el margen real considerando 
              el costo de reposición actual. Esta visibilidad te permite tomar decisiones inmediatas.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-green-800 mb-3">💰 Métricas Clave de Rentabilidad:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Margen Histórico vs Actual</h5>
                  <p className="text-sm text-green-600">
                    Compara el margen con el que compraste vs el margen actual de reposición
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Velocidad de Rotación</h5>
                  <p className="text-sm text-green-600">
                    Productos que se venden rápido mantienen mejor rentabilidad en inflación
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Costo de Oportunidad</h5>
                  <p className="text-sm text-green-600">
                    Lo que pierdes por no ajustar precios a tiempo
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Punto de Equilibrio Dinámico</h5>
                  <p className="text-sm text-green-600">
                    Cuánto necesitas vender para mantener la rentabilidad objetivo
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Estrategias de Compra Anti-Inflación
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Compra Anticipada Estratégica</h3>
            
            <p className="mb-4">
              Cuando identificas productos con tendencia alcista de precios, considera hacer compras 
              por adelantado. Pero cuidado: no cualquier producto califica para esta estrategia.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-3">✅ Productos Ideales para Compra Anticipada:</h4>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>No perecederos:</strong> Productos con vida útil larga</li>
                <li>• <strong>Demanda estable:</strong> Productos que sabes que vas a vender</li>
                <li>• <strong>Espacio disponible:</strong> Que puedas almacenar sin costos extras</li>
                <li>• <strong>Proveedores confiables:</strong> Con historial de aumentos frecuentes</li>
                <li>• <strong>Capital disponible:</strong> Sin afectar tu flujo de caja</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Diversificación de Proveedores</h3>
            
            <p className="mb-6">
              Tener múltiples proveedores no solo te protege de desabastecimientos, sino que te permite 
              comparar precios en tiempo real y negociar mejores condiciones cuando uno sube mucho sus tarifas.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Tecnología que Te Protege de la Inflación
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Dashboard de Alertas Críticas</h3>
            
            <p className="mb-4">
              Tu sistema POS debe tener un dashboard que te muestre en tiempo real los productos 
              que están perdiendo rentabilidad por inflación.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-indigo-800 mb-3">📊 Alertas Críticas del Dashboard:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🔴</span>
                  <div>
                    <strong className="text-indigo-700">Alerta Roja:</strong>
                    <span className="text-indigo-600"> Productos con margen negativo o menor al 10%</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">🟡</span>
                  <div>
                    <strong className="text-indigo-700">Alerta Amarilla:</strong>
                    <span className="text-indigo-600"> Productos con caída de margen superior al 20%</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">🔵</span>
                  <div>
                    <strong className="text-indigo-700">Alerta Azul:</strong>
                    <span className="text-indigo-600"> Oportunidades de compra por baja temporal de precios</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Automatización de Ajustes de Precios</h3>
            
            <p className="mb-6">
              Configurar reglas automáticas de ajuste de precios basadas en el incremento de costos 
              te permite mantener tu rentabilidad sin tener que revisar producto por producto cada semana.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--md-sys-color-on-surface)' }}>
              Plan de Acción: Protege tu Negocio Hoy Mismo
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">🚀 Checklist de Implementación Inmediata:</h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Configurar alertas de stock bajo para productos críticos</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Crear dashboard de control de márgenes en tiempo real</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Identificar productos para compra anticipada estratégica</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Diversificar proveedores de productos clave</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Configurar reglas de ajuste automático de precios</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700">Establecer revisión semanal de rentabilidad por categoría</span>
                </label>
              </div>
            </div>

            <div className="bg-green-600 text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">💡 Reflexión Final</h3>
              <p className="text-lg">
                La inflación es inevitable, pero las pérdidas por mala gestión de inventario son completamente evitables. 
                Con las herramientas correctas y una estrategia clara, puedes convertir la presión inflacionaria en una 
                ventaja competitiva sobre quienes no están preparados.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  ¿Quieres implementar estas estrategias en tu negocio?
                </h3>
                <p className="text-blue-700 mb-4">
                  MegaSeller POS incluye todas estas funcionalidades de control de inventario anti-inflación. 
                  Desde alertas inteligentes hasta dashboards de rentabilidad en tiempo real.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Conocer MegaSeller POS
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleInflationInventory;