import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navber from "../Navber";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Education || Home</title>
      </Helmet>

      {/* this is navber */}
      <div className="sticky top-0 z-10 opacity-90">
        <Navber></Navber>
      </div>

      {/* main outlet */}
      <div>
        {/*  */}
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
