import { useState } from "react";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import UpDateClassModal from "./UpDateClassModal";

const MyClassCard = ({ item, setId }) => {
  const { _id, name, email, title, photoUrl, price, bio, enroll, status } =
    item || {};
  const handelModalOpen = async (id) => {
    document.getElementById("my_modal_5").showModal();
    setId(id);
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={photoUrl} alt={title} />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Price:</strong> ${price}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Enroll-Count:</strong> {enroll}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Description:</strong> {bio}
        </p>
        <p className="text-sm mt-2">
          <strong>Status: </strong>
          <span
            className={`${
              status === "Pending" ? "text-yellow-500" : "text-green-500"
            } font-semibold`}
          >
            {status}
          </span>
        </p>
        {/* button */}
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={() => handelModalOpen(_id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 py-2 rounded-md text-sm"
          >
            Update
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-2 md:px-4 py-2 rounded-md text-sm">
            Delete
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-2 md:px-4 py-2 rounded-md text-sm">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
