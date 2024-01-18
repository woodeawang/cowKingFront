"use client";
import { useId } from "react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "@/assets/slide1.jpg";
import Slide2 from "@/assets/slide2.jpg";
import Slide3 from "@/assets/slide3.jpg";
import Slide4 from "@/assets/slide4.jpg";
import Image from "next/image";

const Banner = () => {
  const keyExtractor = useId();
  const slideArray = [Slide1, Slide2, Slide3, Slide4];
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className="swiper_wrap">
      <Swiper className="swiper_container" navigation={{ prevEl: null, nextEl: null }} spaceBetween={0} loop autoplay={{ delay: 5000, disableOnInteraction: false }}>
        {slideArray.map((slide, index) => (
          <SwiperSlide key={`${keyExtractor}-${index}`}>
            <div className={`slide_item`}>
              <Image src={slide} alt={`slide-${index}`} layout="fill" objectFit="cover" objectPosition="center" />
              <div className="black">강아지</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper_round_bottom" />
    </div>
  );
};

export default Banner;
