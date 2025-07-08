
import { Calendar, User, Clock, ArrowLeft, CheckCircle, TrendingUp, DollarSign, Package, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ArticleInventoryOptimization = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 mb-8 text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: 'var(--md-sys-color-primary)' }}
        >
          <ArrowLeft size={16} />
          <span>Volver al blog</span>
        </Link>

        {/* Article Header */}
        <article className="elevation-1 corner-large bg-white overflow-hidden mb-8">
          <div className="aspect-video overflow-hidden">
            <img 
              src="/lovable-uploads/e9615d23-b2e8-44d5-b037-30d58e0a1c7b.png" 
              alt="5 Estrategias para Optimizar tu Inventario y Reducir Costos"
              className="w-full h-full object-cover"
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
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
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
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
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
                    <Package size={24} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    3. Optimiza la Rotación de Inventario
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  La rotación de inventario mide qué tan eficientemente conviertes tu stock en ventas. 
                  Una rotación alta indica que tu dinero no está "durmiendo" en el almacén.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div 
                    className="p-6 corner-medium text-center"
                    style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                  >
                    <h4 className="font-bold mb-3" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                      Rotación Ideal por Sector
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Supermercados:</span>
                        <span className="font-semibold">12-15 veces/año</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ropa:</span>
                        <span className="font-semibold">4-6 veces/año</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Electrónicos:</span>
                        <span className="font-semibold">6-8 veces/año</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Farmacia:</span>
                        <span className="font-semibold">10-12 veces/año</span>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 corner-medium"
                    style={{ backgroundColor: 'var(--md-sys-color-secondary-container)' }}
                  >
                    <h4 className="font-bold mb-3" style={{ color: 'var(--md-sys-color-on-secondary-container)' }}>
                      Estrategias para Mejorar la Rotación
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mr-2 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--md-sys-color-secondary)' }}></span>
                        <span>Promociones dirigidas para productos lentos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mr-2 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--md-sys-color-secondary)' }}></span>
                        <span>Mejora la exhibición de productos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mr-2 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--md-sys-color-secondary)' }}></span>
                        <span>Bundling con productos populares</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full mr-2 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--md-sys-color-secondary)' }}></span>
                        <span>Descuentos por cantidad</span>
                      </li>
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
                    <DollarSign size={24} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    4. Implementa la Metodología Just-in-Time (JIT)
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  El Just-in-Time busca recibir productos justo cuando los necesitas, minimizando los costos de almacenamiento 
                  y reduciendo el riesgo de obsolescencia. Aunque requiere una planificación precisa, los beneficios son sustanciales.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3 text-green-700">✅ Beneficios del JIT</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Reducción de hasta 50% en costos de almacenamiento</li>
                      <li>• Menor riesgo de productos obsoletos</li>
                      <li>• Mejor flujo de caja</li>
                      <li>• Espacios más eficientes</li>
                      <li>• Menor desperdicio</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-orange-700">⚠️ Consideraciones Importantes</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Requiere proveedores confiables</li>
                      <li>• Mayor dependencia de la cadena de suministro</li>
                      <li>• Necesita sistemas de comunicación efectivos</li>
                      <li>• Puede aumentar costos de transporte</li>
                      <li>• Riesgo de desabastecimiento</li>
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
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    5. Utiliza Tecnología de Forecasting Predictivo
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  La inteligencia artificial y el machine learning pueden predecir la demanda futura con una precisión 
                  del 85-95%, permitiéndote anticiparte a las necesidades del mercado.
                </p>

                <div 
                  className="p-6 corner-medium mb-6"
                  style={{ backgroundColor: 'var(--md-sys-color-tertiary-container)' }}
                >
                  <h4 className="font-bold mb-4" style={{ color: 'var(--md-sys-color-on-tertiary-container)' }}>
                    Variables que Analiza el Forecasting Predictivo:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Historial de ventas por producto</li>
                      <li>• Tendencias estacionales</li>
                      <li>• Events y promociones</li>
                      <li>• Factores económicos externos</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Comportamiento del consumidor</li>
                      <li>• Competencia y precios del mercado</li>
                      <li>• Clima y eventos especiales</li>
                      <li>• Ciclos de vida del producto</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div 
                className="p-8 corner-large text-center"
                style={{ 
                  background: 'var(--md-sys-color-primary-gradient)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4">¿Listo para Transformar tu Inventario?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Implementar estas estrategias puede reducir tus costos de inventario entre 15-30% en los primeros 6 meses. 
                  MegaSeller POS te proporciona todas las herramientas necesarias para ejecutar estas estrategias de manera efectiva.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white bg-opacity-20 px-4 py-2 corner-medium">
                    <span className="font-semibold">Análisis ABC Automático</span>
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 corner-medium">
                    <span className="font-semibold">Alertas de Reorden</span>
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 corner-medium">
                    <span className="font-semibold">Reportes de Rotación</span>
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 corner-medium">
                    <span className="font-semibold">Forecasting IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            Artículos Relacionados
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/" 
              className="elevation-1 corner-medium bg-white p-6 hover:elevation-2 transition-all duration-300 block"
            >
              <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                Gestión de Productos: Del Caos al Control Total
              </h4>
              <p className="text-gray-600 text-sm">
                Organiza tu catálogo de productos como un profesional con técnicas avanzadas de categorización.
              </p>
            </Link>
            <Link 
              to="/" 
              className="elevation-1 corner-medium bg-white p-6 hover:elevation-2 transition-all duration-300 block"
            >
              <h4 className="font-bold mb-2" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                Análisis de Ventas: KPIs que Todo Dueño de Negocio Debe Conocer
              </h4>
              <p className="text-gray-600 text-sm">
                Identifica las métricas que realmente importan para tomar decisiones estratégicas.
              </p>
            </Link>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default ArticleInventoryOptimization;
