import cat6 from "../public/static/images/cat6.webp";
import cat7 from "../public/static/images/cat7.webp";
import cat8 from "../public/static/images/cat8.webp";
import cat9 from "../public/static/images/cat9.webp";
import cat10 from "../public/static/images/cat10.webp";
import CategoriesContainer from "./categories-container";

const Categories: React.FC = () => {
  return (
    <div className="h-[300vh] md:h-[80vh] w-full max-w-[1468px] py-10 flex flex-col items-center">
      <h3 className="font-semibold text-xl mb-7">Shop by category</h3>

      <div className="h-full categories-section w-full grid grid-cols-1 grid-rows-7 md:grid-cols-5 md:grid-rows-2 gap-[1rem]">
        <CategoriesContainer image={cat6} />
        <CategoriesContainer image={cat7} />
        <CategoriesContainer image={cat8} />
        <CategoriesContainer image={cat9} />
        <CategoriesContainer image={cat10} />

      </div>
    </div>
  );
};

export default Categories;
