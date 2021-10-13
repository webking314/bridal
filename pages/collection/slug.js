import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import AppointmentModal from "../../components/appointmentModal";
import renderHTML from "react-render-html";
import NumberFormat from "react-number-format";
import WatchItems from "../../components/watchItems";
import Collection from "../../components/collection";
import Instagram from "../../components/instagram"
import { RiArrowRightSFill, RiMailFill, RiPhoneFill, RiWhatsappFill, RiDvdFill } from "react-icons/ri";

const productTypes = ['all', 'rings', 'earrings', 'neclaces', 'bracelets'];
const products = [
  {
    image: "/img/collection/product (1).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (2).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (3).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (4).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (5).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (6).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (7).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (8).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
  {
    image: "/img/collection/product (9).png",
    title: "Rainbow Earrings (1510385)",
    price: "2400"
  },
]

export default function CollectionDetail() {
  const [productType, setProductType] = useState('all');

  return (
    <div className="collection-detail_page">
      <Head>
        <title>Collection Detail | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section" style={{ background: "url(/img/collection/detail-banner_bg.png)" }}>
        <div className="r-container">
          <h1 className="title blue-text text-capitalize mb-5">
            Rainbow<br /> <span>Collection</span>
          </h1>
        </div>
      </div>

      {/* Start guide section */}
      <div className="guide-section">
        <div className="row r-container py-5">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">Sparkling <span>sapphires</span></h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text mb-4">
              Sparkling sapphires in all the colors of the rainbow form our unique Rainbow Collection. The combination of sapphires and diamonds create a playful whole of color and light. Discover the colors of rain and sunshine.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start product section */}
      <div className="product-section r-container">
        <div className="product-type-panel d-flex justify-content-center flex-wrap py-5 my-5">
          {
            productTypes.map((productTypeItem, index) =>
              <button className={"btn text-capitalize mx-4 btn-type " + (productTypeItem == productType && 'active')} key={index} onClick={() => setProductType(productTypeItem)}>{productTypeItem}</button>
            )
          }
        </div>
        <div className="product-panel row">
          {
            products.map((product, index) =>
              <Link href="#" key={index}>
                <a className="product-item col-md-4 col-sm-6 col-12 mb-5">
                  <div className="image-panel round hover-scale mb-3">
                    <img src={product.image} alt="product-image" />
                  </div>
                  <h3 className="title mb-3">{product.title}</h3>
                  <h3 className="price blue-text mb-0">
                    {<NumberFormat
                      value={product.price}
                      displayType="text"
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                      prefix={"€ "}
                    />}
                  </h3>
                </a>
              </Link>
            )
          }
        </div>
      </div>
      {/* End product section */}

      {/* Start collection section */}
      <div className="collection-section">
        <Collection />
      </div>
      {/* End collection section */}

      {/* Start instagram section */}
      <Instagram />
      {/* End instagram section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

      <AppointmentModal />

    </div >
  );
}
