import LOGO from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header id="header">
      <div className="header_wrap center">
        <div className="site_logo">
          <Link href="/">
            <Image src={LOGO} alt="logo" />
          </Link>
        </div>
        <nav id="gnb">
          <ul className="gnb">
            <li className="gnb_item">
              <Link href="/brand">브랜드 소개</Link>
            </li>
            <li className="gnb_item">
              <Link href="/sub/menu.jsp#tab1">메뉴 소개</Link>
            </li>
            <li className="gnb_item">
              <Link href="/sub/location.jsp">매장 안내</Link>
            </li>
            <li className="gnb_item">
              <Link href="/sub/newsnevent.jsp">가맹 문의</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
