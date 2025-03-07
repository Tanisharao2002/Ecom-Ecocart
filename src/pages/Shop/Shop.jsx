import React, { useEffect, useState } from "react";
import "./Shop.css";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from "../ScrollToTop";
import koaSoap from "../../images/koa soap.jpg";
import { useParams } from "react-router-dom";
import { firestore } from "../../context/Firebase";
import { collection } from "firebase/firestore";
import { doc, setDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Search from "../../Component/Search";
import { useFirebase } from "../../context/Firebase";
function Dropdown() {
  const { userData } = useFirebase();
  const { shopCat } = useParams();
  console.log(shopCat);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  console.log("shop" + shopCat);
  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };
  const [star, setStar] = useState(0);
  const [price, setPrice] = useState(1000);
  const productsRef = collection(firestore, "products");
  const [products] = useCollectionData(productsRef);
  const [disp, setDisp] = useState("False");
  const [productSearch, setProductSearch] = useState("");
  const [numberValue, setNumberValue] = useState(0);
  const [sortFeatured, setSortFeatured] = useState("");
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  const addToCart = async (e, sid, image, name, userId, amount) => {
    e.preventDefault();
    try {
      const cartRef = collection(firestore, "buyers", userId, "cart");
      const cartItemRef = doc(cartRef);
      await setDoc(
        cartItemRef,
        {
          suppId: sid,
          userId: userId,
          price: amount,
          image: image,
          name: name,
        },
        { merge: true }
      );
      console.log("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };

  const addToWishlist = async (e, sid, image, name, userId, amount) => {
    e.preventDefault();
    try {
      const cartRef = collection(firestore, "buyers", userId, "wishlist");
      const cartItemRef = doc(cartRef);
      await setDoc(
        cartItemRef,
        {
          suppId: sid,
          userId: userId,
          price: amount,
          image: image,
          name: name,
        },
        { merge: true }
      );
      console.log("Item added to wishlist successfully");
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };

  const handleChangeNumber = (value) => {
    setNumberValue(value);
    console.log(numberValue);
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
                        className={`${
                          shopCat === dropdown.title
                            ? "nav-link active-link"
                            : "nav-link"
                        }`}
                        to={`/Shop/${dropdown.title}`}
                      >
                        {dropdown.title}
                      </Link>
                    </li>
                  </ul>
                ))}
                <div>
                  <div className="py-4">
                    {/* price */}
                    <h5 className="mb-3">
                      Price {`<`} ₹ {price}
                    </h5>
                    <span id="priceRange-value" className="small">
                      {" "}
                    </span>
                    <div>
                      {/* range */}
                      <div id="priceRange" className="mb-3" />
                      <span>
                        {" "}
                        <small className="text-muted">Price:</small>
                        <span id="priceRange-value" className="small">
                          100
                        </span>
                      </span>

                      <input
                        type="range"
                        min="100"
                        max="1000"
                        className="rangeInput"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <span id="priceRange-value" className="small">
                        1000
                      </span>
                    </div>
                  </div>
                  {/* rating */}
                  <div className="py-4">
                    <h5 className="mb-3">
                      Rating : {star}{" "}
                      <i className="bi bi-star-fill text-warning" />
                    </h5>
                    {/* <div>
                  
                      <div className="form-check mb-2">
                       
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingFive"
                          value = "5"
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
                     
                      <div className="form-check mb-2">
                 
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingFour"
                          defaultChecked
                          value = "4"
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
                
                      <div className="form-check mb-2">
   
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingThree"
                          value = "3"
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
          
                      <div className="form-check mb-2">
          
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingTwo"
                          value = "2"
                        />
                        <label className="form-check-label" htmlFor="ratingTwo">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                        </label>
                      </div>
             
                      <div className="form-check mb-2">
        
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="ratingOne"
                          value = "1"
                        />
                        <label className="form-check-label" htmlFor="ratingOne">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                          <i className="bi bi-star text-warning" />
                        </label>
                      </div>
                    </div> */}
                    <span id="priceRange-value" className="">
                      0 <i className="bi bi-star-fill text-warning" />
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      steps="5"
                      className="rangeInput"
                      value={star}
                      onChange={(e) => setStar(e.target.value)}
                    />{" "}
                    <span id="priceRange-value" className="">
                      5 <i className="bi bi-star-fill text-warning" />
                    </span>
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
                      <>
                        <h1 className="mb-0">{shopCat} </h1>{" "}
                      </>
                    )}
                  </div>
                </div>
                {/* list icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                  <div></div>
                  {/* icon */}
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <Link to="/ShopListCol" className="text-muted me-3">
                      <i className="bi bi-list-ul" />
                    </Link> */}
                    {/* <Link to="/ShopGridCol3" className=" me-3 active">
                      <i className="bi bi-grid" />
                    </Link> */}
                    <Link to="/Shop" className="me-3 text-muted active">
                      <i className="bi bi-grid-3x3-gap" />
                    </Link>

                    <div>
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected value={sortFeatured} onChange={(e)=>setSortFeatured(e.target.value)}>Sort by: Featured</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low"> Price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Search by name, tags, or categories..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />

                {/* row */}
                <div className="d-flex flex-wrap justify-content-between mt-2">
                  {/* Products rendering */}
                  {products && products.length > 0 ? (
                    products
                      .filter(
                        (product) =>
                          (shopCat ? product.category === shopCat : true) &&
                          (productSearch === "" ||
                            product.name
                              .toLowerCase()
                              .includes(productSearch.toLowerCase()) ||
                            product.category
                              .toLowerCase()
                              .includes(productSearch.toLowerCase())) &&
                          (!price || product.price <= Number(price)) &&
                          (product.rating >= star) &&
                          ( sortFeatured == "")
                      )
                      .map((product) => (
                        <div
                          key={product.id}
                          className="card card-product mb-4"
                          style={{
                            flex: "1 1 calc(25% - 1rem)",
                            maxWidth: "calc(25% - 1rem)",
                            margin: "0.5rem",
                          }}
                        >
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
                                    addToWishlist(
                                      e,
                                      product.suppId,
                                      product.image,
                                      product.name,
                                      userData.uid,
                                      product.price
                                    );
                                  }}
                                >
                                  <i className="bi bi-heart-fill" />
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
                              </small>{" "}
                              <span className="text-muted small">
                                {product.rating}
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
                                  onClick={(e) => {
                                    addToCart(
                                      product.suppId,
                                      product.image,
                                      product.name,
                                      userData.uid,
                                      product.price
                                    );
                                  }}
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
      //   "Reusable menstrual products",
      //   "Eco-friendly yoga mats",
      //   "Organic, reusable cotton pads",
      //   "Natural sleep masks",
      //   "Non-toxic essential oils",
      //   "Eco-friendly first aid kits",
    ],
  },
];

export default Dropdown;
