import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            {/*<!--header start-->*/}
            <header className="site-header">
              <div id="header-wrap">
                <div className="container">
                  <div className="row">
                    {/*<!--menu start-->*/}
                    <div className="col d-flex align-items-center justify-content-between">
                        <Link className="navbar-brand logo text-dark h2 mb-0" to="/">
                          Fox<span className="text-primary font-weight-bold">ploit.</span>
                        </Link>
                      <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                            {/*<li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/pages/shop" data-toggle="dropdown">Shop</Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/pages/products-grid">Product Grid</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="/pages/products-list">Product List</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="/pages/products-single">Product Single</Link>
                                    </li>
                                  </ul>
                                </li>*/}
                            </ul>
                        </div>
                      </nav>
                      {/*<Link className="btn btn-primary ml-8 d-none d-lg-block" href="#">Buy Now</Link>*/}
                    </div>
                    {/*<!--menu end-->*/}
                  </div>
                </div>
              </div>
            </header>
            {/*<!--header end-->*/}
        </>
    )
}

export default Header;
