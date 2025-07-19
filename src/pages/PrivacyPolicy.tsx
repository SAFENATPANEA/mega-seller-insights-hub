// src/pages/PrivacyPolicy.tsx
import SEOHead  from "../components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Política de Privacidad - Insights Hub"
        description="Conoce cómo manejamos tu información y protegemos tu privacidad en el blog de Mega Seller POS."
        keywords="política de privacidad, protección de datos, cookies, MegaSeller, AdSense"
      />
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Política de Privacidad</h1>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">1. Introducción</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Bienvenido a Insights Hub, el blog de Mega Seller POS. Tu privacidad es de suma importancia para nosotros. Esta Política de Privacidad describe qué datos recopilamos, por qué los recopilamos y cómo los utilizamos. Al utilizar nuestro sitio, aceptas las prácticas descritas en esta política.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">2. Información que Recopilamos</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Podemos recopilar información personal y no personal. La información personal puede incluir tu nombre y dirección de correo electrónico si te suscribes a nuestro boletín. La información no personal incluye datos de navegación, como tipo de navegador, páginas visitadas y tiempo de permanencia, recopilada a través de cookies y tecnologías similares.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">3. Uso de Cookies y Publicidad de Terceros</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Este sitio utiliza cookies para mejorar tu experiencia. Las cookies son pequeños archivos de datos que se almacenan en tu dispositivo.
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Utilizamos Google AdSense para mostrar anuncios en nuestro sitio. Google, como proveedor externo, utiliza cookies para publicar anuncios basados en las visitas anteriores de los usuarios a nuestro sitio web o a otros sitios web. El uso de cookies de publicidad de Google le permite a él y a sus socios mostrar anuncios a nuestros usuarios basados en su visita a nuestro sitio y/o a otros sitios en Internet.
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Puedes optar por inhabilitar la publicidad personalizada visitando la página de <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Configuración de anuncios de Google</a>. Alternativamente, puedes optar por inhabilitar el uso de cookies de un proveedor externo para la publicidad personalizada visitando <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.aboutads.info/choices</a>.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">4. Cómo Usamos tu Información</h2>
            <p className="text-gray-700 dark:text-gray-300">
              La información que recopilamos se utiliza para:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
              <li>Personalizar y mejorar tu experiencia en nuestro sitio.</li>
              <li>Enviar boletines informativos y correos promocionales (si te has suscrito).</li>
              <li>Analizar el tráfico del sitio para mejorar nuestro contenido y servicios.</li>
              <li>Mostrar anuncios relevantes a través de Google AdSense.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">5. Enlaces a Otros Sitios Web</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nuestro sitio puede contener enlaces a otros sitios web que no son operados por nosotros. Si haces clic en un enlace de un tercero, serás dirigido al sitio de ese tercero. Te recomendamos encarecidamente que revises la Política de Privacidad de cada sitio que visites.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">6. Cambios en Esta Política de Privacidad</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Se te aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio.
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Última actualización: 19 de julio de 2025
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">7. Contáctanos</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de nuestro formulario de contacto o por correo electrónico a [admin@megaseller.net].
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
