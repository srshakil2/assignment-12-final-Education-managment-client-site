import Swal from "sweetalert2";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import useDataLoard from "../../Hooks/useDataLoard";
import { NavLink } from "react-router-dom";

const MyClassCard = ({ item, setId }) => {
  const axiosPrivet = useAxiosPrivet();
  const [, refetch] = useDataLoard();
  const { _id, name, email, title, photoUrl, price, bio, enroll, status } =
    item || {};

  // delete data
  const handelDelete = (id) => {
    const dataId = { id: id };
    // console.log("this is deleted", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        axiosPrivet
          .delete(`/allclass/deleteone/${id}`, dataId)
          .then((res) => {
            // console.log(res.data);
            if (res.data?.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your data has been deleted",
                showConfirmButton: false,
                timer: 1000,
              });
              refetch();
            }
          })
          .catch((err) => {
            // console.log(err);
          });
      }
    });
  };
  // Modal open
  const handelModalOpen = async (id) => {
    document.getElementById("my_modal_5").showModal();
    setId(id);
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-5">
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
              status === "pending" ? "text-yellow-500" : "text-green-500"
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
          <button
            onClick={() => handelDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 md:px-4 py-2 rounded-md text-sm"
          >
            Delete
          </button>
          {status === "pending" ? (
            <button className="bg-gray-500 hover:bg-gray-300 text-white px-2 md:px-4 py-2 rounded-md text-sm">
              See Details
            </button>
          ) : (
            <button>
              <NavLink
                to={`/dashboard/myClass/${_id}`}
                className="bg-green-500 hover:bg-green-600 text-white px-2 md:px-4 py-2 rounded-md text-sm"
              >
                See Details
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
