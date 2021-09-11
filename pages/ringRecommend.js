import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import CraftingIdea from "../components/craftingIdea";
import Instagram from "../components/instagram";

export default function RingRecommend() {
  return (
    <div className="ringRecommend_page">
      <Head>
        <title>Rign Recommend | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white text-capitalize">
            Ring <br />
            Recommender
          </h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start guide section */}
      <div className="guide-section py-5">
        <div className="row r-container py-5">
          <div className="col-lg-3 col-md-4 col-12 p-0 pe-md-5 pe-5 py-5">
            <h3 className="title text-capitalize text-md-start text-center">
              We’ll find for you
            </h3>
          </div>
          <div className="col-lg-9 col-md-8 col-12 p-0 ps-md-5 ps-0 py-5">
            <p className="guide-text text-md-start text-center">
              We’ll find the perfect diamond and setting within your budget.
              Just answer a few simple questions and we’ll put together a
              beautiful engagement ring. We promise it won’t be as complicated
              as filling out your tax returns.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

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
