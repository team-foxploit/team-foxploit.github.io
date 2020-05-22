import React from 'react';

const Header = (props) => {
    return (
        <>
            {/*<!--header start-->*/}
            <header className="site-header">
              <div id="header-wrap">
                <div className="container">
                  <div className="row">
                    {/*<!--menu start-->*/}
                    <div className="col d-flex align-items-center justify-content-between"> <a className="navbar-brand logo text-dark h2 mb-0" href="index.html">
                          Fox<span className="text-primary font-weight-bold">ploit.</span>
                        </a>
                      <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                              <ul className="dropdown-menu">
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Company</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">About Us</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">About Us 2</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Career</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Career Single</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Blogs</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Blog Card</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Blog Listing 1</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Blog Listing 2</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Blog Single</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Portfolio</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Portfolio Card</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Portfolio Single</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Contacts</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Contact 1</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Contact 2</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Account</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Sign In</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Sign In 2</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Sign Up</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Forgot Password</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Utilities</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Pricing</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Faq</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Maintenance</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Coming Soon</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Error 404</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Privacy & Policy</a>
                                    </li>
                                    <li><a className="dropdown-item" href="index.html">Terms & Conditions</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Shop</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index.html">Product Grid</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Product List</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Product Single</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Cart</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Checkout</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Order Completed</a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Features</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index.html">Accordion</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Blog</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Counter</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Feature Box</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Hero Banner</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Lightbox Gallery</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Price Table</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Video Lightbox</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Team</a>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Testimonial</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </nav> <a className="btn btn-primary ml-8 d-none d-lg-block" href="#">Buy Now</a>
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
