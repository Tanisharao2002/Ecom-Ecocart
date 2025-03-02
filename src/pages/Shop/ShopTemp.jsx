import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "../ScrollToTop";
import koaSoap from "../../images/koa soap.jpg";
import { useParams } from "react-router-dom";
import products from "../../ProductList/sampleProducts.json";
import { firebaseAuth } from "../../context/Firebase";
import { firestore } from "../../context/Firebase";
import { doc, setDoc, arrayUnion, arrayRemove,collection } from "firebase/firestore";
function Dropdown() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user = firebaseAuth.user;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { shopCat } = useParams();
  const [openDropdowns, setOpenDropdowns] = useState([]);
  console.log(shopCat, products);
  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 100);
  }, []);
  const [loading, setLoading] = useState(false);

  const AddToWishlistButton = async (e, product, userId) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Reference to the user's wishlist in Firestore
      const userWishlistRef = doc(collection(firestore, "buyers"), userId);
  
      // Add or remove the product from the wishlist
      await setDoc(
        userWishlistRef,
        {
          wishlist: isInWishlist
            ? arrayRemove(product) // Remove product from wishlist
            : arrayUnion(product), // Add product to wishlist
        },
        { merge: true } // Merge to update only the wishlist field
      );
  
      // Toggle the state for the wishlist
      setIsInWishlist(!isInWishlist);
  
      // Display feedback to the user
      alert(
        isInWishlist
          ? "Product removed from wishlist."
          : "Product added to wishlist!"
      );
    } catch (error) {
      console.error("Error updating wishlist:", error);
      alert("Failed to update wishlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
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
            <ScrollToTop />
          </>
          <div className="container ">
            <div className="row">
              {/* Vertical Dropdowns Column */}
              <h5 className="mb-3 mt-8">Categories</h5>
              <div className="col-md-3">
                {dropdownData.map((dropdown, index) => (
                  <ul className="nav flex-column" key={index}>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={
                          openDropdowns.includes(index) ? "true" : "false"
                        }
                        aria-controls={`categoryFlush${index + 1}`}
                      >
                        {dropdown.title} <i className="fa fa-chevron-down" />
                      </Link>
                      <div
                        className={`collapse ${
                          openDropdowns.includes(index) ? "show" : ""
                        }`}
                        id={`categoryFlush${index + 1}`}
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {dropdown.items.map((item, itemIndex) => (
                              <li className="nav-item" key={itemIndex}>
                                <Link className="nav-link" to="#">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
                <div>
                  <div className="py-4">
                    {/* price */}
                    <h5 className="mb-3">Price</h5>
                    <div>
                      {/* range */}
                      <div id="priceRange" className="mb-3" />
                      <small className="text-muted">Price:</small>{" "}
                      <span id="priceRange-value" className="small" />
                    </div>
                  </div>
                  {/* rating */}
                  <div className="py-4">
                    <h5 className="mb-3">Rating</h5>
                    <div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingFive"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ratingFive"
                        >
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star-fill text-warning " />
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingFour"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ratingFour"
                        >
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star text-warning" />
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingThree"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ratingThree"
                        >
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star-fill text-warning " />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingTwo"
                        />
                        <label className="form-check-label" htmlFor="ratingTwo">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                        </label>
                      </div>
                      {/* form check */}
                      <div className="form-check mb-2">
                        {/* input */}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingOne"
                        />
                        <label className="form-check-label" htmlFor="ratingOne">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cards Column */}
              <div className="col-lg-9 col-md-8">
                {/* card */}
                <div className="card mb-4 bg-light border-0">
                  {/* card body */}
                  <div className=" card-body p-9">
                    {shopCat === "" || shopCat == null ? (
                      <h1 className="mb-0">Shop </h1>
                    ) : (
                      <h1 className="mb-0">{shopCat} </h1>
                    )}
                  </div>
                </div>
                {/* list icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                  <div></div>
                  {/* icon */}
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/ShopListCol" className="text-muted me-3">
                      <i className="bi bi-list-ul" />
                    </Link>
                    <Link to="/ShopGridCol3" className=" me-3 active">
                      <i className="bi bi-grid" />
                    </Link>
                    <Link to="/Shop" className="me-3 text-muted">
                      <i className="bi bi-grid-3x3-gap" />
                    </Link>
                    <div className="me-2">
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Show: 50</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                      </select>
                    </div>
                    <div>
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Sort by: Featured</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low"> Price: High to Low</option>
                        <option value="Release Date"> Release Date</option>
                        <option value="Avg. Rating"> Avg. Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* row */}

                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
     
                  {products && products.length > 0 ? (
               
                    products
                      .filter((product) =>
                        shopCat ? product.category === shopCat : true
                      ) 
                      .map((product) => (
                        <div key={product.id} className="card card-product">
                          <div className="card-body">
                      
                            <div className="text-center position-relative">
                              <div className="position-absolute top-0 start-0">
                                <span className="badge bg-danger">Sale</span>
                              </div>
                              <Link to="#!">
                       
                                <img
                                  src={product.image || koaSoap} 
                                  alt="Product"
                                  className="mb-3 img-fluid"
                                />
                              </Link>
                          
                              <div className="card-product-action">
                                <Link
                                  to="/ShopWishList"
                                  className="btn-action"
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Wishlist"
                                  onClick={(e) => {
                                    AddToWishlistButton(product.id, product.image, product.name, product.price, user.uid);
                                  }}
                                >
                                  <i
                                    className={`bi bi-heart-fill ${
                                      isInWishlist ? "text-danger" : ""
                                    }`}
                                  />
                                </Link>
                              </div>
                            </div>
                            {/* heading */}
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
                            <div>
                              {/* rating */}
                              <small className="text-warning">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-half" />
                              </small>{" "}
                              <span className="text-muted small">
                                {product.stock}
                              </span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <span className="text-dark">
                                  ₹{product.price}
                                </span>{" "}
                                <span className="text-decoration-line-through text-muted">
                                  {/* Old Price (Optional) */}
                                </span>
                              </div>
                              {/* Add to cart button */}
                              <div>
                                <Link
                                  to="#!"
                                  className="btn btn-primary btn-sm"
                                >
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
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                  </svg>{" "}
                                  Add
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>No products to display!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const dropdownData = [
  {
    title: "Stationery",
    items: [
      "Recycled paper notebooks",
      // "Plantable notebooks and greeting cards",
      // "Bamboo pens",
      // "Sustainable pencil cases",
      // "Eco-friendly sticky notes",
      // "Plantable bookmarks",
      // "Recycled paper gift wrap",
    ],
  },
  {
    title: "Personal Care",
    items: [
      "Bamboo toothbrushes",
      // "Organic soaps",
      // "Biodegradable cotton swabs",
      // "Reusable makeup remover pads",
      // "Eco-friendly deodorants",
      // "Shampoo bars",
      // "Natural toothpaste",
      // "Biodegradable hairbrushes",
    ],
  },
  {
    title: "Home & Kitchen",
    items: [
      "Compostable trash bags",
      // "Bamboo kitchenware",
      // "Beeswax food wraps",
      // "Reusable food storage bags",
      // "Eco-friendly cleaning products",
      // "Eco-friendly dish soap",
      // "Reusable silicone food covers",
      // "Zero waste cleaning cloths",
      // "Solar-powered kitchen gadgets",
    ],
  },
  {
    title: "Apparel & Fashion",
    items: [
      "Organic cotton clothing",
      // "Recycled fabric bags and scarves",
      // "Sustainable footwear",
      // "Vegan leather accessories",
      // "Upcycled jewelry",
      // "Organic cotton socks",
    ],
  },
  {
    title: "Beverages & Utensils",
    items: [
      "Reusable water bottles",
      // "Stainless steel straws",
      // "Bamboo or stainless steel cutlery sets",
      // "Eco-friendly coffee cups and travel mugs",
      // "Eco-friendly ice packs",
      // "Bamboo toothbrush holders",
      // "Silicone food bags",
      // "Compostable coffee filters",
    ],
  },
  {
    title: "Gardening & Outdoor",
    items: [
      "Organic seeds and plants",
      // "Recycled planters",
      // "Compost bins",
      // "Solar-powered garden lights",
      // "Eco-friendly garden tools",
      // "Biodegradable plant pots",
      // "Organic mulch",
      // "Recycled material picnic blankets",
    ],
  },
  {
    title: "Health & Wellness",
    items: [
      "Natural organic teas and herbs",
      // "Reusable menstrual products",
      // "Eco-friendly yoga mats",
      // "Organic, reusable cotton pads",
      // "Natural sleep masks",
      // "Non-toxic essential oils",
      // "Eco-friendly first aid kits",
    ],
  },
];

export default Dropdown;
