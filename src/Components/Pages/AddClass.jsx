import { useContext } from "react";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { useForm } from "react-hook-form";
import { MainContext } from "../../Provider/Authcontext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddClass = () => {
  const axiosPrivet = useAxiosPrivet();

  const { user } = useContext(MainContext);
  const navigate = useNavigate();
  //   console.log(user);

  //   react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   Todu:
  const onSubmit = (data) => {
    // console.log(data);
    const { bio, email, name, photoUrl, price, title } = data || {};
    const addClass = {
      name,
      email,
      title,
      photoUrl,
      price,
      bio,
      enroll: 0,
      status: "pending",
    };
    // post req
    axiosPrivet
      .post("/allclass", addClass)
      .then((res) => {
        // todo:
        // console.log(res.data);
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your data has been saved",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/dashboard/myClass");
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div className="">
      <Helmet>
        <title>Education || AddClass</title>
      </Helmet>
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="w-[100px] h-[100px]">
          <img
            className=" rounded-full w-full h-full"
            defaultChecked
            src={user?.photoURL}
            alt="User Name"
          />
        </div>
        <p className="text-xl font-bold">{user?.displayName}</p>
      </div>
      <form
        className="md:grid md:grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Name
              <span className="text-sm font-normal"> --- place click here</span>
            </span>
          </label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered text-gray-500"
            {...register("name")}
          />
        </div>
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Email
              <span className="text-sm font-normal"> --- place click here</span>
            </span>
          </label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered text-gray-500"
            {...register("email")}
          />
        </div>
        {/* titel */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Title Your Class
            </span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered"
            {...register("title", { required: true })}
          />
          {errors?.title && (
            <span className="text-sm text-red-500">Title is required</span>
          )}
        </div>
        {/* price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered"
            {...register("price", { required: true })}
          />
          {errors?.price && (
            <span className="text-sm text-red-500">Price is required</span>
          )}
        </div>
        {/* img url */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text text-lg font-semibold">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            {...register("photoUrl", { required: true })}
          />
          {errors?.photoUrl && (
            <span className="text-sm text-red-500">Photo URL is required</span>
          )}
        </div>
        {/* description */}
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Description
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
            {...register("bio", { required: true })}
          />
          {errors?.bio && (
            <span className="text-sm text-red-500">
              Description is required
            </span>
          )}
        </div>
        {/* button submit */}
        <div className="form-control mt-6 md:col-span-2 ">
          <input
            type="submit"
            value="Add Class"
            className="btn bg-indigo-600 text-white text-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
