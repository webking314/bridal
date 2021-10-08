import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DateRange } from 'react-date-range';
import NumberFormat from "react-number-format";
import AppointmentModal from "../../components/appointmentModal";
import renderHTML from "react-render-html";
import WatchItems from "../../components/watchItems";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowRightSFill, RiPlayCircleLine, RiPlayCircleFill, RiPlayFill } from "react-icons/ri";
import PropTypes from "prop-types";
var dateFormat = require("dateformat");

SwiperCore.use([Autoplay, Navigation]);

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

const banners = [
  { url: "#", image: "/img/tour/detail-image-1.png" },
  { url: "#", image: "/img/tour/detail-image-2.png" },
  { url: "#", image: "/img/tour/detail-image-3.png" },
  { url: "#", image: "/img/tour/detail-image-4.png" },
]
const toursData = [
  { title: "Free Guided Diamond Factory Tour", description: "Our guided diamond factory tour is completely free of charge. We give free guided tours in more than 35 languages. Get your ticket today and discover the magical world of diamonds!", image: "/img/tour/tour-6.png" },
  { title: "Breakfast at Coster", description: "This year, Royal Coster Diamonds celebrates its 180th anniversary. But there is an extra reason for a party", image: "/img/tour/tour-7.png" },
  { title: "This is Sparkling Holland", description: "Come in for a Royal Experience at Royal Coster Diamonds and combine it with 'This is Holland'. Discover all the beautiful things the Dutch are so famous for.", image: "/img/tour/tour-5.png" },
]

