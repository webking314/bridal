import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import NumberFormat from "react-number-format";
import AppointmentModal from "../../components/appointmentModal";
import renderHTML from "react-render-html";
import WatchItems from "../../components/watchItems";
import { RiArrowRightSFill, RiMailFill, RiPhoneFill, RiWhatsappFill, RiDvdFill } from "react-icons/ri";

const descritionData = [
  {
    title: "Amsterdam Diamonds",
    image: "/img/tour/image-2.png",
    dscription: "Find out why Amsterdam became the City of Diamonds. And why Royals from all over the world chose Royal Coster Diamonds for their precious jewelry."
  },
  {
    title: "The Craft Up Close",
    image: "/img/tour/image-3.png",
    dscription: "Get the chance to sit behind a diamond polishing table where famous diamonds have been polished. Also, capture this unique moment on camera."
  },
  {
    title: "A Sparkling Memory",
    image: "/img/tour/image-4.png",
    dscription: "You will not only be bringing your newly gained knowledge home. You also receive a goodie bag with a sparkling surprise at the end of the tour."
  }
]

const toursData = [
  { title: "Luxury Shopping Experience", description: "During our Luxury Shopping Experience, you will be completely pampered. Choosing a diamond is a special occasion. While enjoying a glass of champagne, one of our diamond consultants will take you through all the ins and outs that come with choosing the perfect diamond.", image: "/img/tour/tour-1.png" },
  { title: "Luxury Shopping Experience", description: "During our Luxury Shopping Experience, you will be completely pampered. Choosing a diamond is a special occasion. While enjoying a glass of champagne, one of our diamond consultants will take you through all the ins and outs that come with choosing the perfect diamond.", image: "/img/tour/tour-1.png" },
  { title: "Free Guided Diamond Factory Tour", description: "Our guided diamond factory tour is completely free of charge. We give free guided tours in more than 35 languages. Get your ticket today and discover the magical world of diamonds!", image: "/img/tour/tour-3.png" },
  { title: "Luxury Shopping Experience", description: "Our engagement workshop is for couples who are preparing for an engagement or anniversary and want to learn more about diamonds before they purchase. Make buying your engagement ring an unforgettable experience.", image: "/img/tour/tour-4.png" },
  { title: "Luxury Shopping Experience", description: "Come in for a Royal Experience at Royal Coster Diamonds and combine it with 'This is Holland'. Discover all the beautiful things the Dutch are so famous for.", image: "/img/tour/tour-5.png" },
]

export default function Tour() {
  const [cost, setCost] = useState(23);

  return (
    <div className="tour_page">
      <Head>
        <title>Tour | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <p className="text-capitalize col-lg-4 col-md-6 col-sm-8 mb-3">Experience 180 years of diamond craftsmanship</p>
          <h1 className="title text-white col-lg-4 col-md-6 col-sm-8 text-capitalize mb-5">
            Tours <span>in</span> Amsterdam
          </h1>
        </div>
      </div>

      {/* Start guide section */}
      <div className="guide-section">
        <div className="row r-container py-5">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">magical world of diamonds</h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text mb-4">
              Diamonds can be bought at any jeweler around the world. So why is Royal Coster Diamonds the most renowned diamond supplier for Royal families around the world for 180 years? We believe the reason for this is a combination of unparalleled craftsmanship and trust.</p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start Description section */}
      <div className="description-section r-container py-5 my-5 d-flex align-items-center flex-column">
        <div className="main-panel row m-0 mb-5">
          <div className="image-panel col-lg-6 p-0 pe-lg-4 round mb-5 mb-lg-0">
            <img src="/img/tour/image-1.png" />
            <div className="px-4 py-3 cost-box blue-text round-form">
              <NumberFormat
                value={cost}
                displayType="text"
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={true}
                prefix="$ "
              />
            </div>
          </div>
          <div className="col-lg-6 p-0 ps-lg-4 text-panel">
            <h3 className="title text-capitalize blue-text mb-5">A Royal Experience</h3>
            <p className="mb-4">Diamonds can be bought at any jeweler around the world. So why is Royal Coster Diamonds the most renowned diamond supplier for Royal families around the world for 180 years? We believe the reason for this is a combination of unparalleled craftsmanship and trust.
            </p>
            <p className="mb-4">
              With our new Royal Experience we offer a new tour where you learn even more about our rich heritage.
            </p>
            <p>
              Learn why Queen Victoria, Empress Sisi and King Rama V of Siam not only trusted us with their diamonds but took the time to travel all the way to Amsterdam to witness with their own eyes how we crafted the most sparkling diamond jewelry.
            </p>
          </div>
        </div>
        <div className="sub-panel row m-0 pb-lg-5">
          {
            descritionData.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-5" key={index}>
                  <img src={item.image} className="mb-4" alt="description-image" />
                  <h3 className="mb-4 title blue-text">{item.title}</h3>
                  <p>{item.dscription}</p>
                </div>
              )
            })
          }
        </div>
        <button className="btn blue-btn btn-read-more round-form px-5 py-3 text-uppercase mb-lg-5">Read More</button>
      </div>
      {/* End Description section */}

      {/* Start more tour section */}
      <div className="more-tour-section mb-5">
        <div className="title-panel py-5">
          <h3 className="title my-lg-5 text-center py-5 blue-text">More <span>Tours</span> & Experiences</h3>
        </div>
        <div className="tours-panel">
          <div className="row r-container">
            {
              toursData.map((tour, index) => {
                return (
                  <div className="col-lg-4 col-md-6 tour-item px-3 mb-5" key={index}>
                    <div className="image-panel hover-scale round mb-4">
                      <img src={tour.image} className="tour-image" alt="tour-image" />
                    </div>
                    <h3 className="title mb-4 blue-text">{tour.title}</h3>
                    <p className="description mb-5">{tour.description}</p>
                    <Link href="#">
                      <a className="more-detail text-uppercase mb-5 d-flex">More Details <RiArrowRightSFill className="ms-2"/></a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* End more tour section */}

      {/* Start banner section */}
      <div className="banner-section r-container round row mt-5 mb-4">
        <div className="text-panel col-lg-7 col-12 p-0 p-md-5 p-sm-3">
          <h3 className="title text-capitalize px-5 pt-5 mb-5">Great For Events: The Champagne Diamond Surprise</h3>
          <div className="description mb-5 pb-5 px-5">
            <p className="mb-5">If you are looking for a sparkling exciting addition to any event; the Champagne Surprise is perfect for you. Every guest gets a glass of champagne with a little sparkling stone inside. But is it a real diamond or a fake one?</p>
            <p className="mb-0">Our diamond polishers will check each stone closely with a diamond loupe and reveal who is the lucky winner.</p>
          </div>
          <button className="btn pink-btn round-form ms-5 mb-5 text-uppercase py-3 px-5"
            data-bs-toggle="modal"
            data-bs-target="#appointment">BOOK APPOINTMENT</button>
        </div>
        <div className="bg-panel col-lg-5 col-12 order-first order-lg-last"></div>
      </div>
      {/* End banner section */}

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
