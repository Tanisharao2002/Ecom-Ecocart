import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Added updateProfile import
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYLx-G-mCu8K2oHUJR_27qYwPDDS75a5E",
  authDomain: "ecocart-91438.firebaseapp.com",
  projectId: "ecocart-91438",
  storageBucket: "ecocart-91438.firebasestorage.app",
  messagingSenderId: "46815022789",
  appId: "1:46815022789:web:fc74d56493d2a3512ceaac",
  measurementId: "G-MRYJQX7TMK",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [productData, setProductData] = useState({
    pname: "",
    desc: "",
    price: "",
    stock: "",
    image: "",
    tags: [],
  });

  const [loaderStatus, setLoaderStatus] = useState(true);

  const createUser = async (email, password, fname, lname, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;

      console.log(role);

      const userRef = collection(
        firestore,
        role === "buyer" ? "buyers" : "suppliers"
      );
      const allUsersRef = doc(collection(firestore, "all_users"), user.uid);
      const userDocRef = doc(userRef, user.uid);

      await setDoc(userDocRef, {
        uid: user.uid,
        email: email,
        fname: fname,
        lname: lname,
        role: role,
      });

      await setDoc(allUsersRef, {
        uid: user.uid,
        email: email,
        fname: fname,
        lname: lname,
        role: role,
      });

      alert("User created and stored successfully.");
    } catch (error) {
      console.error("Error creating user:", error);
      alert(error.message);
    }
  };

  const createProduct = async (
    pname,
    category,
    suppId,
    desc,
    price,
    stock,
    image,
    tags
  ) => {
    try {
      // Create document references
      console.log(pname, category, suppId, desc, price, stock, image, tags);

      const productRef = doc(collection(firestore, "products")); // Generates a new ID
      const suppProdRef = doc(
        collection(firestore, "suppliers", suppId, "my_products"),
        productRef.id // Use the same ID for supplier's subcollection
      );
      console.log(productRef.id);

      const productData = {
        productId: productRef.id,
        name: pname,
        desc: desc,
        category: category,
        price: price,
        stock: stock,
        suppId: suppId,
        image: image,
        tags: tags,
      };

      // Write to the products collection
      await setDoc(productRef, productData, { merge: true });
      console.log(
        "Product created in 'products' collection with ID:",
        productRef.id
      );

      // Write to the supplier's subcollection
      await setDoc(suppProdRef, productData, { merge: true });
      console.log(
        `Product added to supplier's collection (suppliers/${suppId}/my_products) with ID:`,
        productRef.id
      );

      alert("Product added Successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error: " + error.message);
    }
  };

  const signInWithEmailAndPasswordUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
    }
  };

  const updateUserProfile = async (userData) => {
    const user = firebaseAuth.currentUser;
    if (!user) {
      alert("No user is logged in.");
      return;
    }

    const userRef = doc(
      firestore,
      userData.role === "buyer" ? "buyers" : "suppliers",
      user.uid
    );
    const allUsersRef = doc(firestore, "all_users", user.uid);

    try {
      const updatedData = {
        fname: userData.fname,
        lname: userData.lname,
        phone: userData.phone,
      };
      console.log("1", updatedData);

      await setDoc(userRef, updatedData, { merge: true });
      await setDoc(allUsersRef, updatedData, { merge: true });

      await updateProfile(user, {
        displayName: userData.name,
      });

      alert("Profile updated successfully in all collections.");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile, please try again later.");
    }
  };

  const fetchUserData = async () => {
    const user = firebaseAuth.currentUser;
    if (user) {
      const userRef = doc(firestore, "all_users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserData({
          fname: userData.fname ?? "",
          lname: userData.lname ?? "",
          email: userData.email ?? "",
          phone: userData.phone ?? "",
          role: userData.role ?? "",
          uid: user.uid ?? "",
        });
      } else {
        console.warn("No user data found in Firestore.");
        setUserData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          uid: "",
        });
      }
    }
  };

  useEffect(() => {
    fetchUserData();
    const timer = setTimeout(() => setLoaderStatus(false), 1500);
    return () => clearTimeout(timer);
  }, [firebaseAuth.currentUser]);

  return (
    <FirebaseContext.Provider
      value={{
        createUser,
        updateUserProfile,
        userData,
        setUserData,
        loaderStatus,
        createProduct,
        signInWithEmailAndPasswordUser,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
