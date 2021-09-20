import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";
import Collection from "../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Skeleton } from "@material-ui/lab";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { setWishList } from '../redux/actions/wishListAction';

const options = [
  { name: "ALL", value: "ALL" },
  { name: "POPULAR", value: "POPULAR" },
];

const filterItems = [
  { img: "image1.png", text: "Solitaire with side" },
  { img: "image2.png", text: "Solitaire" },
  { img: "image3.png", text: "Three stone" },
  { img: "image4.png", text: "Halo/framed" },
  { img: "image5.png", text: "promise" },
  { img: "image6.png", text: "brands-diamonds" },
  { img: "image7.png", text: "bands-metals" },
  { img: "image8.png", text: "fashion" },
  { img: "image9.png", text: "mothers/family" },
];
const productItems = [
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
];

const leftFilters = [
  {
    title: "price",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Collection",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Style",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Mounting",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Brand",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Stone",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Brightness",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Cut",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Material",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
  {
    title: "Material color",
    properties: [
      "Empress Collection",
      "Rainbow Collection",
      "Luna Collection",
      "Touch of Glam Collection",
      "Wedding Rings Collection",
      "NIKKIE x Royal Coster Diamonds",
    ],
  },
];

const productURL = "https://royalcoster.nl/api/product/index.php";
const filterURL = "https://costercatalog.com/api/index.php?request=getMaterialsGroupedNew";
const headers = {
  "Content-Type": "application/json",
};

function Ring(props) {
  const [result, setResult] = useState("878");
  const [tags, setTags] = useState(["Ring"]);
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [products, setProducts] = useState([...productItems]);
  const [selectFilter, setSelectFilter] = useState([]);
  const [productData, setProductData] = useState([]);
  const [lastProduct, setLastProduct] = useState();
  const [favorProduct, setFavorProduct] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let formData = new FormData();
    formData.append("position", "first:9");
    formData.append("query", "status:active and tag:Rings");
    fetch(productURL, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        data.last ? setLastProduct(data.last) : setProductData();
        setProductData(data.data);
        if (localStorage.wishList) {
          props.setWishList(JSON.parse(localStorage.wishList));
        }
      });
  }, []);

  useEffect(() => {
    fetch(filterURL, {
      method: "get",
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
  }, []);
  
  useEffect(() => {
    props.wishList &&
      localStorage.setItem('wishList', JSON.stringify(props.wishList))
  }, [props.wishList])

  const setFavor = (event, product) => {
    let target = event.target.closest(".favor-icon");
    if (target.classList.contains("favor")) {
      let localProducts = props.wishList;
      let removeProduct = localProducts.find(
        (item) => item.shopifyid == product.shopifyid
      );
      if (removeProduct) {
        localProducts.splice(localProducts.indexOf(removeProduct), 1);
        props.setWishList(localProducts)
      }
    } else {
      if (localStorage.wishList) {
        props.setWishList([...props.wishList, { ...product, amount: 1, tag: tags }])
      } else {
        localStorage.setItem(
          "wishList",
          JSON.stringify([{ ...product, amount: 1, tag: tags }])
        );
        props.setWishList([{ ...product, amount: 1, tag: tags }])
      }
    }
  };

  const filterHandle = (event, index) => {
    let target = event.target.closest(".filter-item");
    if (target.classList.contains("active")) {
      let removeItem = selectFilter.indexOf(filterItems[index].text);
      if (!removeItem) {
        selectFilter.splice(removeItem, 1);
        setSelectFilter([...selectFilter]);
      } else {
        selectFilter.splice(-1, 1);
      }
      target.classList.remove("active");
    } else {
      target.classList.add("active");
      setSelectFilter([...selectFilter, filterItems[index].text]);
    }
  };

  const loadMore = () => {
    setLoad(true);
    let formData = new FormData();
    formData.append("position", `first:9, after:"${lastProduct}"`);
    formData.append("query", "status:active and tag:Rings");
    fetch(productURL, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        data.last ? setLastProduct(data.last) : setLastProduct();
        setProductData([...productData, ...data.data]);
        setLoad(false);
      });
  };

  return (
    <div className="ring_page">
      <Head>
        <title>Ring | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white">Rings</h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start product section */}
      <div className="product-section r-container py-4">
        <div className="top-bar row align-items-center m-0 py-3">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-3">
            <h2>Engagement Rings</h2>
            <p className="text-uppercase">{result} results</p>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-end p-0 pt-3 pt-md-0">
            <div className="search-box round-form d-flex align-items-center">
              <label htmlFor="selectSearch" className="px-4">
                SORT BY :{" "}
              </label>
              <SelectSearch
                id="selectSearch"
                options={options}
                value={selectValue}
                onChange={(value) => {
                  setSelectValue(value);
                }}
                filterOptions={fuzzySearch}
                emptyMessage="Not found"
                search
              />
            </div>
          </div>
        </div>
        <div className="top-filter-bar d-flex justify-content-between align-items-center flex-wrap py-4">
          {filterItems.map((item, index) => {
            return (
              <button
                className="btn filter-item round-form mt-3"
                key={index}
                onClick={(event) => filterHandle(event, index)}
              >
                <div className="image-panel text-center">
                  <img src={"/img/ring/" + item.img} alt="filter-image" />
                </div>
                <h3 className="blue-text text-uppercase">{item.text}</h3>
              </button>
            );
          })}
        </div>
        <div className="main-panel row m-0 py-5">
          <div className="col-lg-3 col-md-4 col-sm-5 col-12 p-0 pe-sm-4 pe-0 left-filter-bar">
            {leftFilters.map((item, index) => {
              return (
                <div className="accordion-item mb-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button blue-text collapsed text-uppercase py-3 ps-4"
                      data-bs-target={"#index" + index}
                      data-bs-toggle="collapse"
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={"index" + index}
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      {item.properties.map((property, key) => {
                        return (
                          <div className="form-check pb-3" key={key}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id={"flexCheck" + key}
                            />
                            <label
                              className="form-check-label text-capitalize"
                              htmlFor={"flexCheck" + key}
                            >
                              {property}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {false ? ( */}
          {productData && productData.length ? (
            <div className="col-lg-9 col-md-8 col-sm-7 col-12 p-0 product-panel row m-0">
              {productData.map((item, index) => {
                return (
                  <div
                    className="product-item col-lg-4 col-md-6 col-sm-12 mb-5 pb-3"
                    key={index}
                  >
                    <Link href={item.handle}>
                      <a target="_blank">
                        <div className="product-image hover-scale d-flex justify-content-center align-items-center round">
                          <img src={item.image} alt="product-image" />
                        </div>
                        <h3 className="text-uppercase blue-text py-4 m-0">
                          {item.title}
                        </h3>
                        <p className="pb-4 text-uppercase m-0">
                          {tags.length &&
                            tags.map((tag, id) => (
                              <span className="me-2" key={id}>
                                {tag}
                              </span>
                            ))}
                        </p>
                        {+item.Fullprice > +item.price ? (
                          <div className="d-flex price-panel mb-5">
                            <h4 className="blue-text me-3">
                              <NumberFormat
                                value={item.price}
                                displayType="text"
                                decimalScale={2}
                                fixedDecimalScale={true}
                                thousandSeparator={true}
                                prefix="€ "
                              />
                            </h4>
                            <h4 className="full-price text-decoration-line-through">
                              <NumberFormat
                                value={item.Fullprice}
                                displayType="text"
                                decimalScale={2}
                                fixedDecimalScale={true}
                                thousandSeparator={true}
                                prefix="€ "
                              />
                            </h4>
                          </div>
                        ) : (
                          <div className="price-panel mb-5">
                            <h4 className="blue-text me-3">
                              <NumberFormat
                                value={item.Fullprice}
                                displayType="text"
                                decimalScale={2}
                                fixedDecimalScale={true}
                                thousandSeparator={true}
                                prefix="€ "
                              />
                            </h4>
                          </div>
                        )}
                      </a>
                    </Link>
                    <button
                      className={
                        "btn favor-icon " +
                        `${props.wishList &&
                          props.wishList.find(
                            (product) => product.shopifyid == item.shopifyid
                          )
                          ? "favor"
                          : ""
                        }`
                      }
                      onClick={(e) => setFavor(e, item)}
                    >
                      <RiHeartLine className="unfavor" />
                      <RiHeartFill className="favor" />
                    </button>
                  </div>
                );
              })}
              {lastProduct && (
                <button
                  className="btn load-more-btn text-uppercase py-3 px-5 round-form"
                  onClick={loadMore}
                >
                  Load More
                </button>
              )}
            </div>
          ) : (
            <div className="col-lg-9 col-md-8 col-sm-7 col-12 p-0 row">
              <div className="col-4">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width="100%"
                  height={300}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={40}
                />
              </div>
              <div className="col-4">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width="100%"
                  height={300}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={40}
                />
              </div>
              <div className="col-4">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width="100%"
                  height={300}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={40}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* End product section */}
      {load && (
        <div className="row r-container">
          <div className="col-lg-3 col-md-4 col-sm-5 col-0 p-0"></div>
          <div className="col-lg-9 col-md-8 col-sm-7 col-12 p-0 row">
            <div className="col-4">
              <Skeleton
                animation="wave"
                variant="rect"
                width="100%"
                height={300}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width={100}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="100%"
                height={40}
              />
            </div>
            <div className="col-4">
              <Skeleton
                animation="wave"
                variant="rect"
                width="100%"
                height={300}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width={100}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="100%"
                height={40}
              />
            </div>
            <div className="col-4">
              <Skeleton
                animation="wave"
                variant="rect"
                width="100%"
                height={300}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width={100}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="100%"
                height={40}
              />
            </div>
          </div>
        </div>
      )}
      {/* Start Collection section */}
      <div className="collection-section">
        <Collection />
        <div className="shadow-pink" />
        <div className="shadow-blue" />
      </div>
      {/* End Collection section */}
      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}



const mapStateToProps = state => ({
  wishList: state.wishList.value
});

const mapDispatchToProps = {
  setWishList: setWishList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ring)