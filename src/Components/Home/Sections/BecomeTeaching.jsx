import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BecomeTeaching = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center    gap-7">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://i.ibb.co.com/cDmV3Xm/lexscope-0k2m-Mcd-TOYU-unsplash.jpg"
          alt="Instructor"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Side - Content and button */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800  animate-fadeInUp">
          Become an Instructor
        </h2>
        <p className="text-gray-600 md:text-base mb-6 animate-fadeInUp">
          Share your knowledge and skills with millions of learners around the
          world. Empower the next generation by teaching what you love.
        </p>
        <NavLink
          to={"/teachon"}
          className="px-6 py-3 bg-indigo-400 text-white rounded-lg shadow-md hover:bg-indigo-500 hover:shadow-lg flex items-center justify-center gap-2 transition-all duration-300 animate-bounce"
        >
          Start Teaching Today
          <FaArrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default BecomeTeaching;
