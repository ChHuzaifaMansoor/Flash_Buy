import React from 'react';
import HeroSection from './HeroSection';
import Categories from './Categories';
import Products from './Products';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
