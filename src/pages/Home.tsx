import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Mission from '../components/Mission';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Mission />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;