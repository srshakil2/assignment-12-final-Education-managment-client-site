import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";

const ClassDetailsPage = () => {
  const navigate = useNavigate();
  const loadData = useLoaderData();
  const { _id, name, email, title, price, bio, enroll, photoUrl } =
    loadData || {};

  const handelOpen = () => {
    navigate(`/payment/${_id}`);
  };

  return (
    <div>
      <Helmet>
        <title>Education || Details</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <div className="card bg-base-100 shadow-xl mx-auto w-full md:w-2/3 lg:w-1/2">
          <figure>
            <img
              src={photoUrl}
              alt={title}
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-600">Posted by: {name}</p>
            <p className="text-gray-700 mt-4">{bio}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-green-600">
                $ {price}
              </span>
              <span className="text-sm text-gray-500">Enrolled: {enroll}</span>
            </div>
            {/* prement modal btn */}
            <div className="card-actions justify-end mt-6">
              <button
                onClick={handelOpen}
                className="btn btn-success w-full md:w-auto"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ei ta kaj korteche na */}
    </div>
  );
};

export default ClassDetailsPage;
