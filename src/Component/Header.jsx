import React, { useEffect, useState } from "react";
import Grocerylogo from "../images/logo.png";
import { Link } from "react-router-dom";
import { firebaseAuth, useFirebase } from "../context/Firebase";
import Search from "./Search";
const Header = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { userData, setUserData, loaderStatus } = useFirebase();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const cats = [
    "Stationery",
    "Personal Care",
    "Home & Kitchen",
    "Apparel & Fashion",
    "Beverages & Utensils",
    "Gardening & Outdoor",
    "Health & Wellness",
  ];

  return (
    <div>
      <>
        <div className="container  displaydesign">
          <div className="row g-4">
            <div className="col-8 col-sm-4 col-lg-9 py-2 ">
              <input
                className="form-control "
                style={{ width: "100%" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
            </div>
            <div
              className="col-4 col-sm-4 col-lg-3 py-2 d-flex"
              style={{ justifyContent: "center" }}
            >
              <div className="list-inline">
                <div className="list-inline-item">
                  <Link
                    to="/ShopWishList"
                    className="text-muted position-relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    to="#!"
                    className="text-muted"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    to="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Grocerylogo}
              style={{ width:75 , marginBottom: 8, marginLeft: "-15px" }}
              alt="eCommerce HTML Template"
            />
          </Link>
          {/* <Search /> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              className={`containerr ${isOpen ? "change" : ""}`}
              onClick={handleClick}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <div className="collapse navbar-collapse" id="mobile_nav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right"></ul>
            <ul className="navbar-nav navbar-light">
              <li className="nav-item">
                <li className="nav-item dmenu dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to=""
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-grid"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </span>{" "}
                    Categories
                  </Link>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {cats.map((c) => (
                      <Link className="dropdown-item" to={`/Shop/${c}`}>
                        {c}
                      </Link>
                    ))}
                  </div>
                </li>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Grocery-react/">
                  Home
                </Link>
              </li> */}
              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/AboutUs">
                    About us
                  </Link>
                  {/* <Link className="dropdown-item" to="/AboutArt">
                    About Suppliers
                  </Link> */}
                  <Link className="dropdown-item" to="/Contact">
                    Contact
                  </Link>
                </div>
              </li>
              {userData.role === "buyer" ? (
                <>
                  <li className="nav-item dmenu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </Link>
                    <div
                      className="dropdown-menu sm-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="/Shop">
                        Shop
                      </Link>
                      <Link className="dropdown-item" to="/ShopWishList">
                        Shop Wishlist
                      </Link>
                      <Link className="dropdown-item" to="/ShopCart">
                        Shop Cart
                      </Link>
                      <Link className="dropdown-item" to="/ShopCheckOut">
                        Shop Checkout
                      </Link>
                    </div>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                <Link className="nav-link" to="/Shop/">
                  Shop
                </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/Blog/">
                  Blog
                </Link>
              </li>

              <li className="nav-item dmenu dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </p>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div>
                    <div>
                      {user ? (
                        <>
                          <Link className="dropdown-item" to="/MyAccountOrder">
                            Orders
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/MyAccountSetting"
                          >
                            Settings
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/MyAccountAddress"
                          >
                            Address
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/MyAcconutPaymentMethod"
                          >
                            Payment Method
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/MyAcconutNotification"
                          >
                            Notification
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link className="dropdown-item" to="/MyAccountSignIn">
                            Sign in
                          </Link>
                          <Link className="dropdown-item" to="/MyAccountSignUp">
                            Signup
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/MyAccountForgetPassword"
                          >
                            Forgot Password
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <></>
    </div>
  );
};

export default Header;
