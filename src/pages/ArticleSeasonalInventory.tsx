
import { Calendar, User, Clock, ArrowLeft, TrendingUp, BarChart3, ShoppingCart, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ArticleSeasonalInventory = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-sm font-medium mb-8 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--md-sys-color-primary)' }}
        >
          <ArrowLeft size={18} />
          <span>Volver al blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span 
              className="px-4 py-2 text-sm font-medium corner-small"
              style={{ 
                backgroundColor: 'var(--md-sys-color-primary-container)',
                color: 'var(--md-sys-color-on-primary-container)'
              }}
            >
              Gestión de Inventario
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Inventario Estacional: Planifica como los Grandes Retailers
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Las temporadas altas y bajas no tienen que ser una sorpresa. Aprende a planificar tu inventario basado en patrones históricos y tendencias del mercado para maximizar ventas y minimizar pérdidas.
          </p>
          
          <div className="flex items-center space-x-6 text-sm" style={{ color: 'var(--md-sys-color-outline)' }}>
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Sofia Ramírez</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>1 Dic 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>8 min lectura</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Inventario estacional - planificación estratégica"
            className="w-full h-64 md:h-96 object-cover corner-large"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-6">
              ¿Te ha pasado que llega diciembre y no tienes suficiente inventario para las fiestas navideñas? ¿O que después de San Valentín te quedas con productos temáticos que nadie quiere? La planificación estacional del inventario es lo que separa a los retailers exitosos de aquellos que constantemente luchan con excesos o faltantes.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Los grandes retailers como Amazon, Walmart y Target no improvisan. Utilizan sistemas sofisticados de predicción que analizan años de datos históricos, tendencias del mercado y factores externos para anticiparse a la demanda. Hoy te voy a enseñar cómo aplicar estas mismas estrategias en tu negocio, sin importar el tamaño.
            </p>
          </div>

          <Card className="mb-8 elevation-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="text-blue-600" size={24} />
                <span>¿Por qué es crítica la planificación estacional?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                La planificación estacional no es solo sobre tener productos en época navideña. Es una estrategia integral que impacta directamente en:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Flujo de caja:</strong> Evitas inversiones excesivas en inventario que no se mueve</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Satisfacción del cliente:</strong> Siempre tienes lo que buscan cuando lo buscan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Rentabilidad:</strong> Reduces liquidaciones forzosas y productos obsoletos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Espacios de almacén:</strong> Optimizas el uso de tu bodega y punto de venta</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6 mt-12">Los 4 Pilares de la Planificación Estacional</h2>

          <Card className="mb-8 elevation-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="text-purple-600" size={24} />
                <span>1. Análisis de Datos Históricos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                <strong>La base de todo:</strong> Si llevas al menos un año en el negocio, tienes oro puro en tus datos de ventas. Aquí es donde tu sistema POS se convierte en tu mejor aliado.
              </p>
              
              <div className="bg-blue-50 p-4 corner-medium mb-4">
                <h4 className="font-semibold mb-2 text-blue-800">Datos clave que debes analizar:</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• Ventas mensuales por categoría de producto</li>
                  <li>• Picos de demanda específicos (fechas exactas)</li>
                  <li>• Productos que se agotan sistemáticamente</li>
                  <li>• Tiempo promedio de rotación por temporada</li>
                  <li>• Margen de ganancia por época del año</li>
                </ul>
              </div>

              <p className="text-gray-700">
                <strong>Tip profesional:</strong> No te quedes solo con el total de ventas. Analiza por día de la semana, hora del día, y correlaciona con eventos externos (clima, feriados, eventos locales).
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 elevation-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="text-green-600" size={24} />
                <span>2. Identificación de Patrones Estacionales</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Cada negocio tiene sus propios patrones, pero hay tendencias universales que puedes aprovechar:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 p-4 corner-medium">
                  <h4 className="font-semibold mb-2 text-green-800">Temporadas Altas Comunes:</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Navidad y Año Nuevo (Nov-Dic)</li>
                    <li>• Día de la Madre (Mayo)</li>
                    <li>• San Valentín (Febrero)</li>
                    <li>• Regreso a clases (Ene-Feb, Jul-Ago)</li>
                    <li>• Black Friday y Cyber Monday</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 corner-medium">
                  <h4 className="font-semibold mb-2 text-orange-800">Temporadas Bajas Típicas:</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Enero (post-navidad)</li>
                    <li>• Marzo-Abril (pre-semana santa)</li>
                    <li>• Septiembre (post-vacaciones)</li>
                    <li>• Octubre (pre-navidad)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700">
                <strong>Importante:</strong> Estos patrones varían según tu ubicación geográfica, tipo de negocio y clientela. Un negocio cerca de una universidad tendrá patrones muy diferentes a uno en un centro comercial.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 elevation-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingCart className="text-red-600" size={24} />
                <span>3. Planificación de Compras Anticipada</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Una vez que conoces tus patrones, es hora de planificar las compras. Los grandes retailers hacen pedidos navideños en julio. Aquí te explico cómo estructurar tu calendario de compras:
              </p>
              
              <div className="bg-gray-50 p-4 corner-medium mb-4">
                <h4 className="font-semibold mb-2">Calendario de Planificación Anual:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white corner-small">
                    <span className="font-medium">Enero</span>
                    <span className="text-gray-600">Planifica temporada de Pascua y Día de la Madre</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white corner-small">
                    <span className="font-medium">Abril</span>
                    <span className="text-gray-600">Ordena inventario para temporada de verano</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white corner-small">
                    <span className="font-medium">Julio</span>
                    <span className="text-gray-600">Planifica y ordena inventario navideño</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white corner-small">
                    <span className="font-medium">Octubre</span>
                    <span className="text-gray-600">Ordena inventario para Año Nuevo y primeras ventas</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700">
                <strong>Regla de oro:</strong> Ordena con 3-6 meses de anticipación para productos estacionales, especialmente si vienen del extranjero.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 elevation-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="text-yellow-600" size={24} />
                <span>4. Estrategias de Liquidación Inteligente</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Incluso con la mejor planificación, siempre quedarán productos estacionales. La clave es tener una estrategia clara para convertirlos en efectivo rápidamente:
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Descuentos Progresivos</h4>
                  <p className="text-gray-600 text-sm">15% la primera semana post-temporada, 30% la segunda, 50% la tercera</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Paquetes Combinados</h4>
                  <p className="text-gray-600 text-sm">Combina productos estacionales con regulares para mantener márgenes</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Ventas Privadas</h4>
                  <p className="text-gray-600 text-sm">Oferece primero a clientes VIP antes de hacer descuentos públicos</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Donaciones Estratégicas</h4>
                  <p className="text-gray-600 text-sm">Dona productos que no se vendieron para beneficios fiscales y relaciones públicas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6 mt-12">Herramientas Tecnológicas que Facilitan la Planificación</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            No necesitas software de millones de dólares. Tu sistema POS actual probablemente ya tiene muchas de estas funcionalidades, solo necesitas saber cómo usarlas:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Reportes de Tendencias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Configura reportes automáticos que te muestren ventas del mismo período el año anterior
                </p>
                <div className="bg-blue-50 p-3 corner-small">
                  <p className="text-blue-800 text-xs font-medium">Consejo: Exporta estos datos a Excel para análisis más profundos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Alertas de Stock Bajo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Configura alertas diferentes para productos estacionales vs. regulares
                </p>
                <div className="bg-green-50 p-3 corner-small">
                  <p className="text-green-800 text-xs font-medium">Ejemplo: Alerta con 50 unidades para regulares, 200 para navideños</p>
                </div>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Categorización Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Crea categorías específicas por temporada para facilitar el seguimiento
                </p>
                <div className="bg-purple-50 p-3 corner-small">
                  <p className="text-purple-800 text-xs font-medium">Tags: #Navidad2024, #Verano2025, #BackToSchool</p>
                </div>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Análisis de Márgenes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Revisa qué productos estacionales son más rentables para priorizarlos
                </p>
                <div className="bg-orange-50 p-3 corner-small">
                  <p className="text-orange-800 text-xs font-medium">Focus: Productos con +40% margen y alta rotación</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Plan de Acción: Tu Primera Planificación Estacional</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Vamos a lo práctico. Aquí tienes un plan paso a paso para implementar la planificación estacional en tu negocio este mismo mes:
          </p>

          <div className="space-y-4 mb-8">
            <Card className="elevation-1">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white corner-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Auditoría de Datos (Semana 1)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Extrae reportes de ventas de los últimos 2 años, organizados por mes y categoría de producto.
                    </p>
                    <div className="bg-gray-50 p-2 corner-small text-xs text-gray-600">
                      Tiempo estimado: 4 horas | Herramientas: Tu sistema POS + Excel
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white corner-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Identificación de Patrones (Semana 2)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Marca en un calendario todos los picos y valles de ventas. Busca correlaciones con eventos externos.
                    </p>
                    <div className="bg-gray-50 p-2 corner-small text-xs text-gray-600">
                      Tiempo estimado: 3 horas | Herramientas: Google Calendar + gráficos de Excel
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white corner-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Calendario de Compras (Semana 3)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Crea un calendario anual con fechas clave para realizar pedidos basado en tus patrones identificados.
                    </p>
                    <div className="bg-gray-50 p-2 corner-small text-xs text-gray-600">
                      Tiempo estimado: 2 horas | Resultado: Calendario maestro de compras 2025
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 text-white corner-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Configuración de Alertas (Semana 4)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Configura alertas automáticas en tu sistema para productos estacionales con lead times específicos.
                    </p>
                    <div className="bg-gray-50 p-2 corner-small text-xs text-gray-600">
                      Tiempo estimado: 1 hora | Herramientas: Configuración de tu sistema POS
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 elevation-2 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">🎯 Tu Próximo Paso</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                No esperes al próximo año para implementar esto. Incluso si estamos en diciembre, puedes empezar a planificar para enero y el resto del 2025. La planificación estacional es una inversión que se paga sola con la primera temporada bien ejecutada.
              </p>
              
              <div className="bg-blue-50 p-4 corner-medium">
                <p className="text-blue-800 font-medium text-sm">
                  💡 <strong>Tip Final:</strong> Empieza pequeño. Escoge una temporada (ej: Día de la Madre) y aplica todo el proceso. Una vez que veas los resultados, expándelo al resto del año.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-8">
            <p className="text-lg text-gray-600 mb-4">
              ¿Te gustó este artículo? Compártelo con otros emprendedores que puedan beneficiarse de una mejor planificación de inventario.
            </p>
            
            <Link
              to="/"
              className="inline-block px-6 py-3 font-medium corner-medium hover:opacity-90 transition-opacity duration-200"
              style={{ 
                background: 'var(--md-sys-color-primary-gradient)',
                color: 'var(--md-sys-color-on-primary)'
              }}
            >
              Ver más artículos del blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleSeasonalInventory;
