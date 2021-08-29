import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  let paymentLogo = [
    { img: "Frame.png", url: "#" },
    { img: "Frame-1.png", url: "#" },
    { img: "Frame-2.png", url: "#" },
    { img: "Frame-3.png", url: "#" },
    { img: "Frame-4.png", url: "#" },
    { img: "Frame-5.png", url: "#" },
    { img: "Frame-6.png", url: "#" },
    { img: "Frame-7.png", url: "#" },
    { img: "Frame-8.png", url: "#" },
    { img: "Frame-9.png", url: "#" },
    { img: "Frame-11.png", url: "#" },
  ];
  let midFooterList = [
    {
      title: "Shop Online",
      url: [
        { link: "Engagement Rings", url: "#" },
        { link: "Wedding & Anniversaries", url: "#" },
        { link: "Empress Collection", url: "#" },
        { link: "Bespoke Jewelry", url: "#" },
        { link: "Consult with an expert", url: "#" },
      ],
    },
    {
      title: "About Royal Coster",
      url: [
        { link: "Our Story", url: "#" },
        { link: "Why Royal Coster", url: "#" },
        { link: "Corporate Responsibility", url: "#" },
        { link: "Press", url: "#" },
        { link: "Jobs & internships", url: "#" },
      ],
    },
    {
      title: "Customer Services",
      url: [
        { link: "Contact Us", url: "#" },
        { link: "Reviews & TESTIMONIALS", url: "#" },
        { link: "Faq’s", url: "#" },
        { link: "Upgrade Service", url: "#" },
        { link: "Global blue refunds", url: "#" },
      ],
    },
    {
      title: "Diamond Guides",
      url: [
        { link: "Engagement ring buying guide", url: "#" },
        { link: "Diamond buying guide", url: "#" },
        { link: "WHAt to look in a diamond", url: "#" },
        { link: "trends in diamond jewelry", url: "#" },
        { link: "Proposal ideas", url: "#" },
        { link: "What the royal bought", url: "#" },
      ],
    },
  ];
  return (
    <div className="footer" id="footer">
      <div className="main-footer r-container">
        <div className="footer-top row p-0 m-0 py-5">
          <div className="col-md-6 col-12 py-md-5 pb-md-5 pb-0 px-0 social-links d-flex justify-content-md-start justify-content-center">
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiFacebookCircleFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiInstagramFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiLinkedinFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiPinterestFill />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="me-4">
                <div>
                  <RiYoutubeFill />
                </div>
              </a>
            </Link>
          </div>
          <div className="col-md-6 col-12 py-5 px-0 text-md-end text-center">
            {paymentLogo.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a className={index == 0 ? "ms-0":"ms-4"}>
                    <img
                      src={"/img/common/" + item.img}
                      alt="payment-getway"
                      width="38"
                      className="my-4"
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="footer-middle row p-0 m-0 pt-5">
          {midFooterList.map((items, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-12 text-md-start text-center m-0 mb-5" key={index}>
                <h3 className="mb-5">{items.title}</h3>
                {items.url.map((item, key) => {
                  return (
                    <Link href="#" key={key}>
                      <a className="row m-0 mb-3">{item.link}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="r-container row m-auto p-0">
          <div className="col-md-6 col-12 text-md-start text-center px-0">
            © 2020 Royal Coster Diamonds - All rights reserved
          </div>
          <div className="col-md-6 col-12 px-0 mt-md-0 mt-3 text-md-end text-center">
            <Link href="#">
              <a className="text-uppercase">Privacy Policy</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase ms-5">Cookies</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase ms-5">Terms</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
