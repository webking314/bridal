import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import renderHTML from "react-render-html";
import NumberFormat from "react-number-format";
import ReactFlagsSelect from "react-flags-select";

export default function ThankYou() {
  const [selected, setSelected] = useState("LU");
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.cart).cartData)
  }, [])

  useEffect(() => {
    console.log(cartData)
  }, [cartData])

  return (
    <div className="thank-you_page">
      <Head>
        <title>Thank You Page | Royal Coster</title>
      </Head>
      <div className="thank-you_header">
        <div className="top-bar px-5 py-3">
          <div className="r-container d-flex justify-content-between align-items-center">
            <Link passHref={true} href="#">
              <a>WHY ROYAL COSTER ?</a>
            </Link>
            <ReactFlagsSelect
              showSelectedLabel={false}
              showSecondarySelectedLabel={false}
              showOptionLabel={false}
              showSecondaryOptionLabel={false}
              selectedSize={14}
              optionsSize={14}
              fullWidth={false}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder=" "
              className="flag-select pb-0"
            />
          </div>
        </div >
        <div className="logo-bar text-center py-5">
          <Link href="/">
            <a>
              <img src="/img/common/thank-you_logo.png" alt="logo-img" />
            </a>
          </Link>
        </div>
      </div >
      <div className="text-panel text-center r-container mx-auto mt-md-5 mb-5">
        <h1 className="title text-capitalize blue-text my-5">Thank you for your order</h1>
        <p className="description dark-text pb-5">Your recently ordered an from our website. Thank you for your order. Please check your mail. The delivery service will fulfill the order as soon as possible. In the mean time, here you can read the rules of care!</p>
      </div>
      <div className="list-panel round p-4 mx-auto">
        <div className="d-flex justify-content-between booking-panel mb-3">
          <p className="m-0">Order Details</p>
        </div>
        {
          cartData.length > 0 && cartData.map((cart, index) => {
            return (
              <div className="experience-panel d-flex justify-content-between align-items-center mt-3" key={index}>
                <div className="experience-box">
                  <h3 className="blue-text">{cart.title}</h3>
                  <p className="m-0">{cart.product_type}</p>
                </div>
                <h3 className="blue-text text-end">
                  {<NumberFormat
                    value={cart.price}
                    displayType="text"
                    decimalScale={2}
                    fixedDecimalScale={true}
                    thousandSeparator={true}
                    prefix="€ "
                  />} x {cart.amount}</h3>
              </div>
            )
          })
        }
      </div>
      <div className="btn-panel d-flex py-5 mb-5  justify-content-center">
        <Link href="/">
          <a className="btn blue-btn px-5 py-3 btn-home text-uppercase me-4 round-form">
            back to home
          </a>
        </Link>
        <button className="btn btn-subscribe text-uppercase round-form px-5 py-3">
          Subscribe
        </button>
      </div>
      <div className="top-pink-panel" />
      <div className="bottom-blue-panel" />
      <div className="bottom-pink-panel" />
    </div>
  );
}
