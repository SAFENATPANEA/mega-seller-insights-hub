import { Calendar, User, Clock, ArrowLeft, BarChart3, TrendingUp, Target, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { createBlogPostSchema, createBreadcrumbSchema } from '../utils/structuredData';

const ArticleKpisAnalysis = () => {
  const articleData = {
    title: "Análisis de Ventas: KPIs que Todo Dueño de Negocio Debe Conocer",
    description: "Descubre los indicadores clave de rendimiento que transformarán tu toma de decisiones empresariales. Aprende a medir, analizar y optimizar el desempeño de tu negocio con métricas que realmente importan.",
    author: "Ana Torres",
    datePublished: "2024-12-10T10:00:00-05:00",
    dateModified: "2024-12-10T10:00:00-05:00",
    image: "/lovable-uploads/kpi.png",
    keywords: ["KPIs", "análisis de ventas", "indicadores de rendimiento", "métricas empresariales", "análisis de datos", "POS", "sistema punto de venta", "ROI", "margen de beneficio", "rotación de inventario"]
  };

  const blogPostSchema = createBlogPostSchema({
    ...articleData,
    url: window.location.href
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Blog", url: "/" },
    { name: "Análisis de Datos", url: "/?category=analisis-datos" },
    { name: articleData.title, url: window.location.href }
  ]);

  const combinedSchema = [blogPostSchema, breadcrumbSchema];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <SEOHead
        title={articleData.title}
        description={articleData.description}
        keywords={arrayToString(articleData.keywords)}
        author={articleData.author}
        ogType="article"
        ogImage={articleData.image}
        canonicalUrl={window.location.href}
        jsonLd={combinedSchema}
      />
      
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" role="main">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8" aria-label="Navegación de página">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--md-sys-color-primary)' }}
              >
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link 
                to="/" 
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--md-sys-color-primary)' }}
              >
                Blog
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">Análisis de Datos</li>
          </ol>
          
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-sm hover:opacity-70 transition-opacity mt-2"
            style={{ color: 'var(--md-sys-color-primary)' }}
          >
            <ArrowLeft size={16} />
            <span>Volver al blog</span>
          </Link>
        </nav>

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
              Análisis de Datos
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {articleData.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {articleData.description}
          </p>
          
          <div className="flex items-center space-x-6 text-sm mb-8" style={{ color: 'var(--md-sys-color-outline)' }}>
            <div className="flex items-center space-x-2">
              <User size={18} aria-hidden="true" />
              <span>{articleData.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} aria-hidden="true" />
              <time dateTime="2024-12-10">10 Dic 2024</time>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} aria-hidden="true" />
              <span>10 min lectura</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 elevation-1 corner-large overflow-hidden">
          <img 
            src="/lovable-uploads/kpi.png"
            alt="Dashboard con gráficos de KPIs de ventas mostrando análisis de datos empresariales"
            className="w-full h-64 md:h-96 object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
              <BarChart3 size={32} style={{ color: 'var(--md-sys-color-primary)' }} aria-hidden="true" />
              <span>¿Por Qué los KPIs Son Fundamentales?</span>
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              En el mundo empresarial actual, tomar decisiones basadas en intuición ya no es suficiente. 
              Los <strong>indicadores clave de rendimiento (KPIs)</strong> te proporcionan datos concretos 
              para evaluar el éxito de tu negocio, identificar oportunidades de mejora y predecir tendencias futuras.
            </p>

            <div className="bg-blue-50 p-6 corner-medium mb-8 border-l-4" style={{ borderColor: 'var(--md-sys-color-primary)' }}>
              <p className="text-lg font-medium mb-2" style={{ color: 'var(--md-sys-color-primary)' }}>
                📊 Dato Importante
              </p>
              <p className="text-gray-700">
                Las empresas que utilizan análisis de datos de manera efectiva tienen 5 veces más 
                probabilidades de tomar decisiones más rápidas que sus competidores.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
              <Target size={32} style={{ color: 'var(--md-sys-color-primary)' }} aria-hidden="true" />
              <span>KPIs Esenciales para tu Negocio</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign size={24} style={{ color: 'var(--md-sys-color-primary)' }} />
                    <span>KPIs Financieros</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><strong>Ingresos por Ventas:</strong> Total de ventas en un período específico</li>
                    <li><strong>Margen de Beneficio Bruto:</strong> Rentabilidad después de costos directos</li>
                    <li><strong>Ticket Promedio:</strong> Valor promedio por transacción</li>
                    <li><strong>ROI (Retorno de Inversión):</strong> Eficiencia de tus inversiones</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp size={24} style={{ color: 'var(--md-sys-color-primary)' }} />
                    <span>KPIs Operacionales</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li><strong>Rotación de Inventario:</strong> Frecuencia de renovación del stock</li>
                    <li><strong>Tasa de Conversión:</strong> Porcentaje de visitantes que compran</li>
                    <li><strong>Costo de Adquisición de Cliente (CAC):</strong> Inversión para ganar un cliente</li>
                    <li><strong>Tiempo de Ciclo de Venta:</strong> Duración del proceso de venta</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">1. Ingresos por Ventas y Crecimiento</h3>
            <p className="mb-4 leading-relaxed">
              Este es el KPI más básico pero fundamental. No solo mides el total de ventas, sino también 
              su <strong>crecimiento mensual y anual</strong>. Analiza patrones estacionales, picos de demanda 
              y tendencias a largo plazo.
            </p>
            
            <div className="bg-green-50 p-4 corner-medium mb-6">
              <p className="font-semibold text-green-800 mb-2">💡 Consejo Práctico:</p>
              <p className="text-green-700">
                Compara siempre con el mismo período del año anterior para obtener insights más precisos 
                sobre el crecimiento real de tu negocio.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">2. Margen de Beneficio Bruto</h3>
            <p className="mb-4 leading-relaxed">
              Calcula qué porcentaje de tus ventas se convierte en beneficio después de descontar 
              los <strong>costos directos de producción o adquisición</strong>. Este KPI te ayuda a:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Identificar productos más rentables</li>
              <li>Optimizar estrategias de precios</li>
              <li>Negociar mejor con proveedores</li>
              <li>Planificar promociones efectivas</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">3. Rotación de Inventario</h3>
            <p className="mb-4 leading-relaxed">
              Mide cuántas veces vendes completamente tu inventario en un período determinado. 
              Una <strong>alta rotación</strong> indica eficiencia, mientras que una rotación baja 
              puede señalar problemas de demanda o exceso de stock.
            </p>
            
            <div className="bg-yellow-50 p-4 corner-medium mb-6 border-l-4 border-yellow-400">
              <p className="font-semibold text-yellow-800 mb-2">⚠️ Señales de Alerta:</p>
              <ul className="text-yellow-700 space-y-1">
                <li>• Rotación muy lenta: productos obsoletos o precios inadecuados</li>
                <li>• Rotación muy rápida: posibles pérdidas de ventas por desabastecimiento</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">4. Tasa de Conversión</h3>
            <p className="mb-6 leading-relaxed">
              El porcentaje de personas que visitan tu tienda y realizan una compra. Este KPI es crucial 
              para medir la <strong>efectividad de tu estrategia de ventas</strong> y la experiencia del cliente.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Herramientas y Metodologías</h2>
            
            <h3 className="text-2xl font-bold mb-4">Implementación con Sistemas POS</h3>
            <p className="mb-4 leading-relaxed">
              Los <strong>sistemas POS modernos</strong> como MegaSeller automatizan el cálculo de estos KPIs, 
              proporcionando dashboards en tiempo real con:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Reportes automáticos de ventas diarias, semanales y mensuales</li>
              <li>Análisis de productos más y menos vendidos</li>
              <li>Seguimiento de tendencias de clientes</li>
              <li>Alertas de inventario bajo</li>
              <li>Comparativas históricas automatizadas</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Frecuencia de Análisis</h3>
            <div className="bg-gray-50 p-6 corner-medium mb-6">
              <ul className="space-y-3">
                <li><strong>Diario:</strong> Ventas, inventario crítico, flujo de caja</li>
                <li><strong>Semanal:</strong> Tendencias de productos, comportamiento de clientes</li>
                <li><strong>Mensual:</strong> Análisis completo de rendimiento, ROI, planificación</li>
                <li><strong>Trimestral:</strong> Evaluación estratégica y ajustes de objetivos</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Plan de Acción Inmediato</h2>
            
            <div className="bg-blue-50 p-6 corner-medium">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--md-sys-color-primary)' }}>
                Pasos para Implementar Hoy Mismo:
              </h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Identifica tus 5 KPIs prioritarios</strong> basados en tus objetivos de negocio</li>
                <li><strong>Configura tu sistema POS</strong> para generar reportes automáticos</li>
                <li><strong>Establece metas realistas</strong> para cada KPI basadas en tu historial</li>
                <li><strong>Programa revisiones semanales</strong> de 30 minutos para analizar datos</li>
                <li><strong>Crea alertas</strong> para métricas críticas que requieran acción inmediata</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusión</h2>
            <p className="text-lg mb-6 leading-relaxed">
              El <strong>análisis de KPIs</strong> no es solo sobre números; es sobre entender la historia 
              que tus datos cuentan sobre tu negocio. Cada métrica te acerca más a decisiones informadas 
              que impulsen el crecimiento sostenible.
            </p>
            
            <p className="text-lg leading-relaxed">
              Recuerda: los mejores KPIs son aquellos que puedes <strong>actuar sobre ellos</strong>. 
              Comienza con métricas simples, domínalas, y gradualmente incorpora análisis más sofisticados 
              conforme tu negocio crezca.
            </p>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 corner-large elevation-2" style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            ¿Listo para Optimizar tu Análisis de Ventas?
          </h3>
          <p className="text-lg mb-6" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            Descubre cómo MegaSeller puede automatizar el cálculo de estos KPIs y más, 
            proporcionándote insights valiosos para hacer crecer tu negocio.
          </p>
          <button 
            className="px-8 py-4 font-bold corner-medium transition-all duration-200 hover:opacity-90"
            style={{ 
              background: 'var(--md-sys-color-primary-gradient)',
              color: 'var(--md-sys-color-on-primary)'
            }}
            aria-label="Conocer más sobre MegaSeller POS"
          >
            Conocer MegaSeller POS
          </button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

// Helper function to convert array to string
const arrayToString = (arr: string[]): string => arr.join(', ');

export default ArticleKpisAnalysis;
