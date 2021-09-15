import React, { useState, useRef, useEffect } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Autoplay, Navigation]);

export default function AboutSlider({slides}) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="about-slider">
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          590: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
          1: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={"/img/homepage/" + item.url}
                alt="category"
                className="round"
              />
              <p className="mt-3">{item.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="btn-bottom-panel mt-5">
        <button ref={navigationPrevRef} className="btn px-0 me-5">
          <img src="/img/common/leftArrow_black.png" alt="rightArrow" />
        </button>
        <button ref={navigationNextRef} className="btn px-0">
          <img src="/img/common/rightArrow_black.png" alt="rightArrow" />
        </button>
      </div>
    </div>
  );
}
