import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import himg1 from "../assets/heroImg1.jpg"
import himg2 from "../assets/heroImg2.jpg"
import himg3 from "../assets/heroImg3.jpg"
import "swiper/css";



const Slider = () => {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide><img className="w-full h-80 object-cover" src={himg2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-80 object-cover" src={himg1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-80 object-cover" src={himg3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
