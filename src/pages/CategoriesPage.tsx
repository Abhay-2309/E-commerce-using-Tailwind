import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CategoriesPage() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of product categories, each carefully curated to meet your specific needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-white/90 text-sm mb-2">
                  {category.description}
                </p>
                <p className="text-white/80 text-sm mb-6">
                  {category.productCount} Products Available
                </p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 w-fit">
                  Explore Category
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}