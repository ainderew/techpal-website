import BannerCarousel from "./banner-carousel";
import { motion } from "framer-motion";
import { bounce, fadeIn, fallIn } from "../framer-animation/variants";
import Image from "next/image";
import logo from "../public/static/images/pc.png";

const Banner: React.FC = () => {
  return (
    <div className="h-[calc(100vh-4.75rem)] w-full flex relative bg-[#00C0FF] text-white">
      {/* <BannerCarousel /> */}

      <motion.h1
        variants={fadeIn("up")}
        initial="initial"
        animate="animate"
        className=" text-7xl md:text-[10rem] font-bold m-auto"
      >
        TECHPAL
      </motion.h1>
{/* 
      <motion.div
        variants={fallIn}
        initial="initial"
        animate="animate"
        className="w-[50vw] md:w-[15vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div 
        variants={bounce}
        initial="initial"
        animate="animate"
        className="">
          <Image
            src={logo}
            objectFit="fill"
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
};
export default Banner;
