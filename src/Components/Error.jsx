import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handelHomePage = () => {
    navigate("/");
  };
  return (
    <div className="space-y-7 mt-12">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div>
        <h4 className="text-3xl font-bold text-black text-center">404</h4>
        <p className="text-center text-lg font-semibold mt-4">
          Not Availablle Page! please Go Back Home
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handelHomePage}
          className="btn btn-primary text-xl font-bold"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
