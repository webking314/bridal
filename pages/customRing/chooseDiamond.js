import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Collection from "../../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import {
  RiHeartLine,
  RiHeartFill,
  RiShareLine,
  RiErrorWarningLine,
  RiCheckboxBlankCircleFill,
  RiChat1Line,
  RiCustomerService2Fill,
  RiPhoneLine,
  RiChatSmile2Line,
  RiStore2Line,
  RiUser3Line,
  RiMailLine,
} from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";

const options = [
  { name: "ALL", value: "ALL" },
  { name: "POPULAR", value: "POPULAR" },
];
const shapes = [
  { name: "ROUND", image: "shape-1.png" },
  { name: "PRINCESS", image: "shape-2.png" },
  { name: "CUSHION", image: "shape-3.png" },
  { name: "EMERALD", image: "shape-4.png" },
  { name: "OVAL", image: "shape-5.png" },
  { name: "RADIANT", image: "shape-6.png" },
  { name: "ASSCHER", image: "shape-7.png" },
  { name: "MARQUISE", image: "shape-8.png" },
  { name: "HEART", image: "shape-9.png" },
  { name: "PEAR", image: "shape-10.png" },
];
const productList = [
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
  {
    image: "diamond-1.png",
    title: "1.00 Carat H SI1 Excellent Cut round diamond",
    cost: "€2.500",
  },
];

export default function ChooseDiamond() {
  const [result, setResult] = useState("878");
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [products, setProducts] = useState(productList);
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const loadMore = () => {
    setProducts([...products, ...productList]);
  };
  return (
    <div className="chooseDiamond_page">
      <Head>
        <title>chooseSetting | Royal Coster</title>
      </Head>
      <Header />
      {/* Start state section */}
      <div className="state-section">
        <div className="link-panel  r-container py-3 d-flex align-items-center">
          <Link href="/blog">
            <a className="back-arrow d-flex me-4 blue-text">
              <HiOutlineArrowLeft />
            </a>
          </Link>
          <Link href="/">
            <a className="mx-2">HOME</a>
          </Link>
          /
          <Link href="/ring">
            <a className="mx-2">ENGAGEMENT RINGS</a>
          </Link>
          /
          <Link href="#">
            <a className="mx-2">MAKE A RING</a>
          </Link>
          /
          <span className="title ms-2 text-uppercase blue-text">
            CHOOSE A SETTING
          </span>
        </div>
        <div className="setting-state-panel">
          <div className="r-container  py-3 row">
            <div className="pe-5 py-md-0 py-5 my-md-5 my-0 col-md-4 col-12 setting-state d-flex justify-content-between align-items-center active">
              <div className="text-panel d-flex align-items-center">
                <div className="number me-3 d-flex justify-content-center align-items-center">
                  1
                </div>
                <div className="title text-uppercase">
                  <p className="mb-1">Choose a</p>
                  <h3 className="m-0">Setting</h3>
                </div>
              </div>
              <img
                src="/img/customRing/chooseDiamond/ring.png"
                width="52"
                height="52"
                alt="state-image"
                style={{ background: "white" }}
                className="round-form"
              />
            </div>
            <div className="px-5 py-md-0 py-5 my-md-5 my-0 col-md-4 col-12 setting-state d-flex justify-content-between align-items-center active">
              <div className="text-panel d-flex align-items-center">
                <div className="number me-3 d-flex justify-content-center align-items-center">
                  2
                </div>
                <div className="title text-uppercase">
                  <p className="mb-1">Choose a</p>
                  <h3 className="m-0">Diamond</h3>
                </div>
              </div>
              <img
                src="/img/customRing/chooseDiamond/diamond.png"
                width="52"
                height="52"
                alt="state-image"
              />
            </div>
            <div className="ps-5 py-md-0 py-5 my-md-5 my-0 col-md-4 col-12 setting-state d-flex justify-content-between align-items-center">
              <div className="text-panel d-flex align-items-center">
                <div className="number me-3 d-flex justify-content-center align-items-center">
                  3
                </div>
                <div className="title text-uppercase">
                  <p className="mb-1">Choose a</p>
                  <h3 className="m-0">Ring</h3>
                </div>
              </div>
              <img
                src="/img/customRing/chooseDiamond/complete.png"
                width="52"
                height="52"
                alt="state-image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End state section */}
      {/* Start choose section */}
      <div className="choose-section r-container py-5">
        <div className="shapes-panel">
          <div className="title-panel py-4">
            <h2 className="blue-text text-uppercase d-flex align-items-center">
              SHAPES
              <RiErrorWarningLine className="ms-2 warning-icon" />
            </h2>
          </div>
          <div className="shapes-box py-4 d-flex align-items-center d-flex flex-wrap">
            {shapes.map((item, index) => {
              return (
                <button className="btn btn-shape me-3 round mb-3" key={index}>
                  <div className="image-box pb-3">
                    <img src={"/img/customRing/chooseDiamond/" + item.image} />
                  </div>
                  <p className="m-0">{item.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* End choose section */}
      {/* Start products section */}
      <div className="product-section r-container mb-5 pb-5">
        <div className="row m-0">
          {products.map((item, index) => {
            return (
              <div
                className="product-item col-lg-3 col-md-4 col-sm-6 col-12 pe-4 p-0 mb-5"
                key={index}
              >
                <div className="product-image round">
                  <img
                    src={"/img/customRing/chooseDiamond/" + item.image}
                    alt="product-image"
                  />
                </div>
                <h3>{item.title}</h3>
                <div className="bottom-panel d-flex justify-content-between">
                  <h4>{item.cost}</h4>
                  <p>...</p>
                </div>
              </div>
            );
          })}
          <button
            className="btn load-more-btn text-uppercase py-3 px-5 my-5 round-form"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      </div>
      {/* End products section */}
    </div>
  );
}
