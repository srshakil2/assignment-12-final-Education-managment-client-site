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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SeeDetails from "./Components/Pages/SeeDetails";
import TeachOn from "./Components/TeachOn/TeachOn";
import TeacherReq from "./Components/Pages/Addmin/TeacherReq";
import Users from "./Components/Pages/Addmin/Users";
import AllClasses from "./Components/Pages/Addmin/AllClasses";
import Error from "./Components/Error";
import AllClass from "./Components/AllClass/AllClass";
import ClassDetailsPage from "./Components/AllClass/ClassDetails/ClassDetailsPage";
import Prement from "./Components/AllClass/Prement/Prement";
import MyEnrolls from "./Components/Pages/Student/MyEnrolls";
import EnrollClassDetails from "./Components/Pages/Student/EnrollClassDetails";
import Privet from "./Provider/Privet";
import PrivetTeacher from "./Provider/PtivetTeacher";
import PrivetAddmin from "./Provider/PrivetAddmin";

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
        element: (
          <Privet>
            <ClassDetailsPage></ClassDetailsPage>
          </Privet>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allclass/iddataloard/${params.id}`),
      },
      {
        path: "/payment/:id",
        // privet
        element: (
          <Privet>
            <Prement></Prement>
          </Privet>
        ),
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
    element: (
      <Privet>
        <Dashboard></Dashboard>
      </Privet>
    ),
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
        element: (
          <PrivetTeacher>
            <AddClass></AddClass>
          </PrivetTeacher>
        ),
      },
      {
        path: "/dashboard/myClass",
        // privet teacher
        element: (
          <PrivetTeacher>
            <MyClass></MyClass>
          </PrivetTeacher>
        ),
      },
      {
        path: "/dashboard/myClass/:id",
        // privet teacher
        element: (
          <PrivetTeacher>
            <SeeDetails></SeeDetails>
          </PrivetTeacher>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allclass/iddataloard/${params.id}`),
      },
      {
        path: "/dashboard/teacherreq",
        // privet Addmin
        element: (
          <PrivetAddmin>
            <TeacherReq></TeacherReq>
          </PrivetAddmin>
        ),
      },
      {
        path: "/dashboard/users",
        // privet Addmin
        element: (
          <PrivetAddmin>
            <Users></Users>
          </PrivetAddmin>
        ),
      },
      {
        path: "/dashboard/allclasses",
        // privet Addmin
        element: (
          <PrivetAddmin>
            <AllClasses></AllClasses>
          </PrivetAddmin>
        ),
      },
      {
        path: "/dashboard/myenrollclass",
        // privet student .eikhane eita alada vabe student privet kora lagbe na
        element: (
          <Privet>
            <MyEnrolls></MyEnrolls>
          </Privet>
        ),
      },
      {
        path: "/dashboard/myenrollclass/:email",
        // privet student .eikhane eita alada vabe student privet kora lagbe na
        element: (
          <Privet>
            <EnrollClassDetails></EnrollClassDetails>
          </Privet>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/onteach/${params.email}`),
      },
      {
        path: "/dashboard/profile",
        // privet sobar jonno
        element: (
          <Privet>
            <Profile></Profile>
          </Privet>
        ),
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
