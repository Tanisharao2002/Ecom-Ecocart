import React, { useEffect, useState } from "react";
import member1 from "../../images/01.jpg";
import member2 from "../../images/02.jpg";
import member3 from "../../images/03.jpg";
import member5 from "../../images/member5.jpg";
import member6 from "../../images/member6.jpg";
import member7 from "../../images/member7.jpg";
import member8 from "../../images/member8.jpg";
import idea from "../../images/idea.gif";
import team from "../../images/team.gif";
import award from "../../images/award.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import SocialNetworksCarousel from "./SocialNetworksCarousel";
import CaseStudySlider from "./CaseStudySlider";
import { MagnifyingGlass } from "react-loader-spinner";
import { Slide, Zoom } from "react-awesome-reveal";
import ScrollToTop from "../ScrollToTop";

const AboutUs = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
          <>
          <ScrollToTop/>
          </>
            <>
              {/* Hero */}
              <section className="position-relative pt-5">
                {/* Background */}
                <div
                  className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
                  style={{
                    backgroundImage: "url(assets/img/about/hero-bg.svg)",
                  }}
                >
                  <div className="d-lg-none" style={{ height: 960 }} />
                  <div className="d-none d-lg-block" style={{ height: 768 }} />
                </div>
                {/* Content */}
                <div className="container position-relative zindex-5 pt-5">
                  <div className="row">
                    <div className="col-lg-6">
                      {/* Breadcrumb */}

                      {/* Text */}
                      <Slide direction="down">
                      <h1 className="pb-2 pb-md-3">About EcoCart</h1>
                      <h3 className="pb-2 pb-md-3">The Future of Grocery Delivery:</h3>
                      <p
                        className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
                        style={{ maxWidth: 526 }}
                      >
                  At Ecocart, we’re on a mission to make sustainable living accessible and easy for everyone. We believe that small changes lead to big impacts, and by providing eco-friendly alternatives, we aim to help people make choices that are better for both themselves and the planet. Our store offers a curated selection of high-quality, sustainable products across categories like home and kitchen, personal care, gardening, and more. Each product is chosen with care, focusing on materials, durability, and the environmental footprint.

