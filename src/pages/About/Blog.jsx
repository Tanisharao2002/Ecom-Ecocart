import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blog1 from "../../images/blog-large.jpg";
import blog3 from "../../images/blog 3.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import ScrollToTop from "../ScrollToTop";

const Blog = () => {
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
              <div>
                {/* section */}
                <section className="mt-8">
                  <div className="container">
                    <div className="row">
                      {/* logo */}
                      <div className="col-12">
                        <h1 className="fw-bold">EcoCart Blog</h1>
                      </div>
                    </div>
                  </div>
                </section>
                {/* section */}
                <section className="mt-6 mb-lg-14 mb-8">
                  {/* container */}
                  <div className="container">
                    <div className="row d-flex align-items-center mb-8">
                      <div className="col-12 col-md-12 col-lg-8">
                        <Link to="#!">
                          {/* img */}
                          {/* <Slide direction="down"> */}
                          <Fade>
                          <div className="img-zoom">
                            <img
                              src={blog1}
                              alt="blog"
                              className="img-fluid rounded-3 w-100"
                            />
                          </div>
                          </Fade>
                          {/* </Slide> */}
                        </Link>
                      </div>
                      {/* text */}
                      
                      <div className="col-12 col-md-12 col-lg-4">
                      <Slide direction="down">
                        <div className="ps-lg-8 mt-8 mt-lg-0">
                          <h2 className="mb-3">
                            <Link to="#!" className="text-inherit">
                            Why Eco-Friendly Products Matter for a Sustainable Future
                            </Link>
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc ac erat ut neque bibendum egestas sed
                            quis justo. Integer non rhoncus diam. Nullam eget
                            dapibus lectus, vitae condimentum sem.
                          </p>
                          <div className="d-flex justify-content-between text-muted">
                            <span>
                              <small>25 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">6min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                        </Slide>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      
                      <div className="col-12 col-md-6 col-lg-4 mb-8">
                      <Zoom>
                        <div className="mb-4">
                          <Link to="#!">
                            {/* img */}
                            <div className="img-zoom">
                              <img
                                src={blog3}
                                alt="blog"
                                className="img-fluid rounded-3 w-100"
                              />
                            </div>
                          </Link>
                        </div>
                        </Zoom>
                        {/* text */}
                        <div className="mb-3">
                        </div>
                        {/* text */}
                        <div>
                          <h2 className="h5">
                            <Link to="#!" className="text-inherit">
                            How to Start an Eco-Friendly Journey on a Budget
                            </Link>
                          </h2>
                          <p>
                            In et eros dapibus, facilisis ipsum sit amet, tempor
                            dolor. Donec sed nisi gravida, molestie dolor
                            molestie, congue sapien.
                          </p>
                          <div className="d-flex justify-content-between text-muted mt-4">
                            <span>
                              <small>22 April 2023</small>
                            </span>
                            <span>
                              <small>
                                Read time:{" "}
                                <span className="text-dark fw-bold">12min</span>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <nav>
                          {/* pagination */}
                          <ul className="pagination">
                            <li className="page-item disabled">
                              <Link
                                className="page-link  mx-1 rounded-3 "
                                to="#"
                                aria-label="Previous"
                              >
                                <i className="fa fa-chevron-left" />
                              </Link>
                            </li>
                            <li className="page-item ">
                              <Link
                                className="page-link  mx-1 rounded-3 active"
                                to="#"
                              >
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                              >
                                ...
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                              >
                                12
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link mx-1 rounded-3 text-body"
                                to="#"
                                aria-label="Next"
                              >
                                <i className="fa fa-chevron-right" />
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
};
export default Blog;
