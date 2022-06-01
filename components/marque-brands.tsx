import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeBrands: React.FC = () => {
  return (
    <div className="w-full max-w-[1468px] mx-auto">
      <Marquee className="" speed={50} gradient={false}>
        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/amd.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>
        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/intel.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>
        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/inplay.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>
        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/df.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>
        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/kingston.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>
        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/logitech.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>

        <ImgContainer width={150}>
          <Image
            src="/static/images/brand_logos/amd.png"
            width={150}
            height={100}
            objectFit={"contain"}
            alt="amd"
          />
        </ImgContainer>
      </Marquee>
    </div>
  );
};

interface itemProps {
  children: any;
  width: number;
}

export const ImgContainer: React.FC<itemProps> = ({ children, width }) => {
  return (
    <div className=" flex justify-center items-center mx-10" style={{ width }}>
      {children}
    </div>
  );
};

export default MarqueeBrands;
