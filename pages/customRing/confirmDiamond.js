import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Collection from "../../components/collection";
import NeedHelp from "../../components/needHelp";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { useRouter } from "next/router";
import {
  RiHeartFill,
  RiShareLine,
  RiChat1Line,
  RiCustomerService2Fill,
  RiCheckLine,
} from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";

const options = [
  { name: "ALL", value: "ALL" },
  { name: "POPULAR", value: "POPULAR" },
];
const categories = ["H-Color", "SI1 Clarity", "Excellent Cut"];
const products = ["product-1.png", "product-1.png"];
const karat = [
  { title: "14K SILVER", color: "white" },
  { title: "18K SILVER", color: "white" },
  { title: "14K GOLD", color: "yellow" },
  { title: "18K GOLD", color: "yellow" },
  { title: "PLATINIUM", color: "platinium" },
  { title: "ROSE GOLD", color: "rose-gold" },
];
const sizeList = [
  { size: 5 },
  { size: 6 },
  { size: 7 },
  { size: 8 },
  { size: 9 },
];

const carats = [
  { carat: 0.47, time: 0.3 },
  { carat: 0.67, time: 0.5 },
  { carat: 0.87, time: 0.7 },
  { carat: 1.17, time: 1 },
];

const informations = [
  { name: "Shape", value: "ROUND" },
  { name: "sYMMETRY", value: "vERY gOOD" },
  { name: "CARAT", value: "1.00" },
  { name: "fLUORESCENCE", value: "nONE" },
  { name: "COLOR", value: "H" },
  { name: "l/w( (MM)", value: "6.31X6.36" },
  { name: "CLARITY", value: "SI1" },
  { name: "l/w rATIO", value: "1.01" },
  { name: "CUT", value: "EXCELLENT" },
  { name: "cERTIFICATE", value: "igi" },
  { name: "POLISH", value: "EXCELLET" },
];

