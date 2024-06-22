import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AVT1 from "../../../assets/Home/testimonials/avatar1.png";
import AVT2 from "../../../assets/Home/testimonials/avatar2.png";
import AVT3 from "../../../assets/Home/testimonials/avatar3.png";
import AVT4 from "../../../assets/Home/testimonials/avatar4.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="flex flex-col gap-5">
          <p className="text-[20px] max-w-[800px] text-[#828282] ">
            "I had the most incredible vacation experience thanks to the amazing
            team at XYZ Travel Agency! From the moment I contacted them, their
            friendly and knowledgeable staff helped me plan the perfect
            itinerary. They took care of every de”
          </p>
          <ul className="flex gap-2">
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
          </ul>
          <div className="flex flex-col gap-3 items-center mt-4">
            <img src={AVT2} alt="" className=" size-20 rounded-full" />
            <h className="text-[20px] font-semibold">Klaus</h>
            <span className="text-[18px] font-semibold text-[#8F8F8F]">
              Prog
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-5">
          <p className="text-[20px] max-w-[800px] text-[#828282] ">
            "ledgeable staff helped me plan the perfect itinerary. They took
            care of every detail, from booking flights and accommodations to
            arranging local tours and activities.”
          </p>
          <ul className="flex gap-2">
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
          </ul>
          <div className="flex flex-col gap-3 items-center mt-4">
            <img src={AVT3} alt="" className=" size-20 rounded-full" />
            <h className="text-[20px] font-semibold">Ward Fathy</h>
            <span className="text-[18px] font-semibold text-[#8F8F8F]">
              Tripster
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-5">
          <p className="text-[20px] max-w-[800px] text-[#828282] ">
            "I had the most incredible vacation experience thanks to the amazing
            team at XYZ Travel Agency! From the moment I contacted them, their
            friendly and itinerary. They took care of every detail, from booking
            flights and accommodations to arranging local tours and activities.”
          </p>
          <ul className="flex gap-2">
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
          </ul>
          <div className="flex flex-col gap-3 items-center mt-4">
            <img src={AVT4} alt="" className=" size-20 rounded-full" />
            <h className="text-[20px] font-semibold">Nora Acholo</h>
            <span className="text-[18px] font-semibold text-[#8F8F8F]">
              Tripster
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-5">
          <p className="text-[20px] max-w-[800px] text-[#828282] ">
            "I had the most incredible vacation experience thanks to the amazing
            team at XYZ Travel Agency! From the moment I contacted them, their
            friendly and knowledgeable staff helped me plan the perfect
            itinerary. They took care of every detail, from booking flights and
            accommodations to arranging local tours and activities.”
          </p>
          <ul className="flex gap-2">
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
            <FaStar className="text-[#FFB800] text-3xl" />
          </ul>
          <div className="flex flex-col gap-3 items-center mt-4">
            <img src={AVT1} alt="" className=" size-20 rounded-full" />
            <h className="text-[20px] font-semibold">Nora Acholo</h>
            <span className="text-[18px] font-semibold text-[#8F8F8F]">
              Tripster
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
