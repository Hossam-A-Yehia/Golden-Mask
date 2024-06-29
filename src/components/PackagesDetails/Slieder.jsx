import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMG1 from "../../assets/PackagesDetails/slider1.png";
import IMG2 from "../../assets/PackagesDetails/slider2.jpeg";
import IMG3 from "../../assets/PackagesDetails/slider3.png";
import IMG4 from "../../assets/PackagesDetails/slider4.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" packages relative duration-0">
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={IMG1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={IMG1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
