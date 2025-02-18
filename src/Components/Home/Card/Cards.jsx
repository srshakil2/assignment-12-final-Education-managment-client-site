import { useContext, useEffect, useState } from "react";
import useHomePageAll from "../../../Hooks/useHomePageAll";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { MainContext } from "../../../Provider/Authcontext";

const Cards = () => {
  const [sortedData, setSortedData] = useState([]);
  const [sorted, setSorted] = useState("");
  const { themeColor } = useContext(MainContext);

  const [data, refetch] = useHomePageAll("/allclass");

  useEffect(() => {
    const filterData = data.filter((item) => {
      const i = item.status === "approves";
      return i;
    });
    if (sorted == "asc") {
      const ascSort = filterData.sort((a, b) => a.enroll - b.enroll);
      const ascConfrimData = ascSort.slice(0, 6);
      setSortedData(ascConfrimData);
      return;
    } else if (sorted == "desc") {
      const descSort = filterData.sort((a, b) => b.enroll - a.enroll);
      const descConfrimData = descSort.slice(0, 6);
      setSortedData(descConfrimData);
      return;
    }
    const confrimData = filterData.slice(0, 6);
    setSortedData(confrimData);
  }, [data, sorted]);

  return (
    <div className="">
      <h2
        className={
          themeColor === "light"
            ? "text-3xl font-bold text-center my-3 text-gray-800"
            : "text-3xl font-bold text-center my-3 text-white"
        }
      >
        Popular Courses
      </h2>
      <div
        className={
          themeColor === "light"
            ? "flex gap-3 items-center justify-center mb-6"
            : "flex gap-3 items-center justify-center mb-6 text-white"
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
      {/* grid md:grid-cols-2 lg:grid-cols-3 gap-5 */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
        {/* <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {sortedData.map((popularClass, i) => (
            <SwiperSlide key={i}>
              <div>
                <Card popularClass={popularClass}></Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        {sortedData.map((popularClass, i) => (
          <div>
            <Card
              key={i}
              popularClass={popularClass}
              themeColor={themeColor}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
