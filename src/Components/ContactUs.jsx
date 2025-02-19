import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ContactUs = () => {
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const formUserData = Object.fromEntries(formData.entries());

    axios
      .post("https://education-server-site.vercel.app/problems", formUserData)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title:
              "Your problrm submit success please wait,Out team check this",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  return (
    <div className="w-11/12 mx-auto mt-10 min-h-screen">
      <div className="">
        <div className="card rounded-none bg-base-100 w-full ">
          <form onSubmit={(e) => handelSubmit(e)} className="card-body">
            <p className="mb-5 text-xl font-semibold">
              Please Fill The From and Submit
            </p>
            {/* fdvdf */}
            <label className="input input-bordered flex items-center gap-2">
              Profile Name:
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Enter Your Profile Name"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Photo URL:
              <input
                type="text"
                name="photoUrl"
                className="grow"
                placeholder="Enter Your Profile photo url"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email:
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Your Profile Email"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Contact Number:
              <input
                type="number"
                name="number"
                className="grow"
                placeholder="Your Profile Email"
                required
              />
            </label>

            <label className="font-semibold">Enter Your Problem</label>
            <textarea
              placeholder="Bio"
              name="bio"
              className="textarea textarea-bordered textarea-lg w-full "
              required
            ></textarea>

            <div className="form-control mt-6">
              <button className="btn bg-indigo-500 hover:bg-indigo-700 text-white text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
