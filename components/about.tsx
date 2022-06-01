import { useLayoutEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRefScrollProgress } from "../hooks";
import Image from "next/image";

import image from "../public/static/images/pc.png";
import { fadeIn } from "../framer-animation/variants";
import Categories from "./categories";

const AboutSection: React.FC = () => {
  const leftDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const [refFoo, start1, end1] = useRefScrollProgress();
  const [refDiv2, start2, end2] = useRefScrollProgress();

  const yPosAnim = useTransform(scrollYProgress, [start1, end1], [-1000, 0]);
  const yPosAnimUp = useTransform(scrollYProgress, [start1, end1], [1000, 0]);

  const yAnimFromDown = (s: number, e: number) => {
    return useTransform(scrollYProgress, [s, e], [2000, 0]);
  };
  const yAnimFromUp = (s: number, e: number) => {
    return useTransform(scrollYProgress, [s, e], [-2000, 0]);
  };

  const xAnimFromLeft = (s: number, e: number) => {
    return useTransform(scrollYProgress, [s, e], [2500, 0]);
  };
  const xAnimFromRight = (s: number, e: number) => {
    return useTransform(scrollYProgress, [s, e], [-2500, 0]);
  };

  const opacityAnim = (s: number, e: number) => {
    return useTransform(scrollYProgress, [s, e], [.7, 1]);
  };

  const opacity = useTransform(scrollYProgress, [start1, end1], [0, 1]);

  return (
    <div className="container-long-page h-[300vh] w-full relative  bg-white sticky">
      <div className="h-[100vh] w-full sticky top-0 flex flex-col items-center overflow-hidden">
        <Categories />
{/* first animation */}
        <motion.div
          style={{
            y: yPosAnim,
            opacity: opacity,
          }}
          className="left-div h-full w-1/2 bg-[#00C0FF] absolute left-0 top-0 flex justify-center items-center"
        >
          <motion.div className="w-[15vw] relative">
            <Image src={image} objectFit="fill" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            y: yPosAnimUp,
          }}
          className="right-div absolute right-0 top-0 h-full w-1/2 bg-white flex flex-col justify-center items-center px-28"
        >
          <h3 className="text-3xl font-bold mb-10 ">Why Techpal?</h3>
          <p className="w-1/2">
           Techpal was founded 2020 and its main mission was to leading the charge in making computer parts accessible through deliveries and online shopping here in Leyte.
           We strive to provide service that is far beyond what is expected, we make sure that your tech needs are not just met but surpassed. 
           
           Physical Branch located in: 
           Libertad st. 6538 Palompon Leyte 
          </p>
        </motion.div>

{/* second animation */}
        <motion.div
          className="second-left-div w-1/2 h-[100vh] bg-white absolute top-0 left-0"
          style={{
            y: yAnimFromDown(start2, end2),
            opacity: opacityAnim(start2, end2)
          }}
        ></motion.div>

        <motion.div
          className="second-right-div w-1/2 h-[100vh] bg-[#00C0FF] absolute top-0 right-0 "
          style={{
            y: yAnimFromUp(start2, end2),
            opacity: opacityAnim(start2, end2)
          }}
        >
          <h3 className="text-4xl"></h3>
        </motion.div>
      </div>
{/* - - - - - - -  */}

{/* these divs are used as tracking points on when to start the animations when scrolling
PUT BORDERS TO SHOW INDICATORS OF WHEN THEY GET TO THE TOP THE ANIMATION STARTS */}
      <div ref={refFoo} className="h-[50vh] w-full sticky top-0"></div>
{/* - - - - - - -  */}
      <div className="spacer h-[50vh] w-full"></div>
{/* - - - - - - -  */}
      <div ref={refDiv2} className="h-[50vh] w-full sticky top-0"></div>

{/* - - - - - - - -  */}
      {/* <div className="h-[100vh]"></div> */}
    </div>
  );
};

export default AboutSection;
