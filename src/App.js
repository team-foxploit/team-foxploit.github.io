import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import logo from './logo.svg';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
// App CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
              <Route path="/" exact={true}>
                  <Home />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
              <Route path="/products">
                  <Products />
              </Route>
              <Route path="/services">
                  <Services />
              </Route>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
