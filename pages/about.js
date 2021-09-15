import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import { RiPlayCircleFill } from "react-icons/ri";
import AboutSlider from "../components/aboutSlider";

export default function About() {
  return (
    <div className="about_page">
      <Head>
        <title>About | Royal Coster</title>
      </Head>
      <Header page="about" />
      {/* Start hero section */}
      <div className="hero-section"></div>
      {/* End Hero section */}

      {/* Start guide section */}
      <div className="guide-section py-md-5">
        <div className="row r-container py-5">
          <div className="col-md-5 col-12 p-0 pe-md-5 py-5">
            <h3 className="title text-capitalize text-md-start text-center">
              Our legacy of 180 years of <span>diamond craftsmanship</span>
            </h3>
          </div>
          <div className="col-md-7 col-12 p-0 ps-md-5 ps-0 pt-md-5 pb-5">
            <p className="guide-text text-md-start text-center">
              The world’s oldest and most trusted diamond factory has a rich and
              compelling history. Royal Coster Diamonds is around for a long
              time, dating back all the way to at least 1840. Actually, Mr.
              Coster founded his company before that date, but we just cannot
              prove it. Therefore, we stick to what we do know. Let us tell you
              more about our eventful history. A few of our highlights are:
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start video section */}
      <div className="video-section">
        <div className="r-container">
          <img
            src="/img/about/video_img.jpg"
            className="video_img round"
            alt="video_img"
          />
          <RiPlayCircleFill className="btn-play" />
        </div>
      </div>
      {/* End video section */}

      {/* Start acticle section */}
      <div className="acticle-section r-container">
        <AboutSlider/>
      </div>
      {/* End acticle section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
