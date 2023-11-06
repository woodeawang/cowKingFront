"use client";
import styles from "./page.module.css";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <main className={styles.main}>
      <Swiper navigation={{ enabled: true }} spaceBetween={0} loop autoplay={{ delay: 3000, disableOnInteraction: false }} style={{ width: "100%", height: "500px", border: "1px solid #333" }}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </main>
  );
}
