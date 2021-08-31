import React, { Component, useEffect } from "react";
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
  RiMenu3Line,
} from "react-icons/ri";

export default function Header({ page }) {
  const [selected, setSelected] = useState("LU");
  const [wishListCounter, setWishListCounter] = useState("1");

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  let submenus = [
    {
      title: "ENGAGEMENT",
      megaMenu: [
        {
          title: "Create a Ring",
          menu: [
            { name: "Start with Setting", url: "#" },
            { name: "Start with a Diamond", url: "#" },
            { name: "Ring Recommender", url: "#" },
            { name: "Design your own Engagement Ring", url: "#" },
          ],
        },
        {
          title: "Shop by Style",
          menu: [
            { name: "Halo", url: "#" },
            { name: "Solitaire", url: "#" },
            { name: "Slidestone", url: "#" },
            { name: "Threestone", url: "#" },
            { name: "Vintage", url: "#" },
          ],
        },
        {
          title: "Shop by Popular Style",
          menu: [
            { name: "Round", url: "#" },
            { name: "Cushion", url: "#" },
            { name: "Princess", url: "#" },
            { name: "Oval", url: "#" },
            { name: "Emerald", url: "#" },
          ],
        },
        {
          title: "Quick Links",
          menu: [
            { name: "1 Carat Engagement Rings", url: "#" },
            { name: "1.5 Carat Engagement Rings", url: "#" },
            { name: "2 Carat Engagement Rings", url: "#" },
            { name: "3 Carat Engagement Rings", url: "#" },
          ],
        },
      ],
    },
    {
      title: "JEWELRY",
      megaMenu: [
        {
          title: "Rings",
          menu: [
            { name: "Diamond rings", url: "#" },
            { name: "Anniversary rings", url: "#" },
            { name: "Engagement rings", url: "#" },
            { name: "Gemstone rings", url: "#" },
          ],
        },
        {
          title: "Earrings",
          menu: [
            { name: "Diamond studs", url: "#" },
            { name: "Diamond earrings", url: "#" },
            { name: "Gemstone earrings", url: "#" },
          ],
        },
        {
          title: "Bracelets",
          menu: [
            { name: "Tennis bracelets", url: "#" },
            { name: "Diamond bracelets", url: "#" },
          ],
        },
        {
          title: "Necklaces",
          menu: [
            { name: "Diamond pendants", url: "#" },
            { name: "Diamond necklace", url: "#" },
            { name: "Gemstone necklaces", url: "#" },
          ],
        },
        {
          title: "Gifts",
          menu: [
            { name: "Birth gifts", url: "#" },
            { name: "Gifts under euro 500", url: "#" },
            { name: "Gifts under euro 1000", url: "#" },
          ],
        },
      ],
    },
    { title: "COLLECTIONS", url: "#" },
    { title: "BESPOKE", url: "#" },
    { title: "WATCHES", url: "#" },
    {
      title: "EDUCATION",
      megaMenu: [
        {
          title: "The diamond Experts",
          menu: [
            { name: "about the C4's", url: "#" },
            { name: "about colored diamonds & gemstone", url: "#" },
            { name: "about the price diamonds", url: "#" },
            { name: "about the sustainability", url: "#" },
            { name: "about watches", url: "#" },
          ],
        },
        {
          title: "The history of Royal Coster",
          menu: [
            { name: "Our Royal customers through time", url: "#" },
            { name: "A timeline of brilliance", url: "#" },
            { name: "Amsterdam City of Diamonds", url: "#" },
            { name: "The kog I Noor & other legendary diamonds", url: "#" },
          ],
        },
        {
          title: "Guids",
          menu: [
            { name: "Ring size guide", url: "#" },
            { name: "Diamond buying guide", url: "#" },
            { name: "Engagement ring buying guide", url: "#" },
            { name: "Royal Coster Wartches Guide", url: "#" },
          ],
        },
      ],
    },
    { title: "TOURS & WORKSHOPS", url: "#" },
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
              <button
                className="btn me-4"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#searchBox"
                aria-controls="searchBox"
              >
                <RiSearchLine className="font-icon" />
              </button>
              <button
                className="btn me-4"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#myCartBox"
                aria-controls="myCartBox"
              >
                <RiShoppingCartLine className="font-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="row m-0 px-5 py-3  sub-bar">
          <div className="r-container d-flex justify-content-md-between justify-content-start align-items-center">
            <div className="d-flex p-0 left-menu flex-1 flex-wrap">
              {submenus.map((item, index) => (
                <nav key={index} className="btn ps-0 pe-5">
                  {item.title}
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
              <img
                src="/img/common/mobile_logo.png"
                alt="mobile-logo"
                width="30"
              />
            </a>
          </Link>
          <div className="links-panel d-flex align-items-center">
            <button
              className="btn me-4 d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#searchBox"
              aria-controls="searchBox"
            >
              <RiSearchLine />
            </button>

            <button
              className="btn me-4 d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#wishListBox"
              aria-controls="wishListBox"
            >
              <RiHeartLine />
            </button>

            <button
              className="btn me-4 d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#myCartBox"
              aria-controls="myCartBox"
            >
              <RiShoppingCartLine />
            </button>
            <button
              className="d-flex hamburger-btn btn align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileBar"
              aria-controls="mobileBar"
            >
              <RiMenu3Line />
            </button>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end p-3"
        tabIndex="-1"
        id="mobileBar"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h3 id="mobileMenuLabel" className="">
            Menu
          </h3>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pt-0">
          {submenus.map((submenu, index) => {
            if (submenu.megaMenu) {
              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button submenu collapsed py-4 ps-0"
                      data-bs-target={"#index" + index}
                      data-bs-toggle="collapse"
                      // onClick={handleAccordion}
                    >
                      {submenu.title}
                    </button>
                  </h2>
                  <div
                    id={"index" + index}
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      {submenu.megaMenu.map((menu, key) => {
                        return (
                          <div className="link-group mb-5" key={key}>
                            <h2>{menu.title}</h2>
                            {menu.menu.map((item, id) => {
                              return (
                                <Link href={item.url} key={id}>
                                  <a>
                                    <div className="link-item my-5 text-uppercase">
                                      {item.name}
                                    </div>
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <Link href={submenu.url} key={index}>
                  <a className="submenu py-4">{submenu.title}</a>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div
        className="offcanvas offcanvas-top justify-content-center"
        tabIndex="-1"
        id="searchBox"
        aria-labelledby="searchBoxLabel"
      >
        <div className="offcanvas-header">
          <input
            className="form-control me-2"
            id="searchPanel"
            placeholder="Search Royal Coster Diamonds"
          />
          <label htmlFor="searchPanel">
            <RiSearchLine />
          </label>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end p-3"
        tabIndex="-1"
        id="wishListBox"
        aria-labelledby="wisthListLabel"
      >
        <div className="offcanvas-header">
          <h5 id="wisthListLabel" className="d-flex align-items-center">
            <RiHeartLine className="me-5" />
            WishList
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body"></div>
      </div>
      <div
        className="offcanvas offcanvas-end p-3"
        tabIndex="-1"
        id="myCartBox"
        aria-labelledby="myCartBoxLabel"
      >
        <div className="offcanvas-header">
          <h5 id="myCartBoxLabel" className="d-flex align-items-center">
            <RiShoppingCartLine className="me-5" />
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body"></div>
      </div>
    </div>
  );
}
