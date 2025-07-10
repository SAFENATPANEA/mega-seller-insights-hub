
import { Calendar, User, Clock, ArrowLeft, CheckCircle, TrendingUp, Target, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const ArticleMarketingPOS = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity duration-200"
          style={{ color: 'var(--md-sys-color-primary)' }}
        >
          <ArrowLeft size={16} />
          <span>Volver al blog</span>
        </Link>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="mb-6">
            <span 
              className="px-4 py-2 text-sm font-medium corner-small"
              style={{ 
                backgroundColor: 'var(--md-sys-color-secondary-container)',
                color: 'var(--md-sys-color-on-secondary-container)'
              }}
            >
              Marketing Retail
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Marketing en el Punto de Venta: Convierte Visitas en Ventas
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Tu tienda física es tu mejor vendedor. Aprende técnicas de merchandising y promociones 
            que aumentarán tu ticket promedio inmediatamente.
          </p>
          
          <div className="flex items-center space-x-6 text-sm mb-8" style={{ color: 'var(--md-sys-color-outline)' }}>
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Laura Vásquez</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>5 Dic 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>9 min lectura</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 corner-large overflow-hidden elevation-1">
          <img 
            src="/lovable-uploads/661c74a8-8b39-4eb9-9aa9-497448c101f1.png" 
            alt="Marketing en el punto de venta" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              En el competitivo mundo del retail, cada visita a tu tienda es una oportunidad de oro. 
              Sin embargo, no todas las visitas se convierten en ventas. La diferencia entre una tienda 
              que apenas sobrevive y una que prospera radica en su capacidad para transformar navegadores 
              casuales en compradores satisfechos.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              El marketing en el punto de venta (POP Marketing) no es solo colocar productos en estantes. 
              Es un arte que combina psicología del consumidor, diseño estratégico y técnicas de ventas 
              para crear experiencias que impulsan las decisiones de compra.
            </p>

            <div 
              className="p-6 corner-medium mb-8"
              style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
            >
              <div className="flex items-start space-x-4">
                <Target 
                  className="mt-1 flex-shrink-0" 
                  style={{ color: 'var(--md-sys-color-primary)' }} 
                  size={24} 
                />
                <div>
                  <h3 
                    className="font-semibold mb-2"
                    style={{ color: 'var(--md-sys-color-on-primary-container)' }}
                  >
                    Objetivo de este artículo
                  </h3>
                  <p style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
                    Te enseñaremos técnicas probadas de marketing en el punto de venta que puedes 
                    implementar inmediatamente para aumentar tus ventas y el valor promedio de cada transacción.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Psicología del Consumidor */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">La Psicología Detrás de las Decisiones de Compra</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Entender cómo piensan tus clientes es el primer paso para influir en sus decisiones de compra. 
              Los consumidores toman decisiones basándose en emociones y las justifican con lógica.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Los 5 Gatillos Emocionales Clave</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="elevation-1 corner-medium p-6 bg-white">
                <h4 className="font-semibold mb-3 text-lg">1. Escasez</h4>
                <p className="text-gray-600 mb-4">
                  "Solo quedan 3 unidades" o "Oferta válida hasta agotar existencias" crean urgencia.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-tertiary-container)',
                    color: 'var(--md-sys-color-on-tertiary-container)'
                  }}
                >
                  <strong>Ejemplo:</strong> Coloca etiquetas de "Últimas piezas" en productos con stock limitado.
                </div>
              </div>

              <div className="elevation-1 corner-medium p-6 bg-white">
                <h4 className="font-semibold mb-3 text-lg">2. Prueba Social</h4>
                <p className="text-gray-600 mb-4">
                  Los clientes siguen el comportamiento de otros. Las reseñas y testimonios son poderosos.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-tertiary-container)',
                    color: 'var(--md-sys-color-on-tertiary-container)'
                  }}
                >
                  <strong>Ejemplo:</strong> Exhibe productos con etiquetas "Más vendido" o "Favorito de los clientes".
                </div>
              </div>

              <div className="elevation-1 corner-medium p-6 bg-white">
                <h4 className="font-semibold mb-3 text-lg">3. Reciprocidad</h4>
                <p className="text-gray-600 mb-4">
                  Ofrecer algo gratis genera la obligación psicológica de devolver el favor.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-tertiary-container)',
                    color: 'var(--md-sys-color-on-tertiary-container)'
                  }}
                >
                  <strong>Ejemplo:</strong> Muestras gratis, degustaciones o consultorías sin costo.
                </div>
              </div>

              <div className="elevation-1 corner-medium p-6 bg-white">
                <h4 className="font-semibold mb-3 text-lg">4. Autoridad</h4>
                <p className="text-gray-600 mb-4">
                  Las recomendaciones de expertos o figuras de autoridad tienen gran influencia.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-tertiary-container)',
                    color: 'var(--md-sys-color-on-tertiary-container)'
                  }}
                >
                  <strong>Ejemplo:</strong> "Recomendado por especialistas" o certificaciones visibles.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Merchandising Visual */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Merchandising Visual: El Arte de la Presentación</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              El merchandising visual es mucho más que hacer que tu tienda se vea bonita. Es una estrategia 
              científica para guiar el comportamiento del cliente y maximizar las ventas.
            </p>

            <h3 className="text-2xl font-semibold mb-4">La Regla del Triángulo Dorado</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Los estudios muestran que los clientes siguen un patrón predecible al entrar a una tienda. 
              Aprovecha este conocimiento para colocar estratégicamente tus productos más rentables.
            </p>

            <div 
              className="p-6 corner-medium mb-8"
              style={{ backgroundColor: 'var(--md-sys-color-secondary-container)' }}
            >
              <h4 
                className="font-semibold mb-4 text-lg"
                style={{ color: 'var(--md-sys-color-on-secondary-container)' }}
              >
                Zonas de Alto Impacto en tu Tienda
              </h4>
              <ul 
                className="space-y-3"
                style={{ color: 'var(--md-sys-color-on-secondary-container)' }}
              >
                <li className="flex items-start space-x-3">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span><strong>Zona de Descompresión:</strong> Los primeros 3-5 metros donde los clientes se adaptan al ambiente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span><strong>Pared Derecha:</strong> Donde naturalmente se dirigen el 90% de los clientes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span><strong>Área Central:</strong> Perfect para promociones especiales y productos destacados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="mt-1 flex-shrink-0" size={18} />
                  <span><strong>Punto de Pago:</strong> Zona crítica para ventas impulsivas</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Técnicas de Exhibición Que Venden</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div 
                  className="w-16 h-16 corner-large mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                >
                  <TrendingUp 
                    size={32} 
                    style={{ color: 'var(--md-sys-color-primary)' }}
                  />
                </div>
                <h4 className="font-semibold mb-2">Exhibición en Pirámide</h4>
                <p className="text-gray-600 text-sm">
                  Coloca más unidades en la base y reduce hacia arriba. Crea impacto visual y sensación de abundancia.
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="w-16 h-16 corner-large mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                >
                  <Target 
                    size={32} 
                    style={{ color: 'var(--md-sys-color-primary)' }}
                  />
                </div>
                <h4 className="font-semibold mb-2">Punto Focal</h4>
                <p className="text-gray-600 text-sm">
                  Crea un elemento central que capture la atención y guíe la mirada hacia productos específicos.
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="w-16 h-16 corner-large mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}
                >
                  <ShoppingCart 
                    size={32} 
                    style={{ color: 'var(--md-sys-color-primary)' }}
                  />
                </div>
                <h4 className="font-semibold mb-2">Cross-Merchandising</h4>
                <p className="text-gray-600 text-sm">
                  Agrupa productos complementarios para aumentar el valor de la compra promedio.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Estrategias de Precios */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Estrategias de Precios Psicológicos</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              El precio no es solo un número; es una herramienta de comunicación que puede influir 
              significativamente en la percepción de valor de tus productos.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Técnicas de Pricing Que Funcionan</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 pl-6" style={{ borderColor: 'var(--md-sys-color-primary)' }}>
                <h4 className="font-semibold mb-2 text-lg">Precios Ancla</h4>
                <p className="text-gray-600 mb-3">
                  Presenta primero el producto más caro para que los siguientes parezcan más baratos por comparación.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}
                >
                  <strong>Ejemplo:</strong> Si vendes café, muestra primero el premium de $250, 
                  luego el regular de $180 parecerá una ganga.
                </div>
              </div>

              <div className="border-l-4 pl-6" style={{ borderColor: 'var(--md-sys-color-primary)' }}>
                <h4 className="font-semibold mb-2 text-lg">Efecto de Decoy</h4>
                <p className="text-gray-600 mb-3">
                  Introduce un producto con precio similar al premium pero con menos valor para hacer 
                  que el premium parezca la mejor opción.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}
                >
                  <strong>Ejemplo:</strong> Básico $100, Premium $150, Decoy $140 (menos funciones que Premium).
                </div>
              </div>

              <div className="border-l-4 pl-6" style={{ borderColor: 'var(--md-sys-color-primary)' }}>
                <h4 className="font-semibold mb-2 text-lg">Precios Charm</h4>
                <p className="text-gray-600 mb-3">
                  Terminar precios en 9, 95 o 99 hace que parezcan significativamente más baratos.
                </p>
                <div 
                  className="text-sm p-3 corner-small"
                  style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}
                >
                  <strong>Dato:</strong> $199 puede generar hasta 30% más ventas que $200.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Promociones Efectivas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Promociones Que Realmente Mueven Inventario</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              No todas las promociones son iguales. Algunas destruyen tu margen de ganancia sin aumentar 
              realmente las ventas, mientras que otras pueden disparar tus ingresos manteniendo la rentabilidad.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--md-sys-color-primary)' }}>
                  ✅ Promociones Inteligentes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 flex-shrink-0 text-green-600" size={18} />
                    <span><strong>Bundle Deals:</strong> "Lleva 3 paga 2" aumenta ticket promedio</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 flex-shrink-0 text-green-600" size={18} />
                    <span><strong>Descuentos por Volumen:</strong> Incentiva compras mayores</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 flex-shrink-0 text-green-600" size={18} />
                    <span><strong>Tiempo Limitado:</strong> Crea urgencia real</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 flex-shrink-0 text-green-600" size={18} />
                    <span><strong>Cross-selling:</strong> "Con esto también necesitas..."</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--md-sys-color-error)' }}>
                  ❌ Promociones Que Evitar
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 flex-shrink-0 text-red-600">✗</span>
                    <span><strong>Descuentos Constantes:</strong> Devalúan tu marca</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 flex-shrink-0 text-red-600">✗</span>
                    <span><strong>50% off sin Condiciones:</strong> Destruye márgenes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 flex-shrink-0 text-red-600">✗</span>
                    <span><strong>Promociones Confusas:</strong> Frustran al cliente</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 flex-shrink-0 text-red-600">✗</span>
                    <span><strong>Sin Fecha de Fin:</strong> No generan urgencia</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Tecnología POS */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cómo tu Sistema POS Potencia el Marketing</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Un sistema POS moderno no es solo una caja registradora; es tu centro de inteligencia 
              de marketing que puede automatizar muchas de las técnicas que hemos discutido.
            </p>

            <div 
              className="elevation-1 corner-medium p-6 bg-white mb-8"
            >
              <h3 className="text-xl font-semibold mb-4">Funciones de Marketing Automático</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📊 Analytics en Tiempo Real</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Productos más vendidos por hora/día</li>
                    <li>• Patrones de compra por cliente</li>
                    <li>• Efectividad de promociones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎯 Promociones Inteligentes</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Descuentos automáticos por volumen</li>
                    <li>• Sugerencias de productos complementarios</li>
                    <li>• Programas de lealtad automatizados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12">
            <div 
              className="p-8 corner-large"
              style={{ background: 'var(--md-sys-color-primary-gradient)' }}
            >
              <h2 
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: 'var(--md-sys-color-on-primary)' }}
              >
                Plan de Acción: Implementa Estas Estrategias Esta Semana
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 
                    className="font-semibold mb-4"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    Día 1-2: Análisis y Planificación
                  </h3>
                  <ul 
                    className="space-y-2 text-sm"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    <li>• Mapea el flujo de clientes en tu tienda</li>
                    <li>• Identifica zonas de alto y bajo tráfico</li>
                    <li>• Analiza tus productos más y menos rentables</li>
                  </ul>
                </div>
                
                <div>
                  <h3 
                    className="font-semibold mb-4"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    Día 3-5: Implementación
                  </h3>
                  <ul 
                    className="space-y-2 text-sm"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    <li>• Reubica productos según zonas de alto impacto</li>
                    <li>• Implementa pricing psicológico</li>
                    <li>• Crea displays de productos complementarios</li>
                  </ul>
                </div>
                
                <div>
                  <h3 
                    className="font-semibold mb-4"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    Día 6-7: Optimización
                  </h3>
                  <ul 
                    className="space-y-2 text-sm"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    <li>• Lanza tu primera promoción estratégica</li>
                    <li>• Mide los resultados vs. semana anterior</li>
                    <li>• Ajusta según los datos obtenidos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 
                    className="font-semibold mb-4"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    Seguimiento Continuo
                  </h3>
                  <ul 
                    className="space-y-2 text-sm"
                    style={{ color: 'var(--md-sys-color-on-primary)' }}
                  >
                    <li>• Revisa métricas semanalmente</li>
                    <li>• Experimenta con nuevas técnicas</li>
                    <li>• Documenta qué funciona mejor</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusión: Cada Detalle Cuenta</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              El marketing en el punto de venta no es magia; es metodología. Cada elemento en tu tienda, 
              desde la ubicación de un producto hasta el color de una etiqueta de precio, influye en las 
              decisiones de compra de tus clientes.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Las técnicas que compartimos no requieren grandes inversiones, pero sí necesitan implementación 
              consistente y medición constante. Empieza con cambios pequeños, mide los resultados y 
              escala lo que funcione.
            </p>

            <div 
              className="p-6 corner-medium"
              style={{ backgroundColor: 'var(--md-sys-color-tertiary-container)' }}
            >
              <p 
                className="text-lg font-medium text-center"
                style={{ color: 'var(--md-sys-color-on-tertiary-container)' }}
              >
                <strong>Recuerda:</strong> Un aumento del 10% en tu tasa de conversión puede duplicar 
                tu rentabilidad. Cada mejora pequeña se acumula para crear resultados extraordinarios.
              </p>
            </div>
          </section>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <Newsletter />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleMarketingPOS;
