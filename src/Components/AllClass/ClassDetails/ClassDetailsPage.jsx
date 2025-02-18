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
        <div className="card bg-base-100 shadow-xl mx-auto w-full md:w-2/3 lg:w-3/5">
          <figure>
            <img
              src={photoUrl}
              alt={title}
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl lg:text-4xl font-bold">
              {title}
            </h2>
            <p className="text-xl font-semibold">Posted by: {name}</p>
            <p className="text-lg font-semibold">This Class Facility : </p>
            <ul className="list-decimal pl-8 -mt-2">
              <li>Structured Learning.</li>
              <li>Interactive Learning.</li>
              <li>Discipline & Time Management.</li>
              <li>Hands-On & Practical Experience.</li>
              <li>Motivation & Competition.</li>
            </ul>

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
