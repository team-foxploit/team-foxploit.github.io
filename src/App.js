import React from 'react';
import logo from './logo.svg';
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
// App CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <About />
      <Services />
      <Work />
    </div>
  );
}

export default App;
