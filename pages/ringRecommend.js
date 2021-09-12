import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import CraftingIdea from "../components/craftingIdea";
import Instagram from "../components/instagram";
import { RiCustomerService2Fill, RiChat1Line } from "react-icons/ri";

const pointRang = ["€3000 - €6000", "€6000 - €9000", "€12000 - €15000"];
const shapeType = [
  "round",
  "princess",
  "cushion",
  "EMERALD",
  "OVAL",
  "RADIANT",
  "ASSCHER",
  "MARQUISE",
  "HEART",
  "PEAR",
];
const lookingFor = ["Fair", "GOOD", "VERY GOOD", "EXCELLET"];
const ringStyle = [
  "SOLITAIRE",
  "PAVE",
  "CHANNEL SET",
  "SIDE-STONE",
  "THREE-STONE",
  "TENSION",
  "HALO",
  "VINTAGE",
];
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
      <div className="guide-section py-md-5">
        <div className="row r-container py-5">
          <div className="col-lg-3 col-md-4 col-12 p-0 pe-md-5 pe-5 py-5">
            <h3 className="title text-capitalize text-md-start text-center">
              We’ll find for you
            </h3>
          </div>
          <div className="col-lg-9 col-md-8 col-12 p-0 ps-md-5 ps-0 pt-md-5 pb-5">
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

      {/* Start pick choice section */}
      <div className="pick-choice-section r-container py-md-5">
        <div className="title-panel my-5 pt-md-5">
          <h3 className="title blue-text text-capitalize py-4 m-0">
            Pick your choice
          </h3>
        </div>
        <div className="row pick-panel m-0 pt-md-5">
          <div className="setting-panel col-lg-6 col-12 order-lg-first order-last p-0">
            <div className="price-point-panel mb-5">
              <label htmlFor="pricePoint" className="text-uppercase pb-3">
                My Price point is...
              </label>
              <select
                className="form-select price-point round-form px-4 py-3 text-capitalize"
                id="pricePoint"
                aria-label="Default select example"
                placeholder="Price Point"
              >
                {pointRang.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={index}
                      className="text-capitalize"
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="diamon-shape-panel mb-5">
              <label htmlFor="diamondShape" className="text-uppercase pb-3">
                My Diamonds is...
              </label>
              <select
                className="form-select diamond-shape round-form px-4 py-3 text-capitalize"
                id="diamondShape"
                aria-label="Default select example"
                placeholder="Pick a diamond shape"
              >
                {shapeType.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={index}
                      className="text-capitalize"
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="looking-for-panel mb-5">
              <label htmlFor="lookingFor" className="text-uppercase pb-3">
                My Looking for is...
              </label>
              <select
                className="form-select looking-for round-form px-4 py-3 text-capitalize"
                id="lookingFor"
                aria-label="Default select example"
                placeholder="Looking for..."
              >
                {lookingFor.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={index}
                      className="text-capitalize"
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="ring-style-panel mb-5">
              <label htmlFor="ringStyle" className="text-uppercase pb-3">
                My Setting is... *Optional
              </label>
              <select
                className="form-select price-point round-form px-4 py-3 text-capitalize"
                id="ringStyle"
                aria-label="Default select example"
                placeholder="Pick a ring Style"
              >
                {ringStyle.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={index}
                      className="text-capitalize"
                    >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn blue-btn btn-myRing text-uppercase round-form mb-4 px-5 py-3">
              FING MY RING
            </button>
            <div className="round need-help-panel px-5 mb-4">
              <div className="title-panel d-flex justify-content-between align-items-center flex-sm-row flex-column py-5">
                <h3 className="text-uppercase m-0 mb-sm-0 mb-5">Need Help?</h3>
                <div className="link-panel d-flex">
                  <Link href="#">
                    <a className="text-uppercase me-4 d-flex align-items-center blue-text">
                      <RiCustomerService2Fill className="me-2" />
                      contact
                    </a>
                  </Link>

                  <Link href="#">
                    <a className="text-uppercase d-flex align-items-center blue-text">
                      <RiChat1Line className="me-2" />
                      chat
                    </a>
                  </Link>
                </div>
              </div>
              <div className="purchase-panel d-flex justify-content-between align-items-center flex-sm-row flex-column py-5">
                <h3 className="text-uppercase m-0 mb-sm-0 mb-5">
                  Not ready to purchase online?
                </h3>
                <button className="btn btn-schedule text-uppercase blue-text px-5 py-3">
                  Schedule an appointment
                </button>
              </div>
            </div>
          </div>
          <div className="image-panel col-lg-6 col-12 p-0 d-lg-flex d-block justify-content-end mb-lg-0 mb-5">
            <div className="image-cover pb-lg-0 pb-5 pe-lg-0 pe-5">
              <img
                src="/img/ringRecommend/image-1.png"
                className="pick-image round me-5"
                alt="pick-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* End pick choice section */}

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
