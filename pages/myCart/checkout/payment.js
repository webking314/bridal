import Head from "next/head";
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

export default function Payment() {
  const [storage, setStorage] = useState();
  const router = useRouter();

  useEffect(() => {
    setStorage(localStorage);
  }, []);
  if (storage) {
    if (!localStorage.shipping) {
      router.push("/myCart/checkout/information");
      return <div></div>;
    } else {
      const shippingData = JSON.parse(localStorage.shipping);
      return (
        <div className="checkout_page checkout-payment">
          <Head>
            <title>Checkout Payment | Royal Coster</title>
          </Head>
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
              /
              <Link href="/myCart/checkout/shipping">
                <a className="mx-2 text-uppercase">Shipping</a>
              </Link>
              /
              <span className="title ms-2 text-uppercase blue-text">
                Payment
              </span>
            </div>
          </div>
          <div className="row main-panel r-container py-5">
            <div className="col-lg-6 col-12 pt-lg-0 pt-sm-5 shipping-panel">
              <div className="pay-info">
                <div className="contact-panel round-panel round-form d-flex justify-content-between py-4 px-5 mt-4 flex-sm-row flex-column">
                  <div className="text-panel d-flex align-items-center">
                    <h3 className="m-0 me-4">Contact</h3>
                    <p className="m-0">{shippingData.contact.email}</p>
                  </div>
                  <Link href="/myCart/checkout/information">
                    <a className="text-primary text-decoration-underline text-end">
                      modify
                    </a>
                  </Link>
                </div>
                <div className="address-panel round-panel round-form d-flex justify-content-between py-4 px-5 mt-4 flex-sm-row flex-column">
                  <div className="text-panel d-flex">
                    <h3 className="m-0 me-4">Send To</h3>
                    <p className="m-0">
                      {shippingData.address.street +
                        ", " +
                        shippingData.address.zipCode +
                        ", " +
                        shippingData.address.town +
                        ", " +
                        shippingData.address.country}
                    </p>
                  </div>
                  <Link href="/myCart/checkout/information">
                    <a className="text-primary text-decoration-underline text-end">
                      modify
                    </a>
                  </Link>
                </div>
                <div className="address-panel round-panel round-form d-flex justify-content-between py-4 px-5 mt-4 flex-sm-row flex-column">
                  <div className="text-panel d-flex">
                    <h3 className="m-0 me-4">Manner</h3>
                    <p className="m-0">
                      Standard :{" "}
                      {shippingData.shippingMethod == "free" ? "Free" : "None"}
                    </p>
                  </div>
                  <Link href="/myCart/checkout/shipping">
                    <a className="text-primary text-decoration-underline text-end">
                      modify
                    </a>
                  </Link>
                </div>
              </div>
              <div className="payment-method mt-sm-5 py-5">
                <div className="title-panel py-4">
                  <h3>Payment</h3>
                  <p className="m-0">
                    All transactions are secured and encrypted.
                  </p>
                </div>
                <div className="payment-checkout-panel payment-panel round-form mt-4 px-4">
                  <div className="form-check">
                    <label
                      className="form-check-label py-4 d-flex align-items-center"
                      htmlFor="paymentMethod-1"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="paymentMethod-1"
                      />
                      <img src="/img/myCart/payment-1.png" className="ms-3" />
                    </label>
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label d-flex align-items-center justify-content-between py-4"
                      htmlFor="paymentMethod-2"
                    >
                      <div className="left-panel  d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="paymentMethod-2"
                          defaultChecked
                        />
                        <img src="/img/myCart/payment-2.png" className="ms-3" />
                        <img src="/img/myCart/payment-3.png" className="ms-3" />
                        <img src="/img/myCart/payment-4.png" className="ms-3" />
                      </div>
                      <h3 className="m-0 payment-label">Credit Card</h3>
                    </label>
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label py-4 d-flex align-items-center"
                      htmlFor="paymentMethod-3"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="paymentMethod-3"
                      />
                      <img src="/img/myCart/payment-5.png" className="ms-3" />
                    </label>
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label py-4 d-flex align-items-center"
                      htmlFor="paymentMethod-4"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="paymentMethod-4"
                      />
                      <img src="/img/myCart/payment-6.png" className="ms-3" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="billing-address-panel mt-sm-5 py-sm-5">
                <div className="title-panel py-4">
                  <h3>Billing address</h3>
                  <p className="m-0">
                    Select the address that corresponds to your card or payment
                    method.
                  </p>
                </div>
                <div className="billing-checkout-panel payment-panel round-form mt-4 px-4">
                  <div className="form-check">
                    <label
                      className="form-check-label py-4 d-flex align-items-center"
                      htmlFor="defaultAddress"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="billingRadio"
                        id="defaultAddress"
                        defaultChecked
                        />
                      <h3 className="m-0 ms-3">Same as delivery address</h3>
                    </label>
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label d-flex align-items-center py-4"
                      htmlFor="differentAddress"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="billingRadio"
                        id="differentAddress"
                      />
                      <h3 className="m-0 ms-3">
                        Use a different billing address
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="remember-panel mt-sm-5 py-5">
                <div className="title-panel py-4">
                  <h3 className="m-0 remember-label">Remember me</h3>
                </div>
                <div className="remember-checkout-panel payment-panel round-form mt-4 px-4">
                  <div className="form-check">
                    <label
                      className="form-check-label py-4 d-flex align-items-center"
                      htmlFor="defaultAddress"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rememberRadio"
                        id="defaultAddress"
                        checked
                      />
                      <h3 className="m-0 ms-3">Save my data to pay faster</h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="btn-panel pt-sm-5 d-flex flex-sm-row flex-column">
                <button
                  type="submit"
                  className="btn round-form blue-btn px-5 py-3 next-btn text-uppercase me-sm-4 mb-sm-0 mb-4"
                  onClick={() => router.push("/myCart/checkout/payment")}
                >
                  Pay Now
                </button>
                <button
                  className="btn round-form px-4 py-3 back-btn text-uppercase"
                  onClick={() => router.push("/myCart/checkout/shipping")}
                >
                  Back to ship
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-12 ps-lg-5 mb-lg-0 mb-5 order-lg-last order-first">
              <MyCartList items={items} />
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
}
