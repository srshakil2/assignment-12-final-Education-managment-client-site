import { FaDollarSign, FaEnvelope, FaUsers } from "react-icons/fa";

const Card = ({ popularClass }) => {
  //   console.log(popularClass);
  const { name, email, photoUrl, bio, price, enroll, title } =
    popularClass || {};

  return (
    <div className="flex-shrink-0 w-full  max-w-sm bg-white shadow-md rounded-lg  transition-transform transform hover:scale-105  duration-300">
      <img
        src={photoUrl}
        alt={name}
        className="w-full  object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
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
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Card;
