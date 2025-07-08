
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 elevation-2" style={{ backgroundColor: 'var(--md-sys-color-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/83da801a-7866-4dbc-a9d2-c0df4e9c3e9d.png" 
              alt="MegaSeller Logo" 
              className="h-8 w-8"
            />
            <div className="text-white font-bold text-xl">MegaSeller</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
            >
              Inicio
            </a>
            <a 
              href="#" 
              className="text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
            >
              Artículos
            </a>
            <a 
              href="#" 
              className="text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
            >
              Recursos
            </a>
            <a 
              href="#" 
              className="text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-opacity-80 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white border-opacity-20">
              <a 
                href="#" 
                className="block px-3 py-2 text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
              >
                Inicio
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
              >
                Artículos
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
              >
                Recursos
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-white hover:text-opacity-80 transition-colors duration-200 font-medium"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