export default function TourDetail() {
  const [cost, setCost] = useState(23);
  const [preDate, setPreDate] = useState(new Date());
  const [bookDate, setBookDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className="tour-detail_page">
      <Head>
        <title>Tour Detail | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <p className="text-capitalize col-lg-4 col-md-6 col-sm-8 mb-3">Experience diamonds like<br />the Royals do</p>
          <h1 className="title text-white col-lg-4 col-md-6 col-sm-8 text-capitalize mb-5">
            A <span>Royal</span> Experience
          </h1>
          <button className="btn btn-play d-flex align-items-center justify-content-center">
            <RiPlayFill />
          </button>
        </div>
      </div>

      {/* Start guide section */}
      <div className="guide-section py-5">
        <div className="row r-container py-5">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">
              Royal <span>Treatment</span> for Our <span>Guests</span>
            </h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text mb-5">
              Diamonds can be bought at any jeweler around the world. So why is Royal Coster Diamonds the most renowned diamond supplier for Royal families around the world for 180 years? We believe the reason for this is a combination of unparalleled craftsmanship and trust.</p>
            <p className="guide-text mb-5">Today this Royal experience is within your reach. Visit our four monumental 19th century villa's and see how we create beauty that lasts for centuries. We give private guided tours during which your guide vividly tells you about the history of these precious stones and how Amsterdam became the City of Diamonds. You dive into our rich legacy that is filled with Royal Stories. Your guide explains how diamonds are formed and polished, while you see our polishers and goldsmiths up close. You can take a picture of yourself behind a real diamond polishing table and you learn how to analyze a diamond and why some diamonds sparkle more than others. At the end of the tour, you receive a nice goody bag you can use to value your or your family’s diamonds and diamond jewelry.</p>
            <p className="description-cost mb-0">Duration approx. 20 - 60 minutes | €12,50 per person</p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start banner section */}
      <div className="banner-section mb-5">
        <div className="cover-image-panel r-container round">
          <img src="/img/tour/detail_banner.png" className="cover-image" alt="cover-image" />
          <button className="btn btn-play d-flex"><RiPlayCircleFill /></button>
        </div>
        <div className="r-container slider-panel mt-4">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            className="mySwiper"
            breakpoints={{
              1024: {
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
          >
            {banners.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link href={item.url}>
                    <a>
                      <div className="image-panel hover-scale round">
                        <img
                          src={item.image}
                          alt="banner-imaeg"
                        />
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {/* End banner section */}

      {/* Start overview section */}
      <div className="overview-section r-container row pt-5">
        <div className="col-md-6 pe-lg-5">
          <div className="overview-panel pe-lg-5 mb-5">
            <h3 className="title blue-text">Overview</h3>
            <p className="description dark-text">Experience diamonds like the Royals did during our Royal Experience. See diamond polishers and goldsmiths at work while your personal guide explains the origin of diamonds and shows you why we are the number 1 choice for high quality diamonds and diamond jewelry.</p>
          </div>
          <div className="highlight-panel pe-lg-5">
            <h3 className="title text-uppercase mb-4">Highlights</h3>
            <ul className="description">
              <li className="mb-4">Personal Guided Tour</li>
              <li className="mb-4">Learn about the diamond history of Amsterdam</li>
              <li className="mb-4">See famous diamond artefacts like the Koh-I-Noor</li>
              <li className="mb-4">Explanation about the 4 C's of diamonds</li>
              <li className="mb-4">See real loose diamonds in all shapes and sizes</li>
              <li className="mb-4">See the Royal 201 Patented Collection</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 book-date-panel mt-md-0 mt-5">
          <div className="book-date round p-4">
            <div className="title-panel d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-row flex-column">
              <h3 className="title blue-text">Book Online</h3>
              <div className="status px-4 py-2">Real-time availability</div>
            </div>

            <Calendar
              onChange={(val) => {
                setPreDate(val);
              }}
              value={preDate}
            />
            {/* <DateRange
              editableDateInputs={true}
              onChange={item => setBookDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={bookDate}
            /> */}
          </div>
          <button className="btn btn-available mt-4">Click a date to browse availability</button>
        </div>
      </div>
      {/* End overview section */}

      {/* Start address section */}
      <div className="booking-section r-container my-5 pb-5">
        <div className="ticket-panel round d-flex align-items-center justify-content-between py-2 ps-md-5 ps-4 pe-2 flex-md-row flex-column">
          <p className="mb-md-0 mb-4 text-center">Duration approx. 20 - 60 minutes | €12,50 per person</p>
          <button className="btn btn-ticket blue-btn px-5 py-2 text-uppercase round-form">Get your Tickets</button>
        </div>
        <div className="booking-panel round row mt-5">
          <div className="col-md-6">
            <div className="booking-list-panel py-4 px-md-5 px-4 round">
              <div className="title-panel d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-row flex-column mb-5">
                <h3 className="title text-capitalize">Opening hours</h3>
                <div className="status py-2 px-4">CLOSED NOW</div>
              </div>
              <ul className="booking-list mb-0">
                <li className="mb-4">Monday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Tuesday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Wednesday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Thursday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Friday: 9:00 AM – 5:00 PM</li>
                <li className="mb-4">Saturday: 9:00 AM – 5:00 PM</li>
                <li>Sunday: 9:00 AM – 5:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-md-0 mt-5">
            <div className="direction-panel round py-4 px-md-5 px-4 d-flex flex-column">
              <div className="title-panel d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-row flex-column mb-5">
                <h3 className="title text-capitalize">Direction</h3>
                <div className="status py-2 px-4">GET DIRECTION</div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5967266461016!2d4.880994015994667!3d52.35959905585618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef0246f37f%3A0x3cc8701575536c70!2sRoyal%20Coster%20Diamonds!5e0!3m2!1sen!2sru!4v1632814327214!5m2!1sen!2sru" width="100%" className="p-0 round flex-fill google-map" allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End address section */}

      {/* Start more tour section */}
      <div className="more-tour-section mb-md-5">
        <div className="title-panel py-5">
          <h3 className="title my-md-5 text-center blue-text text-capitalize">Our Coster<br /><span>packages</span></h3>
        </div>
        <div className="tours-panel">
          <div className="row r-container">
            {
              toursData.map((tour, index) => {
                return (
                  <div className="col-lg-4 col-md-6 tour-item px-3 mb-md-5" key={index}>
                    <div className="image-panel hover-scale round mb-4">
                      <img src={tour.image} className="tour-image" alt="tour-image" />
                    </div>
                    <h3 className="title mb-4 blue-text">{tour.title}</h3>
                    <p className="description mb-5">{tour.description}</p>
                    <Link href="#">
                      <a className="more-detail text-uppercase mb-5 d-flex">More Details <RiArrowRightSFill className="ms-2" /></a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* End more tour section */}

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
