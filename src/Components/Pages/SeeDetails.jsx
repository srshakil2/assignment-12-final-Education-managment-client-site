import { FaUserFriends, FaTasks, FaFileAlt, FaPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import AssignmentModal from "./AssignmentModal";
import { useContext, useEffect, useState } from "react";
import useDataLoard from "../../Hooks/useDataLoard";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { MainContext } from "../../Provider/Authcontext";
import PieChartWithCustomizedLabel from "./TeacherChart";

const SeeDetails = () => {
  const [totalAss, setTotalAss] = useState([]);
  const [totalSubmition, setTotalSubmition] = useState(0);

  const { user } = useContext(MainContext);
  const [data, refetch] = useDataLoard();
  const axiosPrivet = useAxiosPrivet();
  const loadData = useLoaderData();

  const userEmail = { email: loadData?.email };
  useEffect(() => {
    //

    axiosPrivet
      .get(`/allassignment/count/${loadData?.email}`, userEmail)
      .then(async (res) => {
        // console.log(res.data);
        setTotalAss(res.data);
        const total = await res.data.reduce((sum, i) => sum + i.submition, 0);
        setTotalSubmition(total);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [data]);
  // console.log(enrol);

  return (
    <>
      <div className="flex flex-col space-y-6 p-6 bg-gray-100 min-h-screen rounded-xl">
        {/*create assingment */}
        <div className="p-5">
          {/* Header */}

          <div className="flex flex-wrap justify-between items-center flex-row-reverse mb-4 gap-4">
            <h2 className="text-3xl font-bold -mt-5">Class Progress</h2>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn bg-indigo-600 hover:bg-indigo-400 text-white flex items-center gap-2"
            >
              <FaPlus /> Create Assignment
            </button>
          </div>

          {/* Assignment Row */}
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border p-4 rounded-lg shadow-md bg-base-100">
              <div>
                <h3 className="font-semibold text-lg">Assignment 1</h3>
                <p className="text-sm text-gray-600">
                  Description of Assignment 1
                </p>
              </div>
              <span className="text-sm text-gray-500 sm:mt-0 mt-2">
                Deadline: 2025-02-31
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Enrollment Card */}
          <div className="card shadow-lg bg-white border rounded-lg">
            <div className="card-body flex items-center">
              <FaUserFriends className="text-blue-500 text-4xl" />
              <div className="ml-4">
                <h2 className="card-title text-lg">Total Enrollment</h2>
                <p className="text-2xl font-bold">{loadData?.enroll}</p>
              </div>
            </div>
          </div>

          {/* Total Assignment Card */}
          <div className="card shadow-lg bg-white border rounded-lg">
            <div className="card-body flex items-center">
              <FaTasks className="text-green-500 text-4xl" />
              <div className="ml-4">
                <h2 className="card-title text-lg">Total Assignments</h2>
                <p className="text-2xl font-bold">{totalAss.length}</p>
              </div>
            </div>
          </div>

          {/* Total Assignment Submission Card */}
          <div className="card shadow-lg bg-white border rounded-lg">
            <div className="card-body flex items-center">
              <FaFileAlt className="text-purple-500 text-4xl" />
              <div className="ml-4">
                <h2 className="card-title text-lg">Total Submissions</h2>
                <p className="text-2xl font-bold">{totalSubmition}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <p className="text-2xl font-bold text-center mt-5">
            Total assignment and Assignment submission
          </p>
          {/* charts */}
          <div className="container mx-auto">
            <PieChartWithCustomizedLabel
              enrol={loadData?.enroll}
              totalAss={totalAss}
              totalSubmition={totalSubmition}
            ></PieChartWithCustomizedLabel>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center">
              Hello! {user?.displayName} Great teaching
            </h3>
            <p className="font-semibold text-center mt-4">
              Great teaching goes beyond simply transmitting knowledge; it
              inspires curiosity, fosters critical thinking, and builds
              meaningful connections with students. A great teacher adapts their
              methods to suit diverse learning styles, making complex concepts
              accessible and engaging.
            </p>
          </div>

          {/* charts */}
        </div>
      </div>
      {/* open modal create assignmrnt */}
      <div>
        <AssignmentModal
          loadData={loadData}
          setTotalAss={setTotalAss}
          setTotalSubmition={setTotalSubmition}
        ></AssignmentModal>
      </div>
    </>
  );
};

export default SeeDetails;