We work closely with communities, including self-help groups and eco-conscious artisans, to bring you products that support local craftsmanship and encourage responsible consumption. At Ecocart, our commitment goes beyond just products—we’re here to build a sustainable future, one step at a time.
                      </p>
                    </Slide>
                    </div>
                    {/* Images */}
                    <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
                      <div className="row row-cols-2 gx-3 gx-lg-4">
                        <div className="col pt-lg-5 mt-lg-1">
                          <Zoom>
                          <img
                            src={member1}
                            className="d-block rounded-3 mb-3 mb-lg-4"
                            alt="member"
                          />
                          </Zoom>
                        </div>
                        <div className="col">
                          <Zoom>
                          <img
                            src={member3}
                            className="d-block rounded-3 mb-3 mb-lg-4"
                            alt="member"
                          />
                          </Zoom>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>

            <>
              <section className="container mt-8 mb-5 pt-lg-5" id="benefits">
                <Swiper
                  className="swiper pt-3"
                  modules={[]} // Use the modules prop to include the Pagination module
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    500: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                  }}
                >
                  <div className="swiper-wrapper pt-4">
                    <SwiperSlide className="swiper-slide border-end-lg px-2">
                      <div className="text-center">
                        <Zoom>
                        <img
                          src={idea}
                          width="100"
                          alt="Bulb icon"
                          className="d-block mb-4 mx-auto"
                        />
                        </Zoom>
                        <Slide direction="up">
                        <h4 className="mb-2 pb-1">Creative Solutions</h4>
                        <p className="mx-auto" style={{ maxWidth: "336px" }}>
                          Sed morbi nulla pulvinar lectus tempor vel euismod
                          accumsan.
                        </p>
                        </Slide>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-end-lg px-2">
                      <div className="text-center">
                        <Zoom>
                        <img
                          src={award}
                          width="100"
                          alt="Award icon"
                          className="d-block mb-4 mx-auto"
                        />
                        </Zoom>
                        <Slide direction="up">
                        <h4 className="mb-2 pb-1">Award Winning</h4>
                        <p className="mx-auto" style={{ maxWidth: "336px" }}>
                          Sit facilisis dolor arcu, fermentum vestibulum arcu
                          elementum imperdiet.
                        </p>
                        </Slide>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide px-2">
                      <div className="text-center">
                        <Zoom>
                        <img
                          src={team}
                          width="100"
                          alt="Team icon"
                          className="d-block mb-4 mx-auto"
                        />
                        </Zoom>
                        <Slide direction="up">
                        <h4 className="mb-2 pb-1">Empowering Local Communities</h4>
                        <p className="mx-auto" style={{ maxWidth: "336px" }}>
                          Nam venenatis urna aenean quis feugiat et senectus
                          turpis.
                        </p>
                        </Slide>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
                </Swiper>
              </section>
            </>

            <>
              {/* Gallery */}
              <section className="container pb-5 mb-2 mb-md-4 mb-lg-5 mt-8">
                <div className="d-flex align-items-center justify-content-between pb-4 mb-2">
                  <h2 className="h1 mb-0">We are Powerful</h2>
                </div>
                <div
                  className="gallery row g-4"
                  data-video="true"
                  data-thumbnails="true"
                >
                  <div className="col-md-5">
                    <a
                      href=""
                      className="gallery-item video-item is-hovered rounded-3"
                      data-sub-html='<h6 class="fs-sm text-light">Silicon Inc. Showreel by Marvin McKinney</h6>'
                    >
                      <img src={member8} alt="Gallery thumbnail" />
                      <div className="gallery-item-caption p-4">
                        <h4 className="text-light mb-1">Local Arisans </h4>
                        <p className="mb-0"></p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-3 col-sm-5">
                    <a
                      href={member2}
                      className="gallery-item rounded-3 mb-4"
                      data-sub-html='<h6 class="fs-sm text-light">Program for apprentices</h6>'
                    >
                      <img
                        src={member2}
                        alt="Gallery thumbnail"
                        style={{ height: "310px" }}
                      />
                      <div className="gallery-item-caption fs-sm fw-medium">
                        Program for apprentices
                      </div>
                    </a>
                    <a
                      href={member5}
                      className="gallery-item rounded-3"
                      data-sub-html='<h6 class="fs-sm text-light">Modern bright offices</h6>'
                    >
                      <img src={member5} alt="Gallery thumbnail" />
                      <div className="gallery-item-caption fs-sm fw-medium">
                        Local Self Help groups 
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-7">
                    <a
                      href={member6}
                      className="gallery-item rounded-3 mb-4"
                      data-sub-html='<h6 class="fs-sm text-light">Friendly professional team</h6>'
                    >
                      <img
                        src={member6}
                        alt="Gallery thumbnail"
                        style={{ height: "360px" }}
                      />
                      <div className="gallery-item-caption fs-sm fw-medium">
                        Friendly professional team
                      </div>
                    </a>
                    <a
                      href={member7}
                      className="gallery-item rounded-3"
                      data-sub-html='<h6 class="fs-sm text-light">Efficient project management</h6>'
                    >
                      <img src={member7} alt="Gallery thumbnail" />
                      <div className="gallery-item-caption fs-sm fw-medium">
                        Efficient project management
                      </div>
                    </a>
                  </div>
                </div>
              </section>
            </>
            <>
              <CaseStudySlider />
            </>
            <>
              {/* Contact form */}
              <section className="container pb-5 mb-2 mt-8 mb-md-4 mb-lg-5">
                <div className="position-relative bg-secondaryy rounded-3 py-5 mb-2">
                  <div className="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
                    <div className="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
                      <Slide direction="down" delay={0.5}>
                      <p className="lead mb-2 mb-md-3">Ready to get started?</p>
                      <h2 className="h1 pb-3">Don’t Hesitate to Contact Us</h2>
                      </Slide>
                    </div>
                    <form
                      className="col-lg-6 col-md-7 offset-xl-1 zindex-3 needs-validation"
                      noValidate
                    >
                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <label htmlFor="name" className="form-label fs-base">
                            Full name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="form-control form-control-lg"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your name!
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4 zindex-3">
                          <label htmlFor="email" className="form-label fs-base">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid email address!
                          </div>
                        </div>
                        <div className="col-12 pb-2 mb-4">
                          <label
                            htmlFor="message"
                            className="form-label fs-base"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            className="form-control form-control-lg"
                            rows={4}
                            required
                            defaultValue={""}
                          />
                          <div className="invalid-feedback">
                            Please enter your message!
                          </div>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary shadow-primary btn-lg"
                      >
                        Send request
                      </button>
                       
                    </form>
                  </div>
                  {/* Pattern */}
                </div>
              </section>
            </>

            <>
              <SocialNetworksCarousel />
            </>
          </>
        )}
      </div>
    </div>
  );
};
export default AboutUs;
