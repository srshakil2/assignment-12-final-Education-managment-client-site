import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MainContext } from "../../Provider/Authcontext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const axiosOpen = useAxiosOpen();
  const { handelLogin, handelGoogleLogin, themeColor } =
    useContext(MainContext);
  console.log(themeColor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    handelLogin(email, password)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log In Success",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log("vuya user",err)
      });
  };

  // TODO:
  const googleLoginUser = () => {
    handelGoogleLogin()
      .then((res) => {
        // TODO:
        // console.log(res?.user?.photoURL);
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photoUrl: res?.user?.photoURL,
          role: "student",
        };
        axiosOpen
          .post("/users", userInfo)
          .then((res) => {
            // TODU:
            // console.log(res.data);
          })
          .catch((err) => {
            // console.log("user database e jai nai", err);
          });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Google LogIn Success",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log("vuya gamil",err)
      });
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Education || Login</title>
      </Helmet>

      <div className="card bg-base-100 shrink-0 shadow-2xl md:w-6/12">
        <p className="w-full text-3xl font-bold  text-center mt-5">LogIn Now</p>

        <div onClick={googleLoginUser} className="btn mt-7 md:w-1/2 mx-auto ">
          <FcGoogle className="text-3xl"></FcGoogle>
          <span className="text-xl">Google LogIn</span>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password", { required: true })}
              className="input input-bordered"
            />
            {errors?.password && (
              <span className="text-sm text-red-500">
                Password field is required
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* login btn */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className={
                themeColor === "light"
                  ? "btn text-lg bg-indigo-400 hover:bg-indigo-600"
                  : "btn text-lg bg-indigo-400 hover:bg-indigo-600 text-white"
              }
            >
              Login
            </button>
          </div>
        </form>
        {/* create accaun singup link */}
        <div>
          <p className="px-7 pb-4 -mt-5 font-semibold">
            Don't Have account pless?
            <NavLink
              to={"/singup"}
              className="text-lg ml-3 underline underline-offset-4"
            >
              Sing Up Now
            </NavLink>
          </p>
        </div>
        <div className="ml-7 mb-5">
          <Link to={"/"} className="btn rounded-lg text-lg ">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
