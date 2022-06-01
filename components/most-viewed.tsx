import ItemContainer from "./item-container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../framer-animation/variants";

import cover from "../public/static/images/cover.webp";
import cover2 from "../public/static/images/cover2.webp";
import cover3 from "../public/static/images/cover3.webp";
import cover4 from "../public/static/images/cover4.webp";
import cover5 from "../public/static/images/cover5.webp";

const MostViewed: React.FC = () => {
  return (
    <div className="h-[300vh] md:h-[50vh] w-full max-w-[1468px] flex flex-col items-center">
      <h3 className="font-semibold text-xl mb-7">Most viewed by shoppers</h3>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full h-full grid grid-rows-5 grid-cols-1 md:grid-rows-1 md:grid-cols-5 gap-[1rem]"
      >
        <motion.div variants={fadeIn("up")} className="">
          <ItemContainer
            name="Kingston 120GB SSD"
            brand="Kingston"
            price="1500"
            ratings={5}
            pictureID={cover2}
          />
        </motion.div>

        <motion.div variants={fadeIn("up")} className="">
          <ItemContainer
            name="Rakk Pluma (Blue switches)"
            brand="Rakk"
            price="1850"
            ratings={5}
            pictureID={cover}
          />
        </motion.div>
        <motion.div variants={fadeIn("up")} className="">
          <ItemContainer
            name="G305 Hero"
            brand="Logitech"
            price="1750"
            ratings={5}
            pictureID={cover3}
          />
        </motion.div>

        <motion.div variants={fadeIn("up")} className="">
          <ItemContainer
            name="Ryzen 3 3100"
            brand="AMD"
            price="5600"
            ratings={5}
            pictureID={cover4}
          />
        </motion.div>

        <motion.div variants={fadeIn("up")} className="">
          <ItemContainer
            name="Ryzen 6 5700G"
            brand="AMD"
            price="15999"
            ratings={5}
            pictureID={cover5}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MostViewed;
