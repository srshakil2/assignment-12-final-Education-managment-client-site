import React from "react";
import Banner from "../Shared/Banner";
import Highlight from "../Highligth/Highlight";

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
      <section className="p-20 text-5xl">
        TODU: highest enrolment slider section hobbe from database
      </section>
      {/* TODU: */}
      {/* User feedback database */}
      <section className="p-20 text-5xl">
        TODU: User feedback carousel section hobbe from database
      </section>
    </div>
  );
};

export default HomeLayOut;
