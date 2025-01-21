import { useEffect, useState } from "react";
import useNavHome from "../../Hooks/useNavHome";
import { NavLink } from "react-router-dom";

const AllClass = () => {
  const [allClass, setAllClass] = useState([]);
  const [data, refetch] = useNavHome();
  //   console.log(allClass);
  useEffect(() => {
    const filteringData = data.filter((item) => {
      const items = item?.status === "approves";
      return items;
    });
    setAllClass(filteringData);
  }, [data]);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allClass.map((dataItem, i) => (
        <div key={i}>
          <div className="card bg-base-100 shadow-xl ">
            <figure>
              <img
                src={dataItem?.photoUrl}
                alt={dataItem?.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">
                {dataItem?.title}
              </h2>
              <p className="text-sm text-gray-600">
                Posted by: {dataItem?.name}
              </p>
              <p className="text-sm text-gray-600">{dataItem?.bio}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-green-600">
                  Price : ${dataItem?.price}
                </span>
                <span className="text-sm text-gray-500">
                  Enrolled: {dataItem?.enroll}
                </span>
              </div>
              <NavLink
                to={`/allclass/classdetails/${dataItem?._id}`}
                className={"card-actions justify-center w-full"}
              >
                <button className="text-white btn bg-indigo-700 hover:bg-indigo-400 w-full ">
                  Enroll
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClass;
