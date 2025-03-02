import React, { useState, useContext } from "react";
import signupimage from "../../images/signup-g.svg";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { getAuth } from "firebase/auth";
import { setError } from "react";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { firestore } from "../../context/Firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseContext } from "../../context/Firebase";
import { useFirebase } from "../../context/Firebase";

const MyAccountSignUp = () => {
  const firebase = useFirebase();

  console.log(firebase);
  // const [roleG, setRoleG] = useState(false);
  const { signupUserWithEmailAndPassword } = useContext(FirebaseContext);
  const { createUser } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleSignup = async (e, email, password, fname, lname, role) => {
    e.preventDefault();

    if (role == "") {
      alert("Please select a role (Buyer or Supplier) before proceeding.");
      return;
    }
    try {
      await createUser(email, password, fname, lname, role);
      console.log("Sign-up successful and user stored!");
    } catch (err) {
      alert(err);
    }
  };

  const handleGoogleSignIn = async () => {
  
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
    
    
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { displayName, email, uid } = user;
      const [fname, lname] = displayName ? displayName.split(" ") : ["", ""];
      const userRole = role || "buyer";
      const userRef = collection(
        firestore,
        userRole === "buyer" ? "users" : "suppliers"
      );
      const userDocRef = doc(userRef, uid);

      await setDoc(
        userDocRef,
        {
          uid,
          email,
          fname,
          lname,
          userRole,
        },
        { merge: true }
      );

      console.log("Google sign-in successful, user stored in Firestore.");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      alert("Google sign-in failed: " + error.message);
    }
  };

  return (
    <div>
      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img src={signupimage} alt="freshcart" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">Get Started with EcoCart</h1>
                <p>Welcome! Enter your email or use Google to sign up.</p>
              </div>
              <form onSubmit={handleSignup}>
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="text"
                      value={fname}
                      onChange={(e) => setFName(e.target.value)}
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      value={lname}
                      onChange={(e) => setLName(e.target.value)}
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <p>Sign up as:</p>
                    <div>
                      <input
                        type="radio"
                        id="buyer"
                        name="role"
                        value="buyer"
                        checked={role === "buyer"}
                        onChange={(e) => setRole(e.target.value)}
                        required
                      />
                      <label htmlFor="buyer">Buyer</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="supplier"
                        name="role"
                        value="supplier"
                        checked={role === "supplier"}

                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label htmlFor="supplier">Supplier</label>
                    </div>
                  </div>
                  <div className="col-12 d-grid mb-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => {
                        handleSignup(e, email, password, fname, lname, role);
                      }}
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-12 d-grid mb-2">
                    <button
                      onClick={handleGoogleSignIn}
                      type="button"
                      className="btn btn-danger"
                    >
                      <i className="fab fa-google"></i> Sign in with Google
                    </button>
                    <div className="col-12">
                      <p>Sign up as:</p>
                      <div>
                        <input
                          type="radio"
                          id="buyer"
                          name="roleg"
                          value="buyer"
                          checked={role === "buyer"}
                          onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="buyer">Buyer</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="supplier"
                          name="roleg"
                          value="supplier"
                          checked={role === "supplier"}
                          onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="supplier">Supplier</label>
                      </div>
                    </div>
                  </div>
                  <span className="navbar-text">
                    Already have an account?{" "}
                    <Link to="/MyAccountSignIn">Sign in</Link>
                  </span>
                  <p>
                    <small>
                      By continuing, you agree to our{" "}
                      <Link to="#!">Terms of Service</Link> &amp;{" "}
                      <Link to="#!">Privacy Policy</Link>
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccountSignUp;
