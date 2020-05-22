import React from 'react';
import logo from './logo.svg';
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';
// App CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="page-content">
          <Feature />
          <About />
          <Services />
          <Work />
          <Testimonial />
          <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
