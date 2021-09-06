import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Collection from "../../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";

const options = [
  { name: "ALL", value: "ALL" },
  { name: "POPULAR", value: "POPULAR" },
];

export default function Home() {
  const [result, setResult] = useState("878");
  const [selectValue, setSelectValue] = useState("POPULAR");

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
    <div className="confirmSetting_page">
      <Head>
        <title>chooseSetting | Royal Coster</title>
      </Head>
      <Header />
      {/* Start state section */}
      <div className="state-section r-container">
        <div className="link-panel py-3 d-flex align-items-center">
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
      </div>
      {/* End state section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
