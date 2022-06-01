import Image from "next/image";
import logo from "../public/static/images/logo.svg";

import { motion} from "framer-motion"
import { fadeIn } from "../framer-animation/variants";

const WebNav: React.FC = () => {
  return (
    <motion.div 
      variants={fadeIn("down")}
      initial = "initial"
      animate = "animate"

      className="bg-white hidden w-full h-14 px-32 md:flex items-center justify-between">
      <div className="h-full flex gap-10">
        <div className="h-full w-32 relative">
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            className="h-full w-full"
          />
        </div>
        <div className="w-72 ">
          <ul className="flex align-middle h-full justify-between items-center text-base font-regular ">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="">
          <span className="">Login</span>
      </div>
    </motion.div>
  );
};

export default WebNav;
