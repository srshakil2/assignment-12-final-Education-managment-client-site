import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/bannerImage/img1.jpg";
import img2 from "../../assets/bannerImage/img2.jpg";
import img3 from "../../assets/bannerImage/img3.webp";

const Banner = () => {
  return (
    <div className="">
      <Carousel className="">
        <div className="h-[400px] lg:h-[500px]">
          <img className="h-full object-cover" src={img1} />
        </div>
        <div className="h-[400px]">
          <img className="h-full" src={img2} />
        </div>
        <div className="h-[400px]">
          <img className="h-full" src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
