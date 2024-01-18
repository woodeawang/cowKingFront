import Banner from "@/components/main/Banner";
import Image from "next/image";
import SearchIcon from "../assets/search_Ic.svg";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="main_searchWrap center">
        <div className="main_searchContainer" style={{ display: "flex", flexDirection: "column" }}>
          <p className="blackBox">매장 찾기</p>

          <div className="search_top center">
            <Image src={SearchIcon} alt={`돋보기`} />
            <p className="search_tit">가까운 우대왕을 찾아보세요!</p>
          </div>

          <div className="search_input">
            <input type="text" />
            <Image src={SearchIcon} alt={`인풋 돋보기`} width={15} height={15} />
          </div>

          <button>검색하기</button>
        </div>
      </div>
    </main>
  );
}
