import Swal from "sweetalert2";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import useDataLoard from "../../Hooks/useDataLoard";

const AssignmentModal = ({ loadData, setTotalAss, setTotalSubmition }) => {
  // console.log(loadData);
  const axiosPrivet = useAxiosPrivet();
  const { email } = loadData || {};
  const [, refetch] = useDataLoard();
  // modal
  const handelModal = (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log("Form Data:", data);
    const assignmentData = {
      email,
      title: data?.title,
      deadline: data?.deadline,
      bio: data?.bio,
      submition: 0,
    };
    // console.log(assignmentData);
    axiosPrivet
      .post("/allassignment", assignmentData)
      .then((res) => {
        if (res.data?.insertedId) {
          axiosPrivet
            .get(`/allassignment/count/${loadData?.email}`, {
              email: loadData?.email,
            })
            .then(async (res) => {
              //
              setTotalAss(res.data);
              const total = await res.data.reduce(
                (sum, i) => sum + i.submition,
                0
              );
              setTotalSubmition(total);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Assignment Create in Success",
                showConfirmButton: false,
                timer: 1000,
              });
              e.target.reset();
              refetch();
              //
            })
            .catch((err) => {
              // console.log(err);
            });
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="">
            <h4 className="text-3xl font-semibold text-center p-10">
              Create A Assignment
            </h4>
            <form
              method="dialog"
              onSubmit={(e) => handelModal(e)}
              className="space-y-5"
            >
              {/* titel */}
              <div className="form-control">
                <label className="text-lg font-semibold mb-1">
                  Assignment Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Assignment Title"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* deadline */}
              <div className="form-control">
                <label className="text-lg font-semibold mb-1">
                  Assignment Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  placeholder="Assignment Deadline"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Bio */}
              <div className="form-control">
                <label className="text-lg font-semibold mb-1">
                  Assignment Description
                </label>
                <textarea
                  name="bio"
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-md w-full"
                  required
                ></textarea>
              </div>
              <button className="btn w-full bg-indigo-600 hover:bg-indigo-400 text-xl ">
                Create Assignment
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignmentModal;
