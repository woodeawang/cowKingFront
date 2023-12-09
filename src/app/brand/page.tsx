import Slide1 from "@/assets/slide1.jpg";
import Image from "next/image";

const Brand = () => {
  return (
    <main>
      <div className="sub_banner">
        <Image src={Slide1} alt="subbanner" layout="fill" objectFit="cover" objectPosition="center" />
        <div className="swiper_round_bottom" />
      </div>
    </main>
  );
};

export default Brand;
