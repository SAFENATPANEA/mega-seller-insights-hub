import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--md-sys-color-primary)' }}
          >
            <Home size={16} />
            <span>Inicio</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={16} style={{ color: 'var(--md-sys-color-outline)' }} />
            
            {item.path ? (
              <Link 
                to={item.path}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--md-sys-color-primary)' }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--md-sys-color-on-surface)' }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 