import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import video_1 from "../slider/video/call of duty.gif";
import cyber_punk from "../slider/video/cyber_punk.gif";
import call_of_duty_modern_warfare from "../slider/video/black ops 2.gif";
import battlefield from "../slider/video/battlefield.gif";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import "../slider/style.css";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideData = [
    {
      video: battlefield,
      title: "Challenge the Limits",
      description:
        "Embark on a thrilling journey where imagination defies reality.",
    },
    {
      video: cyber_punk,
      title: "Step into the Neon Future",
      description: "Shape your fate in a chaotic, neon-lit cyberpunk world.",
    },
    {
      video: call_of_duty_modern_warfare,
      title: "Call of Duty Awaits",
      description: "Redefine modern warfare with intense, tactical combat.",
    },
    {
      video: video_1,
      title: "The Warfront Awaits",
      description: "Conquer epic battlegrounds with strategy and teamwork.",
    },
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper w-full md:h-[550px]"
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="video-slide rounded-xl">
            <img src={slide.video} alt="" />
            <div className="text-overlay">
              <h1 className="text-3xl md:text-5xl font-bold ">
                {activeSlide === index && <Typewriter words={[slide.title]} />}
              </h1>
              <p className="text-base md:text-xl mt-2">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
