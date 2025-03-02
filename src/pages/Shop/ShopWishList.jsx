import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import koaSoap from "../../images/koa soap.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection } from "firebase/firestore";
import { firestore } from "../../context/Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { setDoc, doc, deleteDoc} from "firebase/firestore";
import { useFirebase } from "../../context/Firebase";

const ShopWishList = () => {
  const auth = getAuth();
  const { userData } = useFirebase();
  const navigate = useNavigate();
  const user = auth.currentUser?.uid;
  console.log(user);

  const userRef = doc(firestore, "buyers", user); 
  const wishListRef = collection(firestore, "buyers", user, "wishlist");
  const [wishProd] = useCollectionData(wishListRef);
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);
  const handleRemove = async(productId) => {
    try{
      await deleteDoc(doc(firestore,"buyers",user.uid, "wishlist", productId));
      alert("Deletion Successful")
    } catch(error){
      alert(error.message)
    }

  };

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
          image:image,
          name:name,
        },
        { merge: true }
      );
      console.log("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };
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
              <ScrollToTop />
            </>
            <>
              {/* section */}
              <section className="my-14">
                <div className="container">
                  {/* row */}
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div className="mb-8">
                        {/* heading */}
                        <h1 className="mb-1">My Wishlist</h1>
                        <p>
                          There are {wishProd.length} product(s) in this
                          wishlist.
                        </p>
                      </div>
                      <div>
                        {/* table */}
                        {wishProd && wishProd.length > 0 ? (
                          <>
                            <div className="table-responsive">
                              <table className="table text-nowrap">
                                <thead className="table-light">
                                  <tr>
                                    <th>
                                      {/* form check */}
                                      <div className="form-check">
                                        {/* input */}
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="checkAll"
                                        />
                                        {/* label */}
                                        <label
                                          className="form-check-label"
                                          htmlFor="checkAll"
                                        ></label>
                                      </div>
                                    </th>
                                    <th />
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                    <th>Remove</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {wishProd.map((product, index) => (
                                    <tr key={index}>
                                      <td className="align-middle">
                                        {/* form check */}
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor={`checkbox-${index}`}
                                          ></label>
                                        </div>
                                      </td>
                                      <td className="align-middle">
                                        <Link to="#">
                                          <img
                                            src={product.image}
                                            className="img-fluid icon-shape icon-xxl"
                                            alt={product.name}
                                          />
                                        </Link>
                                      </td>
                                      <td className="align-middle">
                                        <div>
                                          <h5 className="fs-6 mb-0">
                                            <Link
                                              to="#"
                                              className="text-inherit"
                                            >
                                              {product.name}
                                            </Link>
                                          </h5>
                                          {/* <small>
                                            {product.price} / {product.unit}
                                          </small> */}
                                        </div>
                                      </td>
                                      <td className="align-middle">
                                        {product.price}
                                      </td>
                                      <td className="align-middle">
                                        <span
                                          className={`badge ${
                                            product.inStock
                                              ? "bg-success"
                                              : "bg-danger"
                                          }`}
                                        >
                                          {/* {product.inStock
                                            ? "In Stock" 
                                            {/* : "In Stock"} */}
                                            {"In Stock"}
                                        </span>
                                      </td>
                                      <td className="align-middle">
                                        <div className="btn btn-primary btn-sm" onClick={(e)=>{addToCart(e, product.suppId,product.image, product.name, userData.uid,product.price)}}>
                                          Add to Cart
                                        </div>
                                      </td>
                                      <td className="align-middle text-center">
                                        <Link
                                          to="#"
                                          className="text-muted"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title="Delete"
                                          onClick={() =>
                                            handleRemove(product.id)
                                          }
                                        >
                                          <i className="fas fa-trash-alt"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </>
                        ) : (
                          <p>No products to display!</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </>
        )}
      </div>
    </div>
  );
};
export default ShopWishList;
