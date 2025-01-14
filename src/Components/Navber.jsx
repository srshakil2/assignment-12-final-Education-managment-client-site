const Navber = () => {
  const linkData = (
    <>
      <li className="text-white text-lg font-semibold">
        <a>Home</a>
      </li>
      <li className="text-white text-lg font-semibold">
        <a>All Classes</a>
      </li>
      <li className="text-white text-lg font-semibold">
        <a>Teach on Educations</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-indigo-800 px-10">
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
        <div>
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
        </div>
      </div>
      {/* Larger divice */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Larger divice */}
          {linkData}
        </ul>
      </div>
      {/* Login & LogOut btn */}
      <div className="navbar-end flex items-center gap-5">
        {/* user img */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* btn */}
        <div>
          <button className="btn">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
