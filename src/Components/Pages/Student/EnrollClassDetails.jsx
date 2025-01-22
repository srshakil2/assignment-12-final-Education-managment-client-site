import { useLoaderData } from "react-router-dom";
import useAllsoGet from "../../../Hooks/useAllsoGet";
import { FiSend } from "react-icons/fi";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";

const EnrollClassDetails = () => {
  const loadData = useLoaderData();
  const [data, refetch] = useAllsoGet(`/assignment/teather/${loadData?.email}`);
  const axiosPrivet = useAxiosPrivet();
  //   console.log(loadData);
  //   console.log(data);

  const count = 1;
  const handelSubmit = (id, submition) => {
    const countData = { count, submition };
    axiosPrivet
      .patch(`/assignment/countincriment/${id}`, countData)
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Assignment send success",
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
      <div className="">
        <h1 className="text-2xl font-bold text-center mb-6">Assignments</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border border-gray-200 shadow-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Deadline</th>
                <th className="px-4 py-2">Submission</th>
              </tr>
            </thead>
            <tbody>
              {data.map((assignment) => (
                <tr
                  key={assignment?._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="border px-4 py-2">{assignment?.title}</td>
                  <td className="border px-4 py-2">{assignment?.bio}</td>
                  <td className="border px-4 py-2">{assignment?.deadline}</td>
                  <td className="border px-4 py-2 flex items-center gap-2">
                    <input
                      type="file"
                      className="file-input file-input-bordered "
                    />
                    <button
                      onClick={() =>
                        handelSubmit(assignment?._id, assignment?.submition)
                      }
                      className="btn btn-primary flex items-center gap-2"
                    >
                      Submit <FiSend />
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

export default EnrollClassDetails;
