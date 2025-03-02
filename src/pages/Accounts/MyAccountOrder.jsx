import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import koaSoap from "../../images/koa soap.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { getAuth, signOut } from "firebase/auth";
import { useFirebase } from "../../context/Firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, firebaseAuth } from "../../context/Firebase";
const MyAccountOrder = () => {
  const { userData, setUserData } = useFirebase();
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const orderRef = collection(firestore, "orders");
  const [orders] = useCollectionData(orderRef);

  function onClickSignOut() {
    // const auth = getAuth(); // Get the Firebase Auth instance
    signOut(firebaseAuth)
      .then(() => {
        console.log("User signed out successfully!");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }
  return (
    <div>
      <>
        <ScrollToTop />
      </>
      <>
        {/* section */}
        <section>
          <div className="container">
            {/* row */}
            <div className="row">
              {/* col */}

              {/* <div> */}
              <div className="col-12">
                <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
                  {/* heading */}
                  <h3 className="fs-5 mb-0">Account Setting</h3>
                  {/* button */}
                  <button
                    className="btn btn-outline-gray-400 text-muted d-md-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAccount"
                    aria-controls="offcanvasAccount"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
              {/* col */}
              <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
                <div className="pt-10 pe-lg-10">
                  {/* nav */}
                  <ul className="nav flex-column nav-pills nav-pills-dark">
                    {/* nav item */}
                    {userData.role === "buyer" ? (
                      <>
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="/MyAccountOrder"
                          >
                            <i className="fas fa-shopping-bag me-2" />
                            Your Orders
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/MyAccountAddProducts">
                            <i className="fas fa-shopping-bag me-2" />
                            Add Products
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="/MyAccountSupplier"
                          >
                            <i className="fas fa-shopping-bag me-2" />
                            Received Orders
                          </Link>
                        </li>
                      </>
                    )}
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAccountSetting">
                        <i className="fas fa-cog me-2" />
                        Settings
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAccountAddress">
                        <i className="fas fa-map-marker-alt me-2" />
                        Address
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAcconutPaymentMethod">
                        <i className="fas fa-credit-card me-2" />
                        Payment Method
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/MyAcconutNotification">
                        <i className="fas fa-bell me-2" />
                        Notification
                      </Link>
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <hr />
                    </li>
                    {/* nav item */}
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        to="/"
                        onClick={onClickSignOut}
                      >
                        <i className="fas fa-sign-out-alt me-2" />
                        Log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </div> */}

              <div className="col-lg-9 col-md-8 col-12">
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
                      <div className="p-6 p-lg-10">
                        {/* heading */}
                        <h2 className="mb-6">Your Orders</h2>
                        <div className="table-responsive border-0">
                          {/* Table */}
                          <table className="table mb-0 text-nowrap">
                            {/* Table Head */}
                            <thead className="table-light">
                              <tr>
                                <th className="border-0">&nbsp;</th>
                                <th className="border-0">Product</th>
                                <th className="border-0">Order</th>
                                <th className="border-0">Date</th>
                                <th className="border-0">Items</th>
                                <th className="border-0">Status</th>
                                <th className="border-0">Amount</th>
                                <th className="border-0" />
                              </tr>
                            </thead>
                            <tbody>
                              {/* Table body */}
                              {orders && orders.length > 0 ? (
                                <>
                                  {orders.map((order) => (
                                    <>
                                      {order.userId === userData.uid ? (
                                        <>
                                          <tr key={order.id}>
                                            <td className="align-middle border-top-0 w-0">
                                              <Link to="#">
                                                <img
                                                  src={order.image || koaSoap}
                                                  alt="Ecommerce"
                                                  className="icon-shape icon-xl"
                                                />
                                              </Link>
                                            </td>
                                            <td className="align-middle border-top-0">
                                              <Link
                                                to="#"
                                                className="fw-semi-bold text-inherit"
                                              >
                                                <h6 className="mb-0">
                                                  {order.name}
                                                </h6>
                                              </Link>
                                              <span>
                                                <small className="text-muted">
                                                  {order.weight || "N/A"}
                                                </small>
                                              </span>
                                            </td>
                                            <td className="align-middle border-top-0">
                                              <Link
                                                to="#"
                                                className="text-inherit"
                                              >
                                                {order.orderId || "#N/A"}
                                              </Link>
                                            </td>
                                            <td className="align-middle border-top-0">
                                              {order.date || "N/A"}
                                            </td>
                                            <td className="align-middle border-top-0">
                                              {order.quantity || 1}
                                            </td>
                                            <td className="align-middle border-top-0">
                                              <span
                                                className={`badge bg-${
                                                  order.statusColor || "warning"
                                                }`}
                                              >
                                                {order.status || "Processing"}
                                              </span>
                                            </td>
                                            <td className="align-middle border-top-0">
                                              ${order.price || "0.00"}
                                            </td>
                                            <td className="text-muted align-middle border-top-0">
                                              <Link
                                                to="#"
                                                className="text-inherit"
                                              >
                                                <i className="feather-icon icon-eye" />
                                              </Link>
                                            </td>
                                          </tr>
                                        </>
                                      ) : (
                                        <> </>
                                      )}
                                    </>
                                  ))}
                                </>
                              ) : (
                                <tr>
                                  <td colSpan="8" className="text-center">
                                    No orders to display!
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        {/* modal */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasAccount"
          aria-labelledby="offcanvasAccountLabel"
        >
          {/* offcanvas header */}
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasAccountLabel">
              My Account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          {/* offcanvas body */}
          <div className="offcanvas-body">
            <ul className="nav flex-column nav-pills nav-pills-dark">
              {/* nav item */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/MyAccountOrder"
                >
                  <i className="fas fa-shopping-bag me-2" />
                  Your Orders
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link " href="/MyAccountSetting">
                  <i className="fas fa-cog me-2" />
                  Settings
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link" href="/MyAccountAddress">
                  <i className="fas fa-map-marker-alt me-2" />
                  Address
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link" href="/MyAcconutPaymentMethod">
                  <i className="fas fa-credit-card me-2" />
                  Payment Method
                </a>
              </li>
              {/* nav item */}
              <li className="nav-item">
                <a className="nav-link" href="/MyAcconutNotification">
                  <i className="fas fa-bell me-2" />
                  Notification
                </a>
              </li>
            </ul>
            <hr className="my-6" />
            <div>
              {/* nav  */}
              <ul className="nav flex-column nav-pills nav-pills-dark">
                {/* nav item */}
                <li className="nav-item">
                  <Link className="nav-link " to="/" onClick={onClickSignOut}>
                    <i className="fas fa-sign-out-alt me-2" />
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyAccountOrder;
