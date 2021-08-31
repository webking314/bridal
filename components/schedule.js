import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";

export default function Schedule() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="schedule">
      <div className="r-container">
        <div className="row m-0">
          <div className="col-lg-6 col-12 ps-0 pe-lg-2 pe-0 pb-lg-0 pb-5">
            <div className="schedule-panel round d-flex flex-column justify-content-between p-5">
              <div className="text-panel text-white p-md-5 pt-5 p-0 pb-lg-5 pb-md-0 pb-0">
                <h3 data-aos="fade-down">Visit</h3>
                <h2 data-aos="fade-down">Royal Coster</h2>
                <p className="pt-5 text-capitalize">
                  Book an experience and learn about our heritage or visit us to
                  see more diamonds & jewelry
                </p>
              </div>
              <div className="p-md-5 p-0 pt-lg-5 pt-md-0 pt-0">
                <button className="btn round-form text-uppercase px-5 py-3">
                  Schedule consultation
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-lg-2 ps-0 pe-0">
            <div className="newsletter-panel round d-flex flex-column justify-content-between p-5">
              <div className="text-panel p-md-5 pt-5 p-0 pb-lg-5 pb-md-0 pb-0">
                <h3 data-aos="fade-down">Sign up for</h3>
                <h2 data-aos="fade-down">Our Newsletter</h2>
                <p className="pt-5 text-capitalize">
                  The fascinating world of diamonds presented by Royal Coster.
                  Products, tours and news. We won't spam your inbox.
                </p>
              </div>
              <div className="form-panel p-md-5 p-0 pt-lg-5 pt-md-0 pt-0">
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
                <button className="btn round-form px-5 py-3 text-white d-flex justify-content-between align-items-center m-0">
                  <span>SUBSCRIBE</span>
                  <img src="/img/common/rightArrow.png" alt="rightArrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
