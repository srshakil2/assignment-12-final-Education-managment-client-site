import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navber from "../Navber";

const Home = () => {
  return (
    <div>
      {/* this is navber */}
      <div>
        <Navber></Navber>
      </div>

      {/* main outlet */}
      <div className="my-20">
        <h3 className="text-5xl">This is Home</h3>
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
