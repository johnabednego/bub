import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwipperElements.css";
import { EffectCards } from "swiper";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.jfif";
import slide5 from "./images/slide5.jfif";
import slide6 from "./images/slide6.jfif";
import slide7 from "./images/slide7.jfif";
import slide8 from "./images/slide8.jfif";
import slide9 from "./images/slide9.jfif";
import slide10 from "./images/slide10.jfif";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide10} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
