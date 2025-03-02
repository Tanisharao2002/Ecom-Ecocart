import React from "react";
import { Link } from "react-router-dom";
import koaSoap from "../images/koa soap.jpg";
import products from "../ProductList/sampleProducts.json";
const ProductItem = () => {
  return (
    <div>
      {/* Popular Products Start*/}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className="h3style" data-title="Popular Products">
                  Popular Products
                </h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
                {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
              </div>
            </div>
          </div>
          {/* <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3"> */}
            <div className=" row-cols-lg-6 d-flex flex-wrap gap-3 mt-2">
              {products && products.length > 0 ? (
                products.slice(0, 5).map((p) => (
                  <div className="card-wrapper">
                    {" "}
                    <div className="card card-product">
                      <div className="card-body">
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <Link href="#!">
                            <img
                              src={p.image}
                              alt="Grocery Ecommerce Template"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          <div className="card-product-action">
                            <Link
                              href="#!"
                              className="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                            >
                              <i className="bi bi-heart" />
                            </Link>
                          </div>
                        </div>
                        <div className="text-small mb-1">
                          <Link
                            href="#!"
                            className="text-decoration-none text-muted"
                          >
                            <small>{p.category}</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link
                            href="#!"
                            className="text-inherit text-decoration-none"
                          >
                            {p.name}
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Error Fetching best ones. Continue by Shop!</p>
              )}
            </div>
          {/* </div> */}
        </div>
      </section>
      {/* Popular Products End*/}
    </div>
  );
};

export default ProductItem;
