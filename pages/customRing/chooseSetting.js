import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Collection from "../../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import InputRange from 'react-input-range';

import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";
const options = [
  { name: "ALL", value: "ALL" },
  { name: "POPULAR", value: "POPULAR" },
];

const produdcts = [
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hover_img-1.png",
    cost: "$2500",
  },
];
const filterItems = [
  { img: "filter-1.png", text: "SOLITAIRE" },
  { img: "filter-2.png", text: "PAVE" },
  { img: "filter-3.png", text: "CHANNEL SET" },
  { img: "filter-4.png", text: "SIDE-STONE" },
  { img: "filter-5.png", text: "THREE-STONE" },
  { img: "filter-6.png", text: "TENSION" },
  { img: "filter-7.png", text: "HALO" },
  { img: "filter-8.png", text: "VINTAGE" },
];

const karats = [
  { karat: "14k", title: "14K White", key: "white" },
  { karat: "18k", title: "18K White", key: "white" },
  { karat: "14k", title: "14K Yellow", key: "yellow" },
  { karat: "18k", title: "18K Yellow", key: "yellow" },
  { karat: "PT", title: "PLATINIUM", key: "platinium" },
  { karat: "RG", title: "ROSE GOLD", key: "rose-gold" },
];

export default function Home() {
  const [result, setResult] = useState("878");
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [value, setValue] = useState({min: 5, max:25})
  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener("click", (event) => {
        let productItem = event.target.closest(".favor-icon");
        if (productItem) {
          productItem.classList.toggle("favor");
        }
      });
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <div className="chooseSetting_page">
      <Head>
        <title>chooseSetting | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="state-section r-container">
        <div className="link-panel py-3 mb-md-5 mb-0 d-flex align-items-center">
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
        <div className="setting-state-panel py-3 row m-0">
          <div className="px-5 py-md-0 py-5 my-md-5 my-0 col-md-4 col-12 setting-state d-flex justify-content-between align-items-center active">
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
              src="/img/customRing/chooseSetting/choose.png"
              width="52"
              height="52"
              alt="state-image"
            />
          </div>
          <div className="px-5 py-md-0 py-5 my-md-5 my-0 col-md-4 col-12 setting-state d-flex justify-content-between align-items-center">
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
              src="/img/customRing/chooseSetting/diamond.png"
              width="52"
              height="52"
              alt="state-image"
            />
          </div>
          <div className="px-5 py-md-0 py-5 my-md-5 my-0 col-md-4 col-12 setting-state d-flex justify-content-between align-items-center">
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
              src="/img/customRing/chooseSetting/complete.png"
              width="52"
              height="52"
              alt="state-image"
            />
          </div>
        </div>
        <div className="ring-types d-flex justify-content-between align-items-center flex-wrap py-5">
          {filterItems.map((item, index) => {
            return (
              <button className="btn filter-item round-form mt-3" key={index}>
                <div className="image-panel text-center mb-3">
                  <img
                    src={"/img/customRing/chooseSetting/" + item.img}
                    alt="filter-image"
                  />
                </div>
                <h3 className="blue-text text-uppercase">{item.text}</h3>
              </button>
            );
          })}
        </div>
        <div className="setting-karat row m-0">
          <div className="karat-panel col-lg-6 col-12 pe-5">
            <h3 className="title text-uppercase pb-3">karat</h3>
            <div className="d-flex karat-list py-4 justify-content-between m-0">
              {karats.map((item, index) => {
                return (
                  <button className="btn p-0 karat-item" key={index}>
                    <div
                      className={
                        "round-form karat px-lg-4 px-5 py-2 " + item.key
                      }
                    >
                      {item.karat}
                    </div>
                    <p className="pt-2">{item.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="cost-panel col-lg-6 col-12 px-5">
            <form className="form">
              <InputRange
                maxValue={20}
                minValue={0}
                formatLabel={(value) => `${value} kg`}
                value={value}
                onChange={(value) => setValue(value)}
                onChangeComplete={(value) => console.log(value)}
              />
            </form>
          </div>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start product section */}
      <div className="product-section r-container py-5 ">
        {produdcts.map((item, index) => {
          return (
            <Link href="/customRing/confirmSetting" key={index}>
              <a className="mb-5 p-0 product-item">
                <div className="hover-image round">
                  <img
                    src={"/img/customRing/chooseSetting/" + item.hoverImg}
                    alt="hover-image"
                  />
                </div>
                <div className="product-image d-flex justify-content-center align-items-center round">
                  <img
                    src={"/img/customRing/chooseSetting/" + item.img}
                    alt="product-image"
                  />
                </div>
                <h3 className="text-uppercase blue-text py-4 m-0">
                  {item.title}
                </h3>
                <p className="text-uppercase m-0">
                  {item.categories.map((category, key) => {
                    return (
                      <span key={key} className="me-2">
                        {category}
                      </span>
                    );
                  })}
                </p>
                <h4 className="blue-text">{item.cost}</h4>
                <div className="color-panel py-4 mb-4">
                  <button className="btn white me-3"></button>
                  <button className="btn yellow me-3"></button>
                  <button className="btn platinium me-3"></button>
                  <button className="btn rose-gold me-3"></button>
                </div>
                <div className="favor-icon">
                  <RiHeartLine className="unfavor" />
                  <RiHeartFill className="favor" />
                </div>
              </a>
            </Link>
          );
        })}
        <button className="btn load-more-btn text-uppercase mt-5 py-3 px-5 round-form">
          Load More
        </button>
      </div>
      {/* End product section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
