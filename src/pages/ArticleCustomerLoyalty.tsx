
import { Calendar, User, Clock, ArrowLeft, CheckCircle, Users, Target, TrendingUp, Heart, Star, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ArticleCustomerLoyalty = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver al blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span 
              className="px-4 py-2 text-sm font-medium corner-small"
              style={{ 
                backgroundColor: 'var(--md-sys-color-secondary-container)',
                color: 'var(--md-sys-color-on-secondary-container)'
              }}
            >
              Atención al Cliente
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cómo Fidelizar Clientes con un Sistema POS Inteligente
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Los datos de tus clientes son oro puro. Te mostramos cómo usar tu sistema POS para crear experiencias personalizadas que generen lealtad verdadera y aumenten el valor de vida del cliente.
          </p>
          
          <div className="flex items-center space-x-6 text-sm" style={{ color: 'var(--md-sys-color-outline)' }}>
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Carlos Mendoza</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>12 Dic 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>6 min lectura</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/b75fd21c-52d4-4ac8-907e-922782fb3614.png" 
            alt="Sistema POS inteligente para fidelización de clientes"
            className="w-full h-64 md:h-96 object-cover corner-large"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-6">
              En el competitivo mundo del retail, <strong>retener un cliente cuesta cinco veces menos que conseguir uno nuevo</strong>. Tu sistema POS no es solo una herramienta para procesar pagos; es una mina de oro de información que puede transformar visitantes ocasionales en clientes fieles de por vida.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Hoy te mostramos cómo convertir tu POS en una máquina de fidelización que funciona 24/7, creando experiencias personalizadas que tus clientes no encontrarán en ningún otro lugar.
            </p>
          </div>

          {/* Key Statistics */}
          <Card className="mb-8 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="text-blue-600" size={24} />
                <span>Datos que Impactan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">73%</div>
                  <p className="text-sm text-gray-600">de los clientes prefieren comprar en tiendas que personalizan su experiencia</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5x</div>
                  <p className="text-sm text-gray-600">más caro conseguir un cliente nuevo que retener uno existente</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">67%</div>
                  <p className="text-sm text-gray-600">más de probabilidad de compra cuando reciben ofertas personalizadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-2">
              <Heart className="text-red-500" size={32} />
              <span>5 Estrategias de Fidelización con tu POS</span>
            </h2>

            {/* Strategy 1 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="text-green-600" size={24} />
                  <span>1. Programa de Puntos Inteligente</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  No todos los puntos son iguales. Tu POS puede crear un sistema de recompensas que premia comportamientos específicos:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-600 mt-1" size={16} />
                    <span><strong>Puntos por frecuencia:</strong> Más puntos por visitas consecutivas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-600 mt-1" size={16} />
                    <span><strong>Multiplicadores estacionales:</strong> Dobles puntos en productos de temporada</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-600 mt-1" size={16} />
                    <span><strong>Bonos por referidos:</strong> Puntos extra por traer amigos</span>
                  </li>
                </ul>
                <div className="bg-green-50 p-4 corner-medium">
                  <p className="text-sm"><strong>Ejemplo práctico:</strong> Una cafetería aumentó la frecuencia de visitas 45% ofreciendo puntos dobles los lunes (su día más lento).</p>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 2 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="text-blue-600" size={24} />
                  <span>2. Ofertas Personalizadas en Tiempo Real</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Tu POS conoce el historial de compras. Úsalo para crear ofertas irresistibles en el momento perfecto:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-blue-600 mt-1" size={16} />
                    <span><strong>Descuentos por abandono:</strong> 15% off si no ha comprado en 30 días</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-blue-600 mt-1" size={16} />
                    <span><strong>Productos complementarios:</strong> "Ya que compras X, te ofrecemos Y con 20% descuento"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-blue-600 mt-1" size={16} />
                    <span><strong>Cumpleaños y aniversarios:</strong> Ofertas especiales en fechas importantes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategy 3 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="text-yellow-600" size={24} />
                  <span>3. Niveles VIP Automáticos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Crea una jerarquía de clientes que se sienta exclusiva y valiosa:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 corner-medium text-center">
                    <div className="font-bold text-gray-600">BRONCE</div>
                    <div className="text-sm">$0 - $500 gastados</div>
                    <div className="text-xs mt-2">5% descuento</div>
                  </div>
                  <div className="bg-yellow-50 p-4 corner-medium text-center">
                    <div className="font-bold text-yellow-600">PLATA</div>
                    <div className="text-sm">$500 - $2000 gastados</div>
                    <div className="text-xs mt-2">10% descuento + envío gratis</div>
                  </div>
                  <div className="bg-yellow-100 p-4 corner-medium text-center">
                    <div className="font-bold text-yellow-700">ORO</div>
                    <div className="text-sm">$2000+ gastados</div>
                    <div className="text-xs mt-2">15% descuento + beneficios exclusivos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy 4 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="text-purple-600" size={24} />
                  <span>4. Comunicación Omnicanal Inteligente</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Tu POS puede activar comunicaciones automáticas que mantienen a tus clientes comprometidos:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-purple-600 mt-1" size={16} />
                    <span><strong>SMS de agradecimiento:</strong> Mensaje personalizado post-compra</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-purple-600 mt-1" size={16} />
                    <span><strong>Notificaciones de stock:</strong> "Tu producto favorito está de vuelta"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-purple-600 mt-1" size={16} />
                    <span><strong>Recordatorios inteligentes:</strong> "Hace 3 meses compraste X, ¿necesitas más?"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategy 5 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="text-indigo-600" size={24} />
                  <span>5. Análisis Predictivo de Comportamiento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Usa los datos de tu POS para predecir y prevenir la pérdida de clientes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-indigo-600 mt-1" size={16} />
                    <span><strong>Alertas de riesgo:</strong> Identifica clientes que pueden abandonar</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-indigo-600 mt-1" size={16} />
                    <span><strong>Campañas de reactivación:</strong> Ofertas especiales para clientes inactivos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-indigo-600 mt-1" size={16} />
                    <span><strong>Momento óptimo de contacto:</strong> Cuándo es más probable que respondan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cómo Implementarlo en Tu Negocio</h2>
            
            <div className="bg-blue-50 p-6 corner-large mb-6">
              <h3 className="text-xl font-bold mb-4">Plan de Implementación de 30 Días</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold">Semana 1: Configuración Base</div>
                    <div className="text-sm text-gray-600">Configura la captura de datos de clientes y el programa de puntos básico</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold">Semana 2: Segmentación</div>
                    <div className="text-sm text-gray-600">Crea grupos de clientes basados en comportamiento de compra</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold">Semana 3: Automatización</div>
                    <div className="text-sm text-gray-600">Implementa comunicaciones automáticas y ofertas personalizadas</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold">Semana 4: Optimización</div>
                    <div className="text-sm text-gray-600">Analiza resultados y ajusta estrategias basado en datos reales</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Métricas de Éxito a Monitorear</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Retención</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Tasa de retención de clientes</li>
                    <li>• Frecuencia de compra promedio</li>
                    <li>• Tiempo entre compras</li>
                    <li>• Tasa de reactivación</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Valor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Valor de vida del cliente (CLV)</li>
                    <li>• Ticket promedio por cliente</li>
                    <li>• Margen de ganancia por cliente</li>
                    <li>• ROI de programas de lealtad</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">El Futuro de la Fidelización es Ahora</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La fidelización de clientes ya no es opcional; es una necesidad para la supervivencia en el mercado actual. Tu sistema POS tiene el poder de transformar cada transacción en una oportunidad de construir una relación duradera.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Recuerda: <strong>los clientes no son fieles a productos, son fieles a experiencias</strong>. Y con un POS inteligente, cada interacción puede ser memorable.
            </p>
            
            <div className="bg-green-50 p-6 corner-large">
              <p className="font-semibold text-green-800 mb-2">💡 Consejo Final:</p>
              <p className="text-green-700">
                Empieza pequeño, mide todo y escala gradualmente. La fidelización es un maratón, no una carrera de velocidad. 
                Los resultados llegan a quienes persisten y se adaptan constantemente.
              </p>
            </div>
          </section>
        </article>

        {/* Author Bio */}
        <div className="border-t pt-8 mt-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={24} className="text-gray-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Carlos Mendoza</h3>
              <p className="text-gray-600 mb-2">Especialista en CRM y Fidelización de Clientes</p>
              <p className="text-sm text-gray-500">
                Con más de 8 años ayudando a retailers a implementar estrategias de fidelización exitosas. 
                Experto en sistemas POS y análisis de comportamiento del consumidor.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleCustomerLoyalty;
