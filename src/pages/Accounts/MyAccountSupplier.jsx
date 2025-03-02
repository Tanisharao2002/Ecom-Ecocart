import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { getAuth, signOut } from "firebase/auth";
import "./OrdersReceived.css";
import { useFirebase } from "../../context/Firebase";

const OrdersReceived = () => {
  const { userData, setUserData, loaderStatus } = useFirebase();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  function onClickSignOut() {
    const auth = getAuth(); // Get the Firebase Auth instance
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully!");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }
  useEffect(() => {
    // Simulate a fetch call - Replace with Firebase or API logic
    const fetchOrders = async () => {
      try {
        const mockOrders = [
          {
            id: 1,
            product: "Plantable Pencil",
            quantity: 10,
            buyer: "John Doe",
          },
          {
            id: 2,
            product: "Edible Cutlery",
            quantity: 20,
            buyer: "Jane Smith",
          },
        ];
        setOrders(mockOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loader">Loading orders...</div>;
  }

  return (
    <div className="orders-received-container">
      <>
        <ScrollToTop />
      </>

      <section>
        <div className="container">
          {/* Row */}
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
              <div className="pt-10 pe-lg-10">
                <ul className="nav flex-column nav-pills nav-pills-dark">
                  {userData.role === "buyer" ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link active" to="/MyAccountOrder">
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
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAccountSetting">
                      <i className="fas fa-cog me-2" />
                      Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAccountAddress">
                      <i className="fas fa-map-marker-alt me-2" />
                      Address
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAcconutPaymentMethod">
                      <i className="fas fa-credit-card me-2" />
                      Payment Method
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/MyAcconutNotification">
                      <i className="fas fa-bell me-2" />
                      Notification
                    </Link>
                  </li>
                  <li className="nav-item">
                    <hr />
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={onClickSignOut}>
                      <i className="fas fa-sign-out-alt me-2" />
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Orders Received */}
            <div className="col-lg-9 col-md-8 col-12">
              <div className="orders-received">
                <h2 className="md-6">📦 Orders Received</h2>
                {orders && orders.length > 0 ? (
                  // Filter orders to check if there are any matching entries
                  orders.some((order) => order.sid === userData.uid) ? (
                    orders.map(
                      (order) =>
                        order.sid === userData.uid && (
                          <div key={order.id} className="order-card">
                            <h3>Order #{order.id}</h3>
                            <p>
                              <strong>Product:</strong> {order.product}
                            </p>
                            <p>
                              <strong>Quantity:</strong> {order.quantity}
                            </p>
                            <p>
                              <strong>Buyer:</strong> {order.buyer}
                            </p>
                          </div>
                        )
                    )
                  ) : (
                    <p>No orders received yet.</p> // Display when no matching orders are found
                  )
                ) : (
                  <p>No orders received yet.</p> // Display when `orders` array is empty or undefined
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offcanvas for mobile */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasAccount"
        aria-labelledby="offcanvasAccountLabel"
      >
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
        <div className="offcanvas-body">
          <ul className="nav flex-column nav-pills nav-pills-dark">
            <li className="nav-item">
              <a className="nav-link active" href="/MyAccountOrder">
                <i className="fas fa-shopping-bag me-2" />
                Your Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAccountSetting">
                <i className="fas fa-cog me-2" />
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAccountAddress">
                <i className="fas fa-map-marker-alt me-2" />
                Address
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAcconutPaymentMethod">
                <i className="fas fa-credit-card me-2" />
                Payment Method
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAcconutNotification">
                <i className="fas fa-bell me-2" />
                Notification
              </a>
            </li>
            <hr />
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
  );
};

export default OrdersReceived;
