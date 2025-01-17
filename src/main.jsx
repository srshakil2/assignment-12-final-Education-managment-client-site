import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Forms/Login";
import Singup from "./Components/Forms/Singup";
import Authcontext from "./Provider/Authcontext";
import HomeLayOut from "./Components/Home/HomeLayOut";
import Dashboard from "./Components/Pages/Dashboard";
import DashDefualt from "./Components/Home/DashDefualt";
import AddClass from "./Components/Pages/AddClass";
import MyClass from "./Components/Pages/MyClass";
import Profile from "./Components/Pages/Profile";
// tan stack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  // main Home
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
  //Dashbord
  {
    path: "/dashboard",
    // privet
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        // privet
        element: <DashDefualt></DashDefualt>,
      },
      {
        path: "/dashboard/addClass",
        // privet
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/myClass",
        // privet
        element: <MyClass></MyClass>,
      },
      {
        path: "/dashboard/profile",
        // privet
        element: <Profile></Profile>,
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authcontext>
  </StrictMode>
);
