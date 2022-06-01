import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: StaticImageData;
}

const CategoriesContainer: React.FC<Props> = ({ image }) => {
  return (
    <div className="h-full w-full relative overflow-hidden flex">
      <motion.div
      initial={{}}
      whileHover={{scale: 1.05,
        transition:{
            duration: .2,
            ease: "easeInOut"
        }
    }}
      className="h-full w-full">
        <Image src={image} layout="fill" />
      </motion.div>
    </div>
  );
};

export default CategoriesContainer;
