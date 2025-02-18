import { useContext, useEffect, useState } from "react";
import useHomePageAll from "../../../Hooks/useHomePageAll";
import { FaUsers } from "react-icons/fa";
import useAxiosOpen from "../../../Hooks/useAxiosOpen";
import { MdClass } from "react-icons/md";
import { MainContext } from "../../../Provider/Authcontext";

const TotalUsers = () => {
  const [users, setUsers] = useState([]);
  const [totalClass, setTotalClass] = useState([]);
  const [totalEnroll, setTotalEnroll] = useState(0);
  const { themeColor } = useContext(MainContext);
  const [data, refetch] = useHomePageAll("/total/users/class/enroll");
  const axiosOpen = useAxiosOpen();
  //   console.log(totalClass, totalEnroll);
  useEffect(() => {
    axiosOpen
      .get("/total/users/class/enroll")
      .then((res) => {
        const user = res.data?.users;
        setUsers(user);
        const classes = res.data?.classes;
        setTotalClass(classes);
        const sumEnroll = classes.reduce((sum, item) => sum + item?.enroll, 0);
        setTotalEnroll(sumEnroll);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);
  return (
    <div
      className={
        themeColor === "light"
          ? "grid md:grid-cols-4 gap-7"
          : "grid md:grid-cols-4 gap-7 text-black"
      }
    >
      <div className="col-span-2 space-y-7 ">
        <div className="flex items-center gap-3 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-4 text-3xl font-semibold">
          <p className="bg-green-500 rounded-full p-2">
            <FaUsers />
          </p>
          <h3>Total Users: {users?.length}</h3>
        </div>
        <div className="flex items-center gap-3 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-4 text-3xl font-semibold">
          <p className="bg-green-500 rounded-full p-2">
            <MdClass />
          </p>
          <h3>Total Class: {totalClass?.length}</h3>
        </div>
        <div className="flex items-center gap-3 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-4 text-3xl font-semibold">
          <p className="bg-green-500 rounded-full p-2">
            <FaUsers />
          </p>
          <h3>Total Enrollment: {totalEnroll}</h3>
        </div>
      </div>
      <div className="col-span-2 w-full lg:h-[300px] mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-full rounded-md"
          src="https://i.ibb.co.com/fM8MjFD/baim-hanif-p-YWu-OMhtc6k-unsplash.jpg"
          alt="Students"
        />
      </div>
    </div>
  );
};

export default TotalUsers;
