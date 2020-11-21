import React from 'react';

// Components
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';

function Home() {
  return (
    <>
      <Hero />
      <div className="page-content">
          <Feature />
          <About />
          <Services />
          <Work />
          <Testimonial />
          <Blog />
      </div>
    </>
  );
}

export default Home;
