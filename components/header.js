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
  RiUser3Line,
  RiMailSendLine,
  RiHeartLine,
  RiMenu3Line
} from "react-icons/ri";

export default function Header({ page }) {
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
    <div id="header" className={!page ? "" : "homepage"}>
      <div className="desktop-header d-lg-block d-none">
        <div className="row m-0 px-5 py-3 top-bar">
          <div className="r-container d-flex justify-content-between align-items-center">
            <Link href="#">
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
        </div>
        <div className="row m-0 middle-bar px-5 py-3">
          <div className="r-container d-flex justify-content-between">
            <div className="d-flex left-menu">
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
            <div className="d-flex right-menu">
              <nav>
                <Link href="#">
                  <a className="d-flex align-items-center">
                    <RiUser3Line />
                    NEWSLETTER
                  </a>
                </Link>
              </nav>
              <nav className="mx-5">
                <Link href="#">
                  <a className="d-flex align-items-center">
                    <RiMailSendLine />
                    MY ACCOUNT
                  </a>
                </Link>
              </nav>
              <nav>
                <Link href="#">
                  <a className="d-flex align-items-center">
                    <RiHeartLine />
                    WISHLIST ( {wishListCounter} )
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="row m-0 logo-bar px-5 py-5 align-items-center">
          <div className="r-container d-flex">
            <div className="col-4 px-0"></div>
            <div className="col-4 px-0 text-center">
              <Link href="#">
                <a>
                  <img
                    src={
                      !page
                        ? "/img/common/logo_black.png"
                        : "/img/common/logo_white.png"
                    }
                    className="logo-img"
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
            <div className="col-4 px-0 text-end">
              <nav className="btn me-5 ">
                <RiSearchLine className="font-icon" />
              </nav>
              <nav className="btn px-0">
                <RiShoppingCartLine className="font-icon" />
              </nav>
            </div>
          </div>
        </div>
        <div className="row m-0 px-5 py-3  sub-bar">
          <div className="r-container d-flex justify-content-md-between justify-content-start align-items-center">
            <div className="d-flex p-0 left-menu flex-1 flex-wrap">
              {submenus.map((item, index) => (
                <nav key={index} className="btn ps-0 pe-5">
                  {item}
                </nav>
              ))}
            </div>
            <nav className="btn right-menu text-uppercase px-0 d-flex">
              Schedule consultation
            </nav>
          </div>
        </div>
      </div>
      <div className="mobile-header d-lg-none d-block">
        <div className="mobile__top-bar d-flex justify-content-between align-items-center px-5 py-4 text-white">
          <Link href="#">
            <a className="d-flex align-items-center">
              <RiUser3Line className="me-3" />
              MY ACCOUNT
            </a>
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
        <div className="mobile__sub-bar d-flex justify-content-between align-items-center px-5 py-4">
          <Link href="#">
            <a>
              <img src="/img/common/mobile_logo.png" alt="mobile-logo" width="30"/>
            </a>
          </Link>
          <div className="links-panel d-flex align-items-center">
            <Link href="#">
              <a className="me-5 d-flex align-items-center">
                <RiSearchLine/>
              </a>
            </Link>
            <Link href="#">
              <a className="me-5 d-flex align-items-center">
                <RiHeartLine/>
              </a>
            </Link>
            <Link href="#">
              <a className="me-5 d-flex align-items-center">
                <RiShoppingCartLine/>
              </a>
            </Link>
            <Link href="#">
              <a className="d-flex align-items-center">
                <RiMenu3Line/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
