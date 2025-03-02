import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { firebaseAuth } from "../../context/Firebase";
import { firestore } from "../../context/Firebase";
import { updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { FirebaseContext } from "../../context/Firebase";

const MyAccountSetting = () => {
  const { createProduct } = useContext(FirebaseContext);
  const { userData, setUserData, loaderStatus } = useFirebase();
  const [pname, setPName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [suppId, setSuppId] = useState("");

  // console.log(firebaseAuth.currentUser.uid);

  function onClickSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully!");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }
  const user = firebaseAuth.currentUser;

  const handleCreateProduct = async (
    e,
    pname,
    category,
    suppId,
    desc,
    price,
    stock,
    image,
    tags
  ) => {
    e.preventDefault();
    try {
      setSuppId(firebaseAuth.currentUser.uid);
      await createProduct(
        pname,
        category,
        suppId,
        desc,
        price,
        stock,
        image,
        tags
      );
      console.log("Create Product Called Successfully");
    } catch (err) {
      alert(err);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

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
      <ScrollToTop />
      <div>
        <section>
          <div className="container">
            <div className="row">
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
                          <Link className="nav-link" to="/MyAccountOrder">
                            <i className="fas fa-shopping-bag me-2" />
                            Your Orders
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="/MyAccountAddProducts"
                          >
                            <i className="fas fa-shopping-bag me-2" />
                            Add Products
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/MyAccountSupplier">
                            <i className="fas fa-shopping-bag me-2" />
                            Received Orders
                          </Link>
                        </li>
                      </>
                    )}

                    {/* nav item */}
                    <li className="nav-item active">
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
              <div className="col-lg-9 col-md-8 col-12">
                {loaderStatus ? (
                  <div className="loader-container">
                    <MagnifyingGlass
                      visible={true}
                      height="100"
                      width="100"
                      ariaLabel="magnifying-glass-loading"
                      glassColor="#c0efff"
                      color="#0aad0a"
                    />
                  </div>
                ) : (
                  <div className="p-6 p-lg-10">
                    <h2 className="mb-0">Add Product</h2>
                    {/* <h5 className="mb-4">Update Profile</h5> */}
                    <form
                      onSubmit={(e) =>
                        handleCreateProduct(
                          e,
                          pname,
                          category,
                          suppId,
                          desc,
                          price,
                          stock,
                          image,
                          tags
                        )
                      }
                    >
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                          type="text"
                          value={pname}
                          onChange={(e) => setPName(e.target.value)}
                          className="form-control"
                          placeholder="Product Name"
                          required
                        />
                        <br />
                        <label className="form-label">
                          Product Description
                        </label>
                        <input
                          type="text"
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                          className="form-control"
                          placeholder="Product Description"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                          className="form-control"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Select a Category
                          </option>
                          {cats.map((c) => (
                            <option value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Product Price</label>
                        <input
                          type="text"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-control"
                          placeholder="Product Price"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Stock</label>
                        <input
                          type="text"
                          value={stock}
                          onChange={(e) => setStock(e.target.value)}
                          className="form-control"
                          placeholder="Product Stock"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tags</label>
                        <br />
                        <div>
                          <input
                            type="text"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            className="form-control"
                            style={{ width: 250 }}
                            placeholder="Enter a tag"
                          />

                          <button
                            onClick={handleAddTag}
                            title="Click to add tag"
                            className="btn btn-danger"
                          >
                            Add Tag
                          </button>
                        </div>
                        {tags.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Product Image (Link Only!)
                        </label>
                        <input
                          type="text"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          className="form-control"
                          placeholder="Image Link"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                          Create Product
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
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
      </div>
    </div>
  );
};

export default MyAccountSetting;
