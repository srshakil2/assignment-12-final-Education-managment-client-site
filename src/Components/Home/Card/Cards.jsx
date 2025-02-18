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
      <h2 className="text-3xl font-bold text-center my-7 text-gray-800">
        Popular Courses
      </h2>
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
            <Card key={i} popularClass={popularClass}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
