import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import NumberFormat from "react-number-format";
import AppointmentModal from "../components/appointmentModal";
import AnswerPanel from "../components/answerPanel";
import renderHTML from "react-render-html";
import { RiArrowRightSFill, RiMailFill, RiPhoneFill, RiWhatsappFill, RiDvdFill } from "react-icons/ri";

const answersData = [
  {
    title: "How <span>do</span> we <br/><span>do</span> this?",
    answers: [
      {
        title: "Access to 80% of the world’s diamonds.",
        answer: "Sourcing our diamonds directly from those that cut and polish the stones, we’re uniquely placed to offer you the world’s most luxurious stones at a price that’s affordable."
      },
      {
        title: "All jewellery is handmade to order by our master craftsmen.",
        answer: "We strongly believe that as no two diamonds are alike, neither should the jewellery and we make each piece to order which in turn keeps our costs down and therefore the price you pay."
      },
      {
        title: "Proudly housed in the heart of Mayfair, London.",
        answer: "With a showroom, workshop and head office all in central London, we are able to control all aspects of your order process in order to guarantee the best quality diamonds have been picked by our experts in order to produce the finest quality diamond jewellery."
      }
    ]
  },
  {
    title: "What does <br/><span>this</span> mean?",
    answers: [
      {
        title: "Affordable luxury at your finger tips",
        answer: "Our business model ensures that you can guarantee the world’s most luxurious stone at prices that are up to 70% cheaper than the high street where the choice in diamond quality does not always exist."
      },
      {
        title: "You’re in the right hands.",
        answer: "With a company founder that is a third generation diamond dealer and a combined experience within our workshops of over 100 years we know what it takes to make your unique purchase extra special."
      },
      {
        title: "Thousands of happy customers.",
        answer: "Don’t just take our word for it, we have made so many dreams come true with our jewellery and you can read online from those that have experienced our products and customer service."
      }
    ]
  },
  {
    title: "What do <br/>you <span>get?</span>",
    answers: [
      {
        title: "Lifetime Guarantee.",
        answer: "All our items are covered against our lifetime production guarantee that covers any manufacturing problems or issues."
      },
      {
        title: "Free Worldwide Delivery.",
        answer: "Wherever you are, we will dispatch your item to you free of charge and fully insured by us until the item has reached your address."
      },
      {
        title: "30 Day Returns Policy.",
        answer: "Unlike some of our competitors, for 30 days after receiving your item, if you are not satisfied for any reason, we will refund you your money no questions asked."
      },
    ]
  }
]

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
      <div className="guide-section py-5">
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
      <div className="our-value-section r-container py-md-5">
        <h1 className="title py-5 my-md-5 blue-text text-center">Our <span>Core</span><br />Values</h1>
        <div className="idea-panel round text-center p-5">
          <img className="mark-image mb-5" src="/img/common/mobile_logo.png" alt="mark-image" />
          <div className="text-panel d-flex justify-content-md-evenly justify-content-between flex-wrap flex-sm-row flex-column text-start">
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
      <div className="passpost-section text-white py-5">
        <div className="r-container py-md-5 d-flex justify-content-between flex-column flex-md-row align-items-md-center">
          <h3 className="title mb-4 mb-md-0">The Royal Coster Passport explains our core values. These three values are:</h3>
          <ul className="ms-md-0 ms-5">
            <li>Flexible</li>
            <li>Family & Connection</li>
            <li>Dedication & Service</li>
          </ul>
        </div>
      </div>
      {/* End passport section */}

      <AnswerPanel data={answersData[0]} />

      <div className="middle-answer-panel">
        <AnswerPanel data={answersData[1]} />
      </div>

      <AnswerPanel data={answersData[2]} />

      {/* Start foundation section */}
      <div className="foundation-section">
        <div className="r-container pt-md-5 pb-5 row">
          <div className="text-panel my-5 pe-md-5 col-md-5 col-lg-3">
            <h3 className="title blue-text mb-5 text-capitalize">foundation of <span>Coster.</span></h3>
            <p className="mb-0">These guiding principles are the foundation of COSTER.Our mission is to go Beyond Expectations.</p>
          </div>
          <div className="book-panel round d-flex justify-content-center align-items-center">BOOK</div>
        </div>
      </div>
      {/* End foundation section */}

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
