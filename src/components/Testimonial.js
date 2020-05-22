import React from 'react';

const Testimonial = (props) => {
    return (
        <>
            {/*<!--testimonial start-->*/}
            <section className="position-relative">
              <div className="shape-2 transform-md-rotate" style={{overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                      <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#1360ef'}}></path>
                  </svg>
              </div>
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                    <div> <span className="badge badge-light-soft p-2">
                              <i className="la la-users ic-3x rotation"></i>
                          </span>
                      <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                      <p className="lead mb-0 text-white">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="card p-4 shadow border-0 flex-sm-row">
                          <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                            <img alt="Image" src={`${process.env.PUBLIC_URL}/assets/images/testimonial/01.jpg`} className="shadow-primary img-fluid rounded-circle d-inline" />
                          </div>
                          <div className="card-body p-0">
                            <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                            <div>
                              <h5 className="text-primary d-inline">Romi Jensen</h5>
                              <small className="text-muted font-italic">- Founder</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 mt-5">
                        <div className="card p-4 shadow border-0 flex-sm-row">
                          <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                            <img alt="Image" src={`${process.env.PUBLIC_URL}/assets/images/testimonial/02.jpg`} className="shadow-primary img-fluid rounded-circle d-inline" />
                          </div>
                          <div className="card-body p-0">
                            <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                            <div>
                              <h5 className="text-primary d-inline">Johny Stock</h5>
                              <small className="text-muted font-italic">- Supervisor</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
                        <div className="card p-4 shadow border-0 flex-sm-row">
                          <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                            <img alt="Image" src={`${process.env.PUBLIC_URL}/assets/images/testimonial/03.jpg`} className="shadow-primary img-fluid rounded-circle d-inline" />
                          </div>
                          <div className="card-body p-0">
                            <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                            <div>
                              <h5 className="text-primary d-inline">Leeny Biton</h5>
                              <small className="text-muted font-italic">- Manager</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 mt-5">
                        <div className="card p-4 shadow border-0 flex-sm-row">
                          <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                            <img alt="Image" src={`${process.env.PUBLIC_URL}/assets/images/testimonial/01.jpg`} className="shadow-primary img-fluid rounded-circle d-inline" />
                          </div>
                          <div className="card-body p-0">
                            <p>Bootsland Amazing Landing Page All-in-one, clean code, Crative & Modern design.</p>
                            <div>
                              <h5 className="text-primary d-inline">Jensen Rom</h5>
                              <small className="text-muted font-italic">- Ceo</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*<!-- end row -->*/}
                  </div>
                </div>
                {/*<!-- end row -->*/}
              </div>
            </section>
            {/*<!--testimonial end-->*/}
        </>
    )
}

export default Testimonial;