export default function ConformDiamond() {
  const [result, setResult] = useState("878");
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [favorItem, setFavorItem] = useState();
  const [mainImage, setMainImage] = useState(products[0]);
  const [color, setColor] = useState("white");
  const router = useRouter();

  const showProduct = (product) => {
    setMainImage(product);
  };

  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <div className="confirmDiamond_page">
      <Head>
        <title>chooseSetting | Royal Coster</title>
      </Head>
      <Header />
      {/* Start state section */}
      <div className="state-section">
        <div className="link-panel  r-container py-3 d-flex align-items-center">
          <button
            className="btn back-arrow d-flex me-3 blue-text px-0"
            onClick={() => router.back()}
          >
            <HiOutlineArrowLeft />
          </button>
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
                  <RiCheckLine />
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
      {/* Start confirm section */}
      <div className="confirm-section py-5 mb-5 row r-container">
        <div className="show-product col-md-6 col-12 p-0 pt-5 pe-5">
          <div className="row m-0">
            <div className="tile-product col-2 p-0 pe-3">
              {products.map((item, index) => {
                return (
                  <button
                    className="btn btn-show-product mb-3 p-0 round-form"
                    key={index}
                    onClick={() => showProduct(item)}
                  >
                    <img
                      src={"/img/customRing/confirmDiamond/" + item}
                      alt="product-image"
                    />
                  </button>
                );
              })}
            </div>
            <div className="main-product col-10 p-0">
              <div className="image-panel round mb-4">
                <img
                  src={"/img/customRing/confirmDiamond/" + mainImage}
                  alt="main-image"
                />
              </div>
              <div className="btn-panel d-flex align-items-center justify-content-between">
                <button className="btn px-4 py-2 blue-text btn-share text-uppercase round-form d-flex align-items-center">
                  <RiShareLine className="me-2" />
                  share
                </button>
                <button className="btn px-4 py-2 blue-text btn-share text-uppercase round-form d-flex align-items-center">
                  drop a hint
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="show-setting col-md-6 col-12 p-0 pt-5 ps-5">
          <div className="title-panel">
            <h3 className="title pb-4 m-0">Round Shape</h3>
            <h3 className="description text-capitalize pb-4 m-0">
              1.00 Carat Round Diamond
            </h3>
            <p className="product-id pb-4 m-0">SKU 1219W14</p>
            <div className="product-categories pb-4">
              {categories.map((item, index) => {
                if (index == 0) return <span key={index}>{item} </span>;
                else return <span key={index}> | {item}</span>;
              })}
            </div>
            <h3 className="cost pb-5 m-0">€ 645.00</h3>
          </div>
          <div className="confirm-panel">
            <div className="carat-panel row m-0 py-4">
              <div className="top-bar d-flex justify-content-between align-items-center pb-4">
                <h3 className="text-uppercase">Total Carat Weight</h3>
                <button className="btn text-uppercase">change</button>
              </div>
              <div className="btn-panel">
                {carats.map((item, index) => {
                  return (
                    <button className="btn py-4 px-5 me-3" key={index}>
                      <p className="m-0 pb-2">{item.carat}</p>
                      <span>{item.time.toFixed(2) + "*"}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="confirm-box d-flex flex-wrap justify-content-between align-items-start m-0 py-4">
              <button
                className={
                  "btn favor-btn round-form d-flex align-items-center justify-content-center p-4 me-3 " +
                  favorItem
                }
                onClick={() =>
                  favorItem ? setFavorItem() : setFavorItem("favor")
                }
              >
                <RiHeartFill />
              </button>
              <div className="setting-btn-panel text-end">
                <Link href="/customRing/confirmRing">
                  <a className="btn blue-btn text-uppercase round-form px-5 py-3 mb-4">
                    select this setting
                  </a>
                </Link>
                <p className="m-0">
                  Price is for setting only, Price includes VAT
                </p>
              </div>
            </div>
            <div className="help-panel d-flex justify-content-between py-4">
              <p className="text-uppercase m-0">Need help?</p>
              <div className="link-panel d-flex">
                <Link href="#">
                  <a className="text-uppercase me-4 d-flex align-items-center blue-text">
                    <RiCustomerService2Fill className="me-2" />
                    contact
                  </a>
                </Link>

                <Link href="#">
                  <a className="text-uppercase d-flex align-items-center blue-text">
                    <RiChat1Line className="me-2" />
                    chat
                  </a>
                </Link>
              </div>
            </div>
            <div className="schedule-panel d-flex align-items-center justify-content-between flex-wrap py-4">
              <p className="m-0 text-uppercase">
                Not ready to purchase online?
              </p>
              <button className="btn btn-schedule text-uppercase blue-text my-3 px-5 py-2">
                Schedule an appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End confirm section */}
      {/* Start detail section */}
      <div className="detail-section r-container pb-5 mb-5">
        <h3 className="pb-5 blue-text title">Diamond Details</h3>
        <div className="py-5 text-panel">
          <h3 className="blue-text">SKU 10872957</h3>
          <p className="m-0 pb-5">
            This beautiful tapered engagement ring design is channel-set with
            eight round shaped diamonds. A setting designed to draw the eye to
            the center diamond or gemstone of your choice. Pair it with the
            matching wedding band for a contoured look.
          </p>
          <nav className="info-panel">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active text-uppercase px-0 me-5"
                id="nav-information-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-information"
                type="button"
                role="tab"
                aria-controls="nav-information"
                aria-selected="true"
              >
                Information
              </button>
              <button
                className="nav-link text-uppercase px-0"
                id="nav-setDiamond-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-setDiamond"
                type="button"
                role="tab"
                aria-controls="nav-setDiamond"
                aria-selected="false"
              >
                Can be set with
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-information"
              role="tabpanel"
              aria-labelledby="nav-information-tab"
            >
              <h3 className="title-panel py-5 text-uppercase m-0">
                Diamond information
              </h3>
              <div className="informations row m-0">
                {informations.map((item, index) => {
                  return (
                    <div
                      className={
                        index % 2 == 1
                          ? "col-md-6 col-12 p-0 ps-md-3"
                          : "col-md-6 col-12 p-0 pe-md-3 pe-0"
                      }
                      key={index}
                    >
                      <div
                        className={
                          (Math.floor(index / 2) % 2 == 0) & (index % 2 == 0)
                            ? "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel grey-mode md-grey-mode"
                            : (Math.floor(index / 2) % 2 == 0) &
                              (index % 2 == 1)
                            ? "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel grey-mode"
                            : index % 2 == 0
                            ? "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel md-grey-mode"
                            : "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel"
                        }
                      >
                        <p className="text-uppercase information-name m-0">
                          {item.name}
                        </p>
                        <p className="text-uppercase m-0">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-setDiamond"
              role="tabpanel"
              aria-labelledby="nav-setDiamond-tab"
            >
              <h3 className="title py-5 text-uppercase m-0">Can be set with</h3>
            </div>
          </div>
        </div>
      </div>
      {/* End detail section */}
      {/* Start help section */}
      <NeedHelp />
      {/* End help section */}
      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
