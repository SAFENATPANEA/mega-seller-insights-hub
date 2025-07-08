
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  onClick?: () => void;
}

const BlogCard = ({ title, excerpt, author, date, readTime, category, image, onClick }: BlogCardProps) => {
  return (
    <article 
      className="elevation-1 corner-medium bg-white hover:elevation-2 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {image && (
        <div className="aspect-video overflow-hidden corner-medium">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span 
            className="px-3 py-1 text-sm font-medium corner-small"
            style={{ 
              backgroundColor: 'var(--md-sys-color-secondary-container)',
              color: 'var(--md-sys-color-on-secondary-container)'
            }}
          >
            {category}
          </span>
          <span className="text-sm" style={{ color: 'var(--md-sys-color-outline)' }}>
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-opacity-80 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--md-sys-color-outline)' }}>
            <div className="flex items-center space-x-1">
              <User size={16} />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
          </div>
          
          <div 
            className="flex items-center space-x-1 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
            style={{ color: 'var(--md-sys-color-primary)' }}
          >
            <span>Leer más</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
