"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Image from "next/image";
import Slide1 from "@/assets/slide4.jpg";
import Shop1 from "@/assets/shop1.png";

const GoogleMapComp = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

  const center = {
    lat: 37.440168,
    lng: 127.172509,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });
  // const locations = [
  //   { place: '--', lat: , lng: -- },
  // ];

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();

    bounds.extend(new window.google.maps.LatLng(37.440168, 127.172509));
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <main>
      <div className="sub_banner">
        <Image src={Slide1} alt="subbanner" layout="fill" objectFit="cover" objectPosition="center" />
        <div className="swiper_round_bottom" />
      </div>

      <div style={{ padding: "0 50px" }}>
        <GoogleMap mapContainerStyle={{ width: "100%", height: "700px" }} center={center} zoom={15} onLoad={onLoad} onUnmount={onUnmount}>
          <MarkerF position={center} title="우대왕" />
        </GoogleMap>
      </div>

      <div style={{ padding: "0 220px", margin: "100px 0" }}>
        <p style={{ marginBottom: "20px", fontWeight: "bold" }}>신규 매장 안내</p>
        <div style={{ display: "flex" }}>
          <Image src={Shop1} alt="subbanner" style={{ flex: 1 }} />
          <div style={{ flex: 1, background: "#d9d9d9" }}>
            <p>강남점</p>
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 150px", marginBottom: "100px" }}>
        <p style={{ marginBottom: "20px", fontWeight: "bold" }}>장소</p>
        <div style={{ display: "flex", flexWrap: "wrap", rowGap: "40px", justifyContent: "space-between" }}>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Image src={Shop1} alt="subbanner" style={{ width: "100%" }} />
            <p>
              24년 1월, 서울의 핵심
              <br />
              테헤란로에 우대왕이 찾아 갑니다
            </p>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div>실패</div>
  );
};

export default GoogleMapComp;
