import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";

export default function Search() {
  return (
    <div className="search_page">
      <Head>
        <title>OurStory | Royal Coster</title>
      </Head>
      <Header />
      <div className="r-container">
        <div className="title-panel">
          <h3 className="title">
            Search for <span>"Rings"</span>
          </h3>
          <p className="result">144 Results</p>
        </div>
        <div className="result-panel">
          <div className="btn-panel d-flex justify-content-between align-items-center">
            <div className="left-panel d-flex align-items-center">
              <button className="btn p-0">Products</button>
              <button className="btn  p-0">Education (2)</button>
              <button className="btn p-0">Articles (4)</button>
            </div>
            <button className="btn">View All (+10k )</button>
          </div>
          <div className="result_item-panel row">
            <div className="col-3">
              <div className="image-panel hover-scale round-form">
                <img
                  src="/img/product/product_earring-1.png"
                  alt="item-image"
                />
              </div>
              <p>Rainbow Earrings (1510385)</p>
              <h3>€ 2,400.00</h3>
            </div>
            <div className="col-3">
              <div className="image-panel hover-scale round-form">
                <img
                  src="/img/product/product_earring-1.png"
                  alt="item-image"
                />
              </div>
              <p>Rainbow Earrings (1510385)</p>
              <h3>€ 2,400.00</h3>
            </div>
            <div className="col-3">
              <div className="image-panel hover-scale round-form">
                <img
                  src="/img/product/product_earring-1.png"
                  alt="item-image"
                />
              </div>
              <p>Rainbow Earrings (1510385)</p>
              <h3>€ 2,400.00</h3>
            </div>
            <div className="col-3">
              <div className="image-panel hover-scale round-form">
                <img
                  src="/img/product/product_earring-1.png"
                  alt="item-image"
                />
              </div>
              <p>Rainbow Earrings (1510385)</p>
              <h3>€ 2,400.00</h3>
            </div>
          </div>
        </div>
        <div className="category-panel">
          <div className="top-panel d-flex align-items-center justify-content-between">
            <h3 className="title m-0">Categories</h3>
            <button className="btn p-0">View All</button>
          </div>
          <div className="btn-panel d-flex align-items-center flex-wrap">
            <button className="btn text-capitalize p-0">anniversary rings</button>
            <button className="btn text-capitalize p-0">engagement rings</button>
            <button className="btn text-capitalize p-0">fashion rings</button>
          </div>
        </div>
        <div className="collection-panel">
          <div className="top-panel d-flex align-items-center justify-content-between">
            <h3 className="title m-0">Categories</h3>
            <button className="btn p-0">View All</button>
          </div>
          <div className="btn-panel d-flex align-items-center flex-wrap">
            <button className="btn text-capitalize p-0">201 Collection</button>
            <button className="btn text-capitalize p-0">Rainbow Collection</button>
            <button className="btn text-capitalize p-0">Empress Collections</button>
            <button className="btn text-capitalize p-0">Empress Collections</button>
            <button className="btn text-capitalize p-0">Empress Collections</button>
          </div>
        </div>
      </div>
    </div>
  );
}
