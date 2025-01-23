import { useLoaderData } from "react-router-dom";
import useAllsoGet from "../../../Hooks/useAllsoGet";
import { FiSend } from "react-icons/fi";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { MainContext } from "../../../Provider/Authcontext";
import { register } from "swiper/element";

const EnrollClassDetails = () => {
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState({ description: "", rating: 0 });
  const [title, setTitle] = useState("");
  const { user } = useContext(MainContext);
  // modal
  //   ass
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
  //   ass
  //    modal
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleSubmitFeedback = () => {
    // console.log("Feedback submitted:", feedback);

    const ratingData = {
      description: feedback.description,
      rating: feedback.rating,
      name: user?.displayName,
      photoURL: user?.photoURL,
      title,
    };
    console.log(ratingData);
    axiosPrivet
      .post("/rating/user", ratingData)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Feedback send seccess full",
            showConfirmButton: false,
            timer: 1500,
          });
          setFeedback({ description: "", rating: 0 });
          setIsModalOpen(false);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  //   modal
  return (
    <div>
      {/* rating modal */}

      <div className="navbar bg-gray-800 text-white p-4 mb-4">
        <h1 className="text-lg font-bold">Teaching Portal</h1>
      </div>

      {/* Teaching Evaluation Report Button */}
      <div className="flex justify-center mb-6">
        <button onClick={handleModalOpen} className="btn btn-primary shadow-lg">
          Create Teaching Evaluation Report
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg md:w-96 p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Teaching Evaluation Report
            </h2>
            {/*  */}
            <label className="block text-sm font-medium mb-2">
              Class title
            </label>
            <select
              onChange={(e) => setTitle(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Your class title
              </option>
              {data.map((item, i) => (
                <option key={i}>{item?.title}</option>
              ))}
            </select>

            {/*  */}
            {/* Description Input */}
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={feedback.description}
              onChange={(e) =>
                setFeedback((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="textarea textarea-bordered w-full mb-4"
              placeholder="Enter your feedback..."
            ></textarea>

            {/* Rating Input */}
            <label className="block text-sm font-medium mb-2">Rating</label>
            <ReactStars
              count={5}
              onChange={(newRating) =>
                setFeedback((prev) => ({
                  ...prev,
                  rating: newRating,
                }))
              }
              size={30}
              activeColor="#ffd700"
            />
            {/* Send Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleModalClose}
                className="btn btn-secondary mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* modal */}
      {/* tabular */}
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
