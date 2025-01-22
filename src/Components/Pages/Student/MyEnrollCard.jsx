import React from "react";
import { NavLink } from "react-router-dom";

const MyEnrollCard = ({ item }) => {
  const { calssId, photoUrl, teachername, title, teacheremail } = item || {};
  // console.log(item);

  return (
    <div>
      <div className="max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full h-48 object-cover"
            src={photoUrl}
            alt={`${title} class`}
          />
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">Posted by: {teachername}</p>
            <NavLink to={`/dashboard/myenrollclass/${teacheremail}`}>
              <button className="w-full mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 active:scale-95 transition duration-150 ease-in-out">
                Continue
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollCard;
