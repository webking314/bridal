import React, { useState, useRef, useEffect } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

let collectionSliders = [
  // { url: "Rectangle 29.png", title: "Empress Collection" },
  // { url: "Rectangle 30.png", title: "Wedding & Anniversary" },
  // { url: "Rectangle 31.png", title: "Royal Classics" },
  // { url: "Rectangle 32.png", title: "Fine Jewelry" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
  { url: "Rectangle 33.png", title: "Watches" },
];
SwiperCore.use([Autoplay, Navigation]);

export default function Collection() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="collections pt-5">
      <div className="r-container">
        <div className="row m-0 p-0 top-panel align-items-center">
          <h2 className="col-12 text-start p-0 pb-5 mt-5">Our Collections</h2>
        </div>
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
          breakpoints={{
            996: {
              slidesPerView: 4,
            },
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
          {collectionSliders.map((item, index) => {
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
    </div>
  );
}
