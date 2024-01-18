import Image from "next/image";
import Slide1 from "@/assets/slide4.jpg";
import Slide2 from "@/assets/slide2.jpg";
import Chef from "@/assets/chef.png";
import SubSlide from "@/components/brand/SubSlide";

const Brand = () => {
  return (
    <main>
      <div className="sub_banner">
        <Image src={Slide1} alt="subbanner" layout="fill" objectFit="cover" objectPosition="center" />
        <div className="swiper_round_bottom" />
      </div>

      <div className="brand_intro_wrap" style={{ marginTop: "105px" }}>
        <Image src={Slide2} alt="brand_image" />
        <div className="brand_intro_desc">
          <p className="brand_intro_title">
            대한민국 국가대표 맛<br />
            정직한 가격으로
            <br />
            승부하는 우대왕
          </p>
          <p className="brand_intro_contents">
            “국가대표”출신 쉐프가 직접 만들어 그동안맛볼수 없었던 가장 완벽한 맛과다수의 자체공장을 직접운용 그 어떠한브랜드보다 가장 “정직한” 가격임을 자부할 수 있습니다.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "160px" }}>
        <p style={{ textAlign: "center" }}>우대왕은 대한민국 최고의 “공장형” 프렌차이즈 입니다</p>
        <div className="greywrap_center">
          <div className="cir_grey">개발</div>
          <div className="cir_grey">생산</div>
          <div className="cir_grey">유통</div>
        </div>

        <div className="cir_grey" style={{ margin: "100px auto 0" }}>
          우대왕
        </div>
      </div>

      <div className="cowking_wrap">
        <div className="brand_intro_wrap">
          <p className="chef_intro">쉐프 인사말 , 경력, 등등 소개말</p>
          <Image src={Chef} alt="chef" />
        </div>

        <div className="brand_intro_wrap">
          <SubSlide />
          <p className="chef_intro">쉐프 인사말 , 경력, 등등 소개말</p>
        </div>

        <div className="brand_intro_wrap">
          <p className="chef_intro">쉐프 인사말 , 경력, 등등 소개말</p>
          <SubSlide />
        </div>
      </div>
    </main>
  );
};

export default Brand;
