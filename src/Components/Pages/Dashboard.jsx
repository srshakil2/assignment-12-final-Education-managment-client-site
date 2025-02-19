import { useContext, useEffect, useState } from "react";
import { BsDatabaseFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { MainContext } from "../../Provider/Authcontext";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { GiTeacher } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { user } = useContext(MainContext);
  const [admin, setAdmin] = useState({});
  const axiosPrivet = useAxiosPrivet();
  const onUser = { email: user?.email };
  // console.log(admin);
  useEffect(() => {
    axiosPrivet
      .get(`/user/${user?.email}`, onUser)
      .then((res) => {
        // console.log(res.data);
        setAdmin(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [user]);
  return (
    <div className="grid grid-cols-7">
      <Helmet>
        <title>Education || DashBoard</title>
      </Helmet>
      {/* section link for dashboard */}
      <section className="col-span-2 lg:col-span-1 bg-indigo-900 h-screen p-3 md:pl-5 pt-10 text-white space-y-5">
        {/* home sobar jonno */}
        <div>
          <NavLink
            to={"/"}
            className={"text-xl font-bold flex  items-center gap-3"}
          >
            <span>
              <IoHomeOutline></IoHomeOutline>
            </span>
            <span>Home</span>
          </NavLink>
        </div>
        {/* addmin teacher req */}
        {admin.role === "addmin" ? (
          <div>
            <NavLink
              to={"/dashboard/teacherreq"}
              className={"text-xl font-bold flex  items-center gap-3"}
            >
              <span>
                <GiTeacher></GiTeacher>
              </span>
              <span>Teacher Request</span>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {/* addmin users */}
        {admin.role === "addmin" ? (
          <div>
            <NavLink
              to={"/dashboard/users"}
              className={"text-xl font-bold flex  items-center gap-3"}
            >
              <span>
                <HiUserGroup></HiUserGroup>
              </span>
              <span>Users</span>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {/* addmin all classes */}
        {admin.role === "addmin" ? (
          <div>
            <NavLink
              to={"/dashboard/allclasses"}
              className={"text-xl font-bold flex  items-center gap-3"}
            >
              <span>
                <MdLibraryAdd></MdLibraryAdd>
              </span>
              <span>All Classes</span>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {/* condition teacher */}
        {admin.role === "teacher" ? (
          <div>
            <NavLink
              to={"/dashboard/addClass"}
              className={"text-xl font-bold flex  items-center gap-3"}
            >
              <span>
                <BsDatabaseFill></BsDatabaseFill>
              </span>
              <span>Add Class</span>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {/* teacher */}
        {admin.role === "teacher" ? (
          <div>
            <NavLink
              to={"/dashboard/myClass"}
              className={"text-xl font-bold flex  items-center gap-3"}
            >
              <span>
                <RiContactsBookFill></RiContactsBookFill>
              </span>
              <span>My Class</span>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {/* student */}
        {admin.role === "student" ? (
          <div>
            <NavLink
              to={"/dashboard/myenrollclass"}
              className={"text-xl font-bold flex  items-center gap-3"}
            >
              <span>
                <RiContactsBookFill></RiContactsBookFill>
              </span>
              <span>My Enroll Class</span>
            </NavLink>
          </div>
        ) : (
          ""
        )}

        {/* profile sobar jonno */}
        {/* <div>
          <NavLink
            to={"/dashboard/profile"}
            className={"text-xl font-bold flex  items-center gap-3"}
          >
            <span>
              <CgProfile></CgProfile>
            </span>
            <span>Profile</span>
          </NavLink>
        </div> */}
      </section>
      {/* this is outlet section */}
      <section className=" p-10 col-span-5 lg:col-span-6 ">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Dashboard;
