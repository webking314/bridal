import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  RiFacebookBoxFill,
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
      <div className="main-footer">
        <div className="footer-top row p-0 m-0 py-5">
          <div className="col-4 py-5 px-0 social-links d-flex">
            <Link href="#">
              <a className="me-4"><div><RiFacebookBoxFill/></div></a>
            </Link>
            <Link href="#">
              <a className="me-4"><div><RiInstagramFill/></div></a>
            </Link>
            <Link href="#">
              <a className="me-4"><div><RiLinkedinFill/></div></a>
            </Link>
            <Link href="#">
              <a className="me-4"><div><RiPinterestFill/></div></a>
            </Link>
            <Link href="#">
              <a className="me-4"><div><RiYoutubeFill/></div></a>
            </Link>
          </div>
          <div className="col-8 py-5 px-0 text-end">
            {paymentLogo.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a className="ms-4">
                    <img
                      src={"/img/" + item.img}
                      alt="payment-getway"
                      width="38"
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
              <div className="col-md-3 col-sm-6 col-12 m-0 mb-5" key={index}>
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
      <div className="footer-bottom row p-0 m-0 py-3">
        <div className="col-sm-6 col-12 px-0">
          © 2020 Royal Coster Diamonds - All rights reserved
        </div>
        <div className="col-sm-6 col-12 px-0 text-end">
          <Link href="#">
            <a className="text-uppercase ms-5">Privacy Policy</a>
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
  );
}
