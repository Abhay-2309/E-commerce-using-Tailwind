import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Style
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Explore our curated collection of premium products designed for the modern lifestyle. Quality meets innovation in every item.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern Shopping"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20 animate-pulse">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">★</span>
              </div>
              <div>
                <div className="text-sm font-medium">4.9/5 Rating</div>
                <div className="text-xs text-gray-500">2K+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}