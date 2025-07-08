
import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 font-medium corner-medium transition-all duration-200 ${
              activeCategory === category
                ? 'elevation-1'
                : 'hover:elevation-1'
            }`}
            style={{
              backgroundColor: activeCategory === category 
                ? 'var(--md-sys-color-primary)' 
                : 'var(--md-sys-color-surface)',
              color: activeCategory === category 
                ? 'var(--md-sys-color-on-primary)' 
                : 'var(--md-sys-color-on-primary-container)',
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
