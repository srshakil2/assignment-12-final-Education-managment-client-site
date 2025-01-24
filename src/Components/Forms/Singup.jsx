import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { MainContext } from "../../Provider/Authcontext";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase";
import Swal from "sweetalert2";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import { Helmet } from "react-helmet";

const Singup = () => {
  const axiosOpen = useAxiosOpen();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const { handelSingUp } = useContext(MainContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handel name fild
  const hendelName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  //   TODU:
  const onSubmit = (data) => {
    const { email, password, photoUrl, fristname } = data;
    // console.log(email, password, photoUrl, fristname);
    handelSingUp(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: photoUrl,
      })
        .then((res) => {
          // console.log(photoUrl);
          // Todu:
          const userInfo = {
            name: userName,
            email: email,
            role: "student",
            photoUrl: photoUrl,
          };
          axiosOpen
            .post("/users", userInfo)
            .then((res) => {
              // tudu:-----------------
              // console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Sing Up Success",
                  showConfirmButton: false,
                  timer: 1000,
                });
                navigate("/");
              }
            })
            .catch((err) => {
              // console.log("user database e jai nai", err);
            });
        })
        .catch((err) => {
          // console.log("user singUp hoy nai", err);
        });
    });
  };
  return (
    <div className="hero min-h-screen ">
      <Helmet>
        <title>Education || SingUp</title>
      </Helmet>
      <div className="card bg-base-100 shrink-0 shadow-2xl md:w-6/12">
        <div className="text-center mt-10 md:w-1/2 mx-auto">
          <p className="w-full text-3xl font-bold">Sing Up Now</p>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          {/* frist name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Frist Name</span>
            </label>
            <input
              type="text"
              onKeyUp={(e) => hendelName(e)}
              placeholder="Frist Name"
              {...register("fristname", { required: true })}
              className="input input-bordered"
            />
            {errors?.fristname && (
              <span className="text-sm text-red-500">
                Frist name is required
              </span>
            )}
          </div>
          {/* last name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname", { required: true })}
              className="input input-bordered"
            />
            {errors?.lastname && (
              <span className="text-sm text-red-500">
                Last name is required
              </span>
            )}
          </div>
          {/* photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photoUrl", { required: true })}
              className="input input-bordered"
            />
            {errors?.photoUrl && (
              <span className="text-sm text-red-500">
                Photo Url is required
              </span>
            )}
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
            />
            {errors?.email && (
              <span className="text-sm text-red-500">
                Email field is required
              </span>
            )}
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
              })}
              className="input input-bordered"
            />
            {errors?.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="text-sm text-red-500">
                Password minimun length 6 characters
              </span>
            )}
            {errors?.password?.type === "maxLength" && (
              <span className="text-sm text-red-500">
                Password max length 20 characters
              </span>
            )}
            {errors?.password?.type === "pattern" && (
              <span className="text-sm text-red-500">
                Password has been one Uppercase and one Lowercase
              </span>
            )}
          </div>
          {/* User Age */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Age</span>
            </label>
            <input
              type="number"
              placeholder="Your Age"
              {...register("age", {
                required: true,
                minLength: 2,
                maxLength: 2,
              })}
              className="input input-bordered"
            />
            {errors?.age && (
              <span className="text-sm text-red-500">Age is required</span>
            )}
            {errors?.age?.type === "minLength" && (
              <span className="text-sm text-red-500">
                Age minimun length 2 characters
              </span>
            )}
            {errors?.age?.type === "maxLength" && (
              <span className="text-sm text-red-500">
                Age max length 2 characters
              </span>
            )}
          </div>
          {/* singup btn */}
          <div className="form-control mt-6">
            <button type="submit" className="btn text-lg bg-indigo-400">
              Sing Up
            </button>
          </div>
        </form>
        {/* Log in page link */}
        <div>
          <p className="px-7 pb-4 -mt-5 font-semibold">
            You Have an account pless?
            <NavLink
              to={"/login"}
              className="text-lg ml-3 underline underline-offset-8"
            >
              LogIn
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
