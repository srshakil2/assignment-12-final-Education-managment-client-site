import { useEffect, useState } from "react";
import useHomePageAll from "../../../Hooks/useHomePageAll";
import Card from "./Card";

const Cards = () => {
  const [sortedData, setSortedData] = useState([]);
  const [data, refetch] = useHomePageAll("/allclass");
  useEffect(() => {
    const filterData = data.filter((item) => {
      const i = item.status === "approves";
      return i;
    });
    const sorting = filterData.sort((a, b) => b.enroll - a.enroll);
    const confrimData = sorting.slice(0, 6);
    setSortedData(confrimData);
  }, [data]);
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center my-10 text-gray-800">
        Popular Courses
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {sortedData.map((popularClass, i) => (
          <Card key={i} popularClass={popularClass}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
