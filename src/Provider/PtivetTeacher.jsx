import { useContext } from "react";
import { MainContext } from "./Authcontext";
import Loding from "../Components/Shared/Loding";
import { Navigate } from "react-router-dom";
import useTeacher from "../Hooks/useTeacher";

const PrivetTeacher = ({ children }) => {
  const [data, isAdminLoading] = useTeacher();
  const { user, loding, handelLogOut } = useContext(MainContext);

  if (loding || isAdminLoading) {
    return <Loding></Loding>;
  }
  if (user && data === "teacher") {
    return children;
  }
  handelLogOut();
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetTeacher;
