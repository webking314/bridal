import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import NumberFormat from "react-number-format";
import renderHTML from "react-render-html";
import WatchItems from "../components/watchItems";
import { RiArrowRightSFill } from "react-icons/ri";


export default function ContactUs() {

  return (
    <div className="contactus_page">
      <Head>
        <title>Contact Us | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <p className="text-capitalize mb-0">180 years of experience at your service</p>
          <h1 className="title text-white text-capitalize mb-5">
            Contact a diamond<br />consultant
          </h1>
        </div>
      </div>

      {/* Start guide section */}
      <div className="guide-section pt-5">
        <div className="row r-container py-sm-5 py-3">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">Get in touch</h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text">
              Couldn’t find what you were looking for? Tell us your wishes as detailed as possible and a diamond consultant will get in touch with you shortly.
            </p>
            <p className="guide-text">
              For questions about gifting and jewelry, contact a sales professional. For engagement guidance, contact a diamond consultant.
            </p>
            <p className="guide-text">
              You can also fill out the form below and we will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div >
  );
}
