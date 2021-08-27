import React, { useState, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  let collectionSliders = [
    { url: "Rectangle 33.png", title: "Empress Collection" },
    { url: "Rectangle 33.png", title: "Wedding & Anniversary" },
    { url: "Rectangle 33.png", title: "Royal Classics" },
    { url: "Rectangle 33.png", title: "Fine Jewelry" },
    { url: "Rectangle 33.png", title: "Watches" },
  ];
  return (
    <div className="main">
      <Header />
      {/* Start hero section */}
      <div className="hero">
        <div className="text-panel">
          <h1>All the colors of the rainbow!</h1>
          <p className="mt-4 mb-5 pt-2">Exclusively at Royal Coster Diamonds</p>
        </div>
        <div className="btn-panel pt-5">
          <button className="btn rainbow-btn text-white px-4 py-2">
            Rainbow Collection
          </button>
          <button className="btn btn-outline-dark mx-3 px-4 py-2">
            SHOP NOW
          </button>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start Categories section */}
      <div className="categories row m-0">
        <div className="col-3 p-0">
          <Link href="#">
            <a>
              <div>
                <img src="/img/category1.png" alt="category" />
                <div className="hover-title p-4">Earrings</div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-3 p-0">
          <Link href="#">
            <a>
              <div>
                <img src="/img/category2.png" alt="category" />
                <div className="hover-title p-4">Earrings</div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-3 p-0">
          <Link href="#">
            <a>
              <div>
                <img src="/img/category3.png" alt="category" />
                <div className="hover-title p-4">Earrings</div>
              </div>
            </a>
          </Link>
        </div>
        <div className="col-3 p-0">
          <Link href="#">
            <a>
              <div>
                <img src="/img/category4.png" alt="category" />
                <div className="hover-title p-4">Earrings</div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {/* End Categories section */}

      {/* Start Collection section */}
      <div className="collections px-5 pt-5">
        <div className="row m-0 p-0 top-panel align-items-center">
          <h2 className="col-6 text-start p-0 pb-5 mt-5">Our Collections</h2>
          <div className="col-6 p-0 m-0 text-end">
            <button ref={navigationNextRef} className="btn">
              <img src="/img/rightArrow_black.png" alt="rightArrow" />
            </button>
          </div>
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
                <img src={"/img/" + item.url} alt="category" />
                <p className="mt-3">{item.title}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="btn-bottom-panel mt-5">
          <button
            ref={navigationPrevRef}
            className="btn px-0 me-5 btn-outline-none"
          >
            <img src="/img/leftArrow_black.png" alt="rightArrow" />
          </button>
          <button ref={navigationNextRef} className="btn px-0">
            <img src="/img/rightArrow_black.png" alt="rightArrow" />
          </button>
        </div>
      </div>
      {/* End Collection section */}

      {/* Start Help section */}
      <div className="help">
        <div className="row mx-0 justify-content-end">
          {/* <div className="col-6 px-0 img-panel"></div> */}
          <div className="col-6 px-0">
            <div className="text-panel">
              <h2 className="title">
                Let us <span>help you!</span>
              </h2>
              <p>Help you to get started.</p>
            </div>
            <div className="service_panel p-5">
              <h3 className="title mb-4">Ring Recommender</h3>
              <p className="mb-5 pb-4">
                Tell us your budget and preferences and we’ll find you the right
                diamond and setting.
              </p>
              <Link href="#">
                <a className="design-service py-4 px-5 mb-4">
                  Custom Design Services
                </a>
              </Link>
              <Link href="#">
                <a className="upgrade-diamond py-4 px-5 text-white d-flex justify-content-between align-items-center">
                  <p className="m-0 p-0">Upgrade your Diamonds</p>
                  <img src="/img/rightArrow.png" alt="rightArrow" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Help section */}

      {/* Start Instagram section */}
      <div className="instagram pb-5">
        <div className="row mx-0 mb-5 text-panel">
          <div className="col-6">
            <h1>
              Follow us on <div>Instagram</div>
            </h1>
          </div>
          <div className="col-6 link-panel">
            <div className="mx-0 text-end">
              Follow{" "}
              <Link href="#">
                <a className="text-primary">#Royalcoster</a>
              </Link>{" "}
              @instagram for"
            </div>
            <div className="mx-0 text-end">
              <Link href="#">
                <a className="text-primary">#diamondstories</a>
              </Link>
              ,{" "}
              <Link href="#">
                <a className="text-primary">#inspiration</a>
              </Link>{" "}
              &{" "}
              <Link href="#">
                <a className="text-primary">#amsterdiamonds</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row gallery-panel m-0 p-0">
          <div className="col-9 d-flex ps-0 flex-column justify-content-between">
            <div className="row pb-2">
              <div className="col-4">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    <img src="/img/Rectangle 33.png" alt="gallery-img" />
                    {/* <img src="/img/Rectangle 34.png" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
              <div className="col-4">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    <img src="/img/Rectangle 33.png" alt="gallery-img" />
                    {/* <img src="/img/Rectangle 36.png" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
              <div className="col-4">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    {/* <img src="/img/Rectangle 38.png" alt="gallery-img" /> */}
                    <img src="/img/Rectangle 33.png" alt="gallery-img" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-8">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    <img src="/img/Rectangle 33.png" alt="gallery-img" />
                    {/* <img src="/img/Rectangle 37.png" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
              <div className="col-4">
                <Link href="#">
                  <a className="instagram-link gallery-type-1">
                    <img src="/img/Rectangle 33.png" alt="gallery-img" />
                    {/* <img src="/img/Rectangle 35.png" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-3 pe-0">
            <Link href="#">
              <a className="instagram-link gallery-type-2">
                <img src="/img/Rectangle 33.png" alt="gallery-img" />
                {/* <img src="/img/Rectangle 1.png" alt="gallery-img" /> */}
              </a>
            </Link>
          </div>
        </div>
        <button className="btn mt-5 px-5 py-3 follow-btn btn-outline-dark">
          Follow @costerdiamondsofficial
        </button>
      </div>
      {/* End Instagram section */}

      {/* Start Schedule section */}
      <div className="schedule">
        <div className="row m-0">
          <div className="col-md-6 col-12 ps-0">
            <div className="schedule-panel d-flex flex-column justify-content-between p-5">
              <div className="text-panel text-white p-5">
                <h3>Visit</h3>
                <h2>Royal Coster</h2>
                <p className="pt-5">
                  Book an experience and learn about our heritage or visit us to
                  see more diamonds & jewelry
                </p>
              </div>
              <div>
                <button className="btn text-uppercase ms-5 mb-5 px-5 py-3">
                  Schedule consultation
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 pe-0">
            <div className="newsletter-panel d-flex flex-column justify-content-between p-5">
              <div className="text-panel p-5">
                <h3>Sign up for</h3>
                <h2>Our Newsletter</h2>
                <p className="pt-5">
                  The fascinating world of diamonds presented by Royal Coster.
                  Products, tours and news. We won't spam your inbox.
                </p>
              </div>
              <div className="form-panel p-5">
                <input
                  type="text"
                  className="form-control p-3 mb-3"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  className="form-control p-3 mb-4"
                  placeholder="syedkaift@gmail.com"
                />
                <button className="btn px-5 py-3 text-white d-flex justify-content-between align-items-center m-0">
                  <span>SUBSCRIBE</span>
                  <img src="/img/rightArrow.png" alt="rightArrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
