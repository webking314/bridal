import React, { useState, useRef, useEffect } from "react";
import {
  RiPhoneFill,
  RiCompassDiscoverLine,
  RiArrowRightLine,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Link from "next/link";

export default function Schedule({ normalMode }) {
  return (
    <div id="newsLetter" className="schedule ">
      <div className="schedule-panel my-5 r-container row round">
        <div className="col-lg-6 bg-panel order-lg-last" />
        <div className="col-lg-6 form-panel d-flex flex-column justify-content-between p-5 pe-lg-0 pe-5">
          <div className="text-panel text-white p-md-5 pe-lg-0 pe-5 pt-5 p-0 pe-0">
            <h3 className="title col-sm-9 col-12 mb-4">
              Visit <span>Royal</span> Coster
            </h3>
            <p className="text-capitalize col-sm-9 col-12 mb-0">
              Book an experience and learn about our heritage or visit us to see
              more diamonds & jewelry
            </p>
            <div className="btn-panel d-flex justify-content-between flex-wrap mt-3">
              <Link href="/tour">
                <a className="btn book-btn round-form pink-btn d-flex align-items-center justify-content-between px-5 py-3 mt-4 col-sm-9 col-12">
                  <span className="text-uppercase">Book tours & workshops</span>
                  <RiArrowRightLine />
                </a>
              </Link>
              <div className="d-flex justify-content-sm-start justify-content-around flex-fill mt-4">
                <Link href="/contact">
                  <a className="contact-btn ms-3 pink-outline-btn btn round-form px-3 py-3">
                    <RiPhoneFill />
                  </a>
                </Link>
                <Link href="/contact#direction">
                  <a className="direction-btn ms-3 pink-outline-btn btn round-form px-3 py-3">
                    <RiCompassDiscoverLine />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-panel">
        <div className="r-container row pt-5">
          <div className="left-panel text-panel col-lg-6 px-lg-0 px-md-5 px-4">
            <h3 className="title text-capitalize col-lg-9">
              Join Our <span>mailing</span> list
            </h3>
            <p className="pt-sm-5 text-capitalize col-lg-9">
              The fascinating world of diamonds presented by Royal Coster.
              Products, tours and news. We won't spam your inbox.
            </p>
            <div className="px-0 social-links d-flex justify-content-lg-start justify-content-center col-lg-9 mt-5">
              <Link passHref={true} href="#">
                <a className="me-4">
                  <div>
                    <RiFacebookCircleFill />
                  </div>
                </a>
              </Link>
              <Link passHref={true} href="#">
                <a className="me-4">
                  <div>
                    <RiInstagramFill />
                  </div>
                </a>
              </Link>
              <Link passHref={true} href="#">
                <a className="me-4">
                  <div>
                    <RiLinkedinFill />
                  </div>
                </a>
              </Link>
              <Link passHref={true} href="#">
                <a className="me-4">
                  <div>
                    <RiPinterestFill />
                  </div>
                </a>
              </Link>
              <Link passHref={true} href="#">
                <a className="me-4">
                  <div>
                    <RiYoutubeFill />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="form-panel col-lg-6 pe-lg-0 p-md-5 pt-4 px-4">
            <input
              type="text"
              className="form-control round-form p-3 mb-3"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-control round-form p-3 mb-4"
              placeholder="yourname@emailaddress.com "
            />
            <button className="btn round-form px-5 py-3 blue-btn d-flex justify-content-between align-items-center m-0 ">
              <span>SUBSCRIBE</span>
              <img
                src="/img/common/rightArrow_blue.png"
                alt="rightArrow"
                className="blue-arrow"
              />
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
