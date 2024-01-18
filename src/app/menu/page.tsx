import Image from "next/image";
import Slide1 from "@/assets/slide4.jpg";
import Menu1 from "@/assets/menu1.png";
import ColumnTab from "@/components/menu/ColumnTab";

const Menu = () => {
  return (
    <main>
      <div className="sub_banner">
        <Image src={Slide1} alt="subbanner" layout="fill" objectFit="cover" objectPosition="center" />
        <div className="swiper_round_bottom" />
      </div>

      <div style={{ padding: "0 135px" }}>
        <p style={{ margin: "30px 0", fontSize: "30px" }}>🌟신메뉴 출시🌟</p>
        <div style={{ display: "flex" }}>
          <Image src={Menu1} alt="메뉴1" width={750} height={500} />
          <div style={{ textAlign: "center", flex: 1 }}>
            <p style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "bold" }}>우대왕 갈비탕</p>
            <p>한우 왕갈비로 끊인 신메뉴 짜짠</p>
          </div>
        </div>
      </div>

      <ColumnTab />
    </main>
  );
};

export default Menu;
