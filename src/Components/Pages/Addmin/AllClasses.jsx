import useAllsoGet from "../../../Hooks/useAllsoGet";
import { FaCheck, FaTimes, FaChartBar } from "react-icons/fa";

const AllClasses = () => {
  const [data, refetch] = useAllsoGet("/allclass");
  console.log(data);
  // Todu: Approve class btn
  const handleApprove = (id) => {
    console.log("Approve");
  };
  // Todu: reject class btn
  const handleReject = (id) => {
    console.log("rejected");
  };
  // Todu: Progress class btn
  const handleProgress = (id) => {
    console.log("progress");
  };
  return (
    <div>
      <div className="p-4">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
          Teacher Dashboard
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
                    <button
                      onClick={() => handleReject(item._id)}
                      disabled={item.status !== "pending"}
                      className={`btn btn-sm ${
                        item.status === "pending" ? "btn-error" : "btn-disabled"
                      }`}
                    >
                      <FaTimes />
                    </button>
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
