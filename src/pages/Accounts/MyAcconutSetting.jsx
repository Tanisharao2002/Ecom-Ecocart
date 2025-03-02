import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { firebaseAuth } from "../../context/Firebase";
import { firestore } from "../../context/Firebase";
import { updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { setDoc} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
const MyAccountSetting = () => {
  const { userData, setUserData,loaderStatus} = useFirebase();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  function onClickSignOut(){
    const auth = getAuth(); // Get the Firebase Auth instance
    signOut(auth)
        .then(() => {
            console.log("User signed out successfully!");
        })
        .catch((error) => {
            console.error("Error signing out: ", error);
        });
  }
  const user = firebaseAuth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userRef = doc(firestore, "all_users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setFName(data.fname || "");
            setLName(data.lname || "");
            setPhone(data.phone || "");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [user]);

  if (!user) {
    return <Navigate to="/MyAccountSignIn" />;
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
  
    if (!fname || !phone || !lname) {
      alert("Name and Phone number cannot be empty.");
      return;
    }
  
    const userRef = doc(firestore, "all_users", user.uid);
    const roleCollectionRef = doc(
      firestore,
      userData.role === "buyer" ? "buyers" : "suppliers",
      user.uid
    );
  
    try {
      // Update in `all_users`
      await setDoc(userRef, { fname, lname, phone }, { merge: true });
  
      // Update in role-specific collection
      await setDoc(roleCollectionRef, { fname, lname, phone }, { merge: true });
  
      // Update local state
      setUserData({
        ...userData,
        fname,
        lname,
        phone,
      });
  
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("An error occurred while updating your profile.");
    }
  };
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
                    {
                      userData.role === "buyer" ?<>
                      <li className="nav-item">
                      <Link
                        className="nav-link"
                        
                        to="/MyAccountOrder"
                      >
                        <i className="fas fa-shopping-bag me-2" />
                        Your Orders
                      </Link>
                    </li>
                      </>
                      :<>
                      <li className="nav-item">
                      <Link
                        className="nav-link"
                        
                        to="/MyAccountAddProducts"
                      >
                        <i className="fas fa-shopping-bag me-2" />
                        Add Products
                      </Link>
                    </li>
                      <li className="nav-item">
                      <Link
                        className="nav-link"
                        
                        to="/MyAccountSupplier"
                      >
                        <i className="fas fa-shopping-bag me-2" />
                        Received Orders
                      </Link>
                    </li>
                      </>
                    }
                    
                    {/* nav item */}
                    <li className="nav-item active">
                      <Link className="nav-link active" to="/MyAccountSetting">
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
                      <Link className="nav-link " to="/" onClick={onClickSignOut}>
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
                    <h2 className="mb-0">Account Setting</h2>
                    {/* <p>User Logged in as: {userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}</p> */}
                    <p>User Logged in as: {userData.role}</p>
                    <h5 className="mb-4">Update Profile</h5>
                    <form onSubmit={handleUpdateProfile}>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          value={fname}
                          onChange={(e) => setFName(e.target.value)}
                          className="form-control"
                          placeholder="Your Name"
                        />
                        <br></br>
                        <label className="form-label">Last Name</label>
                         <input
                          type="text"
                          value={lname}
                          onChange={(e) => setLName(e.target.value)}
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                          Save Details
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
