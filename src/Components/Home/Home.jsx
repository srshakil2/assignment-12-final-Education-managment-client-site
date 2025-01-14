import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navber from "../Navber";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Education || Home</title>
      </Helmet>

      {/* this is navber */}
      <div>
        <Navber></Navber>
      </div>

      {/* main outlet */}
      <div className="">
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
