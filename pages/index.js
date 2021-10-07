import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import Collection from "../components/collection";
import Help from "../components/help";
import Instagram from "../components/instagram";
import { Modal, Button } from "react-bootstrap"
import { RiCloseFill } from "react-icons/ri"

let showVal = false;

export default function Home() {
  const [show, setShow] = useState(false)
  let categories = [
    { img: "category1.png", url: "#", title: "Earrings" },
    { img: "category2.png", url: "#", title: "Earrings" },
    { img: "category3.png", url: "#", title: "Earrings" },
    { img: "category4.png", url: "#", title: "Earrings" },
  ];
  let videoUrl = "/video/video.mp4";

  useEffect(() => {
    if (!showVal) {
      showVal = true;
      setShow(showVal)
    }
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="homepage">
      <Head>
        <title>Home | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          defaultmuted="defaultmuted"
          playsInline
          onContextMenu={() => false}
          preload="auto"
          className="d-block d-sm-none bg_video"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="r-container d-none d-sm-flex flex-column">
          <div className="text-panel col-lg-6 col-md-8 col-sm-10 col-12">
            <h1 className="text-capitalize">
              All the colors of the <span>rainbow!</span>
            </h1>
            <p className="mt-4 mb-5 pt-2">
              Exclusively at Royal Coster Diamonds
            </p>
          </div>
          <div className="btn-panel">
            <button className="btn rainbow-btn dark-btn round-form px-5 py-3 me-3 mt-5">
              Rainbow Collection
            </button>
            <button className="btn blue-outline-btn shop-now-btn round-form px-5 py-3 mt-5">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start Categories section */}
      <div className="categories d-none d-md-flex row m-0">
        {categories.map((item, index) => {
          return (
            <div className="col-lg-3 col-sm-6 col-12 p-0 mb-4" key={index}>
              <Link passHref={true} href={item.url}>
                <a>
                  <div className="category-item round">
                    <img src={"/img/homepage/" + item.img} alt="category" />
                    <div className="hover-title p-4">{item.title}</div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      {/* End Categories section */}

      {/* Start Collection section */}
      <div className="collection-section">
        <Collection />
      </div>
      {/* End Collection section */}

      {/* Start Help section */}
      <Help />
      {/* End Help section */}

      {/* Start Instagram section */}
      <Instagram />
      {/* End Instagram section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

      {/* Start discount modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="discount-modal"
        dialogClassName="modal-90w mx-auto"
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
        size="lg"
        centered
        scrollable
      >
        <Modal.Body className="p-0">
          <div className="row m-0">
            <img src="/img/common/discount-modal_img.png" className="modal-image col-sm-6 p-0" alt="modal-image" />
            <div className="col-sm-6 left-panel d-flex flex-column justify-content-between p-5">
              <div className="text-panel mb-4">
                <h3 className="blue-text title text-capitalize">Save <span>20%</span> on all <span>jewelries</span> on your next <span>order</span></h3>
                <p className="m-0">Subscribe to our website’s mailing list and get a special gifts and more, just for you!</p>
              </div>
              <div className="form-panel d-flex round-form">
                <input type="text" className="form-control px-5 py-3" placeholder="Type Your Email" />
                <button className="btn">JOIN NOW</button>
              </div>
            </div>
          </div>
          <button className="btn close-btn d-flex p-0 justify-content-center align-items-center" onClick={handleClose}><RiCloseFill /></button>
        </Modal.Body>
      </Modal>
      {/* End discount modal */}
    </div>
  );
}
