import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Imgs/bannerImg1.jpg";
import img2 from "../../Imgs/bannerImg2.jpg";
import img3 from "../../Imgs/bannerImg3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 text-white top-[35%] left-20">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          <i>Welcome Our -</i>
          <p className="mt-3">Skill Development School</p>
        </h3>
        <div>
          <Link to={"/allClass"}>
            <button className="mt-5 bg-indigo-500 hover:bg-indigo-700 btn text-white text-xl md:text-2xl lg:text-3xl border-none">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
      <Carousel className="">
        <div className="h-[400px] lg:h-[550px] bg-black">
          <img className="h-full object-cover opacity-60" src={img1} />
        </div>
        <div className="h-[400px] lg:h-[550px] bg-black">
          <img className="h-full object-cover opacity-60" src={img2} />
        </div>
        <div className="h-[400px] lg:h-[550px] bg-black">
          <img className="h-full object-cover opacity-60" src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
