import React, { Component, useEffect } from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";
import {
  RiCustomerService2Fill,
  RiMapPin2Line,
  RiServiceLine,
  RiSearchLine,
  RiShoppingCartLine,
  RiUser3Line,
  RiMailSendLine,
  RiHeartLine,
  RiMenu3Line,
  RiPhoneLine,
  RiMessageLine,
  RiMailLine,
  RiPhoneFill,
} from "react-icons/ri";

export default function Header({ page }) {
  const [selected, setSelected] = useState("LU");
  const [wishListCounter, setWishListCounter] = useState("1");
  useEffect(() => {
    const mobileTopbarHeight =
      document.querySelector(".mobile__top-bar").clientHeight;
    const mobileSubBar = document.querySelector(".mobile__sub-bar");
    window.addEventListener("scroll", (e) => {
      let scrollHeader = document.querySelector(".scroll-header");
      if (window.scrollY > 270) {
        if (!scrollHeader.classList.contains("visible")) {
          scrollHeader.classList.add("visible");
        }
      } else {
        if (scrollHeader.classList.contains("visible")) {
          scrollHeader.classList.remove("visible");
        }
      }

      if (window.scrollY > mobileTopbarHeight) {
        if (!mobileSubBar.classList.contains("visible"))
          mobileSubBar.classList.add("visible");
      } else {
        if (mobileSubBar.classList.contains("visible"))
          mobileSubBar.classList.remove("visible");
      }
    });
  }, []);
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
      setTimeout(() => {
        let items = document.querySelectorAll(".dr-none");
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("dr-none");
        }
      }, 1000);
    }
  }, []);
  let submenus = [
    {
      title: "ENGAGEMENT",
      url: "#",
      imagePanel: {
        image: "mega_img-1.png",
        title: "Ring Shopping Guide",
        url: "#",
      },
      megaMenu: [
        {
          title: "Create a Ring",
          menu: [
            { name: "Start with Setting", img: "mega_logo (1).png", url: "#" },
            {
              name: "Start with a Diamond",
              img: "mega_logo (2).png",
              url: "#",
            },
            { name: "Ring Recommender", img: "mega_logo (3).png", url: "#" },
            {
              name: "Design your own Engagement Ring",
              img: "mega_logo (4).png",
              url: "#",
            },
          ],
        },
        {
          title: "Shop by Style",
          menu: [
            { name: "Halo", img: "mega_logo (5).png", url: "#" },
            { name: "Solitaire", img: "mega_logo (6).png", url: "#" },
            { name: "Slidestone", img: "mega_logo (7).png", url: "#" },
            { name: "Threestone", img: "mega_logo (8).png", url: "#" },
            { name: "Vintage", img: "mega_logo (9).png", url: "#" },
          ],
        },
        {
          title: "Shop Popular Shapes",
          menu: [
            { name: "Round", img: "mega_logo (10).png", url: "#" },
            { name: "Cushion", img: "mega_logo (11).png", url: "#" },
            { name: "Princess", img: "mega_logo (12).png", url: "#" },
            { name: "Oval", img: "mega_logo (13).png", url: "#" },
            { name: "Emerald", img: "mega_logo (14).png", url: "#" },
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
      url: "#",
      imagePanel: {
        image: "mega_img-2.png",
        title: "Jewelry Shopping Guide",
        url: "#",
      },
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
      url: "#",
      imagePanel: { image: "mega_img-3.png", title: "Timeline", url: "#" },
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
          title: "Guides",
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
    { title: "BLOG", url: "/blog" },
  ];

  return (
    <div id="header" className={!page ? "" : "homepage"}>
      <div className="desktop-header d-lg-block d-none">
        <div className="scroll-header dr-none px-5">
          <div className="r-container mega-menu d-flex justify-content-md-between justify-content-start align-items-center">
            <div className="d-flex p-0 left-menu flex-1 flex-wrap py-2 ">
              <Link href="/">
                <a className="me-5">
                  <img src="/img/common/mobile_logo.png" alt="logo" />
                </a>
              </Link>
              {submenus.map((submenu, index) => {
                if (submenu.megaMenu)
                  return (
                    <nav key={index} className="btn sub-item ps-0 py-0 pe-5 pt-3">
                      <span>{submenu.title}</span>
                      <hr className="mt-2" />
                      {submenu.megaMenu && (
                        <div className="hover-bar dr-none px-5">
                          <div className="d-flex justify-content-between r-container p-5">
                            {submenu.megaMenu.map((menu, key) => {
                              return (
                                <div
                                  className="mega-menu-body text-start px-5"
                                  key={key}
                                >
                                  <h2 className="text-start mb-4 pb-1">
                                    {menu.title}
                                  </h2>
                                  {menu.menu.map((item, id) => {
                                    return (
                                      <Link href={item.url} key={id}>
                                        <a>
                                          {item.img ? (
                                            <div className="link-item mt-4 d-flex align-items-center">
                                              <img
                                                src={"/img/common/" + item.img}
                                                alt="mega-logo"
                                                className="me-3"
                                              />
                                              <span>{item.name}</span>
                                            </div>
                                          ) : (
                                            <div className="link-item mt-4">
                                              {item.name}
                                            </div>
                                          )}
                                        </a>
                                      </Link>
                                    );
                                  })}
                                </div>
                              );
                            })}
                            <div className="image-panel text-start">
                              <img
                                src={"/img/common/" + submenu.imagePanel.image}
                                alt="mega-image"
                                className="round"
                              />
                              <div className="title-panel">
                                <h3 className="my-3">
                                  {submenu.imagePanel.title}
                                </h3>
                                <Link href={submenu.imagePanel.url}>
                                  <a>
                                    <p className="link-item">Learn More</p>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </nav>
                  );
                else
                  return (
                    <Link key={index} href={submenu.url}>
                      <a className="pe-5 pt-3 sub-item">
                        {submenu.title}
                        <hr className="mt-2"/>
                      </a>
                    </Link>
                  );
              })}
            </div>
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
            <button className="btn right-menu btn-consultation text-uppercase px-5 py-4">
              Schedule consultation
            </button>
          </div>
        </div>
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
            <div className="d-flex left-menu align-items-center">
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
                    <RiServiceLine />
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
            <div className="d-flex right-menu align-items-center">
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
              <button
                className="btn pe-0 d-flex align-items-center"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#wishListBox"
                aria-controls="wishListBox"
              >
                <RiHeartLine />
                WISHLIST ( {wishListCounter} )
              </button>
            </div>
          </div>
        </div>
        <div className="row m-0 logo-bar px-5 py-5 align-items-center">
          <div className="r-container d-flex align-items-center">
            <div className="col-4 px-0"></div>
            <div className="col-4 px-0 text-center">
              <Link href="/">
                <a>
                  <img
                    src={
                      !page
                        ? "/img/common/logo_black.png"
                        : "/img/common/logo_black.png"
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
        <div className="row m-0 px-5 sub-bar">
          <div className="r-container mega-menu d-flex justify-content-md-between justify-content-start align-items-center">
            <div className="d-flex p-0 left-menu flex-1 flex-wrap py-2 ">
              {submenus.map((submenu, index) => {
                if (submenu.megaMenu) {
                  return (
                    <nav
                      key={index}
                      className="btn sub-item ps-0 py-0 pe-5 pt-3"
                    >
                      <span>{submenu.title}</span>
                      <hr className="mt-2" />
                      {submenu.megaMenu && (
                        <div className="hover-bar dr-none px-5">
                          <div className="d-flex justify-content-between r-container p-5">
                            {submenu.megaMenu.map((menu, key) => {
                              return (
                                <div
                                  className="mega-menu-body text-start px-5"
                                  key={key}
                                >
                                  <h2 className="text-start mb-4 pb-2">
                                    {menu.title}
                                  </h2>
                                  {menu.menu.map((item, id) => {
                                    return (
                                      <Link href={item.url} key={id}>
                                        <a>
                                          {item.img ? (
                                            <div className="link-item mt-4 d-flex align-items-center">
                                              <img
                                                src={"/img/common/" + item.img}
                                                alt="mega-logo"
                                                className="me-3"
                                              />
                                              <span>{item.name}</span>
                                            </div>
                                          ) : (
                                            <div className="link-item mt-4">
                                              {item.name}
                                            </div>
                                          )}
                                        </a>
                                      </Link>
                                    );
                                  })}
                                </div>
                              );
                            })}
                            <div className="image-panel ps-5 text-start">
                              <img
                                src={"/img/common/" + submenu.imagePanel.image}
                                alt="mega-image"
                                className="round"
                              />
                              <div className="title-panel">
                                <h3 className="my-3">
                                  {submenu.imagePanel.title}
                                </h3>
                                <Link href={submenu.imagePanel.url}>
                                  <a>
                                    <p className="mb-0 link-item">Learn More</p>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </nav>
                  );
                } else
                  return (
                    <Link key={index} href={submenu.url}>
                      <a className="pt-3 pe-5 sub-item">
                        <span>{submenu.title}</span>
                        <hr className="mt-2"/>
                      </a>
                    </Link>
                  );
              })}
            </div>
            <button className="btn right-menu btn-consultation text-uppercase px-5 py-4">
              Schedule consultation
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-header dr-none d-lg-none d-block">
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
              className="btn me-2 d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#searchBox"
              aria-controls="searchBox"
            >
              <RiSearchLine />
            </button>
            <button
              className="btn me-2 d-flex align-items-center"
              type="button"
            >
              <RiPhoneFill />
            </button>
            <button
              className="btn me-2 d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#wishListBox"
              aria-controls="wishListBox"
            >
              <RiHeartLine />
            </button>

            <button
              className="btn me-2 d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#myCartBox"
              aria-controls="myCartBox"
            >
              <RiShoppingCartLine />
            </button>
            <button
              className="d-flex pe-0 hamburger-btn btn align-items-center"
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
        className="offcanvas dr-none offcanvas-end p-3"
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
                                    {item.img ? (
                                      <div className="link-item my-5 d-flex align-items-center">
                                        <img
                                          src={"/img/common/" + item.img}
                                          alt="mega-logo"
                                          className="me-3"
                                        />
                                        <span className="text-uppercase">
                                          {item.name}
                                        </span>
                                      </div>
                                    ) : (
                                      <div className="link-item my-5 text-uppercase">
                                        {item.name}
                                      </div>
                                    )}
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        );
                      })}
                      <div className="image-panel text-center">
                        <img
                          src={"/img/common/" + submenu.imagePanel.image}
                          alt="sub_image"
                          className="round"
                        />
                        <div className="sub_title-panel">
                          <h3 className="my-5">{submenu.imagePanel.title}</h3>
                          <Link href={submenu.imagePanel.url}>
                            <a>
                              <p className="link-item">Learn More</p>
                            </a>
                          </Link>
                        </div>
                      </div>
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
          <button className="btn mobile-schedule-btn text-uppercase round-form px-5 py-3 my-5">
            Schedule consultation
          </button>

          <div className="contact-panel text-center mt-5">
            <h3>Contact Us</h3>
            <div className="contact-links d-flex justify-content-around mt-5">
              <Link href="#">
                <a>
                  <div className="contact-item d-flex align-items-center justify-content-center">
                    <RiMapPin2Line />
                  </div>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <div className="contact-item d-flex align-items-center justify-content-center">
                    <RiMessageLine />
                  </div>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <div className="contact-item d-flex align-items-center justify-content-center">
                    <RiMailLine />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas dr-none offcanvas-top justify-content-center"
        tabIndex="-1"
        id="searchBox"
        aria-labelledby="searchBoxLabel"
      >
        <div className="offcanvas-header">
          <input
            className="form-control me-3 p-3"
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
        className="offcanvas dr-none offcanvas-end p-3"
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
        className="offcanvas dr-none offcanvas-end p-3"
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
