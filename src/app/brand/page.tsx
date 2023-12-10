import Image from "next/image";
import Slide1 from "@/assets/slide1.jpg";
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

      <div className="brand_intro_wrap">
        <Image src={Slide2} alt="brand_image" />
        <div className="brand_intro_desc">
          <p className="brand_intro_title">
            “국가대표”맛과 “정직한”가격으로
            <br />
            000하는 우대왕
          </p>
          <p className="brand_intro_contents">
            “국가대표”출신 쉐프가 직접 만들어 그동안
            <br />
            맛볼수 없었던 가장 완벽한 맛과
            <br />
            다수의 자체공장을 직접운용 그 어떠한
            <br />
            브랜드보다 가장 “정직한” 가격임을 자부할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="cowking_wrap">
        <p className="cowking_intro">우대왕 소개</p>
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

        <p className="cowking_intro">우대왕이 점주님들과 이루고자 하는거 적기</p>
      </div>
    </main>
  );
};

export default Brand;
