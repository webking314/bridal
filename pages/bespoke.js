import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import CraftingIdea from "../components/craftingIdea";
import Instagram from "../components/instagram";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const timeLineLists = [
  {
    title: "Share your idea",
    description:
      "Contact our design team to let us know what jewellery you would like to create. The more detailed your enquiry, the easier we can craft your dream jewellery piece. Once you agree to a design, our experts will offer you a quote on your bespoke piece.",
    image: "item-1.png",
  },
  {
    title: "Design your item.",
    description:
      "After settling a deposit fee, our team will start working on the fine details of your piece. This is a collaborative process between you and the designer. To better illustrate your vision, we can provide drawings, computer designs and mock-ups of the jewel. Our experts will not proceed to production until you are completely satisfied with the result.",
    image: "item-2.png",
  },
  {
    title: "Receive your dream jewellery.",
    description:
      "Contact our design team to let us know what jewellery you would like to create. The more detailed your enquiry, the easier we can craft your dream jewellery piece. Once you agree to a design, our experts will offer you a quote on your bespoke piece.",
    image: "item-3.png",
  },
];

let signatureSliders = [
  { url: "product-1.png" },
  { url: "product-2.png" },
  { url: "product-3.png" },
  { url: "product-4.png" },
];

SwiperCore.use([Autoplay, Navigation]);
export default function Bespoke() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="bespoke_page">
      <Head>
        <title>Bespoke | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white text-capitalize">
            Expertly <span>crafted</span>.<br />
            Eternally yours.
          </h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start guide section */}
      <div className="guide-section py-5">
        <div className="row r-container py-5">
          <div className="col-lg-3 col-md-4 col-12 p-0 pe-md-5 pe-5 py-5">
            <h3 className="title text-capitalize text-md-start text-center">
              We will guide you
            </h3>
          </div>
          <div className="col-lg-9 col-md-8 col-12 p-0 ps-md-5 ps-0 py-5">
            <p className="guide-text text-md-start text-center">
              For your jewellery to tell a story, sometimes it’s best you
              inspire the narrative. Craft your vision into reality through our
              outstanding bespoke service. From engagement rings, to wedding
              bands, to unique jewellery creations, our team of experts will
              guide you through the creative process of fine jewellery design.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start journey section */}
      <div className="journey-section py-5 r-container">
        <h3 className="title text-capitalize text-center mt-5 py-5">
          The <span>Journey</span>
          <br />
          of Jewel
        </h3>
        <Timeline className="time-line mb-0 pb-0" align="alternate">
          {timeLineLists.map((item, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <Typography>
                    <div className="text-panel">
                      <p className="item-step m-0 pb-4 text-uppercase">
                        Step {index + 1}
                      </p>
                      <h3 className="item-title m-0 pb-5">{item.title}</h3>
                      <p className="item-description">{item.description}f</p>
                    </div>
                  </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot className={"line-dot-" + index} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    <img
                      src={"/img/bespoke/" + item.image}
                      className="item-image"
                      alt="timeLine-image"
                    />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
        <div className="btn-panel text-center pb-5 mb-5">
          <button className="btn blue-btn round-form text-uppercase px-5 py-3 mb-5">
            send an enquiry
          </button>
        </div>
      </div>
      {/* End journey section */}
      {/* Start signature section */}
      <div className="signature-section pt-5">
        <div className="title-panel py-5">
          <div className="r-container row mt-5">
            <div className="col-6 p-0 pe-5 py-5">
              <h3 className="m-0 pe-5 me-5">
                Royal Coster Signature Creations
              </h3>
            </div>
            <div className="col-6 p-0 ps-5 py-5">
              <p className="m-0 ps-5 ms-5">
                From contemporary pieces, to timeless designs, to simple
                alterations, discover the artistry of fine craftsmanship.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-panel r-container">
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
            {signatureSliders.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={"/img/bespoke/" + item.url}
                    alt="category"
                    className="round"
                  />
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
      {/* End signature section */}
      {/* Start Help section */}
      <CraftingIdea />
      {/* End Help section */}

      {/* Start Instagram section */}
      <Instagram />
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
