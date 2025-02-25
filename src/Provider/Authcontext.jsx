import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";
// import useAxiosOpen from "../Hooks/useAxiosOpen";

export const MainContext = createContext();
const Authcontext = ({ children }) => {
  const [themeColor, setThemeColor] = useState("");
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  // console.log(user);
  //   sing Up func
  const handelSingUp = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   log in func
  const handelLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google log in
  const provider = new GoogleAuthProvider();
  const handelGoogleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };
  // Log out func
  const handelLogOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  // wach user activitis
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (courenUser) => {
      if (courenUser) {
        // console.log(courenUser);
        setUser(courenUser);
      }
      setLoding(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const data = {
    themeColor,
    setThemeColor,
    user,
    setUser,
    loding,
    setLoding,
    handelSingUp,
    handelLogin,
    handelGoogleLogin,
    handelLogOut,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default Authcontext;
