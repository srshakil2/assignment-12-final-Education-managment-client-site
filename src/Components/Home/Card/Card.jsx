import { FaDollarSign, FaEnvelope, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Card = ({ popularClass }) => {
  //   console.log(popularClass);
  const { name, email, photoUrl, bio, price, enroll, title } =
    popularClass || {};

  const heading = title.slice(0, 20);
  const description = bio.slice(0, 65);
  // Tudo button: viwe ditails
  // max-w-sm
  return (
    <div className="flex-shrink-0 w-full bg-white shadow-md rounded-lg  transition-transform transform hover:scale-105  duration-300">
      <div className="h-[280px]">
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{heading}...</h3>
        <p className="text-sm text-gray-600 my-2">Instructor: {name}</p>
        <p className="flex items-center text-sm text-gray-600 my-1">
          <FaEnvelope className="mr-2" /> {email}
        </p>
        <p className="flex items-center text-sm text-gray-600 my-1">
          <FaUsers className="mr-2" /> Enrolled: {enroll}
        </p>
        <p className="flex items-center text-sm text-gray-600 my-1">
          <FaDollarSign className="mr-2" /> Price: ${price}
        </p>
        <p>{description}...</p>
      </div>
      {/* to={`/allclass/classdetails/${dataItem?._id}` */}
      <div className="p-5">
        <NavLink to={`/allclass/classdetails/${popularClass?._id}`}>
          <button className=" btn w-full text-lg bg-indigo-400 hover:bg-indigo-600">
            Enroll
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
