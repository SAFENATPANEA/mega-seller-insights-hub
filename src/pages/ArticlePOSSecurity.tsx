
import { Calendar, User, Clock, ArrowLeft, Shield, Lock, AlertTriangle, CheckCircle2, Eye, CreditCard, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const ArticlePOSSecurity = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--md-sys-color-primary)' }}
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver al blog
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
              Tecnología POS
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Seguridad en Sistemas POS: Protege tu Negocio y tus Clientes
          </h1>

          <div className="flex items-center space-x-6 text-sm mb-8" style={{ color: 'var(--md-sys-color-outline)' }}>
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Miguel Herrera</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>3 Dic 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>12 min lectura</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            Los ciberataques a pequeños negocios van en aumento. Te mostramos cómo proteger tu sistema POS 
            y mantener segura la información de tus clientes con medidas prácticas y efectivas.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 corner-large overflow-hidden elevation-1">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Seguridad en sistemas POS - Circuitos y tecnología" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 corner-medium">
            <div className="flex items-start">
              <AlertTriangle className="text-red-400 mr-3 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Datos Alarmantes sobre Ciberseguridad
                </h3>
                <p className="text-red-700">
                  El 43% de los ciberataques se dirigen a pequeñas empresas, y el 60% de estas 
                  empresas cierran en los 6 meses siguientes a un ataque exitoso.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Shield className="mr-3 text-green-600" size={32} />
            ¿Por Qué la Seguridad POS es Crítica?
          </h2>

          <p className="mb-6">
            Tu sistema POS maneja información extremadamente sensible: datos de tarjetas de crédito, 
            información personal de clientes, y registros de ventas. Un solo error de seguridad puede 
            resultar en multas millonarias, pérdida de confianza del cliente y, en casos extremos, 
            el cierre del negocio.
          </p>

          <div className="bg-blue-50 p-6 corner-medium mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Tipos de Datos en Riesgo
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Números de tarjetas de crédito y débito</li>
              <li>• Códigos de seguridad (CVV)</li>
              <li>• Información personal de clientes</li>
              <li>• Historial de compras</li>
              <li>• Datos financieros del negocio</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="mr-3 text-red-600" size={32} />
            Principales Amenazas de Seguridad
          </h2>

          <h3 className="text-2xl font-semibold mb-4">1. Malware y Virus</h3>
          <p className="mb-6">
            El malware diseñado específicamente para sistemas POS puede robar datos de tarjetas 
            mientras se procesan las transacciones. Estos programas maliciosos son cada vez más 
            sofisticados y difíciles de detectar.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. Ataques de Phishing</h3>
          <p className="mb-6">
            Los criminales utilizan correos electrónicos falsos que parecen legítimos para engañar 
            a los empleados y obtener credenciales de acceso al sistema POS.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Acceso Físico No Autorizado</h3>
          <p className="mb-6">
            Dispositivos skimming conectados directamente al terminal POS o acceso físico 
            a los equipos por parte de personas no autorizadas.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Vulnerabilidades de Software</h3>
          <p className="mb-8">
            Software desactualizado con parches de seguridad pendientes representa una puerta 
            de entrada fácil para los atacantes.
          </p>

          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Lock className="mr-3 text-green-600" size={32} />
            Medidas de Seguridad Esenciales
          </h2>

          <h3 className="text-2xl font-semibold mb-4">1. Cumplimiento PCI DSS</h3>
          <p className="mb-4">
            El estándar PCI DSS (Payment Card Industry Data Security Standard) es obligatorio 
            para cualquier negocio que procese pagos con tarjeta.
          </p>

          <div className="bg-green-50 p-6 corner-medium mb-6">
            <h4 className="text-lg font-semibold text-green-800 mb-3">
              Requisitos Básicos PCI DSS:
            </h4>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <CheckCircle2 size={16} className="mr-2 mt-1 flex-shrink-0" />
                Instalar y mantener configuraciones de firewall
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={16} className="mr-2 mt-1 flex-shrink-0" />
                No usar contraseñas predeterminadas del sistema
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={16} className="mr-2 mt-1 flex-shrink-0" />
                Proteger los datos almacenados del titular de la tarjeta
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={16} className="mr-2 mt-1 flex-shrink-0" />
                Cifrar la transmisión de datos sensibles
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">2. Actualización Constante del Software</h3>
          <p className="mb-6">
            Mantén tu sistema POS actualizado con los últimos parches de seguridad. 
            Configura actualizaciones automáticas cuando sea posible y revisa regularmente 
            las notificaciones de tu proveedor.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Gestión de Contraseñas</h3>
          <div className="bg-yellow-50 p-6 corner-medium mb-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">
              Mejores Prácticas para Contraseñas:
            </h4>
            <ul className="space-y-2 text-yellow-700">
              <li>• Usar contraseñas únicas y complejas para cada cuenta</li>
              <li>• Implementar autenticación de dos factores (2FA)</li>
              <li>• Cambiar contraseñas predeterminadas inmediatamente</li>
              <li>• Usar un gestor de contraseñas empresarial</li>
              <li>• Cambiar contraseñas cada 90 días</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">4. Segregación de Redes</h3>
          <p className="mb-6">
            Mantén tu sistema POS en una red separada del WiFi público y otros dispositivos. 
            Esto limita el acceso en caso de que otros sistemas sean comprometidos.
          </p>

          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Eye className="mr-3 text-blue-600" size={32} />
            Monitoreo y Detección de Amenazas
          </h2>

          <h3 className="text-2xl font-semibold mb-4">Implementa un Sistema de Monitoreo</h3>
          <p className="mb-4">
            Un sistema de monitoreo efectivo puede detectar actividades sospechosas antes 
            de que se conviertan en un problema mayor.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 corner-medium elevation-1 bg-white">
              <Server className="text-blue-600 mb-3" size={32} />
              <h4 className="text-lg font-semibold mb-3">Monitoreo de Red</h4>
              <p className="text-gray-600">
                Supervisa el tráfico de red para detectar patrones inusuales o intentos 
                de acceso no autorizados.
              </p>
            </div>
            <div className="p-6 corner-medium elevation-1 bg-white">
              <CreditCard className="text-green-600 mb-3" size={32} />
              <h4 className="text-lg font-semibold mb-3">Análisis de Transacciones</h4>
              <p className="text-gray-600">
                Revisa regularmente los patrones de transacciones para identificar 
                actividades fraudulentas.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Smartphone className="mr-3 text-purple-600" size={32} />
            Capacitación del Personal
          </h2>

          <p className="mb-4">
            El factor humano es a menudo el eslabón más débil en la seguridad. 
            Una capacitación adecuada puede prevenir la mayoría de los ataques.
          </p>

          <div className="bg-purple-50 p-6 corner-medium mb-8">
            <h4 className="text-lg font-semibold text-purple-800 mb-3">
              Temas de Capacitación Esenciales:
            </h4>
            <ul className="space-y-2 text-purple-700">
              <li>• Identificación de correos de phishing</li>
              <li>• Procedimientos seguros para el manejo de pagos</li>
              <li>• Qué hacer en caso de sospecha de compromiso</li>
              <li>• Importancia de reportar incidentes inmediatamente</li>
              <li>• Buenas prácticas de seguridad física</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6">Plan de Respuesta a Incidentes</h2>

          <p className="mb-4">
            Tener un plan claro de respuesta puede minimizar el daño en caso de un ataque exitoso.
          </p>

          <div className="bg-red-50 p-6 corner-medium mb-8">
            <h4 className="text-lg font-semibold text-red-800 mb-3">
              Pasos Inmediatos en Caso de Compromiso:
            </h4>
            <ol className="space-y-2 text-red-700 list-decimal list-inside">
              <li>Desconectar inmediatamente el sistema comprometido</li>
              <li>Notificar a las autoridades y procesadores de pago</li>
              <li>Cambiar todas las contraseñas del sistema</li>
              <li>Contactar a clientes potencialmente afectados</li>
              <li>Documentar todo el incidente para investigación</li>
              <li>Implementar medidas correctivas antes de reanudar operaciones</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mb-6">Conclusión: La Seguridad es una Inversión</h2>

          <p className="mb-6">
            Invertir en seguridad POS no es un gasto, es una inversión en la continuidad 
            y reputación de tu negocio. El costo de implementar medidas de seguridad robustas 
            es mínimo comparado con las consecuencias de un ataque exitoso.
          </p>

          <div className="bg-green-50 border border-green-200 p-6 corner-medium">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Próximos Pasos Recomendados:
            </h3>
            <ul className="space-y-2 text-green-700">
              <li>• Realiza una auditoría de seguridad completa</li>
              <li>• Implementa autenticación de dos factores</li>
              <li>• Capacita a tu personal en seguridad cibernética</li>
              <li>• Establece un cronograma de actualizaciones regulares</li>
              <li>• Considera contratar un consultor en ciberseguridad</li>
            </ul>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 p-8 corner-large text-center" style={{ backgroundColor: 'var(--md-sys-color-primary-container)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            ¿Necesitas ayuda implementando estas medidas de seguridad?
          </h3>
          <p className="text-lg mb-6" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
            Nuestro equipo de expertos puede ayudarte a asegurar tu sistema POS y proteger tu negocio.
          </p>
          <button 
            className="px-8 py-3 font-semibold corner-medium hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: 'var(--md-sys-color-primary)',
              color: 'var(--md-sys-color-on-primary)'
            }}
          >
            Solicitar Consulta de Seguridad
          </button>
        </div>

        {/* Related Articles */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Artículos Relacionados</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/articulo/fidelizar-clientes-pos-inteligente" 
              className="block p-6 corner-medium elevation-1 bg-white hover:elevation-2 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold mb-2">
                Cómo Fidelizar Clientes con un Sistema POS Inteligente
              </h4>
              <p className="text-gray-600">
                Usa los datos de tu POS para crear experiencias personalizadas...
              </p>
            </Link>
            <Link 
              to="/articulo/gestion-productos-caos-control-total" 
              className="block p-6 corner-medium elevation-1 bg-white hover:elevation-2 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold mb-2">
                Gestión de Productos: Del Caos al Control Total
              </h4>
              <p className="text-gray-600">
                Organiza tu catálogo de productos como un profesional...
              </p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <div className="mt-16">
          <Newsletter />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePOSSecurity;
