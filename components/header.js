import React, { Component } from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";
import {
  RiCustomerService2Fill,
  RiMapPin2Line,
  RiHeart2Line,
  RiSearchLine,
  RiShoppingCartLine,
} from "react-icons/ri";

export default function Header() {
  const [selected, setSelected] = useState("LU");
  const [wishListCounter, setWishListCounter] = useState("1");

  let submenus = [
    "ENGAGEMENT",
    "JEWELRY",
    "COLLECTIONS",
    "BESPOKE",
    "WATCHES",
    "EDUCATION",
    "TOURS & WORKSHOPS",
  ];

  return (
    <div id="header" className="">
      <div className="row m-0 px-5 py-3 top-bar">
        <div className="col-6 p-0 text-white d-flex align-items-center px-5">
          <Link href="#">WHY ROYAL COSTER ?</Link>
        </div>
        <div className="col-6 p-0 px-5 text-end d-flex align-items-center justify-content-end">
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
      </div>
      <div className="row m-0 middle-bar px-5 py-3">
        <div className="col-6 p-0 px-5 text-white d-flex">
          <nav>
            <Link href="#">
              <a className="d-flex align-items-center">
                <RiMapPin2Line />
                FIND A STORE
              </a>
            </Link>
          </nav>
          <nav className="mx-5">
            <Link href="#">
              <a className="d-flex align-items-center">
                <RiHeart2Line />
                SERVICES
              </a>
            </Link>
          </nav>
          <nav>
            <Link href="#">
              <a className="d-flex align-items-center">
                <RiCustomerService2Fill />
                CONTACT US
              </a>
            </Link>
          </nav>
        </div>
        <div className="col-6 p-0 px-5 text-white d-flex justify-content-end">
          <nav>
            <Link href="#">
              <a>NEWSLETTER</a>
            </Link>
          </nav>
          <nav className="mx-5">
            <Link href="#">
              <a>MY ACCOUNT</a>
            </Link>
          </nav>
          <nav>
            <Link href="#">
              <a>WISHLIST ( {wishListCounter} )</a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="row m-0 logo-bar px-5 py-5 align-items-center">
        <div className="col-4 px-0"></div>
        <div className="col-4 px-0 text-center">
          <Link href="#">
            <a>
              <img src="/img/logo.png" className="logo-img" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="col-4 px-5 text-end">
          <nav className="btn me-5 ">
            <RiSearchLine className="text-white font-icon"/>
          </nav>
          <nav className="btn px-0">
            <RiShoppingCartLine className="text-white font-icon" />
          </nav>
        </div>
      </div>
      <div className="row m-0 px-5 py-3 justify-content-between sub-bar">
        <div className="d-flex p-0 left-menu flex-1 px-5">
          {submenus.map((item, index) => (
            <nav key={index} className="btn ps-0 pe-5 text-white">
              {item}
            </nav>
          ))}
        </div>
        <nav className="btn px-5 text-white text-uppercase">Schedule consultation</nav>
      </div>
    </div>
  );
}
