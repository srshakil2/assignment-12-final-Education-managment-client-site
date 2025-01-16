import { BsDatabaseFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-7">
      {/* section link for dashboard */}
      <section className="col-span-2 lg:col-span-1 bg-indigo-900 h-screen p-3 md:pl-5 pt-10 text-white space-y-5">
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
        <div>
          <NavLink
            to={"/dashboard/profile"}
            className={"text-xl font-bold flex  items-center gap-3"}
          >
            <span>
              <CgProfile></CgProfile>
            </span>
            <span>Profile</span>
          </NavLink>
        </div>
      </section>
      {/* this is outlet section */}
      <section className=" p-10 col-span-5 lg:col-span-6 ">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Dashboard;
