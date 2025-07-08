
import { Calendar, User, Clock } from 'lucide-react';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const FeaturedArticle = ({ title, excerpt, author, date, readTime, image }: FeaturedArticleProps) => {
  return (
    <section className="mb-16">
      <div className="elevation-2 corner-large bg-white overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="mb-4">
              <span 
                className="px-4 py-2 text-sm font-medium corner-small"
                style={{ 
                  backgroundColor: 'var(--md-sys-color-primary)',
                  color: 'var(--md-sys-color-on-primary)'
                }}
              >
                Artículo Destacado
              </span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              {title}
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-sm mb-6" style={{ color: 'var(--md-sys-color-outline)' }}>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{readTime}</span>
              </div>
            </div>
            
            <button 
              className="px-6 py-3 font-medium corner-medium hover:opacity-90 transition-opacity duration-200"
              style={{ 
                background: 'var(--md-sys-color-primary-gradient)',
                color: 'var(--md-sys-color-on-primary)'
              }}
            >
              Leer artículo completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
