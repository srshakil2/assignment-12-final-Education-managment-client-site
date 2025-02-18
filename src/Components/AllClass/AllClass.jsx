import { useContext, useEffect, useState } from "react";
import useNavHome from "../../Hooks/useNavHome";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MainContext } from "../../Provider/Authcontext";

const AllClass = () => {
  const [allClass, setAllClass] = useState([]);
  const [sorted, setSorted] = useState("");
  const { themeColor } = useContext(MainContext);
  const [data, refetch] = useNavHome();
  //   console.log(allClass);
  useEffect(() => {
    const filteringData = data.filter((item) => {
      const items = item?.status === "approves";
      return items;
    });

    if (sorted == "asc") {
      const ascSort = filteringData.sort((a, b) => a.enroll - b.enroll);
      setAllClass(ascSort);
      return;
    } else if (sorted == "desc") {
      const descSort = filteringData.sort((a, b) => b.enroll - a.enroll);

      setAllClass(descSort);
      return;
    }

    setAllClass(filteringData);
    refetch();
  }, [data, sorted]);

  return (
    <>
      <Helmet>
        <title>Education || Allclass</title>
      </Helmet>
      <div
        className={
          themeColor === "light"
            ? "flex gap-3 items-center justify-center mb-6 mt-10"
            : "flex gap-3 items-center justify-center mb-6 mt-10 text-white"
        }
      >
        <h4 className="text-xl font-semibold text-nowrap">Sort By Enroll:</h4>
        <select
          onChange={(e) => setSorted(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value={""}>Default Data</option>
          <option value="asc">Ascending By Enroll</option>
          <option value="desc">Descending By Enroll</option>
        </select>
      </div>
      <div className="w-11/12  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {allClass.map((dataItem, i) => (
          <div key={i}>
            <div
              className={
                themeColor === "light"
                  ? "card bg-base-100 shadow-xl "
                  : "card bg-gray-700 shadow-xl text-white"
              }
            >
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
                <p className="text-sm">Posted by: {dataItem?.name}</p>
                <p className="text-sm">{dataItem?.bio.slice(1, 100)}...</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold text-green-600">
                    Price : ${dataItem?.price}
                  </span>
                  <span className="text-sm">Enrolled: {dataItem?.enroll}</span>
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
    </>
  );
};

export default AllClass;
