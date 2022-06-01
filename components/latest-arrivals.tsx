import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import front from "../public/static/images/front.jpg";
import main from "../public/static/images/main.png";
import main2 from "../public/static/images/4.png";
import main3 from "../public/static/images/3.jpg";
import main4 from "../public/static/images/5.jpg";
import main5 from "../public/static/images/6.jpg";
import { fromSide } from "../framer-animation/variants";

const LatestArrivals: React.FC = () => {
  return (
    <div className="h-[150vh] md:h-full w-full max-w-[1468px] flex flex-col justify-between py-20 overflow-x-hidden">
      <div className=" px-10 2xl:px-[20rem] mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold">Our latest arrivals</h2>
        <p className="my-4 text-slate-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          delectus quae molestiae ex. Nam labore nihil, illo modi maiores quae!
        </p>

        <button className="border-2 border-black w-[10rem] h-11">
          Shop All
        </button>
      </div>

      <motion.div
        variants={fromSide("left")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full h-full md:h-[50vh] mt-14 grid grid-cols-1 grid-rows-2 md:grid-cols-[2fr,1fr] md:grid-rows-1 gap-5 md:gap-5 border-black"
      >
        <Card>
          <Image src={main2} layout="fill" />
        </Card>
        <Card>
          <Image src={main3} layout="fill" />
        </Card>
      </motion.div>

      <motion.div
        variants={fromSide("right")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full h-full md:h-[50vh] mt-5 grid grid-cols-1 grid-rows-2 md:grid-cols-[1fr,2fr] md:grid-rows-1 gap-5 md:gap-5 border-black"
      >
        <Card>
          <Image src={main5} layout="fill" />
        </Card>
        <Card>
          <Image src={main4} layout="fill" />
        </Card>
      </motion.div>
    </div>
  );
};

interface ItemProps {
  children: any;
}

export const Card: React.FC<ItemProps> = ({ children }) => {
  return (
    <div className="item-container h-full text-red-600 flex-1 relative">
      {children}
    </div>
  );
};

export default LatestArrivals;
