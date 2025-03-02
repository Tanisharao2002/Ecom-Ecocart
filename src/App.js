import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/About/AboutUs";
import AboutArt from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import Contact from "./pages/About/Contact";
import Shop from "./pages/Shop/Shop";
import ShopGridCol3 from "./pages/Shop/ShopGridCol3";
import ShopListCol from "./pages/Shop/ShopListCol";
import ShopCart from "./pages/Shop/ShopCart";
import ShopCheckOut from "./pages/Shop/ShopCheckOut";
import ShopWishList from "./pages/Shop/ShopWishList";
import StoreList from "./pages/store/StoreList";
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSupplier from "./pages/Accounts/MyAccountSupplier";
import MyAccountAddProducts from "./pages/Accounts/MyAccountAddProducts";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
import MyAcconutNotification from "./pages/Accounts/MyAcconutNotification";
import MyAcconutPaymentMethod from "./pages/Accounts/MyAcconutPaymentMethod";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
import MyAccountForgetPassword from "./pages/Accounts/MyAccountForgetPassword";
import MyAccountSignIn from "./pages/Accounts/MyAccountSignIn";
import MyAccountSignUp from "./pages/Accounts/MyAccountSignUp";
import { FirebaseProvider } from "./context/Firebase";
import { useState } from "react";

const App = () => {
  

  return (
    <div>
      <FirebaseProvider>
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/" element={<Home />} />

            {/* Shop pages */}
            <Route
              path="/Shop"
              element={<Shop  />}
            />
            <Route
              path="/Shop/:shopCat"
              element={<Shop  />}
            />
            <Route path="/ShopGridCol3" element={<ShopGridCol3 />} />
            <Route path="/ShopListCol" element={<ShopListCol />} />
            <Route path="/ShopWishList" element={<ShopWishList />} />
            <Route path="/ShopCheckOut" element={<ShopCheckOut />} />
            <Route path="/ShopCart" element={<ShopCart />} />
            {/* Store pages */}
            <Route path="/StoreList" element={<StoreList />} />
            {/* Accounts pages */}
            <Route path="/MyAccountSupplier" element={<MyAccountSupplier />} />
            <Route
              path="/MyAccountAddProducts"
              element={<MyAccountAddProducts />}
            />
            <Route path="/MyAccountOrder" element={<MyAccountOrder />} />
            <Route path="/MyAccountSetting" element={<MyAccountSetting />} />
            <Route
              path="/MyAcconutNotification"
              element={<MyAcconutNotification />}
            />
            <Route
              path="/MyAcconutPaymentMethod"
              element={<MyAcconutPaymentMethod />}
            />
            <Route path="/MyAccountAddress" element={<MyAccountAddress />} />
            <Route
              path="/MyAccountForgetPassword"
              element={<MyAccountForgetPassword />}
            />
            <Route path="/MyAccountSignIn" element={<MyAccountSignIn />} />
            <Route path="/MyAccountSignUp" element={<MyAccountSignUp />} />
            {/* About pages */}
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/AboutArt" element={<AboutArt />} />
          </Routes>
          <Footer />
        </Router>
      </FirebaseProvider>
    </div>
  );
};

export default App;
