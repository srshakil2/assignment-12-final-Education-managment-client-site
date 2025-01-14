import React, { useContext } from "react";
import { MainContext } from "./Authcontext";
import Loding from "../Components/Shared/Loding";
import { Navigate } from "react-router-dom";

const Privet = ({ children }) => {
  const { user, loding } = useContext(MainContext);
  if (loding) {
    return <Loding></Loding>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default Privet;
