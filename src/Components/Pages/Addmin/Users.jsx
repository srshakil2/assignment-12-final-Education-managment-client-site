import { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import useAllUsers from "../../../Hooks/useAllUsers";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";

const Users = () => {
  const [search, setSearch] = useState("");
  const [data, refetch] = useAllUsers(`/users?search=${search}`);
  const axiosPrivet = useAxiosPrivet();

  // Tudu: search oparation
  const handelSearch = (e) => {
    setSearch(e.target.value);
    refetch();
  };

  // const chackAdmin = data.find((item) => auth?.email === item?.email);
  // Tudu: make addmin btn func
  const handleMakeAdmin = (id) => {
    const addminUser = { id, role: "addmin" };
    axiosPrivet
      .patch(`/user/${id}`, addminUser)
      .then((res) => {
        console.log(res.data, "---------------done");
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User has been Addmin now!",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  return (
    <div>
      <div className="p-4">
        <h4 className="text-3xl font-bold text-center mb-5 underline  underline-offset-4">
          All Users in the website
        </h4>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by username"
            className="input input-bordered w-full max-w-xs"
            value={search}
            onChange={(e) => handelSearch(e)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">User Image</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="p-3">
                    <img
                      defaultChecked
                      src={user?.photoUrl}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    {user?.role === "addmin" ? (
                      <button className="btn btn-disabled btn-sm" disabled>
                        Admin
                      </button>
                    ) : (
                      <button
                        className="btn bg-green-600 btn-sm flex items-center text-white"
                        onClick={() => handleMakeAdmin(user._id)}
                      >
                        <FaUserShield className="mr-2" /> Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
