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
import SeeDetails from "./Components/Pages/SeeDetails";
import TeachOn from "./Components/TeachOn/TeachOn";
import TeacherReq from "./Components/Pages/Addmin/TeacherReq";
import Users from "./Components/Pages/Addmin/Users";
import AllClasses from "./Components/Pages/Addmin/AllClasses";
import Error from "./Components/Error";
import AllClass from "./Components/AllClass/AllClass";
import ClassDetailsPage from "./Components/AllClass/ClassDetails/ClassDetailsPage";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  // main Home
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
      },
      {
        path: "/allClass",
        element: <AllClass></AllClass>,
      },
      {
        path: "/allclass/classdetails/:id",
        // privet
        element: <ClassDetailsPage></ClassDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allclass/iddataloard/${params.id}`),
      },
      {
        path: "/teachon",
        // privet
        element: <TeachOn></TeachOn>,
      },
    ],
  },
  //Dashbord
  {
    path: "/dashboard",
    // privet
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        // privet
        element: <DashDefualt></DashDefualt>,
      },
      {
        path: "/dashboard/addClass",
        // privet teacher
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/myClass",
        // privet teacher
        element: <MyClass></MyClass>,
      },
      {
        path: "/dashboard/myClass/:id",
        // privet teacher
        element: <SeeDetails></SeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allclass/iddataloard/${params.id}`),
      },
      {
        path: "/dashboard/teacherreq",
        // privet Addmin
        element: <TeacherReq></TeacherReq>,
      },
      {
        path: "/dashboard/users",
        // privet Addmin
        element: <Users></Users>,
      },
      {
        path: "/dashboard/allclasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/dashboard/profile",
        // privet sobar jonno
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
