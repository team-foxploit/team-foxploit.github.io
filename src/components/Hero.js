import React from 'react';

const Hero = (props) => {
    return (
        <>
            {/*<!--hero section start-->*/}
            <section>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-4 col-lg-6 order-lg-2 mb-8 mb-lg-0">
                    {/*<!-- Image -->*/}
                    <img src={`${process.env.PUBLIC_URL}/assets/images/hero/01.png`} className="img-fluid" alt="..."/>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-6 order-lg-1">
                    {/*<!-- Heading -->*/}
                    <h5 className="badge badge-primary-soft font-w-6">Ever Created For</h5>
                    <h1 className="display-4">
                          Let's Work With <span className="text-primary">Bootsland</span>
                        </h1>
                    {/*<!-- Text -->*/}
                    <p className="lead text-muted">Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.</p>
                        {/*<!-- Buttons -->*/}
                        <a href="#" className="btn btn-primary shadow mr-1">
                            Learn More
                        </a>
                    <a href="#" className="btn btn-outline-primary">
                            Get Started
                          </a>
                    <div className="owl-carousel mt-8 no-pb" data-dots="false" data-items="4" data-md-items="4" data-sm-items="3" data-xs-items="2" data-margin="30" data-autoplay="true">
                      <div className="item">
                        <div className="clients-logo">
                          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/client/07.png`} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="clients-logo">
                          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/client/08.png`} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="clients-logo">
                          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/client/09.png`} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="clients-logo">
                          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/client/10.png`} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="clients-logo">
                          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/client/11.png`} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="clients-logo">
                          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/client/12.png`} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- end row -->*/}
              </div>
              {/*<!-- end container -->*/}
            </section>
            {/*<!--hero section end-->*/}
        </>
    )
}

export default Hero;
