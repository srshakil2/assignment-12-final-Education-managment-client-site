import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MainContext } from "../../Provider/Authcontext";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import Swal from "sweetalert2";
import useAllUsers from "../../Hooks/useAllUsers";
import { FaRegSmile } from "react-icons/fa";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";

const TeachOn = () => {
  const [submiting, setSubmiting] = useState(false);
  const [reject, setReject] = useState(null);
  const { user } = useContext(MainContext);
  const axiosPrivet = useAxiosPrivet();
  const [data, refetch] = useAllUsers(`/onteach/${user?.email}`);

  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const photoUrl = user?.photoURL;
  const email = user?.email;

  const onSubmit = (data) => {
    // console.log(data, email, "---------", photoUrl);
    const { category, experience, name, title } = data || {};
    const item = {
      email,
      photoUrl,
      name,
      title,
      category,
      experience,
      status: "pending",
    };
    // console.log(item);
    axiosPrivet
      .post("/addteach", item)
      .then((res) => {
        // console.log(res.data);
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your teach request success",
            showConfirmButton: false,
            timer: 1500,
          });
          setSubmiting(true);
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  //   TODU : button er aro kaj ache adimin ki korche tar upor
  // effect ta valo vabe aj korteche na...
  // chack teach req status
  useEffect(() => {
    axiosPrivet
      .get(`/onrole/${user?.email}`)
      .then((res) => {
        setReject(res?.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [user]);
  const handelanother = (id) => {
    const dataOne = {
      email: email,
      status: "pending",
    };
    axiosPrivet
      .patch("/addteach/renue", dataOne)
      .then((res) => {
        // console.log(res?.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your request in success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div>
      {/* role student chacking */}
      {data?.role === "student" ? (
        <div
          className={
            reject?.status
              ? "hidden"
              : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          }
        >
          <h1 className="text-3xl font-semibold text-center mb-6">
            Submit Your Info
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-6 shadow rounded-lg"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
              {errors?.name && (
                <p className="text-red-500 text-sm">name is required</p>
              )}
            </div>

            {/* Images (Logged-in User Image) */}
            <div className="text-center">
              <label className="block mb-2 font-medium text-gray-700">
                Profile Picture
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={user?.photoURL || ""}
              />
            </div>

            {/* Email (Read-only) */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={user?.email || "robiulhasan@gmail.com"}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Experience Level
              </label>
              <select
                {...register("experience", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner</option>
                <option value="mid-level">Mid-level</option>
                <option value="experienced">Experienced</option>
              </select>
              {errors?.experience && (
                <p className="text-red-500 text-sm">Seleted is required</p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter a title"
              />
              {errors?.title && (
                <p className="text-red-500 text-sm">name is required</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select a category</option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="content-writing">Content Writing</option>
                <option value="seo">SEO</option>
              </select>
              {errors?.category && (
                <p className="text-red-500 text-sm">name is required</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center w-full">
              <button
                disabled={submiting}
                type="submit"
                className="btn bg-indigo-300 hover:bg-green-400  sm:w-auto sm:px-8 py-2 w-full flex-1"
              >
                Submit for Review
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
          <div className="card w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="card-body text-center">
              <div className="flex justify-center items-center text-6xl text-blue-600 mb-4">
                {<FaRegSmile />}
              </div>
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-2 ">
                Welcome!
              </h2>
              <p className="text-gray-600">
                This website your possion is <strong> {data?.role}!</strong>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Todu: status chack */}
      {reject?.status === "rejected" ? (
        <div className="space-y-4 mt-10 min-h-screen">
          <h2 className="text-center text-2xl font-bold">Rifat!</h2>
          <p className="text-center font-semibold">
            Your status is: <span>rejectes</span>.Re request to click
            <span className="text-red-400"> request to another button</span>.
          </p>
          <div className="text-center">
            <button
              onClick={() => handelanother(reject?.email)}
              className="btn bg-violet-400 text-lg"
            >
              request to another button
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TeachOn;
