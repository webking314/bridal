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
export default function TimeLine() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="timeline_page">
      <Head>
        <title>Timeline | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white text-capitalize">
            Historical Timeline.
            <br />
            Since <span>1840</span>
          </h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start guide section */}
      <div className="guide-section py-5">
        <div className="row r-container py-5">
          <div className="col-lg-3 col-md-4 col-12 p-0 pe-md-5 pe-5 py-5">
            <h3 className="title text-capitalize text-md-start text-center">
              180 years of craftsmanship.
            </h3>
          </div>
          <div className="col-lg-9 col-md-8 col-12 p-0 ps-md-5 ps-0 py-5">
            <p className="guide-text text-md-start text-center">
              Not long after our establishment in 1840, Queen Victoria of
              England reached out to Coster for a very special assignment.
              Without realizing it at that time, this assignment would mark the
              start of an impressive legacy.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}
    </div>
  );
}
