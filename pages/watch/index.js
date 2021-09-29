import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import NumberFormat from "react-number-format";
import WatchDetails from "../../components/watchDetails";


const logos = [
  { url: "#", image: "logo (1).png" },
  { url: "#", image: "logo (2).png" },
  { url: "#", image: "logo (3).png" },
  { url: "#", image: "logo (4).png" },
  { url: "#", image: "logo (5).png" },
  { url: "#", image: "logo (6).png" },
]

const watchData = [
  {
    title: "Montblanc Diamond Watches",
    description: "Superior craftsmanship in a range from grand complications to refined three-hand watches. These are the Montblanc Luxury Watches.",
    btnText: "Show Montblanc watches",
    coverImage: "watch-cover-1.png",
    itemTitle: "Montblanc Watches",
    items: [
      { url: "#", image: "watch-item-1.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
      { url: "#", image: "watch-item-2.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
      { url: "#", image: "watch-item-3.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
      { url: "#", image: "watch-item-4.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
    ]
  },
  {
    title: "Frederique Constant Diamond Watches",
    description: "Design, Innovation, Passion and Quality. Those are the core values of the brand Frederique Constant.",
    btnText: "SHOW FREDERIQUE CONSTANT WATCHES",
    coverImage: "watch-cover-2.png",
    itemTitle: "Frederique Constant Diamond Watches",
    items: [
      { url: "#", image: "watch-item-5.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
      { url: "#", image: "watch-item-6.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
      { url: "#", image: "watch-item-7.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
      { url: "#", image: "watch-item-8.png", title: "MONTBLANC HERITAGE", id: "#112533", cost: "2500" },
    ]
  }
]


export default function Watch() {
  return (
    <div className="watch_page">
      <Head>
        <title>Watch | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <p className="text-capitalize">Haute horlogerie</p>
          <h1 className="title text-white text-capitalize">
            Royal Coster<br />
            <span>Watches</span>
          </h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start guide section */}
      <div className="guide-section pt-5">
        <div className="row r-container py-sm-5 py-3">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">The finest watch brands</h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text">
              At Royal Coster Watches we sell high-end Swiss watches. In the heart of our 4 monumental villa’s it is a beacon of Haute Horlogerie with 3 of our rooms dedicated to watches from the best Swiss manufactures.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start logo section */}
      <div className="logo-panel r-container d-flex justify-content-between flex-wrap pb-3 pt-5">
        {
          logos.map((logo, index) => {
            return (
              <Link href={logo.url} key={index} >
                <a className="px-4 py-2 round-form pink-btn">
                  <img src={"/img/watch/logo/" + logo.image} width="130" height="130" alt="logo-image" />
                </a>
              </Link>
            )
          })
        }
      </div>
      <div className="logo-panel r-container d-flex justify-content-between flex-wrap pt-3 pb-5">
        {
          logos.map((logo, index) => {
            return (
              <Link href={logo.url} key={index} >
                <a className="px-4 py-2 round-form pink-btn">
                  <img src={"/img/watch/logo/" + logo.image} width="130" height="130" alt="logo-image" />
                </a>
              </Link>
            )
          })
        }
      </div>
      {/* End logo section */}

      {/* Start watch detail section */}
      <WatchDetails watchData={watchData} />
      {/* End watch detail section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div >
  );
}
