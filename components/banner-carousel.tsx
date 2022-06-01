import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel: React.FC = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} className="h-full">
      <div className="h-screen md:h-[calc(100vh-4.75rem)]  text-white">
        <img
          className="object-cover h-full"
          src="/static/images/1.jpg"
          alt=""
        />
        {/* <p className="legend">Legend 1</p> */}

        <h2 className="px-32 text-6xl font-semibold  absolute top-1/4 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">Shop Tech</h2>
        <div className="w-[30rem] left-32 absolute top-[45%] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
            <p className="text-left text-lg ">Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </p>
        </div>
      </div>
      <div className="h-screen md:h-[calc(100vh-4.75rem)]">
        <img
          className="object-cover h-full"
          src="/static/images/2.jpg"
          alt=""
          // objectFit=""\
        />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
