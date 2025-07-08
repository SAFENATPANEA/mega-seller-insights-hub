import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 p-6 corner-medium" style={{ backgroundColor: 'var(--md-sys-color-surface-variant)' }}>
      <div className="flex items-center space-x-2 mb-4">
        <List size={18} style={{ color: 'var(--md-sys-color-primary)' }} />
        <h3 className="font-bold" style={{ color: 'var(--md-sys-color-on-primary-container)' }}>
          Tabla de Contenidos
        </h3>
      </div>

      <nav className="space-y-2">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`block w-full text-left py-2 px-3 corner-small transition-colors duration-200 ${
              activeId === heading.id
                ? 'font-medium'
                : 'hover:bg-white hover:bg-opacity-50'
            }`}
            style={{
              color: activeId === heading.id 
                ? 'var(--md-sys-color-primary)' 
                : 'var(--md-sys-color-on-surface-variant)',
              paddingLeft: `${(heading.level - 1) * 16 + 12}px`
            }}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents; 