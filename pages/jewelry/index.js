import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Collection from "../../components/collection";
import Schedule from "../../components/schedule";
import Footer from "../../components/footer";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const options = [
  { name: "All", value: "All" },
  { name: "Popular", value: "Popular" },
];
const options1 = [
  { name: "All", value: "All" },
  { name: "jewelry", value: "jewelry" },
];
const options2 = [
  { name: "All", value: "All" },
  { name: "price", value: "price" },
];
const options3 = [
  { name: "All", value: "All" },
  { name: "pearl", value: "pearl" },
];
const options4 = [
  { name: "All", value: "All" },
  { name: "birthstone", value: "birthstone" },
];
const options5 = [
  { name: "All", value: "All" },
  { name: "metal", value: "metal" },
];
const options6 = [
  { name: "All", value: "All" },
  { name: "stones", value: "stones" },
];
const produdcts = [
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(4).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(5).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(4).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(5).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(1).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
  {
    img: "product(2).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    hoverImg: "hoverImage.png",
    cost: "$2500",
  },
];

export default function Jewelry() {
  const [result, setResult] = useState(73);
  const [selectValue, setSelectValue] = useState("All");
  const [selectValue1, setSelectValue1] = useState("All");
  const [selectValue2, setSelectValue2] = useState("All");
  const [selectValue3, setSelectValue3] = useState("All");
  const [selectValue4, setSelectValue4] = useState("All");
  const [selectValue5, setSelectValue5] = useState("All");
  const [selectValue6, setSelectValue6] = useState("All");

  useEffect(() => {
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
  }, []);

  return (
    <div className="jewelry_page">
      <Head>
        <title>Jewelry | Royal Coster</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Start hero section*/}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title">All Jewelry</h1>
        </div>
      </div>
      {/* End hero section*/}
      {/* Start jewelry section */}
      <div className="jewelry-section r-container pt-4 mt-5">
        <div className="top-bar row align-items-center m-0 py-3">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-3">
            <h2>Jewelry</h2>
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
        <div className="filter-bar row align-items-center justify-content-between m-0 py-3">
          <SelectSearch
            id="firstFilter"
            options={options1}
            value={selectValue1}
            onChange={(value) => {
              setSelectValue1(value);
            }}
            filterOptions={fuzzySearch}
            emptyMessage="Not found"
            search
          />
          <SelectSearch
            id="secondFilter"
            options={options2}
            value={selectValue2}
            onChange={(value) => {
              setSelectValue2(value);
            }}
            filterOptions={fuzzySearch}
            emptyMessage="Not found"
            search
          />
          <SelectSearch
            id="thirdFilter"
            options={options3}
            value={selectValue3}
            onChange={(value) => {
              setSelectValue3(value);
            }}
            filterOptions={fuzzySearch}
            emptyMessage="Not found"
            search
          />
          <SelectSearch
            id="forthFilter"
            options={options4}
            value={selectValue4}
            onChange={(value) => {
              setSelectValue4(value);
            }}
            filterOptions={fuzzySearch}
            emptyMessage="Not found"
            search
          />
          <SelectSearch
            id="fifthFilter"
            options={options5}
            value={selectValue5}
            onChange={(value) => {
              setSelectValue5(value);
            }}
            filterOptions={fuzzySearch}
            emptyMessage="Not found"
            search
          />
          <SelectSearch
            id="sixthFilter"
            options={options6}
            value={selectValue6}
            onChange={(value) => {
              setSelectValue6(value);
            }}
            filterOptions={fuzzySearch}
            emptyMessage="Not found"
            search
          />
        </div>
        <div className="product-panel py-5">
          {produdcts.map((item, index) => {
            return (
              <div className="product-item" key={index}>
                <div className="hover-image round">
                  <img src={"/img/jewelry/" + item.hoverImg} alt="hover-image"/>
                </div>
                <div className="product-image d-flex justify-content-center align-items-center round">
                  <img src={"/img/jewelry/" + item.img} alt="product-image" />
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
        </div>
      </div>
      {/* End jewelry section */}
      {/* Collection */}
      <div className="collection-section">
        <Collection />
      </div>
      {/* Schedule */}
      <Schedule />
      {/* Footer */}
      <Footer />
    </div>
  );
}
