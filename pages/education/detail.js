import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Instagram from "../../components/instagram";
import { HiOutlineArrowLeft } from "react-icons/hi";

const educationData = [
  { image: '/img/education/about (1).png', title: "Loose Diamonds" },
  { image: '/img/education/about (2).png', title: "Engagement Rings" },
  { image: '/img/education/about (3).png', title: "Natural Gemstones" },
  { image: '/img/education/about (4).png', title: "Wedding Rings" },
  { image: '/img/education/about (5).png', title: "Fine Jewelry" },
  { image: '/img/education/about (6).png', title: "Watches" },
]

const typeBtns = [
  {name: "RING TYPES", value: "ring-types"},
  {name: "SETTING TYPES", value: "setting-types"},
  {name: "RING SIZING", value: "ring-sizing"},
  {name: "METALS", value: "metals"},
  {name: "BUDGET", value: "budget"},
  {name: "CHOOSE PERFECT RING", value: "choose-perfect-ring"},
  {name: "MANUFACTURING", value: "manufacturing"},
]

export default function EducationDetail() {
  const [type, setType] = useState();

  return (
    <div className="education-detail_page">
      <Head>
        <title>Education Detail | Royal Coster</title>
      </Head>
      <Header />
      {/* Start state section */}
      <div className="state-section">
        <div className="link-panel r-container py-3 d-sm-flex d-none align-items-center text-uppercase">
          <button
            className="btn back-arrow d-flex me-3 blue-text px-0"
            onClick={() => router.back()}
          >
            <HiOutlineArrowLeft />
          </button>
          <Link passHref={true} href="/">
            <a className="mx-2">HOME</a>
          </Link>
          /
          <Link passHref={true} href="/#">
            <a className="mx-2">EDUCATION</a>
          </Link>
          /
          <Link passHref={true} href="#">
            <a className="mx-2">Engagement Rings</a>
          </Link>
          -
          <span className="title ms-2 text-uppercase blue-text">
            Ring Types
          </span>
        </div>
        <div className="link-panel r-container py-3 mb-md-5 mb-0 d-sm-none d-flex align-items-center text-uppercase">
          <button
            className="btn back-arrow d-flex me-3 blue-text px-0"
            onClick={() => router.back()}
          >
            <HiOutlineArrowLeft />
          </button>
          ...
          <Link passHref={true} href="#">
            <a className="mx-2">Engagement Rings</a>
          </Link>
          -
          <span className="title ms-2 text-uppercase blue-text">
            Ring Types
          </span>
        </div>
      </div>
      {/* End state section */}

      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container row">
          <div className="col-md-6 pt-5 pb-md-5 my-5 pe-md-5">
            <div className="round banner-image hover-scale me-md-5">
              <img src="/img/education/detail-banner.png" alt="detail-banner-image" />
            </div>
          </div>
          <div className="col-md-6 ps-md-5 text-panel d-flex justify-content-center flex-column">
            <h3 className="title blue-text ms-md-5">Engagement Rings</h3>
            <p className="description ms-md-5">One of the most important steps in buying an engagement ring is determining your ring type. Royal Coster Diamodns offers a variety of engagement ring styles from classic solitaires to modern tension rings.</p>
          </div>
        </div>
      </div>
      {/* End hero section */}
      {/* Start detail-section */}
      <div className="detail-section r-container py-5">
        <div className="btn-panel d-flex justify-content-between">
          {
            typeBtns.map((item, index) => {
              return (
                <button className="btn btn-type" key={index} onClick={() => setType(item.value)}>
                  {item.name}
                </button>
              )
            })
          }
        </div>
      </div>

      {/* End detail-section */}
      {/* Start Instagram section */}
      <Instagram />
      {/* End Instagram section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

    </div >
  );
}
