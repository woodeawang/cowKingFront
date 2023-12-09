import Banner from "@/components/main/Banner";
import Image from "next/image";
import Shop from "@/assets/shop.jpg";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="new_shop_wrap center">
        <div className="new_shop_container">
          <div className="new_shop_left">
            <Image src={Shop} alt="new_shop" />
          </div>
          <div className="new_shop_right">
            <div className="new_shop_right_inner">
              <h2 className="new_shop_name">강남점</h2>
              <p className="new_shop_desc">
                우대왕 3호점 ‘강남점’이{" "}
                <span>
                  <br />
                </span>
                2월 10일 개점합니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
