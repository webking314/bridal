import React, { useState, useRef, useEffect } from "react";
import {
  RiArrowRightLine,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Link from "next/link";

export default function MailList() {
  return (
    <div className="mail-list-panel py-5">
      <div className="r-container row py-md-5">
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
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
}
