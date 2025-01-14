import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-screen ">
      <div className="card bg-base-100 shrink-0 shadow-2xl md:w-6/12">
        <p className="w-full text-3xl font-bold text-center mt-3">LogIn Now</p>
        <div className="btn mt-7 md:w-1/2 mx-auto">
          <button className="w-full">Google LogIn</button>
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
            <button type="submit" className="btn text-lg bg-indigo-400">
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
      </div>
    </div>
  );
};

export default Login;
