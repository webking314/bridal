import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { useRouter } from "next/router";
import MRange from "../../components/mRange";
import Range from "../../components/range";

import {
  RiErrorWarningLine,
  RiFunctionLine,
  RiMenuLine,
  RiCheckLine,
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

const colorMarks = [
  { value: 0, label: "" },
  {
    value: 10,
    label: "M",
  },
  {
    value: 20,
    label: "L",
  },
  {
    value: 30,
    label: "K",
  },
  {
    value: 40,
    label: "J",
  },
  {
    value: 50,
    label: "I",
  },
  {
    value: 60,
    label: "H",
  },
  {
    value: 70,
    label: "G",
  },
  {
    value: 80,
    label: "F",
  },
  {
    value: 90,
    label: "E",
  },
  {
    value: 100,
    label: "D",
  },
];

const clarityMarks = [
  { value: 0, label: "" },
  {
    value: 11.111,
    label: "L1",
  },
  {
    value: 22.222,
    label: "S12",
  },
  {
    value: 33.333,
    label: "SL1",
  },
  {
    value: 44.444,
    label: "VS2",
  },
  {
    value: 55.555,
    label: "VS1",
  },
  {
    value: 66.666,
    label: "VVS2",
  },
  {
    value: 77.777,
    label: "VVS1",
  },
  {
    value: 88.888,
    label: "IF",
  },
  {
    value: 99.999,
    label: "FL",
  },
];
const cutMarks = [
  {
    value: 0,
    label: "",
  },
  {
    value: 25,
    label: "FAIR",
  },
  {
    value: 50,
    label: "GOOD",
  },
  {
    value: 75,
    label: "VERY GOOD",
  },
  {
    value: 100,
    label: "EXCELLET",
  },
];
export default function ChooseDiamond() {
  const [result, setResult] = useState("878");
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [products, setProducts] = useState(productList);
  const [color, setColor] = useState("white");
  const [selectShape, setSelectShape] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  const loadMore = () => {
    setProducts([...products, ...productList]);
  };

  const shapeHandle = (event, index) => {
    let target = event.target.closest(".btn-shape");
    if (target.classList.contains("active")) {
      let removeItem = selectShape.indexOf(shapes[index].name);
      if (removeItem != 0) {
        selectShape.splice(removeItem, 1);
        setSelectShape([...selectShape]);
      } else {
        selectShape.splice(-1, 1);
      }
      target.classList.remove("active");
    } else {
      target.classList.add("active");
      setSelectShape([...selectShape, shapes[index].name]);
    }
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
                <button className="btn btn-shape me-3 round mb-3" key={index} onClick={(event) => shapeHandle(event, index)}>
                  <div className="image-box pb-3">
                    <img src={"/img/customRing/chooseDiamond/" + item.image} />
                  </div>
                  <p className="m-0">{item.name}</p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="silder-panel row m-0">
          <div className="color-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5">
            <h3 className="text-uppercase blue-text d-flex align-items-center mb-4">
              carat
              <RiErrorWarningLine className="ms-2" />
            </h3>
            <Range max={8} min={0} unit={""} />
          </div>
          <div className="color-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5">
            <h3 className="text-uppercase blue-text d-flex align-items-center">
              colour
              <RiErrorWarningLine className="ms-2" />
            </h3>
            <MRange marks={colorMarks} step={10} />
          </div>
          <div className="clarity-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5">
            <h3 className="text-uppercase blue-text d-flex align-items-center">
              clarity
              <RiErrorWarningLine className="ms-2" />
            </h3>
            <MRange marks={clarityMarks} step={11.111} />
          </div>
          <div className="cut-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5">
            <h3 className="text-uppercase blue-text d-flex align-items-center">
              cut
              <RiErrorWarningLine className="ms-2" />
            </h3>
            <MRange marks={cutMarks} step={25} />
          </div>
          <div className="price-filter col-lg-4 col-md-6 col-12 p-0 pe-5 mb-5 pb-5">
            <h3 className="text-uppercase blue-text d-flex align-items-center mb-4">
              price
              <RiErrorWarningLine className="ms-2" />
            </h3>
            <Range max={109000} min={0} unit={"$"} />
          </div>
        </div>
      </div>
      {/* End choose section */}
      {/* Start products section */}
      <div className="product-section r-container mb-5 pb-5">
        <div className="top-bar row align-items-center m-0 py-3">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-3">
            <h2>Choose Diamond</h2>
            <p className="text-uppercase">
              Certified Diamonds ({result} items)
            </p>
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
        <div className="list-bar d-flex justify-content-between align-items-center">
          <div className="tab-group">
            <button className="btn py-4 px-0 me-4">NATURAL</button>
            <button className="btn py-4 px-0 me-4">COLOURED</button>
            <button className="btn py-4 px-0">GEMSTONES</button>
          </div>
          <div className="order-btn-group d-flex">
            <button className="btn btn-show-content d-flex round-form py-3 me-5">
              <RiMenuLine />
            </button>
            <button className="btn btn-show-list d-flex round-form py-3">
              <RiFunctionLine />
            </button>
          </div>
        </div>
        <div className="main-panel row py-5 m-0">
          {products.map((item, index) => {
            return (
              <Link href="/customRing/confirmDiamond" key={index}>
                <a className="product-item col-lg-3 col-md-4 col-sm-6 col-12 pe-4 p-0 mb-5">
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
                </a>
              </Link>
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
