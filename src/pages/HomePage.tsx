import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}