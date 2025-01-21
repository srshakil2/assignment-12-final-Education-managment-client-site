import useAllsoGet from "../../../Hooks/useAllsoGet";
import { FaCheck, FaTimes, FaChartBar } from "react-icons/fa";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";

const AllClasses = () => {
  const [data, refetch] = useAllsoGet("/allclass");
  const axiosPrivet = useAxiosPrivet();
  // console.log(data);
  //  Approve class btn
  const handleApprove = (id) => {
    const approve = { status: "approves" };
    axiosPrivet
      .patch(`/allclass/approve/${id}`, approve)
      .then((res) => {
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class is Accept",
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
  //  reject class btn
  const handleReject = (id) => {
    const rejected = { status: "rejected" };
    axiosPrivet
      .patch(`/allclass/approve/${id}`, rejected)
      .then((res) => {
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class is Rejected by Addmin",
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
  //  Progress class btn
  const handleProgress = (id) => {
    const pogress = { status: "pogress" };
    axiosPrivet
      .patch(`/allclass/approve/${id}`, pogress)
      .then((res) => {
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class is pogress by Addmin",
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
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
          All Class Request
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Email</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* table info */}
              {data.map((item) => (
                <tr key={item._id}>
                  <td className="font-medium">{item.title}</td>
                  <td>
                    <img
                      src={item.photoUrl}
                      alt={item.title}
                      className="w-16 h-16 rounded-md"
                    />
                  </td>
                  <td>{item.email}</td>
                  <td>{item.bio}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "approves"
                          ? "badge-success"
                          : item.status === "rejected"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  {/* buttons-3 */}
                  <td className="flex space-x-2">
                    {/* approbe btn */}
                    <button
                      onClick={() => handleApprove(item._id)}
                      disabled={item.status !== "pending"}
                      className={`btn btn-sm ${
                        item.status === "pending"
                          ? "btn-success"
                          : "btn-disabled"
                      }`}
                    >
                      <FaCheck />
                    </button>
                    {/* reject btn */}
                    <button
                      onClick={() => handleReject(item._id)}
                      disabled={item.status !== "pending"}
                      className={`btn btn-sm ${
                        item.status === "pending" ? "btn-error" : "btn-disabled"
                      }`}
                    >
                      <FaTimes />
                    </button>
                    {/* progress btn */}
                    <button
                      onClick={() => handleProgress(item._id)}
                      disabled={item.status !== "approves"}
                      className={`btn btn-sm ${
                        item.status === "approves" ? "btn-info" : "btn-disabled"
                      }`}
                    >
                      <FaChartBar />
                    </button>
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

export default AllClasses;
