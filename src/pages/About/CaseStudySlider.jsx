import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import member1 from "../../images/01.jpg";
import member2 from '../../images/02.jpg'
import member3 from "../../images/03.jpg";
import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
  const [carouselOptions] = useState({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 30555500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  useEffect(() => {
  }, []);

  return (
    <div className="container">
      <div id="testimonials" className="testimonials-one ptb-50">
        <div className="overlay"></div>

        <div className="row" style={{padding:'20px'}}>
          <div className="col-md-6" style={{padding:'30px'}}>
            <div className="info-whydiff">
              <div className="section-title-left pt-80">
                <Slide direction="down" delay={0.3}>
                <h3 className="party">
                  Hear Out Our
                  <br />
                  Happy Clients!
                </h3>
                </Slide>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{padding:'20px'}}>
            <OwlCarousel
              className="owl-carousel testimonial-one owl-theme owl-loaded owl-drag"
              {...carouselOptions}
            >
              {/* Testimonial items */}
              <div className="testmonail-item">
                <div className="testmonail-box">
                  <div className="client-img">
                    <img src={member1} alt="Client" />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left fa-2x" />
                    </div>
                  </div>
                  <div className="inner-test">
                    <p className="text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin tincidunt suscipit dolor, id interdum enim efficitur sed. Suspendisse vel turpis vitae odio feugiat congue ut vel ligula. Nulla varius, purus ut consectetur efficitur, enim nisl interdum lectus, non malesuada sem orci sit amet lorem. Ut sit amet turpis sed ex scelerisque finibus. Sed suscipit massa a sem feugiat, eget tristique magna volutpat. Aliquam erat volutpat. Ut venenatis id magna nec efficitur. Suspendisse fringilla nibh nisi, et tincidunt tortor blandit ut.
                      "
                    </p>
                  </div>
                  <div className="author-details mt-3">
                    <h6>Rabie Elkheir</h6>
                    <span>Our Customer </span>
                  </div>
                </div>
              </div>

              <div className="testmonail-item">
                <div className="testmonail-box">
                  <div className="client-img">
                    <img src={member2} alt="Client" />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left fa-2x" />
                    </div>
                  </div>
                  <div className="inner-test">
                    <p className="text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin tincidunt suscipit dolor, id interdum enim efficitur sed. Suspendisse vel turpis vitae odio feugiat congue ut vel ligula. Nulla varius, purus ut consectetur efficitur, enim nisl interdum lectus, non malesuada sem orci sit amet lorem. Ut sit amet turpis sed ex scelerisque finibus. Sed suscipit massa a sem feugiat, eget tristique magna volutpat. Aliquam erat volutpat. Ut venenatis id magna nec efficitur. Suspendisse fringilla nibh nisi, et tincidunt tortor blandit ut.
                      "
                    </p>
                  </div>
                  <div className="author-details mt-3">
                    <h6>Sara Wander</h6>
                    <span>Our Customer</span>
                  </div>
                </div>
              </div>
              <div className="testmonail-item">
                <div className="testmonail-box">
                  <div className="client-img">
                    <img src={member3} alt="Client" />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left fa-2x" />
                    </div>
                  </div>
                  <div className="inner-test">
                    <p className="text">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin tincidunt suscipit dolor, id interdum enim efficitur sed. Suspendisse vel turpis vitae odio feugiat congue ut vel ligula. Nulla varius, purus ut consectetur efficitur, enim nisl interdum lectus, non malesuada sem orci sit amet lorem. Ut sit amet turpis sed ex scelerisque finibus. Sed suscipit massa a sem feugiat, eget tristique magna volutpat. Aliquam erat volutpat. Ut venenatis id magna nec efficitur. Suspendisse fringilla nibh nisi, et tincidunt tortor blandit ut.
                      "
                    </p>
                  </div>
                  <div className="author-details mt-3">
                    <h6>Nour Eldin</h6>
                    <span>Our Customer</span>
                  </div>
                </div>
              </div>

              {/* Add more testimonial items here */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
