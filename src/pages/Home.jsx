import slider1 from "../images/slide-1.jpg";
import abouticon from "../images/about-icons-1.svg";
import sliderimg from "../images/slider.png";
import map from "../images/map.png";
import phone from "../images/phone.jpg";
import googleplay from "../images/googleplay-btn.svg";
import appstore from "../images/appstore-btn.svg";
import clock from "../images/clock.svg";
import gift from "../images/gift.svg";
import package1 from "../images/package.svg";
import refresh from "../images/refresh-cw.svg";
import part1 from "../images/part1.png";
import part2 from "../images/part2.png";
import part3 from "../images/part3.png";
import part4 from "../images/part4.png";
import part5 from "../images/part5.png";
import part6 from "../images/part6.png";
import part7 from "../images/part7.png";
import af from "../images/af.png";
import hk from "../images/hk.png";
import hf from "../images/hf.png";
import go from "../images/go.png";
import bu from "../images/bu.png";
import pc from "../images/pc.png";
import st from "../images/st.png";
import bookmark from "../images/Marigold-Seed-bookmarks.jpg";
import straw from "../images/stainless-steel-straw.jpg";
import Koa from "../images/koa soap.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProductItem from "../ProductList/ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, Zoom } from "react-awesome-reveal";
import { useEffect } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { firestore } from "../context/Firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const productsRef = collection(firestore, "products");
  const [products] = useCollectionData(productsRef);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };
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
            {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
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
              <div className="scroll-to-top">
                <button
                  onClick={scrollToTop}
                  className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
                >
                  ↑
                </button>
              </div>
              <section
                className="hero-section"
                style={{ marginBottom: "15px" }}
              >
                <div className="container mt-8">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div
                          style={{
                            background: `url(${slider1}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                            minWidth: "95%",
                            minHeight: "95%",
                          }}
                        >
                          <div
                            className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center"
                            style={{ margin: "1cm" }}
                          >
                            <span className="badge text-bg-warning">
                              Opening Sale Discount 50%
                            </span>
                            <h2
                              className="text-dark display-5 fw-bold mt-4"
                              style={{
                                textShadow:
                                  "2px 2px 5px rgba(236, 236, 236, 0.9)",
                              }}
                            >
                              Ecocart: Your Gateway to Sustainable Living
                            </h2>
                            <p
                              className="lead"
                              style={{
                                color: "#708090",
                                textShadow:
                                  "2px 2px 5px rgba(236, 236, 236, 0.9)",
                              }}
                            >
                              Discover Eco-Friendly Products for a Greener
                              Tomorrow
                            </p>
                            <div className="d-flex justify-content-center">
                              <Link
                                to="/Shop"
                                className="btn btn-dark mt-3"
                                style={{ width: "200px", marginTop: "1cm" }}
                              >
                                Shop Now{" "}
                                <i className="feather-icon icon-arrow-right ms-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div
                          style={{
                            background: `url(${sliderimg}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                          }}
                        >
                          <div
                            className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center"
                            style={{ margin: "1cm" }}
                          >
                            <span className="badge text-bg-warning">
                              Free Shipping - orders over ₹750
                            </span>
                            <h2
                              className="text-dark display-5 fw-bold mt-4"
                              style={{
                                textShadow:
                                  "2px 2px 5px rgba(236, 236, 236, 0.9)",
                              }}
                            >
                              Free Shipping on <br /> orders over{" "}
                              <span className="text-primary">₹750</span>
                            </h2>
                            <p
                              className="lead"
                              style={{
                                color: "#5e5e5e",
                                textShadow:
                                  "2px 2px 5px rgba(236, 236, 236, 0.9)",
                              }}
                            >
                              Free Shipping to First-Time Customers Only, After
                              promotions and discounts are applied.
                            </p>
                            <div className="d-flex justify-content-center">
                              <Link
                                to="/Shop"
                                className="btn btn-dark mt-10"
                                style={{ width: "200px" }}
                              >
                                Shop Now{" "}
                                <i className="feather-icon icon-arrow-right ms-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="carousel-control-prev"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </Link>
                    <Link
                      className="carousel-control-next"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </Link>
                  </div>
                </div>
              </section>
            </>
            {/* <>
              <section className="mt-8">
           
                <div className="container ">
                  <div className="row">
                  
                    <Slide direction="down">
                      <div className="col-12">
                     
                        <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 rounded-3 text-center text-lg-start">
                     
                          <div className="d-lg-flex align-items-center">
                            <img
                              src={abouticon}
                              alt="about-icon"
                              className="img-fluid"
                            />
                           
                            <div className="ms-lg-4">
                              <h1 className="fs-2 mb-1">Welcome to EcoCart</h1>
                              <span>
                                Discover Eco-Friendly Products for a Greener
                                Tomorrow{" "}
                                <span className="text-primary">₹500</span> off
                                on your first order.
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 mt-lg-0">
                             btn }
                            <Link to="#" className="btn btn-dark">
                              Download EcoCart App
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </section>
            </> */}
            <>
              <div className="container">
                <h3 className="h3style" data-title="sourcing partners">
                  Our sourcing partners
                </h3>
                <Slider {...settings2}>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part1}
                        // className="img-fluid "
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title partner">
                        <div>Green Threads Collective</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part2}
                        className="img-fluid"
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title">
                        <div>Harmony Home Creations</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part3}
                        className="img-fluid"
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title">
                        <div>EcoNest Co-op</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part4}
                        className="img-fluid"
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title">
                        <div>Sunrise Craft Guild</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part5}
                        className="img-fluid"
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title">
                        <div>Bloom Earthworks</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part6}
                        className="img-fluid"
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title">
                        <div>Roots & Wings Ventures</div>
                      </h6>
                    </div>
                  </div>
                  <div className="m-1">
                    <div className="partner-list">
                      <img
                        src={part7}
                        className="img-fluid"
                        alt="product"
                        style={{ maxWidth: "2cm", objectFit: "cover" }}
                      />
                      <h6 class="card-title">
                        <div>Pure Haven Essentials</div>
                      </h6>
                    </div>
                  </div>
                </Slider>
              </div>
            </>

            <>
              <section className="my-lg-14 my-8">
                <div className="container" style={{ marginTop: 50 }}>
                  <div
                    className="row justify-content-center  g-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-md-3 col-sm-6 fade-zoom ">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={refresh} alt="refresh" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Easy Returns</h3>
                              <p>
                                Not satisfied with a product? Return it at the
                                doorstep &amp; get a refund within hours. No
                                questions asked
                                <Link to="#!">policy</Link>.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={package1} alt="package" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Wide Assortment</h3>
                              <p>
                                Choose from 5000+ products across food, personal
                                care, household, bakery, veg and non-veg &amp;
                                other categories.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={gift} alt="gift" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">
                                Best Prices &amp; Offers
                              </h3>
                              <p>
                                Cheaper prices than your local supermarket,
                                great cashback offers to top it off. Get best
                                pricess &amp; offers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={clock} alt="clock" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Fast Delivery</h3>
                              <p>
                                Get your order delivered to your doorstep at the
                                earliest from EcoCart pickup
                                <p> stores near you.</p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </section>
            </>

            <>
              {/* section category */}
              <section className="my-lg-14 my-8">
                <div className="container ">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-6">
                        {/* heading    */}
                        <div className="section-head text-center mt-8">
                          <h3
                            className="h3style"
                            data-title="Shop Popular Categories"
                          >
                            Shop Popular Categories
                          </h3>
                          <div className="wt-separator bg-primarys"></div>
                          <div className="wt-separator2 bg-primarys"></div>
                          {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row g-3 justify-content-center">
                        {/* col */}
                        <div
                          className="col-lg-1.5 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent(
                                  "Health & Wellness"
                                )}`}
                              >
                                <img
                                  src={hf}
                                  alt="dairy-bread-eggs"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  {" "}
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Health & Wellness"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Health & Wellness
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                        <div
                          className="col-lg-1.5 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent(
                                  "Gardening & Outdoor"
                                )}`}
                              >
                                <img
                                  src={go}
                                  alt="fruits-vegetables"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              <div className="mt-4">
                                {/* text */}
                                <h5 className="fs-6 mb-0">
                                  {" "}
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Gardening & Outdoor"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Gardening & Outdoor
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                        <div
                          className="col-lg-1.5 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent(
                                  "Beverages & Utensils"
                                )}`}
                              >
                                <img
                                  src={bu}
                                  alt="snack-munchies"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  {" "}
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Beverages & Utensils"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Beverages & Utensils
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                        <div
                          className="col-lg-2 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent(
                                  "Apparel & Fashion"
                                )}`}
                              >
                                <img
                                  src={af}
                                  alt="bakery-biscuits"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  {" "}
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Apparel & Fashion"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Apparel & Fashion
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                        <div
                          className="col-lg-2 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent(
                                  "Home & Kitchen"
                                )}`}
                              >
                                <img
                                  src={hk}
                                  alt="instant-food"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  {" "}
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Home & Kitchen"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Home & Kitchen
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                        <div
                          className="col-lg-2 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent(
                                  "Personal Care"
                                )}`}
                              >
                                <img
                                  src={pc}
                                  alt="tea-coffee-drinks"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Personal Care"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Personal Care
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                        <div
                          className="col-lg-2 col-md-2 col-sm-3 col-4 text-center"
                          style={{ width: "12.5%" }}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link
                                to={`/Shop/${encodeURIComponent("Stationery")}`}
                              >
                                <img
                                  src={st}
                                  alt="cold-drinks-juices"
                                  className="card-image rounded-circle"
                                  style={{ width: "2.5cm", padding: "0.3cm" }}
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  <Link
                                    to={`/Shop/${encodeURIComponent(
                                      "Stationery"
                                    )}`}
                                    className="text-inherit"
                                  >
                                    Stationery
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                        {/* col */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <></>
            <>
              <ProductItem />
            </>
            <>
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 mb-6">
                      <div className="section-head text-center mt-8">
                        <h3 className="h3style" data-title="Daily Best Sells">
                          Daily Best Sells
                        </h3>
                        <div className="wt-separator bg-primarys"></div>
                        <div className="wt-separator2 bg-primarys"></div>
                        {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                      </div>
                    </div>
                  </div>

                  <div style={{marginBottom:"100px", justifyContent:"center", alignItems:"center", gap:"0.8cm", flexWrap:"wrap"}}>
                    <div>
                      <div className="image-itemss">
                        <Slider {...settings1}>
                          {products.map((product) => (
                            <div
                              key={product.id}
                              className="images swiper-slide px-4"
                            >
                              <div className="col">
                                <div className="card card-product">
                                  <div className="card-body">
                                    <div
                                      className="text-center position-relative"
                                      style={{ alignItems: "center" }}
                                    >
                                      <Link to="#!">
                                        <img
                                          src={product.image}
                                          alt={product.name}
                                          style={{
                                            height: "5cm",
                                          }}
                                          className="mb-3 img-fluid"
                                        />
                                      </Link>
                                      <div className="card-product-action">
                                        {/* <Link
                  to="#!"
                  className="btn-action"
                  data-bs-toggle="modal"
                  data-bs-target="#quickViewModal"
                >
                  <i
                    className="bi bi-eye"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="Quick View"
                  />
                </Link> */}
                                        <Link
                                          to="#!"
                                          className="btn-action"
                                          data-bs-toggle="tooltip"
                                          data-bs-html="true"
                                          title="Wishlist"
                                        >
                                          <i className="bi bi-heart" />
                                        </Link>
                                        {/* <Link
                  to="#!"
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="Compare"
                >
                  <i className="bi bi-arrow-left-right" />
                </Link> */}
                                      </div>
                                    </div>
                                    <div className="text-small mb-1">
                                      <Link
                                        to="#!"
                                        className="text-decoration-none text-muted"
                                      >
                                        <small>{product.category}</small>
                                      </Link>
                                    </div>
                                    <h2 className="fs-6">
                                      <Link
                                        to="#!"
                                        className="text-inherit text-decoration-none"
                                      >
                                        {product.name}
                                      </Link>
                                    </h2>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                      <div>
                                        <span className="text-dark">
                                          ₹{product.price}
                                        </span>{" "}
                                        <span className="text-decoration-line-through text-muted"></span>
                                      </div>
                                      <div>
                                        <small className="text-warning">
                                          {" "}
                                          <i className="bi bi-star-fill" />
                                          <i className="bi bi-star-fill" />
                                          <i className="bi bi-star-fill" />
                                          <i className="bi bi-star-fill" />
                                          <i className="bi bi-star-half" />
                                        </small>
                                        <span>
                                          <small>{product.rating}</small>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="d-grid mt-2">
                                      <Link to="#!" className="btn btn-primary">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={16}
                                          height={16}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-plus"
                                        >
                                          <line
                                            x1={12}
                                            y1={5}
                                            x2={12}
                                            y2={19}
                                          />
                                          <line
                                            x1={5}
                                            y1={12}
                                            x2={19}
                                            y2={12}
                                          />
                                        </svg>
                                        Add to cart
                                      </Link>
                                    </div>
                                    <div className="d-flex justify-content-start text-center mt-3">
                                      <div
                                        className="deals-countdown w-100"
                                        data-countdown="2022/11/11 00:00:00"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
              {/* cta section */}
              {/* <section>
                <div
                  className="container"
                  style={{
                    background: `url(${map})no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <hr className="my-lg-14 my-8">
                  row
                  <div className="row align-items-center text-center justify-content-center">
                    <div className=" col-lg-6 col-md-6 fade-in-left">
                      <div className="mb-6">
                        <div className="mb-7">
                          heading
                          <h1>Get the Ecocart app</h1>
                          <h5 className="mb-0">
                            Get the Best Eco-Friendly Shopping Experience!
                          </h5>
                        </div>
                        <div>
                          app
                          <small>Download app from</small>
                          <ul className="list-inline mb-0 mt-2 ">
                            list item
                            <li className="list-inline-item">
                              img
                              <Link to="#!">
                                {" "}
                                <img
                                  src={appstore}
                                  alt="appstore"
                                  style={{ width: 140 }}
                                />
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              img
                              <Link to="#!">
                                {" "}
                                <img
                                  src={googleplay}
                                  alt="googleplay"
                                  style={{ width: 140 }}
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" offset-lg-2 col-lg-4 col-md-6 fade-zoom">
                      <div className="text-lg-start">
                        img
                        <img src={phone} alt="iphone" className=" img-fluid" />
                      </div>
                    </div>
                  </div>
                  <hr className="my-lg-14 my-8">
                </div>
              </section> */}
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
