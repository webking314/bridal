import React, { useState, useRef, useEffect } from "react";
import { RiPhoneFill, RiCompassDiscoverLine } from "react-icons/ri";

export default function Schedule({ normalMode }) {
  return (
    <div className={"schedule " + (normalMode ? "normal-mode" : "")}>
      <div className="r-container">
        <div className="row m-0">
          <div
            className={
              "col-lg-6 col-12 ps-0 pe-lg-2 pe-0 " +
              (normalMode ? "" : "pb-lg-0 pb-5")
            }
          >
            <div
              className={
                "normal-bg-panel " +
                (normalMode ? "d-sm-none d-block" : "d-none")
              }
            />
            <div className="schedule-panel round d-flex flex-column justify-content-between p-5">
              <div className="text-panel text-white p-md-5 pt-5 p-0 pb-lg-5 pb-md-0 pb-0 px-sm-0 px-4">
                <h3>Visit</h3>
                <h2>Royal Coster</h2>
                <p className="pt-sm-5 text-capitalize">
                  Book an experience and learn about our heritage or visit us to
                  see more diamonds & jewelry
                </p>
              </div>
              <div className="p-md-5 p-0 pt-lg-5 pt-md-0 pt-0 px-sm-0 px-4">
                <div
                  className={
                    "contact-btn-group d-flex justify-content-between mb-5 " +
                    (normalMode ? "" : "d-md-block d-none")
                  }
                >
                  <button className="contact-btn pink-outline-btn btn round-form d-flex align-items-center justify-content-sm-center px-5 py-3">
                    <RiPhoneFill className="me-3" />
                    <span className="text-uppercase">Contact Us</span>
                  </button>
                  <button className="direction-btn pink-outline-btn btn round-form d-flex align-items-center justify-content-sm-center px-5 py-3">
                    <RiCompassDiscoverLine className="me-3" />
                    <span className="text-uppercase">Get Direction</span>
                  </button>
                </div>
                <button
                  className={
                    "btn book-btn round-form pink-btn d-flex align-items-center justify-content-between px-5 py-3 " +
                    (normalMode ? "mb-sm-0 mb-5" : "mt-sm-0 mt-5")
                  }
                >
                  <span className="text-uppercase">Book tours & workshops</span>
                  <img
                    src="/img/common/rightArrow_blue.png"
                    alt="rightArrow"
                    className="blue-arrow"
                  />
                  <img
                    src="/img/common/rightArrow.png"
                    alt="rightArrow"
                    className="pink-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-lg-2 ps-0 pe-0">
            <div className="newsletter-panel round d-flex flex-column justify-content-between p-5">
              <div className="text-panel p-md-5 pt-5 p-0 pb-lg-5 pb-md-0 pb-0 px-sm-0 px-4">
                <h3>Sign up for</h3>
                <h2>Our Newsletter</h2>
                <p className="pt-sm-5 text-capitalize">
                  The fascinating world of diamonds presented by Royal Coster.
                  Products, tours and news. We won't spam your inbox.
                </p>
              </div>
              <div className="form-panel p-md-5 p-0 pt-lg-5 pt-0 px-sm-0 px-4">
                <input
                  type="text"
                  className="form-control round-form p-3 mb-3"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control round-form p-3 mb-4"
                  placeholder="syedkaift@gmail.com"
                />
                <button
                  className={
                    "btn round-form px-5 py-3 blue-btn d-flex justify-content-between align-items-center m-0 " +
                    (normalMode ? "mb-sm-0 mb-5" : "")
                  }
                >
                  <span>SUBSCRIBE</span>
                  <img
                    src="/img/common/rightArrow_blue.png"
                    alt="rightArrow"
                    className="blue-arrow"
                  />
                  <img
                    src="/img/common/rightArrow.png"
                    alt="rightArrow"
                    className="white-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
