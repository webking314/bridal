import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import Collection from "../components/collection";

export default function Home() {
  let categories = [
    { img: "category1.png", url: "#", title: "Earrings" },
    { img: "category2.png", url: "#", title: "Earrings" },
    { img: "category3.png", url: "#", title: "Earrings" },
    { img: "category4.png", url: "#", title: "Earrings" },
  ];
  let videoUrl = "/video/video.mp4";

  return (
    <div className="homepage">
      <Head>
        <title>Home | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          defaultmuted="defaultmuted"
          playsInline
          onContextMenu={() => false}
          preload="auto"
          className="d-block d-sm-none bg_video"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="r-container d-none d-sm-flex flex-column">
          <div className="text-panel col-lg-6 col-md-8 col-sm-10 col-12">
            <h1 className="text-capitalize">
              All the colors of the <span>rainbow!</span>
            </h1>
            <p className="mt-4 mb-5 pt-2">
              Exclusively at Royal Coster Diamonds
            </p>
          </div>
          <div className="btn-panel">
            <button className="btn rainbow-btn dark-btn round-form px-5 py-3 me-3 mt-5">
              Rainbow Collection
            </button>
            <button className="btn blue-outline-btn shop-now-btn round-form px-5 py-3 mt-5">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start Categories section */}
      <div className="categories d-none d-md-flex row m-0">
        {categories.map((item, index) => {
          return (
            <div className="col-lg-3 col-sm-6 col-12 p-0 mb-4" key={index}>
              <Link href={item.url}>
                <a>
                  <div className="category-item round">
                    <img src={"/img/homepage/" + item.img} alt="category" />
                    <div className="hover-title p-4">{item.title}</div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      {/* End Categories section */}

      {/* Start Collection section */}
      <div className="collection-section">
        <Collection />
      </div>
      {/* End Collection section */}

      {/* Start Help section */}
      <div className="help">
        <div className="r-container">
          <div className="row mx-0 justify-content-end">
            {/* <div className="col-6 px-0 img-panel"></div> */}
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 px-0">
              <div className="text-panel">
                <h2 className="title text-capitalize">
                  Let us <span>help you!</span>
                </h2>
                <p>Help you to get started.</p>
              </div>
              <div className="service_panel round p-5">
                <h3 className="title mb-4">Ring Recommender</h3>
                <p className="mb-5 pb-4">
                  Tell us your budget and preferences and we’ll find you the
                  right diamond and setting.
                </p>
                <Link href="#">
                  <a className="design-service pink-btn round-form text-uppercase py-4 px-5 mb-4">
                    Custom Design Services
                  </a>
                </Link>
                <Link href="#">
                  <a className="upgrade-diamond blue-btn round-form py-4 text-uppercase px-5 d-flex justify-content-between align-items-center">
                    <p className="m-0 p-0">Upgrade your Diamonds</p>
                    <img
                      src="/img/common/rightArrow.png"
                      alt="rightArrow"
                      className="white-arrow"
                    />
                    <img
                      src="/img/common/rightArrow_blue.png"
                      alt="rightArrow"
                      className="blue-arrow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Help section */}

      {/* Start Instagram section */}
      <div className="instagram pb-5">
        <div className="r-container">
          <div className="row mx-0 mb-5 text-panel">
            <div className="col-md-6 col-12 p-0">
              <h1 className="m-0 text-capitalize">
                Follow us on <div>Instagram</div>
              </h1>
            </div>
            <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-end link-panel">
              <div className="mx-0 text-md-end text-start">
                Follow{" "}
                <Link href="#">
                  <a className="text-primary">#Royalcoster</a>
                </Link>{" "}
                @Instagram For
              </div>
              <div className="mx-0 text-md-end text-start">
                <Link href="#">
                  <a className="text-primary">#Diamondstories</a>
                </Link>
                ,{" "}
                <Link href="#">
                  <a className="text-primary">#Inspiration</a>
                </Link>{" "}
                &{" "}
                <Link href="#">
                  <a className="text-primary">#Amsterdiamonds</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row gallery-panel m-0 p-0">
            <div className="col-md-6 col-12 m-0 p-0 d-flex flex-column justify-content-between">
              <div className="row m-0 p-0">
                <div className="col-6 d-flex m-0 p-0">
                  <Link href="#">
                    <a className="instagram-link gallery-type-1">
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 34.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                      {/* <img src="/img/homepage/Rectangle 34.png" alt="gallery-img" /> */}
                    </a>
                  </Link>
                </div>
                <div className="col-6 d-flex m-0 p-0">
                  <Link href="#">
                    <a className="instagram-link gallery-type-1">
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 38.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                      {/* <img src="/img/homepage/Rectangle 38.png"  className="round" alt="gallery-img" /> */}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row m-0 p-0">
                <Link href="#">
                  <a className="instagram-link p-0 gallery-type-1">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 37.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                    {/* <img src="/img/homepage/Rectangle 37.png"  className="round" alt="gallery-img" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-12 p-0">
              <div className="row m-0 p-0">
                <div className="col-6 p-0">
                  <div className="row m-0 p-0">
                    <Link href="#">
                      <a className="instagram-link p-0 gallery-type-1">
                        <div className="gallery-item round">
                          <img
                            src="/img/homepage/Rectangle 36.png"
                            className="round"
                            alt="gallery-img"
                          />
                          <div className="hover-panel"></div>
                        </div>
                        {/* <img src="/img/homepage/Rectangle 36.png"  className="round" alt="gallery-img" /> */}
                      </a>
                    </Link>
                  </div>
                  <div className="row m-0 p-0">
                    <Link href="#">
                      <a className="instagram-link p-0 gallery-type-1">
                        {/* <img src="/img/homepage/Rectangle 35.png"  className="round" alt="gallery-img" /> */}
                        <div className="gallery-item round">
                          <img
                            src="/img/homepage/Rectangle 35.png"
                            className="round"
                            alt="gallery-img"
                          />
                          <div className="hover-panel"></div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-6 d-flex p-0">
                  <Link href="#">
                    <a className="instagram-link gallery-type-2">
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 1.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                      {/* <img src="/img/homepage/Rectangle 1.png"  className="round" alt="gallery-img" /> */}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button className="btn round-form mt-5 px-5 py-3 follow-btn blue-outline-btn">
            Follow @Costerdiamondsofficial
          </button>
        </div>
      </div>
      {/* End Instagram section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
