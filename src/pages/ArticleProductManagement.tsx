
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const ArticleProductManagement = () => {
  const article = {
    title: "Gestión de Productos: Del Caos al Control Total",
    excerpt: "Organiza tu catálogo de productos como un profesional. Categorización, precios dinámicos y control de stock que te ahorrarán horas cada semana.",
    author: "Roberto Silva",
    date: "8 Dic 2024",
    readTime: "7 min lectura",
    category: "Gestión de Inventario",
    image: "/lovable-uploads/661c74a8-8b39-4eb9-9aa9-497448c101f1.png",
    tags: ["Gestión de Productos", "Inventario", "Categorización", "Precios", "Control de Stock"]
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: 'var(--md-sys-color-primary)' }}
          >
            <ArrowLeft size={16} />
            <span>Volver al blog</span>
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span 
              className="px-3 py-1 text-sm font-medium corner-small"
              style={{ 
                backgroundColor: 'var(--md-sys-color-secondary-container)',
                color: 'var(--md-sys-color-on-secondary-container)'
              }}
            >
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6 text-sm" style={{ color: 'var(--md-sys-color-outline)' }}>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                className="p-2 corner-small hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}
                aria-label="Compartir artículo"
              >
                <Share2 size={20} />
              </button>
              <button 
                className="p-2 corner-small hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}
                aria-label="Guardar artículo"
              >
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={article.image} 
            alt="Gestión organizada de productos en un sistema POS"
            className="w-full h-64 md:h-96 object-cover corner-large"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">El Problema: Cuando los Productos se Vuelven un Dolor de Cabeza</h2>
            <p className="mb-4">
              ¿Te suena familiar? Tienes cientos de productos, algunos duplicados, otros sin categoría, 
              precios desactualizados y un stock que nunca cuadra. Lo que comenzó como un pequeño catálogo 
              se ha convertido en un laberinto que consume tu tiempo y genera errores costosos.
            </p>
            <p className="mb-4">
              La gestión caótica de productos no solo afecta tu eficiencia operativa, sino que impacta 
              directamente en la experiencia del cliente y tus márgenes de ganancia. Es hora de tomar 
              el control total.
            </p>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Categorización Inteligente: La Base del Orden</h2>
            <h3 className="text-xl font-semibold mb-3">Estructura Jerárquica Clara</h3>
            <p className="mb-4">
              Implementa una estructura de categorías que tenga sentido para tu negocio:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Categorías principales:</strong> Agrupa por tipo de producto o departamento</li>
              <li><strong>Subcategorías:</strong> Divide por características específicas</li>
              <li><strong>Etiquetas adicionales:</strong> Usa tags para filtros avanzados (temporada, promoción, nuevo)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Códigos de Producto Sistemáticos</h3>
            <p className="mb-4">
              Crea un sistema de códigos que cuente una historia. Por ejemplo: 
              <span className="bg-gray-100 px-2 py-1 corner-small font-mono">ELE-TV-SAM-55-001</span> 
              (Electrónicos - Televisores - Samsung - 55 pulgadas - Modelo 001).
            </p>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Control de Stock: Nunca Más "Se Agotó"</h2>
            <h3 className="text-xl font-semibold mb-3">Puntos de Reorden Automáticos</h3>
            <p className="mb-4">
              Configura alertas automáticas basadas en:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Velocidad de rotación histórica</li>
              <li>Tiempo de reposición del proveedor</li>
              <li>Estacionalidad del producto</li>
              <li>Stock de seguridad mínimo</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Inventarios Cíclicos</h3>
            <p className="mb-4">
              No esperes al inventario anual. Implementa conteos rotativos: cuenta el 20% de tus 
              productos más importantes cada mes. Esto mantiene la precisión sin parar tu operación.
            </p>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Gestión de Precios Dinámica</h2>
            <h3 className="text-xl font-semibold mb-3">Estrategias de Precios Inteligentes</h3>
            <p className="mb-4">
              Tus precios deben ser estratégicos, no arbitrarios:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Precios psicológicos:</strong> $9.99 vs $10.00 hace la diferencia</li>
              <li><strong>Precios por volumen:</strong> Incentiva compras mayores</li>
              <li><strong>Precios estacionales:</strong> Ajusta según demanda temporal</li>
              <li><strong>Precios competitivos:</strong> Monitorea a tu competencia regularmente</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Márgenes Saludables</h3>
            <p className="mb-4">
              Calcula tus márgenes considerando todos los costos: producto, envío, almacenamiento, 
              mano de obra. Un margen mínimo del 40% en retail es recomendable para mantener 
              rentabilidad después de gastos operativos.
            </p>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Información de Producto Rica y Útil</h2>
            <h3 className="text-xl font-semibold mb-3">Descripciones que Vendan</h3>
            <p className="mb-4">
              Cada producto debe tener:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Descripción clara de beneficios (no solo características)</li>
              <li>Especificaciones técnicas cuando sea relevante</li>
              <li>Instrucciones de uso o cuidado</li>
              <li>Productos relacionados o complementarios</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Imágenes de Calidad</h3>
            <p className="mb-4">
              Una imagen vale más que mil palabras. Invierte en fotografía de producto o aprende 
              técnicas básicas. Imágenes claras, bien iluminadas y desde múltiples ángulos 
              aumentan significativamente las ventas.
            </p>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Análisis y Optimización Continua</h2>
            <h3 className="text-xl font-semibold mb-3">Métricas Clave de Productos</h3>
            <p className="mb-4">
              Monitorea estos KPIs mensualmente:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Rotación de inventario:</strong> Cuántas veces vendes tu stock anualmente</li>
              <li><strong>Margen por producto:</strong> Cuáles son más rentables</li>
              <li><strong>Velocidad de venta:</strong> Qué se mueve rápido y qué se estanca</li>
              <li><strong>Costo de almacenamiento:</strong> Qué productos ocupan espacio sin generar valor</li>
            </ul>
          </div>

          <div className="elevation-1 corner-large p-8 mb-8" style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}>
            <h2 className="text-2xl font-bold mb-4">Plan de Acción: Tu Hoja de Ruta hacia el Control Total</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div 
                  className="w-6 h-6 corner-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                >
                  1
                </div>
                <div>
                  <strong>Semana 1-2:</strong> Audita tu catálogo actual. Identifica duplicados, productos obsoletos y categorías confusas.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div 
                  className="w-6 h-6 corner-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                >
                  2
                </div>
                <div>
                  <strong>Semana 3-4:</strong> Implementa tu nueva estructura de categorías y códigos de producto.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div 
                  className="w-6 h-6 corner-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                >
                  3
                </div>
                <div>
                  <strong>Semana 5-6:</strong> Configura puntos de reorden y alertas de stock.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div 
                  className="w-6 h-6 corner-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                >
                  4
                </div>
                <div>
                  <strong>Mes 2:</strong> Revisa y optimiza precios basado en márgenes y competencia.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div 
                  className="w-6 h-6 corner-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)' }}
                >
                  5
                </div>
                <div>
                  <strong>Mes 3:</strong> Implementa sistema de métricas y reportes mensuales.
                </div>
              </div>
            </div>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Herramientas Recomendadas</h2>
            <p className="mb-4">
              Para implementar una gestión de productos profesional, considera estas herramientas:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Sistema POS integrado:</strong> MegaSeller POS ofrece gestión completa de productos</li>
              <li><strong>Códigos de barras:</strong> Agiliza entrada y salida de mercancía</li>
              <li><strong>Aplicaciones móviles:</strong> Para inventarios y consultas rápidas</li>
              <li><strong>Integración con proveedores:</strong> Automatiza órdenes de compra</li>
            </ul>
          </div>

          <div className="elevation-1 corner-large bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Conclusión: Del Caos al Control en 90 Días</h2>
            <p className="mb-4">
              La gestión profesional de productos no es un lujo, es una necesidad para cualquier 
              negocio que quiera crecer de manera sostenible. Con la implementación gradual de 
              estos sistemas, pasarás de pasar horas buscando productos y actualizando precios 
              manualmente, a tener un catálogo que trabaje para ti.
            </p>
            <p className="mb-4">
              Recuerda: la perfección no es el objetivo inicial. Comienza con lo básico y mejora 
              continuamente. Un sistema simple pero consistente es mejor que un sistema complejo 
              que nadie usa.
            </p>
            <p>
              Tu futuro yo te agradecerá el tiempo que inviertas hoy en organizar tu catálogo. 
              El control total de tus productos está a solo 90 días de distancia.
            </p>
          </div>
        </article>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Tag size={20} style={{ color: 'var(--md-sys-color-outline)' }} />
            <span className="font-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
              Etiquetas:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm corner-small"
                style={{ 
                  backgroundColor: 'var(--md-sys-color-surface-variant)',
                  color: 'var(--md-sys-color-on-surface-variant)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default ArticleProductManagement;
