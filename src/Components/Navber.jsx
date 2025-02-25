import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Provider/Authcontext";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { handelLogOut, user, themeColor, setThemeColor } =
    useContext(MainContext);
  // console.log(user?.photoURL);
  const handelLogOutUser = () => {
    handelLogOut();
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    setThemeColor(theme);
  }, [theme]);

  const themeTogle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const linkData = (
    <>
      <li className="text-white text-lg font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-white text-lg font-semibold">
        <NavLink to={"/allClass"}>All Classes</NavLink>
      </li>
      <li className={user ? "text-white text-lg font-semibold" : "hidden"}>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      <li className={user ? "text-white text-lg font-semibold" : "hidden"}>
        <NavLink to={"/teachon"}>Teach on</NavLink>
      </li>
      <li className="text-white text-lg font-semibold">
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    </>
  );

  // console.log(themeColor);
  return (
    <div className="navbar bg-indigo-800 px-10 ">
      {/* Small device */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white mr-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-indigo-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* Small device */}
            {linkData}
          </ul>
        </div>
        {/* Logo website */}
        <Link to={"/"}>
          <div className="flex items-center justify-center">
            <img
              className="w-[50px] h-full bg-white rounded-xl"
              src="https://img.icons8.com/?size=80&id=58Is5eYS9lMe&format=png"
              alt=""
            />
          </div>
          <h4 className="uppercase text-xl font-bold text-center text-white">
            EduManage
          </h4>
        </Link>
      </div>
      {/* Larger divice */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Larger divice */}
          {linkData}
        </ul>
      </div>
      {/* Login & LogOut btn */}
      <div className="navbar-end flex items-center gap-5 mr-3">
        {user ? (
          <>
            {/* user img */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user img" defaultChecked src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                  <button onClick={handelLogOutUser} className="">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div>
            <Link
              to={"/login"}
              onClick={handelLogOutUser}
              className="btn text-lg font-semibold"
            >
              Log In
            </Link>
          </div>
        )}
      </div>

      {/* togol dark and light mode */}
      <div>
        <label className="swap swap-rotate text-white">
          {/* this hidden checkbox controls the state */}
          <input onChange={themeTogle} type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;
