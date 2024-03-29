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

const SubSlide = () => {
  const keyExtractor = useId();
  const slideArray = [Slide1, Slide2, Slide3, Slide4];
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className="subSlide_wrap">
      <Swiper className="subSlide_container" navigation={{ enabled: true }} spaceBetween={0} loop /* autoplay={{ delay: 3000, disableOnInteraction: false }}*/>
        {slideArray.map((slide, index) => (
          <SwiperSlide key={`${keyExtractor}-${index}`}>
            <div className={`subSlide_item`}>
              <Image src={slide} alt={`slide-${index}`} layout="fill" objectFit="cover" objectPosition="center" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SubSlide;
