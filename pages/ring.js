import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import Collection from "../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const options = [
  { name: "All", value: "All" },
  { name: "Popular", value: "Popular" },
];

const filterItems = [
  { img: "image1.png", text: "Solitaire with side" },
  { img: "image2.png", text: "Solitaire" },
  { img: "image3.png", text: "Three stone" },
  { img: "image4.png", text: "Halo/framed" },
  { img: "image5.png", text: "promise" },
  { img: "image6.png", text: "brands-diamonds" },
  { img: "image7.png", text: "bands-metals" },
  { img: "image8.png", text: "fashion" },
  { img: "image9.png", text: "mothers/family" },
];
const produdcts = [
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
  },
];

const leftFilters = [
  {
    title: "price",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Collection",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Style",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Mounting",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Brand",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Stone",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Brightness",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Cut",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Material",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Material color",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
];
export default function Home() {
  const [result, setResult] = useState("878");
  const [selectValue, setSelectValue] = useState("All");

  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener("click", (event) => {
        let productItem = event.target.closest(".product-item");
        if (productItem) {
          if (
            productItem.querySelector(".favor-icon").classList.contains("favor")
          )
            productItem.querySelector(".favor-icon").classList.remove("favor");
          else productItem.querySelector(".favor-icon").classList.add("favor");
        }
      });
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <div className="ring_page">
      <Head>
        <title>Ring | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white">Rings</h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start product section */}
      <div className="product-section r-container py-4">
        <div className="top-bar row align-items-center m-0 py-3">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-3">
            <h2>Engagement Rings</h2>
            <p className="text-uppercase">{result} results</p>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-end p-0 pt-3 pt-md-0">
            <div className="search-box round-form d-flex align-items-center">
              <label htmlFor="selectSearch" className="px-4">
                SORT BY :{" "}
              </label>
              <SelectSearch
                id="selectSearch"
                options={options}
                value={selectValue}
                onChange={(value) => {
                  setSelectValue(value);
                }}
                filterOptions={fuzzySearch}
                emptyMessage="Not found"
                search
              />
            </div>
          </div>
        </div>
        <div className="top-filter-bar d-flex justify-content-between align-items-center flex-wrap py-4">
          {filterItems.map((item, index) => {
            return (
              <button className="btn filter-item round-form mt-3" key={index}>
                <div className="image-panel text-center">
                  <img src={"/img/ring/" + item.img} alt="filter-image" />
                </div>
                <h3 className="blue-text text-uppercase">{item.text}</h3>
              </button>
            );
          })}
        </div>
        <div className="main-panel row m-0 py-5">
          <div className="col-3 p-0 pe-4 left-filter-bar">
            {leftFilters.map((item, index) => {
              return (
                <div className="accordion-item mb-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button blue-text collapsed text-uppercase py-3 ps-4"
                      data-bs-target={"#index" + index}
                      data-bs-toggle="collapse"
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={"index" + index}
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      {item.properties.map((property, key) => {
                        return (
                          <div className="form-check pb-3" key={key}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id={"flexCheck" + key}
                            />
                            <label
                              className="form-check-label text-capitalize"
                              htmlFor={"flexCheck" + key}
                            >
                              {property}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-9 p-0 product-panel">
            {produdcts.map((item, index) => {
              return (
                <div className="product-item" key={index}>
                  <div className="product-image d-flex justify-content-center align-items-center round">
                    <img src={"/img/ring/" + item.img} alt="product-image" />
                  </div>
                  <h3 className="text-uppercase blue-text py-4 m-0">
                    {item.title}
                  </h3>
                  <p className="pb-4 text-uppercase m-0">
                    {item.categories.map((category, key) => {
                      return (
                        <span key={key} className="me-2">
                          {category}
                        </span>
                      );
                    })}
                  </p>
                  <h4 className="blue-text">{item.cost}</h4>
                  <div className="favor-icon">
                    <RiHeartLine className="unfavor" />
                    <RiHeartFill className="favor" />
                  </div>
                </div>
              );
            })}
            <button className="btn load-more-btn text-uppercase py-3 px-5 round-form">
              Load More
            </button>
          </div>
        </div>
      </div>
      {/* End product section */}

      {/* Start Collection section */}
      <div className="collection-section">
        <Collection />
        <div className="shadow-pink"/>
        <div className="shadow-blue"/>
      </div>
      {/* End Collection section */}
      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
