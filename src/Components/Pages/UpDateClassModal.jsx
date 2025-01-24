import axios from "axios";
import useDataLoard from "../../Hooks/useDataLoard";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";

const UpDateClassModal = ({ value }) => {
  const axiosPrivet = useAxiosPrivet();
  const { _id, name, email, title, photoUrl, price, bio } = value || {};

  const [, refetch] = useDataLoard();
  // Update button done
  const handelFormPost = (e) => {
    const id = _id;
    const formData = new FormData(e.target); // Collect form data
    const updetedData = Object.fromEntries(formData.entries());
    const { bio, photoUrl, price, title } = updetedData || {};
    const newData = { id, bio, photoUrl, price, title };
    // console.log("this is updated data-----", newData);
    axiosPrivet
      .patch(`/allclass/update/${id}`, newData)
      .then((res) => {
        // console.log(res.data);

        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Data is UpDateted",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
        e.target.reset();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <div className="">
            <h3 className="font-bold text-lg">Hello!{value?._id}</h3>
            <form method="dialog" onSubmit={(e) => handelFormPost(e)}>
              {/* Name */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder={name}
                  className="input input-bordered"
                />
              </div>
              {/* email */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  readOnly
                  placeholder={email}
                  className="input input-bordered"
                />
              </div>
              {/* title */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  className="input input-bordered"
                />
              </div>
              {/* photoUrl */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  defaultValue={photoUrl}
                  className="input input-bordered"
                />
              </div>
              {/* price */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered"
                />
              </div>
              {/* bio */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Description
                  </span>
                </label>
                <textarea
                  typeof="text"
                  name="bio"
                  className="textarea textarea-bordered"
                  defaultValue={bio}
                />
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
        </div>
      </dialog>
    </div>
  );
};

export default UpDateClassModal;
