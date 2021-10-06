import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import NumberFormat from "react-number-format";
import AppointmentModal from "../components/appointmentModal";
import renderHTML from "react-render-html";
import { RiArrowRightSFill, RiMailFill, RiPhoneFill, RiWhatsappFill, RiDvdFill } from "react-icons/ri";

export default function WhyRoyalCoster() {

  return (
    <div className="why-royal-coster_page">
      <Head>
        <title>Why Royal Coster | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white col-lg-4 col-md-6 col-sm-8 text-capitalize mb-5">
            Why <span>Royal</span> Coster
          </h1>
        </div>
      </div>

      {/* Start guide section */}
      <div className="guide-section">
        <div className="row r-container py-5">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">we go Beyond Expectations.</h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text mb-4">
              The world’s oldest and most trusted diamond factory has a rich and compelling history. Royal Coster Diamonds is around for a long time, dating back all the way to at least 1840. </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start our value section */}
      <div className="our-value-section r-container py-5">
        <h1 className="title py-5 my-5 blue-text text-center">Our <span>Core</span><br />Values</h1>
        <div className="idea-panel round text-center p-5">
          <img className="mark-image mb-5" src="/img/common/mobile_logo.png" alt="mark-image" />
          <div className="text-panel d-flex justify-content-evenly">
            <p><span>C</span>raftsmanship</p>
            <p><span>O</span>penness</p>
            <p><span>S</span>upportive</p>
            <p><span>T</span>rustworthy</p>
            <p><span>E</span>xceptional</p>
            <p><span>R</span>oyal</p>
          </div>
        </div>
        <div className="top-pink-box" />
        <div className="bottom-blue-box" />
        <div className="bottom-pink-box" />
      </div>
      {/* End our value section */}

      {/* Start passport section */}
      <div className="passpost-section py-5">
        <div className="r-container py-5 d-flex justify-content-between">
          <h3 className="title">The Royal Coster Passport explains our core values. These three values are:</h3>
          <ul>
            <li>Flexible</li>
            <li>Family & Connection</li>
            <li>Dedication & Service</li>
          </ul>
        </div>
      </div>
      {/* End passport section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

      <AppointmentModal />

    </div >
  );
}
