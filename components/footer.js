import React, { Component } from "react";
import { useState } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
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
    { img: "Frame-12.png", url: "#" },
  ];
  let midFooterList = [
    {
      title: "Shop Online",
      url: [
        { link: "Engagement Rings", url: "/shop", tags: "engagement", product_type: "rings" },
        { link: "Wedding & Anniversaries", url: "#", tags: "", product_type: "" },
        { link: "Empress Collection", url: "#", tags: "", product_type: "" },
        { link: "Bespoke Jewelry", url: "#", tags: "", product_type: "" },
        { link: "Consult with an expert", url: "#", tags: "", product_type: "" },
      ],
    },
    {
      title: "About Royal Coster",
      url: [
        { link: "Our Story", url: "/our-story" },
        { link: "Why Royal Coster", url: "/why-royal-coster" },
        { link: "Corporate Responsibility", url: "/responsibility" },
        { link: "Press", url: "/news" },
        { link: "Jobs & internships", url: "/internships" },
      ],
    },
    {
      title: "Customer Services",
      url: [
        { link: "Contact Us", url: "/contact", tags: "", product_type: "" },
        { link: "Reviews & TESTIMONIALS", url: "#", tags: "", product_type: "" },
        { link: "Faq’s", url: "#", tags: "", product_type: "" },
        { link: "Upgrade Service", url: "#", tags: "", product_type: "" },
        { link: "Global blue refunds", url: "#", tags: "", product_type: "" },
      ],
    },
    {
      title: "Diamond Guides",
      url: [
        { link: "Engagement ring buying guide", url: "#", tags: "", product_type: "" },
        { link: "Diamond buying guide", url: "#", tags: "", product_type: "" },
        { link: "WHAt to look in a diamond", url: "#", tags: "", product_type: "" },
        { link: "trends in diamond jewelry", url: "#", tags: "", product_type: "" },
        { link: "Proposal ideas", url: "#", tags: "", product_type: "" },
        { link: "What the royal bought", url: "#", tags: "", product_type: "" },
      ],
    },
  ];
  return (
    <div className="footer" id="footer">
      <div className="main-footer r-container d-md-block d-none">
        <div className="footer-top row p-0 m-0 py-5">
          <div className="col-lg-6 col-12 py-lg-5 pb-lg-5 pb-0 px-0 social-links d-flex justify-content-lg-start justify-content-center">
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
          <div className="col-lg-6 col-12 py-lg-5 py-0 px-0 text-lg-end payment-links text-center">
            {paymentLogo.map((item, index) => {
              return (
                <Link passHref={true} key={index} href={item.url}>
                  <a className={index == 0 ? "ms-0" : "ms-4"}>
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
              <div
                className="col-lg-3 col-md-6 col-12 text-md-start text-center m-0 mb-5"
                key={index}
              >
                <h3 className="mb-5">{items.title}</h3>
                {items.url.map((item, key) => {
                  return (
                    <Link passHref={true} href={item.tags ? {
                      pathname: item.url,
                      query: {
                        tags: item.tags,
                        productType: item.product_type
                      },
                    } : item.url}
                      key={key}>
                      <a className="row m-0 mb-3 text-uppercase">{item.link}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mobile-footer r-container d-md-none d-block">
        <div className="mobile-footer-logo text-center">
          <img src="/img/common/logo_black.png" alt="footer-logo" />
          <p className="mobile-footer__title my-5">
            The oldest diamond polishing factory in the world. Home of the Royal
            201.
          </p>
        </div>
        <div className="mobile-social-link d-flex justify-content-center pb-5">
          <Link passHref={true} href="#">
            <a>
              <div className="social-link me-4">
                <RiFacebookCircleFill />
              </div>
            </a>
          </Link>{" "}
          <Link passHref={true} href="#">
            <a>
              <div className="social-link me-4">
                <RiInstagramFill />
              </div>
            </a>
          </Link>{" "}
          <Link passHref={true} href="#">
            <a>
              <div className="social-link me-4">
                <RiLinkedinFill />
              </div>
            </a>
          </Link>{" "}
          <Link passHref={true} href="#">
            <a>
              <div className="social-link me-4">
                <RiPinterestFill />
              </div>
            </a>
          </Link>{" "}
          <Link passHref={true} href="#">
            <a>
              <div className="social-link">
                <RiYoutubeFill />
              </div>
            </a>
          </Link>
        </div>
        <div className="accordion" id="links-panel">
          {midFooterList.map((item, index) => {
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed py-5 ps-0"
                    data-bs-toggle="collapse"
                    data-bs-target={"#footerIndex" + index}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id={"footerIndex" + index}
                >
                  <div className="accordion-body">
                    {item.url.map((link, key) => {
                      return (
                        <Link passHref={true} href={link.url} key={key}>
                          <a>
                            <div className="link-item mb-5 text-uppercase">
                              {link.link}
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed py-5 ps-0"
                data-bs-toggle="collapse"
                data-bs-target="#footerPrivacy"
              >
                Privacy
              </button>
            </h2>
            <div className="accordion-collapse collapse" id="footerPrivacy">
              <div className="accordion-body">
                <Link passHref={true} href="#">
                  <a>
                    <div className="link-item mb-5 text-uppercase">
                      Privacy Policy
                    </div>
                  </a>
                </Link>
                <Link passHref={true} href="#">
                  <a>
                    <div className="link-item mb-5 text-uppercase">Cookies</div>
                  </a>
                </Link>
                <Link passHref={true} href="#">
                  <a>
                    <div className="link-item mb-5 text-uppercase">Terms</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 py-4 px-0 text-center">
          {paymentLogo.map((item, index) => {
            return (
              <Link passHref={true} key={index} href={item.url}>
                <a className={index == 0 ? "ms-0" : "ms-4"}>
                  <img
                    src={"/img/common/" + item.img}
                    alt="payment-getway"
                    width="38"
                    className="my-2"
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="r-container row m-auto p-0">
          <div className="col-md-6 col-12 text-md-start text-center px-0 text-uppercase">
            © 2020 Royal Coster Diamonds - All rights reserved
          </div>
          <div className="col-md-6 d-md-block d-none px-0 mt-md-0 mt-3 text-md-end text-center">
            <Link passHref={true} href="#">
              <a className="text-uppercase">Privacy Policy</a>
            </Link>
            <Link passHref={true} href="#">
              <a className="text-uppercase ms-5">Cookies</a>
            </Link>
            <Link passHref={true} href="#">
              <a className="text-uppercase ms-5">Terms</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
