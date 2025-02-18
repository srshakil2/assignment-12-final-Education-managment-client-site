import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Imgs/bannerImg1.jpg";
import img2 from "../../Imgs/bannerImg2.jpg";
import img3 from "../../Imgs/bannerImg3.jpg";

const Banner = () => {
  return (
    <div className="">
      <Carousel className="">
        <div className="h-[400px] lg:h-[550px]">
          <img className="h-full object-cover" src={img1} />
        </div>
        <div className="h-[400px] lg:h-[550px]">
          <img className="h-full" src={img2} />
        </div>
        <div className="h-[400px] lg:h-[550px]">
          <img className="h-full" src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
