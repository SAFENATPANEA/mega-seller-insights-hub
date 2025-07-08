
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="mt-20 pt-12 pb-8"
      style={{ backgroundColor: 'var(--md-sys-color-inverse-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/83da801a-7866-4dbc-a9d2-c0df4e9c3e9d.png" 
                alt="MegaSeller Logo" 
                className="h-8 w-8"
              />
              <div 
                className="text-xl font-bold"
                style={{ color: 'var(--md-sys-color-inverse-on-surface)' }}
              >
                MegaSeller
              </div>
            </div>
            <p 
              className="text-gray-300 mb-6 max-w-md"
            >
              Tu socio tecnológico para hacer crecer tu negocio. Descubre estrategias, 
              consejos y las mejores prácticas para optimizar tu punto de venta.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: 'var(--md-sys-color-inverse-on-surface)' }}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Artículos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: 'var(--md-sys-color-inverse-on-surface)' }}
            >
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>blog@megaseller.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="border-t pt-8 text-center text-gray-400"
          style={{ borderColor: 'var(--md-sys-color-outline-variant)' }}
        >
          <p>© 2024 MegaSeller. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
