import React, { useContext } from "react";
import useAddmin from "../Hooks/useAddmin";
import { MainContext } from "./Authcontext";
import Loding from "../Components/Shared/Loding";
import { Navigate } from "react-router-dom";

const PrivetAddmin = ({ children }) => {
  const [data, isAdminLoading] = useAddmin();
  const { user, loding, handelLogOut } = useContext(MainContext);

  if (loding || isAdminLoading) {
    return <Loding></Loding>;
  }
  if (user && data === "addmin") {
    return children;
  }
  handelLogOut();
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetAddmin;
