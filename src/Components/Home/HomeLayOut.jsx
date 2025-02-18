import React, { useEffect, useState } from "react";
import Banner from "../Shared/Banner";
import Highlight from "../Highligth/Highlight";
import Cards from "./Card/Cards";
import Feedback from "./Feedback/Feedback";
import TotalUsers from "./TotalUsersEnroll.jsx/TotalUsers";
import BecomeTeaching from "./Sections/BecomeTeaching";
import ExtraOne from "./Sections/ExtraOne";
import ExtraTwo from "./Sections/ExtraTwo";
import useAxiosOpen from "../../Hooks/useAxiosOpen";

const HomeLayOut = () => {
  const [totalFree, setTotalFree] = useState(0);
  const [freeClass, setFreeClass] = useState([]);
  const axiosOpen = useAxiosOpen();
  useEffect(() => {
    axiosOpen
      .get("/free/classes")
      .then((res) => {
        setFreeClass(res.data);
        const sumOf = res.data;
        const sumTaka = sumOf.reduce((sum, i) => sum + Number(i.price), 0);
        setTotalFree(sumTaka);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);
  return (
    <div>
      {/* Banner section */}
      <section>
        <Banner></Banner>
      </section>
      {/* highlight section */}
      <section className="w-11/12 mx-auto mt-8">
        <Highlight></Highlight>
      </section>

      {/* hight enrolment slider database */}
      <section className="w-11/12 mx-auto mt-10">
        <Cards></Cards>
      </section>
      {/* User feedback database */}
      <section className="w-11/12 mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center mb-2">
          Users FeedBack Here
        </h2>
        <Feedback></Feedback>
      </section>
      {/* total users enrollment etc */}
      <section className="w-11/12 mx-auto mt-10">
        <h4 className="text-4xl font-bold text-center mb-7">
          Total Class and Enrollment
        </h4>
        <TotalUsers></TotalUsers>
      </section>
      {/* extra two sextion */}
      <section className="w-11/12 mx-auto mt-12">
        <h4 className="text-4xl font-bold text-center mb-3">
          Unlock {freeClass?.length} Premium Add-ons at <br /> no cost
        </h4>
        <p className="text-center mb-7">
          Save a total of $500 per year compared with purchasing all LearnPress
          Premium Add-ons.
        </p>
        <ExtraTwo freeClass={freeClass} totalFree={totalFree}></ExtraTwo>
      </section>
      {/* Become a teaching today */}
      <section className="w-11/12 mx-auto mt-10">
        <BecomeTeaching></BecomeTeaching>
      </section>
      {/* extra one */}
      <section className="w-11/12 mx-auto mt-10 mb-10">
        <ExtraOne></ExtraOne>
      </section>
    </div>
  );
};

export default HomeLayOut;
