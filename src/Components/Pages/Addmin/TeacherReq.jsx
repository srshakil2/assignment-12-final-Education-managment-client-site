import { FaCheck, FaTimes } from "react-icons/fa";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";
import useAllsoGet from "../../../Hooks/useAllsoGet";
import { Helmet } from "react-helmet";
const TeacherReq = () => {
  // tanstec query
  const [data, refetch] = useAllsoGet("/addteaches");
  const axiosPrivet = useAxiosPrivet();

  // handleApprove btn
  const handleApprove = (id, email) => {
    const data = { email, status: "accepted", role: "teacher" };

    axiosPrivet
      .patch(`/addteach/approve/${id}`, data)
      .then((res) => {
        // modifiedCount
        // console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Teacher Approve Success",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  // Todu: handleReject btn
  const handleReject = (id) => {
    const data = { status: "rejected" };
    axiosPrivet
      .patch(`/addteach/reject/${id}`, data)
      .then((res) => {
        // console.log("--------", res.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Teacher Rejected Success",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Education || Req</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-7 text-center underline underline-offset-8">
          Teacher Requests
          {/* <p className=""></p> */}
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead>
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Image</th>
                <th className="p-2 text-left hidden md:table-cell">
                  Experience
                </th>
                <th className="p-2 text-left hidden md:table-cell">Title</th>
                <th className="p-2 text-left hidden lg:table-cell">Category</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((request) => (
                <tr key={request?._id} className="hover:bg-gray-100">
                  <td className="p-2">{request?.name}</td>
                  <td className="p-2">
                    <img
                      src={request?.photoUrl}
                      alt={request?.name}
                      className="w-12 h-12 rounded-full border"
                    />
                  </td>
                  <td className="p-2 hidden md:table-cell">
                    {request?.experience}{" "}
                  </td>
                  <td className="p-2 hidden md:table-cell">{request?.title}</td>
                  <td className="p-2 hidden lg:table-cell">
                    {request?.category}
                  </td>
                  <td
                    className={`p-2 font-semibold ${
                      request?.status === "pending"
                        ? "text-yellow-500"
                        : request?.status === "accepted"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {request?.status}
                  </td>
                  <td className="p-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <button
                      onClick={() =>
                        handleApprove(request?._id, request?.email)
                      }
                      disabled={request?.status !== "pending"}
                      className={`btn btn-sm btn-success flex items-center justify-center ${
                        request?.status !== "pending" &&
                        "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <FaCheck className="mr-1" /> Approve
                    </button>
                    <button
                      onClick={() => handleReject(request?._id)}
                      disabled={request?.status !== "pending"}
                      className={`btn btn-sm btn-error flex items-center justify-center ${
                        request?.status !== "pending" &&
                        "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <FaTimes className="mr-1" /> Reject
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

export default TeacherReq;
