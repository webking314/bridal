import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import NumberFormat from "react-number-format";
import NeedHelp from "../../components/needHelp";
import { useRouter } from "next/router";
import {
  RiSubtractFill,
  RiAddFill,
  RiCustomerService2Fill,
  RiChat1Line,
  RiCloseFill,
} from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";

const cartItems = [
  {
    title: "Brilliant Cut Diamond Engagement Ring",
    image: "item-1.png",
    style: "Halo style",
    description:
      "Exude grace with this round Aphrodite band, set with round, brilliant diamonds and halo to lend eternal style.",
    price: 2895,
    amount: 1,
  },
  {
    title: "Brilliant Cut Diamond Engagement Ring",
    image: "item-2.png",
    style: "Halo style",
    description:
      "Exude grace with this round Aphrodite band, set with round, brilliant diamonds and halo to lend eternal style.",
    price: 2895,
    amount: 1,
  },
];

let subTotalPrice = 0;

export default function MyCart() {
  const [items, setItems] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(4356);
  const [total, setTotal] = useState();
  const router = useRouter();

  const showProduct = (product) => {
    setMainImage(product);
  };

  const checkOut = (e) => {
    e.preventDefault();
    router.push("/myCart/checkout/information");
    localStorage.setItem(
      "cart",
      JSON.stringify({ cartData: items, subTotal: subTotal })
    );
  };

  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
      if (localStorage.products) setItems(JSON.parse(localStorage.products));
    }
  }, []);

  useEffect(() => {
    items &&
      items.map((item, index) => {
        if (index == 0) subTotalPrice = 0;
        subTotalPrice += item.price * item.amount;
        setSubTotal(subTotalPrice);
      });
  }, [items]);

  useEffect(() => {
    setTotal(subTotal - vat);
  }, [subTotal]);
  return (
    <div className="myCart_page">
      <Head>
        <title>My Cart | Royal Coster</title>
      </Head>
      <Header />
      {/* Start link section */}
      <div className="link-section">
        <div className="r-container py-3 d-flex align-items-center justify-content-between">
          <button
            className="btn back-arrow d-flex align-items-center text-uppercase blue-text px-0"
            onClick={() => router.back()}
          >
            <HiOutlineArrowLeft className="me-5" />
            continue shopping
          </button>
          <span className="text-uppercase blue-text">
            <span>{items ? items.length : 0}</span> items in shopping cart
          </span>
        </div>
      </div>
      {/* End link section */}
      {/* Start my cart section */}
      <div className="my-cart-section r-container py-5 mb-5">
        <div className="title-panel pb-3">
          <h3 className="title text-capitalize blue-text">My shopping cart</h3>
          <p className="text-uppercase">{items ? items.length : 0} items</p>
        </div>
        <div className="cart-panel">
          {items ? (
            items.map((item, index) => {
              return (
                <div
                  className="cart-info py-5 d-flex align-items-center justify-content-center flex-md-row flex-column"
                  key={index}
                >
                  <img
                    src={"/img/myCart/" + item.images[0]}
                    alt="item-image"
                    className="item-image me-4 mb-md-0 mb-5"
                    width="200"
                    height="200"
                  />
                  <div className="info-panel">
                    <div className="info_text-panel row m-0 mb-lg-5 mb-3">
                      <div className="col-lg-6 col-12 text-panel">
                        <h3 className="blue-text title m-0 text-center text-md-start text-capitalize">
                          {item.title}
                        </h3>
                        <p className="cart-style m-0 py-4 text-capitalize">
                          {item.style}
                        </p>
                        <p className="cart-description m-0 text-capitalize">
                          {item.description}
                        </p>
                      </div>
                      <div className="col-lg-6 col-12 cost-panel p-0 d-flex justify-content-between flex-sm-row flex-column ps-lg-5 ps-0 pt-lg-0 pt-5">
                        <div className="mb-sm-0 mb-5 amount-panel ps-lg-5 ps-0">
                          <div className="d-flex justify-content-sm-start justify-content-center align-items-center">
                            <button
                              className="btn btn-decrease round-form blue-text d-flex align-items-center justify-content-center p-2"
                              onClick={() => {
                                if (item.amount > 1) {
                                  items[index].amount = item.amount - 1;
                                  setItems([...items]);
                                }
                              }}
                            >
                              <RiSubtractFill />
                            </button>
                            <span className="mx-4">{item.amount}</span>
                            <button
                              className="btn btn-increase round-form blue-text d-flex align-items-center justify-content-center p-2"
                              onClick={() => {
                                items[index].amount = item.amount + 1;
                                setItems([...items]);
                              }}
                            >
                              <RiAddFill />
                            </button>
                          </div>
                        </div>
                        <h3 className="text-sm-end text-center cart-price blue-text">
                          <NumberFormat
                            value={item.price * item.amount}
                            displayType="text"
                            decimalScale={2}
                            fixedDecimalScale={true}
                            thousandSeparator={true}
                            prefix="€ "
                          />
                        </h3>
                      </div>
                    </div>
                    <div className="link-panel d-flex justify-content-end">
                      <button
                        className="btn btn-remove d-flex align-items-center text-uppercase"
                        onClick={() => {
                          items.splice(index, 1);
                          setItems([...items]);
                        }}
                      >
                        Remove <RiCloseFill className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="none-text m-0 py-5 text-center text-capitalize">My Cart items none</h3>
          )}
        </div>
      </div>
      {/* End my cart section */}
      {/* Start total section */}
      <div className="total-section py-5 r-container">
        <div className="row m-0">
          <div className="col-md-7 col-12 p-0 pe-md-3 pe-0 pb-md-0 pb-5 left-panel">
            <div className="round need-help-panel px-5 mb-4">
              <div className="title-panel d-flex justify-content-between align-items-center flex-sm-row flex-column py-5">
                <h3 className="text-uppercase m-0 mb-sm-0 mb-5">Need Help?</h3>
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
              <div className="purchase-panel d-flex justify-content-between align-items-center flex-sm-row flex-column py-5">
                <h3 className="text-uppercase m-0 mb-sm-0 mb-5">
                  Not ready to purchase online?
                </h3>
                <button className="btn btn-schedule text-uppercase blue-text px-4 py-2">
                  Schedule an appointment
                </button>
              </div>
            </div>
            <div className="instruction-panel round px-5 py-5">
              <h3 className="title m-0 pb-5 text-sm-start text-center">
                SPECIAL INSTRUCTIONS FOR US
              </h3>
              <textarea
                className="form-control round p-4"
                placeholder="Write Here..."
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="col-md-5 col-12 summary-panel round px-5 py-5">
            <h3 className="title text-uppercase pb-5 blue-text">Summary</h3>
            <div className="price-panel py-4">
              <div className="subtotal-panel d-flex align-items-center justify-content-between pb-3">
                <h3 className="m-0">Subtotal:</h3>
                <p className="m-0">€{subTotal}</p>
              </div>
              <div className="val-panel  d-flex align-items-center justify-content-between">
                <h3 className="m-0">Excluding VAT:</h3>
                <p className="m-0">€{vat}</p>
              </div>
            </div>
            <div className="total-panel pt-4">
              <div className="total-price d-flex justify-content-between pb-4">
                <h3 className="m-0">Total</h3>
                <p className="m-0">€{total}</p>
              </div>
              <div className="round paid-price d-flex justify-content-between p-4 mb-4">
                <h3 className="m-0">To be paid:</h3>
                <p className="m-0">€ {total}</p>
              </div>
              <button
                className="btn blue-btn round p-4 text-uppercase"
                onClick={checkOut}
                disabled={items ? false : true}
              >
                Check OUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End total section */}
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
