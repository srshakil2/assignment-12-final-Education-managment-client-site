import React from "react";
import Banner from "../Shared/Banner";
import Highlight from "../Highligth/Highlight";

import Cards from "./Card/Cards";
import Feedback from "./Feedback/Feedback";

const HomeLayOut = () => {
  return (
    <div>
      {/* Banner section */}
      <section>
        <Banner></Banner>
      </section>
      {/* highlight section */}
      <section>
        <Highlight></Highlight>
      </section>
      {/* TODU: */}
      {/* hight enrolment slider database */}
      <section className="w-11/12 mx-auto mt-10">
        <Cards></Cards>
      </section>
      {/* User feedback database */}
      <section className="w-11/12 mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Users FeedBack Here
        </h2>
        <Feedback></Feedback>
      </section>
    </div>
  );
};

export default HomeLayOut;
