import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <Link to={`/products?category=${category.slug}`}>
      <div
        ref={ref}
        className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="aspect-w-16 aspect-h-12 relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-white/80 text-sm mb-4">
            {category.productCount} Products
          </p>
          <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 w-fit">
            Explore
          </button>
        </div>
      </div>
    </Link>
  );
}