import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import path from "path";

import cover from "../public/static/images/cover.webp";
import cover2 from "../public/static/images/cover2.webp";

interface ItemProps {
  name: string;
  brand: string;
  price: string;
  ratings: number;
  // pictureID: string;
  pictureID: StaticImageData
}

const ItemContainer: React.FC<ItemProps> = ({
  name,
  brand,
  price,
  ratings,
  pictureID,
}) => {
  return (
    <div className="item-container h-full w-full bg-white flex flex-col">
      <div className="item-image-container bg-blue-100 h-[70%] overflow-hidden relative">
        {/* image goes here */}
        <Image src={pictureID} layout="fill"  />
      </div>

      <div className="item-description-container p-3">
        <p className="">{brand}</p>
        {/* brand */}
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm font-extralight">Php {price}</p>
      </div>
    </div>
  );
};

export default ItemContainer;
