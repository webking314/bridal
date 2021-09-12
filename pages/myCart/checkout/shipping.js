import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import MyCartList from "../../../components/myCartList";

const items = [
  {
    title: "Brilliant Cut Diamond Engagement Ring",
    image: "item-1.png",
    type: "18k rose gold",
    amount: 1,
    price: 2895,
  },
  {
    title: "Brilliant Cut Diamond Engagement Ring",
    image: "item-2.png",
    type: "18k rose gold",
    amount: 1,
    price: 2895,
  },
];

export default function Shipping() {
  const [storage, setStorage] = useState();
  const router = useRouter();

  useEffect(() => {
    // console.log(localStorage)
    setStorage(localStorage);
  }, []);
  // if (storage) {
  //   if (storage.firstStep != "complete") {
  //     router.push("/");
  //     return <div></div>;
  //   } else
  return (
    <div className="checkout_page checkout-shipping">
      <div className="checkout_header">
        <div className="r-container py-5">
          <Link href="/">
            <a>
              <img src="/img/common/mobile_logo.png" alt="logo" />
            </a>
          </Link>
        </div>
      </div>
      <div className="link-panel py-4">
        <div className="r-container d-flex align-items-center">
          <button
            className="btn back-arrow d-flex me-3 blue-text px-0"
            onClick={() => router.back()}
          >
            <HiOutlineArrowLeft />
          </button>
          <Link href="/myCart">
            <a className="mx-2 text-uppercase">Shopping cart</a>
          </Link>
          /
          <Link href="/myCart/checkout/information">
            <a className="mx-2 text-uppercase">information</a>
          </Link>
          /<span className="title ms-2 text-uppercase blue-text">Shipping</span>
          /
          <Link href="#">
            <a className="mx-2 text-uppercase">Payment</a>
          </Link>
        </div>
      </div>
      <div className="row main-panel r-container py-5">
        <div className="col-lg-6 col-12 pt-lg-0 pt-sm-5 shipping-panel">
          <div className="shipping-info">
            <div className="title-panel py-4">
              <h3>Shipping</h3>
            </div>
            <div className="contact-panel round-panel round-form d-flex justify-content-between py-4 px-5 mt-4 flex-sm-row flex-column">
              <div className="text-panel d-flex align-items-center">
                <h3 className="m-0 me-4">Contact</h3>
                <p className="m-0">syedkaift@gmail.com</p>
              </div>
              <Link href="/myCart/checkout/information">
                <a className="text-primary text-decoration-underline text-end">modify</a>
              </Link>
            </div>
            <div className="address-panel round-panel round-form d-flex justify-content-between py-4 px-5 mt-4 flex-sm-row flex-column">
              <div className="text-panel d-flex">
                <h3 className="m-0 me-4">Send To</h3>
                <p className="m-0">
                  #6/3 2nd Main Road 3rd Cross Lalbagh Road Ckc Garden Bangalore
                  BENGALURU, KARNATAKA 560027 India, 1011 AA bangalore,
                  Nederland
                </p>
              </div>
              <Link href="/myCart/checkout/information">
                <a className="text-primary text-decoration-underline text-end">modify</a>
              </Link>
            </div>
          </div>
          <div className="shipping-method mt-5 py-sm-5">
            <div className="title-panel py-4">
              <h3>Shipping method</h3>
            </div>
            <label
              className="standard-shipping-panel round-form d-flex justify-content-between py-4 px-5 mt-4"
              htmlFor="checkbox"
            >
              <div className="text-panel d-flex">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox"
                />
                <h3 className="ps-5 m-0 ms-5">Standard</h3>
              </div>
              <Link href="#">
                <a className="blue-text text-decoration-underline">Free</a>
              </Link>
            </label>
          </div>
          <div className="btn-panel pt-5 d-flex flex-sm-row flex-column">
            <button
              type="submit"
              className="btn round-form blue-btn px-5 py-3 next-btn text-uppercase me-sm-4 me-0 mb-sm-0 mb-4"
              onClick={() => router.push("/myCart/checkout/payment")}
            >
              Go to Pay
            </button>
            <button
              className="btn round-form px-4 py-3 back-btn text-uppercase"
              onClick={() => router.push("/myCart/checkout/information")}
            >
              Back to info
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-12 ps-lg-5 mb-lg-0 mb-5 order-lg-last order-first">
          <MyCartList items={items} />
        </div>
      </div>
    </div>
  );
  // } else {
  //   return <></>;
  // }
}
