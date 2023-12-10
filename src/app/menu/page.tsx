import Image from "next/image";
import Slide1 from "@/assets/slide1.jpg";
import ColumnTab from "@/components/menu/ColumnTab";

const Menu = () => {
  return (
    <main>
      <div className="sub_banner">
        <Image src={Slide1} alt="subbanner" layout="fill" objectFit="cover" objectPosition="center" />
        <div className="swiper_round_bottom" />
      </div>

      <ColumnTab />
    </main>
  );
};

export default Menu;
