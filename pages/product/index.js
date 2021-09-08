import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Collection from "../../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import NeedHelp from "../../components/needHelp";
import { useRouter } from "next/router";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  RiHeartFill,
  RiShareLine,
  RiErrorWarningLine,
  RiChat1Line,
  RiCustomerService2Fill,
  RiSubtractFill,
  RiAddFill,
} from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";

SwiperCore.use([Autoplay, Navigation]);

const products = ["product-1.png", "product-2.png", "product-3.png"];
const inscriptions = [
  { title: "Add Engraving" },
  { title: "Add Engraving" },
  { title: "Add Engraving" },
  { title: "Add Engraving" },
];
const sizeList = [
  { size: 5 },
  { size: 6 },
  { size: 7 },
  { size: 8 },
  { size: 9 },
];
const meterials = [
  { meterial: "material-1.png" },
  { meterial: "material-2.png" },
  { meterial: "material-3.png" },
  { meterial: "material-4.png" },
];

const customerSlider = [
  {
    name: "Ayesha",
    location: "Amsterdam, Netherlands",
    coverImage: "customer_cover-2.png",
    customerImage: "customer-1.png",
    description:
      "Finding jewelry that just finishes your outfit.. Isn't that a great feeling? 😍 At Royal Coster Diamonds we have an extensive collection of (diamond) jewelry. If you'd rather choose the diamond and setting yourself, that's also possible.",
  },
  {
    name: "costerdiamondsofficial",
    location: "Amsterdam, Netherlands",
    coverImage: "customer_cover-2.png",
    customerImage: "customer-2.png",
    description:
      "This 2 carat Royal 201 diamond ring is a must for everyone 😍 Tag the person who you think should have this ring!⁠",
  },
];
export default function Product() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [result, setResult] = useState("878");
  const [size, setSize] = useState(0);
  const [favorItem, setFavorItem] = useState();
  const [itemAmount, setItemAmount] = useState(1);
  const [itemPrice, setItemPrice] = useState(645);
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [mainImage, setMainImage] = useState(products[0]);
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
    <div className="product_page">
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
                    <img src={"/img/product/" + item} alt="product-image" />
                  </button>
                );
              })}
            </div>
            <div className="main-product col-10 p-0">
              <div className="image-panel round mb-4">
                <div className="image-box">
                  <img src={"/img/product/" + mainImage} alt="main-image" />
                </div>
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
            <h3 className="type pb-4 m-0">Halo style</h3>
            <h3 className="title text-capitalize pb-4 m-0">
              Brilliant Cut Diamond Engagement Ring
            </h3>
            <p className="description pb-4 m-0">
              Exude grace with this round Aphrodite band, set with round,
              brilliant diamonds and halo to lend eternal style.
            </p>
          </div>
          <div className="confirm-panel">
            <div className="material-setting-panel py-4">
              <label
                htmlFor="selectKarat"
                className="d-flex align-items-center pb-4 text-uppercase"
              >
                Metal : white Gold 18k
                <RiErrorWarningLine className="ms-2" />
              </label>
              <div className="material-box d-flex">
                {meterials.map((item, index) => {
                  return (
                    <button
                      className="btn btn-material d-flex align-items-center justify-content-center p-2 me-3"
                      key={index}
                    >
                      <img
                        src={"/img/product/" + item.meterial}
                        alt="metarial-image"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="selector-panel row m-0 py-4">
              <div className="select-karat col-lg-6 col-md-12 col-sm-6 col-12 p-0 pe-lg-3 pe-md-0 pe-sm-3 pe-0">
                <div className="d-flex justify-content-between pb-4 align-items-center">
                  <h3
                    htmlFor="selectKarat"
                    className="d-flex align-items-center m-0 text-uppercase"
                  >
                    Ring Size
                    <RiErrorWarningLine className="ms-2" />
                  </h3>
                  <button
                    className="btn text-uppercase btn-find-size"
                    onClick={() => setSize(0)}
                  >
                    find my size
                  </button>
                </div>
                <div className="select-box">
                  <select
                    className="form-select blue-text ps-4 round-form py-3"
                    aria-label="Default select example"
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                  >
                    {sizeList.map((item, index) => {
                      return (
                        <option value={index} key={index}>
                          {item.size}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="select-size col-lg-6 col-md-12 col-sm-6 col-12 p-0 ps-lg-3 ps-md-0 ps-md-3 ps-0">
                <label
                  htmlFor="selectKarat"
                  className="d-flex align-items-center pb-4 text-uppercase"
                >
                  Free Inscription
                  <RiErrorWarningLine className="ms-2" />
                </label>
                <select
                  className="form-select blue-text ps-4 round-form py-3 text-uppercase"
                  aria-label="Default select example"
                >
                  {inscriptions.map((item, index) => {
                    return (
                      <option
                        className="text-uppercase"
                        value={index}
                        key={index}
                      >
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="cost-panel d-flex justify-content-between align-items-center py-4">
              <div className="price-panel">
                <h4 className="text-uppercase">total</h4>
                <h3 className="blue-text">
                  {"€" + (itemPrice * itemAmount).toFixed(2)}
                </h3>
              </div>
              <div className="amount-panel d-flex align-items-center">
                <button
                  className="btn btn-decrease round-form blue-text d-flex align-items-center justify-content-center p-4"
                  onClick={() =>
                    itemAmount > 1 && setItemAmount(itemAmount - 1)
                  }
                >
                  <RiSubtractFill />
                </button>
                <span className="mx-4">{itemAmount}</span>
                <button
                  className="btn btn-increase round-form blue-text d-flex align-items-center justify-content-center p-4"
                  onClick={() => setItemAmount(itemAmount + 1)}
                >
                  <RiAddFill />
                </button>
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
              <div className="setting-btn-panel d-flex flex-column flex-1 text-end">
                <Link href="#">
                  <a className="btn blue-btn text-uppercase round-form px-5 py-3 mb-4">
                    add to cart
                  </a>
                </Link>
                <p className="m-0">Price excludes VAT</p>
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

      {/* Start customer section */}
      <div className="customer-section r-container py-5">
        <div className="top-panel d-flex justify-content-between">
          <h3 className="title py-5 blue-text">Happy Customers</h3>
          <div className="btn-bottom-panel d-flex align-items-center">
            <button ref={navigationPrevRef} className="btn px-0 me-5">
              <img src="/img/common/leftArrow_black.png" alt="rightArrow" />
            </button>
            <button ref={navigationNextRef} className="btn px-0">
              <img src="/img/common/rightArrow_black.png" alt="rightArrow" />
            </button>
          </div>
        </div>
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          slidesPerView={1.6}
          spaceBetween={30}
          loop={true}
          className="mySwiper py-5"
          breakpoints={{
            1208: {
              slidesPerView: 1.6,
            },
            1: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {customerSlider.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="customer-slider-item row m-0">
                  <div className="col-lg-5 col-md-3 col-sm-4 col-12 cover-image p-0">
                    <img
                      src={"/img/product/" + item.coverImage}
                      alt="cover-image"
                    />
                  </div>
                  <div className="col-lg-7 col-md-9 col-sm-8 col-12 text-panel p-0 p-5">
                    <div className="customer-title d-flex">
                      <div className="avatar">
                        <img
                          src={"/img/product/" + item.customerImage}
                          alt="customer-avatar"
                        />
                      </div>
                      <div className="customer-info">
                        <h3 className="blue-text">{item.name}</h3>
                        <h4>{item.location}</h4>
                      </div>
                    </div>
                    <p className="description m-0 mt-5 text-capitalize">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* End customer section */}

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
