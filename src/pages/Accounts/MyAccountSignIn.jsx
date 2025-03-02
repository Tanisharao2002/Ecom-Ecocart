import React, { useState } from "react";
import signinimage from '../../images/signin-g.svg';
import { Link, Navigate, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { firebaseAuth } from "../../context/Firebase";
import { useFirebase } from "../../context/Firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const MyAccountSignIn = () => {
  const user = firebaseAuth.currentUser;
  const navigate = useNavigate()
  if (user) {
    navigate("/MyAccountSetting")
  }

  const [redirect, setRedirect] = useState(false);
  const { signInWithEmailAndPasswordUser } = useFirebase()


  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);

      setRedirect(true);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")

  const handleSignIn = async (e, email, passw) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPasswordUser(email, passw);
      window.location.reload();
      setRedirect(true)
    } catch (err) {
      alert(err);
      setRedirect(false)
    }
  };

  // Redirect after successful sign-in
  if (redirect) {
    navigate("/MyAccountSetting")
  }

  return (
    <div>
      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img src={signinimage} alt="freshcart" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">Sign in to EcoCart</h1>
                <p>Welcome back to EcoCart! Enter your email to get started.</p>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                      required
                      value={passw}
                      onChange={(e) => { setPassw(e.target.value) }}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                    <div>
                      Forgot password? <Link to="/MyAccountForgetPassword">Reset it</Link>
                    </div>
                  </div>
                  <div className="col-12 d-grid">

                    <button onClick={(e) => { handleSignIn(e, email, passw) }} type="submit" className="btn btn-primary">
                      Sign In
                    </button>

                  </div>
                  <button onClick={handleGoogleSignIn} type="button" className="btn btn-danger">
                    <i className="fab fa-google"></i> Sign in with Google
                  </button>
                  <div>
                    Don’t have an account? <Link to="/MyAccountSignUp">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccountSignIn;
