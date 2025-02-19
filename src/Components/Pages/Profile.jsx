import { useContext, useEffect, useState } from "react";
import { FaUserTag, FaEnvelope, FaPhone } from "react-icons/fa";
import { MainContext } from "../../Provider/Authcontext";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const { user } = useContext(MainContext);
  const axiosPrivet = useAxiosPrivet();
  const email = { email: user?.email };
  useEffect(() => {
    axiosPrivet
      .get(`/user/${user?.email}`, email)
      .then((res) => {
        // console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [user]);

  // console.log(user);
  const { email: gmail, name, role } = profile || {};
  return (
    <>
      <div className="mb-5">
        <Helmet>
          <title>Education || Profile</title>
        </Helmet>
        {/* max-w-sm md:max-w-md */}
        <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-none overflow-hidden  hover:shadow-2xl transition-transform duration-300 ease-in-out animate-bounce-in p-6">
          {/* User Image */}
          <div className="avatar mx-auto transform hover:rotate-6 transition-transform duration-500">
            <div className="w-24 md:w-40 rounded-full ring ring-white ring-offset-4">
              <img
                defaultChecked
                className=" w-full"
                alt=""
                src={user?.photoURL}
              />
            </div>
          </div>

          {/* User Info */}
          <div className="text-center text-white mt-4">
            <h2 className="text-lg md:text-xl font-bold">{name}</h2>
            <p className="text-sm md:text-base flex items-center justify-center gap-2 mt-2">
              <FaUserTag className="text-yellow-300" /> Role: {role}
            </p>
            <p className="text-sm md:text-base flex items-center justify-center gap-2 mt-2">
              <FaEnvelope className="text-green-300" /> Gmail: {gmail}
            </p>
            <p className="text-sm md:text-base flex items-center justify-center gap-2 mt-2">
              <FaPhone className="text-blue-300" /> 01727769430
            </p>
          </div>
          {/* pragp */}
          <div className="mt-7 space-y-5 mb-10">
            <h3 className="text-3xl font-bold text-center text-white">
              Hello! ROBIUL HASAN
            </h3>
            <p className="text-center text-white px-5 ">
              Education is the cornerstone of personal and societal development,
              providing individuals with knowledge, skills, and critical
              thinking abilities. It empowers people to pursue their goals,
              build confidence, and overcome challenges. Through education,
              individuals gain opportunities to contribute meaningfully to their
              communities, foster innovation, and promote cultural
              understanding. A well-rounded education equips people with the
              tools to adapt to an ever-changing world, driving progress and
              creating a brighter, more inclusive future for all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
