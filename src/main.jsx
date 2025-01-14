import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Forms/Login";
import Singup from "./Components/Forms/Singup";
import Authcontext from "./Provider/Authcontext";
import HomeLayOut from "./Components/Home/HomeLayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/singup",
    element: <Singup></Singup>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authcontext>
      <RouterProvider router={router} />
    </Authcontext>
  </StrictMode>
);
