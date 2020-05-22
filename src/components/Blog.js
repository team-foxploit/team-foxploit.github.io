import React from 'react';

const Blog = (props) => {
    return (
        <>
            {/*<!--blog start-->*/}
            <section>
              <div className="container">
                <div className="row align-items-end mb-5">
                  <div className="col-12 col-md-12 col-lg-4">
                    <div>
                        <span className="badge badge-primary-soft p-2">
                            <i className="la la-bold ic-3x rotation"></i>
                        </span>
                      <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 ml-auto">
                    <div>
                      <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                    </div>
                  </div>
                </div>
                {/*<!-- end row -->*/}
                <div className="row">
                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                    {/*<!-- Blog Card -->*/}
                    <div className="card border-0 bg-transparent">
                      <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                        <br />July</div>
                        <img className="card-img-top shadow rounded" src={`${process.env.PUBLIC_URL}/assets/images/blog/01.png`} alt="Image" />
                      <div className="card-body pt-5"> <a className="d-inline-block text-muted mb-2" href="#">Sass</a>
                        <h2 className="h5 font-weight-medium">
                            <a className="link-title" href="index.html">Bootsland Perfect Performance landing Page</a>
                          </h2>
                        <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item pr-4"> <a href="#" className="text-muted"><i className="ti-comments mr-1 text-primary"></i> 131</a>
                          </li>
                          <li className="list-inline-item pr-4"> <a href="#" className="text-muted"><i className="ti-eye mr-1 text-primary"></i> 255</a>
                          </li>
                          <li className="list-inline-item"> <a href="#" className="text-muted"><i className="ti-comments mr-1 text-primary"></i> 14</a>
                          </li>
                        </ul>
                      </div>
                      <div></div>
                    </div>
                    {/*<!-- End Blog Card -->*/}
                  </div>
                  <div className="col-12 col-lg-4 mb-6 mb-lg-0">
                    {/*<!-- Blog Card -->*/}
                    <div className="card border-0 bg-transparent">
                      <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                        <br />July</div>
                      <img className="card-img-top shadow rounded" src={`${process.env.PUBLIC_URL}/assets/images/blog/02.png`} alt="Image" />
                      <div className="card-body pt-5"> <a className="d-inline-block text-muted mb-2" href="#">Marketing</a>
                        <h2 className="h5 font-weight-medium">
                            <a className="link-title" href="index.html">The most powerfull template that make you.</a>
                          </h2>
                        <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item pr-4"> <a href="#" className="text-muted"><i className="ti-comments mr-1 text-primary"></i> 131</a>
                          </li>
                          <li className="list-inline-item pr-4"> <a href="#" className="text-muted"><i className="ti-eye mr-1 text-primary"></i> 255</a>
                          </li>
                          <li className="list-inline-item"> <a href="#" className="text-muted"><i className="ti-comments mr-1 text-primary"></i> 14</a>
                          </li>
                        </ul>
                      </div>
                      <div></div>
                    </div>
                    {/*<!-- End Blog Card -->*/}
                  </div>
                  <div className="col-12 col-lg-4">
                    {/*<!-- Blog Card -->*/}
                    <div className="card border-0 bg-transparent">
                      <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ml-3 mt-3">15
                        <br />July</div>
                      <img className="card-img-top shadow rounded" src={`${process.env.PUBLIC_URL}/assets/images/blog/03.png`} alt="Image" />
                      <div className="card-body pt-5"> <a className="d-inline-block text-muted mb-2" href="#">Landing</a>
                        <h2 className="h5 font-weight-medium">
                            <a className="link-title" href="index.html">A brand for a company is like a reputation person.</a>
                          </h2>
                        <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item pr-4"> <a href="#" className="text-muted"><i className="ti-comments mr-1 text-primary"></i> 131</a>
                          </li>
                          <li className="list-inline-item pr-4"> <a href="#" className="text-muted"><i className="ti-eye mr-1 text-primary"></i> 255</a>
                          </li>
                          <li className="list-inline-item"> <a href="#" className="text-muted"><i className="ti-comments mr-1 text-primary"></i> 14</a>
                          </li>
                        </ul>
                      </div>
                      <div></div>
                    </div>
                    {/*<!-- End Blog Card -->*/}
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- blog end -->*/}
        </>
    )
}

export default Blog;
