import React from 'react';

const About = (props) => {
    return (
        <>
            {/*<!--about start-->*/}
            <section>
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/about/03.png`} alt="about-03" className="img-fluid" />
                  </div>
                  <div className="col-12 col-lg-6 col-xl-5">
                    <div> <span className="badge badge-primary-soft p-2">
                              <i className="la la-exclamation ic-3x rotation"></i>
                          </span>
                      <h2 className="mt-3">We're A Creative Software Landing Page</h2>
                      <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start">
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="badge-primary-soft rounded p-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <p className="mb-0 ml-3">Fully Responsive</p>
                        </div>
                      </div>
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="badge-primary-soft rounded p-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <p className="mb-0 ml-3">Based On Bootstrap 4</p>
                        </div>
                      </div>
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="badge-primary-soft rounded p-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <p className="mb-0 ml-3">Built with Sass</p>
                        </div>
                      </div>
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="badge-primary-soft rounded p-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <p className="mb-0 ml-3">SVG Icon</p>
                        </div>
                      </div>
                    </div> <a href="#" className="btn btn-outline-primary mt-5">
                            Learn More
                          </a>
                  </div>
                </div>
              </div>
            </section>
            {/*<!--about end-->*/}
        </>
    )
}

export default About;
