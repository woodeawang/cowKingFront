import Image from "next/image";
import Slide1 from "@/assets/slide4.jpg";
import Main from "@/assets/create.png";
import SubSlide from "@/components/brand/SubSlide";

const Create = () => {
  return (
    <main>
      <div className="sub_banner">
        <Image src={Slide1} alt="subbanner" layout="fill" objectFit="cover" objectPosition="center" />
        <div className="swiper_round_bottom" />
      </div>

      <div className="center" style={{ marginTop: "140px", marginBottom: "100px" }}>
        <Image src={Main} alt="brand_image" />
      </div>
    </main>
  );
};

export default Create;
