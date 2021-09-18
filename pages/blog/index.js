import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import _ from "lodash";
import SelectSearch, {
  fuzzySearch,
  useSelect,
} from "react-select-search-nextjs";
import { RiSearchLine } from "react-icons/ri";
import renderHTML from "react-render-html";
import head from "next/head";
import Loading from "../../components/loading";
import Skeleton from "@mui/material/Skeleton";

const blogURL = "https://royalcoster.nl/wordpress/wp-json/wp/v2/posts";
const categoryURL = "https://royalcoster.nl/wordpress/wp-json/wp/v2/categories";
const headers = {
  "Content-Type": "application/json",
};

let tabState = [];
let blogData = [],
  categoryData = [];

export default function Blog() {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [result, setResult] = useState();
  const [postItems, setPostItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState(tabState);
  const [filterKey, setFilterKey] = useState();
  const [options, setOptions] = useState();
  const [notResult, setNotResult] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (categoryData.length == 0) {
      fetch(
        categoryURL + "?orderby=id&exclude=1&per_page=100&hide_empty=true",
        {
          method: "get",
          headers,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    } else {
      setCategories(categoryData);
      setPostItems(blogData);
    }
  }, []);

  useEffect(() => {
    if (filterCategory.length && mounted) {
      setLoading(true);
      let postArr = [];
      fetch(
        blogURL + "?orderby=id&per_page=10&categories=" + filterCategory.join(),
        {
          method: "get",
          headers,
        }
      )
        .then((res) => res.json())
        .then(async (data) => {
          await data.map((item) => {
            postArr.push({
              id: item.id,
              title: item.title.rendered,
              slug: item.slug,
              img_link: item._links["wp:featuredmedia"][0].href,
              categories: item.categories,
            });
          });
          setPost(postArr);
          setPostItems(postArr);
        });
    } else if (!blogData.length) {
      setLoading(true);
      let postArr = [];
      fetch(blogURL + "?orderby=id&per_page=10", {
        method: "get",
        headers,
      })
        .then((res) => res.json())
        .then(async (data) => {
          await data.map((item) => {
            postArr.push({
              id: item.id,
              title: item.title.rendered,
              slug: item.slug,
              img_link: item._links["wp:featuredmedia"][0].href,
              categories: item.categories,
            });
          });
          setPost(postArr);
          setPostItems(postArr);
        });
    }
    setMounted(true);
  }, [filterCategory]);

  useEffect(async () => {
    let category = [];
    if (categories) {
      await categories.map((item) => {
        category.push({ name: item.name, value: item.id });
      });
      setOptions(category);
    }
  }, [categories]);

  useEffect(() => {
    if (post) {
      if (post.length != 0) {
        let postArr = [];
        post.map((item, index) => {
          fetch(item.img_link, {
            method: "get",
            headers,
          })
            .then((res) => res.json())
            .then((data) => {
              let categoryItems = [];
              item.categories.map((id) => {
                categories &&
                  categories.map((cateItem) => {
                    if (cateItem.id == id) {
                      categoryItems.push(cateItem.name);
                    }
                  });
              });
              postArr.push({
                ...item,
                image: data.guid.rendered,
                categoryItems: categoryItems,
              });
              if (postArr.length == post.length) {
                postArr.sort((item1, item2) => item2.id - item1.id);
                setPostItems([...postArr]);
                setLoading(false);
              }
            });
        });
      } else setLoading(false);
    }
  }, [post]);

  useEffect(() => {
    if (postItems.length) {
      categoryData = categories;
      blogData = postItems;
      setResult(postItems.length);
    }
  }, [postItems]);

  useEffect(() => {
    if (filterKey) {
      setLoading(true);
      let postArr = [];
      fetch(blogURL + "?orderby=id&per_page=10&" + filterCategory + filterKey, {
        method: "get",
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length) {
            data.map((item) => {
              postArr.push({
                id: item.id,
                title: item.title.rendered,
                slug: item.slug,
                img_link: item._links["wp:featuredmedia"][0].href,
                categories: item.categories,
              });
            });
            setPost(postArr);
            setNotResult(false);
          } else {
            setLoading(false);
            setNotResult(true);
          }
        });
    }
  }, [filterKey]);

  const selectCategory = (key = null) => {
    setPostItems("");
    if (key) {
      if (!tabState.find((item) => item == key)) {
        tabState.push(key);
      } else {
        _.remove(tabState, (n) => n == key);
      }

      if (tabState.length) {
        if (
          document.querySelectorAll(".category-tab.active") &&
          document.querySelectorAll(".category-tab.active").length
        ) {
          document.querySelectorAll(".category-tab.active").forEach((item) => {
            item.classList.remove("active");
          });
        }

        setFilterCategory([...tabState]);
        tabState.map((key) => {
          document
            .querySelector(".category-tab-" + key)
            .classList.add("active");
        });
      } else {
        if (
          document.querySelectorAll(".category-tab.active") &&
          document.querySelectorAll(".category-tab.active").length
        ) {
          document.querySelectorAll(".category-tab.active").forEach((item) => {
            item.classList.remove("active");
          });
        }
        blogData = [];
        setFilterCategory([]);
      }
    } else {
      _.remove(tabState, (n) => n != "");
      if (
        document.querySelectorAll(".category-tab.active") &&
        document.querySelectorAll(".category-tab.active").length
      ) {
        document.querySelectorAll(".category-tab.active").forEach((item) => {
          item.classList.remove("active");
        });
      }
      blogData = [];
      setFilterCategory([]);
      document.querySelector(".category-tab-all") &&
        document.querySelector(".category-tab-all").classList.toggle("active");
    }
  };

  const searchHandle = (event) => {
    if (!loading) {
      if (event.keyCode == 13) {
        setPostItems("");
        setFilterKey("&search=" + event.target.value);
      }
    }
  };

  return (
    <div className="blog_page">
      <Head>
        <title>Blog | Royal Coster</title>
      </Head>
      {/*Header */}
      <Header />
      {/* Start banner section */}
      <div className="banner-section">
        <div className="r-container">
          <div className="row text-panel mb-md-5 mb-0 pb-md-5 pb-0">
            <h1 className="blog__banner--title text-capitalize text-white">
              The Koh-I-Noor: More than only óur heritage
            </h1>
            <p className="blog__banner--description text-white mt-sm-5 mt-4">
              Our Royal Legacy
            </p>
          </div>
          <button className="btn text-uppercase mt-sm-5 mt-4 px-5 py-3 btn--read-more pink-btn round-form">
            Read more
          </button>
        </div>
      </div>
      {/* End banner section */}

      {/* Start blog section */}
      <div className="blog-section r-container py-sm-5">
        <div className="top-bar row align-items-center m-0 p-0 mt-sm-5 pt-5 pb-4">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-sm-5">
            <h2>Our Recent Blogs</h2>
            <p className="text-uppercase">{result} results</p>
          </div>
          <div className=" col-md-6 col-12 mt-5 mt-md-0 p-0 d-md-flex search-bar justify-content-end align-items-center">
            <input
              className="form-control round-form px-3 py-2"
              id="searchPanel"
              placeholder="Search Here"
              onKeyUp={searchHandle}
            />
            <label htmlFor="searchPanel">
              <RiSearchLine />
            </label>
          </div>
          <div className="col-12 d-md-none d-flex justify-content-end p-0 pt-3 pt-md-0">
            <div className="search-box round-form d-flex align-items-center py-2 pe-2">
              <label htmlFor="selectSearch" className="px-4">
                FITER BY :{" "}
              </label>
              {options && (
                <select
                  className="form-select text-end"
                  onChange={(e) => {
                    if (e.target.value) {
                      setFilterCategory([e.target.value]);
                    } else {
                      blogData = [];
                      setFilterCategory([]);
                    }
                  }}
                  defaultValue=""
                  aria-label="Default select example"
                >
                  <option value="">All</option>
                  {options.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {renderHTML(item.name)}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </div>
        </div>
        <div className="tab-bar d-md-flex d-none flex-wrap py-4">
          {categories ? (
            <>
              <button
                className="btn btn-tab px-5 py-3 round-form text-capitalize mt-3 me-3 category-tab category-tab-all"
                onClick={() => selectCategory()}
              >
                All
              </button>
              {categories.map((item, index) => {
                return (
                  <button
                    className={
                      "btn btn-tab px-5 py-3 round-form text-capitalize mt-3 me-3 category-tab category-tab-" +
                      item.id +
                      ` ${filterCategory.indexOf(item.id) >= 0 && "active"}`
                    }
                    key={"button" + index}
                    onClick={(e) => selectCategory(item.id)}
                  >
                    {renderHTML(item.name)}
                  </button>
                );
              })}
            </>
          ) : (
            <Skeleton
              variant="text"
              width="100%"
              height={80}
              animation="wave"
            />
          )}
        </div>
        {notResult ? (
          <h1 className="not-result-text text-center pt-5">Not Result</h1>
        ) : postItems.length > 0 ? (
          <div className="main-blog-panel row m-0">
            <div className="col-md-8 col-12 p-0">
              {
                <div className="row m-0">
                  <Link
                    props="sasfd"
                    href={{
                      pathname: "/blog/[slug]",
                      query: {
                        slug: "/blog/" + postItems[0].slug,
                        id: postItems[0].id,
                      },
                    }}
                    as={"/blog/" + postItems[0].slug}
                  >
                    <a>
                      <div className="blog-box main-blog ps-0 pt-5 pe-md-5 pe-0">
                        <div className="round blog-image">
                          {postItems[0].image ? (
                            <img
                              src={postItems[0].image}
                              className="round"
                              alt="blog-image"
                            />
                          ) : (
                            <Skeleton
                              variant="rectangular"
                              width="100%"
                              height={250}
                              animation="wave"
                            />
                          )}
                        </div>
                        <div className="blog-title pt-4 pb-5">
                          <p className="text-uppercase">
                            {postItems[0].categoryItems &&
                              postItems[0].categoryItems.map((item, index) => {
                                return (
                                  <span key={index}>
                                    {index
                                      ? ", " + renderHTML(item)
                                      : renderHTML(item)}
                                  </span>
                                );
                              })}
                          </p>
                          <h3 className="mb-4">
                            {renderHTML(postItems[0].title)}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              }
              <div className="row m-0">
                <div className="col-sm-6 col-12 p-0">
                  {postItems.map((item, index) => {
                    if (index % 3 == 2)
                      return (
                        <Link href={"/blog/" + item.slug} key={index}>
                          <a>
                            <div className="blog-box pt-5 pe-sm-5" key={index}>
                              <div className="round blog-image">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    className="round"
                                    alt="blog-image"
                                  />
                                ) : (
                                  <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={250}
                                    animation="wave"
                                  />
                                )}
                              </div>
                              <div className="blog-title pt-4 pb-5">
                                <p className="text-uppercase">
                                  {item.categoryItems &&
                                    item.categoryItems.length &&
                                    item.categoryItems.map(
                                      (category, index) => {
                                        return (
                                          <span key={index}>
                                            {index
                                              ? ", " + renderHTML(category)
                                              : renderHTML(category)}
                                          </span>
                                        );
                                      }
                                    )}
                                </p>
                                <h3 className="mb-4">
                                  {renderHTML(item.title)}
                                </h3>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                  })}
                </div>
                <div className="col-sm-6 col-12 p-0">
                  {postItems.map((item, index) => {
                    if ((index != 0) & (index % 3 == 0))
                      return (
                        <Link href={"/blog/" + item.slug} key={index}>
                          <a>
                            <div
                              className="blog-box pt-5 pe-md-5 pe-0 ps-md-0 ps-sm-5"
                              key={index}
                            >
                              <div className="round blog-image">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    className="round"
                                    alt="blog-image"
                                  />
                                ) : (
                                  <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={250}
                                    animation="wave"
                                  />
                                )}
                              </div>
                              <div className="blog-title pt-4 pb-5">
                                <p className="text-uppercase">
                                  {item.categoryItems &&
                                    item.categoryItems.length &&
                                    item.categoryItems.map(
                                      (category, index) => {
                                        return (
                                          <span key={index}>
                                            {index
                                              ? ", " + renderHTML(category)
                                              : renderHTML(category)}
                                          </span>
                                        );
                                      }
                                    )}
                                </p>
                                <h3 className="mb-4">
                                  {renderHTML(item.title)}
                                </h3>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 p-0">
              <div className="row m-0">
                <div className="col-md-12 col-sm-6 col-12 p-0">
                  {postItems.map((item, index) => {
                    if (
                      (index % 3 == 1) &
                      (Math.ceil((postItems.length - 1) / 3) * 3 - 2 > index)
                    )
                      return (
                        <Link href={"/blog/" + item.slug} key={index}>
                          <a>
                            <div className="blog-box pt-5 pe-md-0 pe-sm-5">
                              <div className="round blog-image">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    className="round"
                                    alt="blog-image"
                                  />
                                ) : (
                                  <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={250}
                                    animation="wave"
                                  />
                                )}
                              </div>
                              <div className="blog-title pt-4 pb-5">
                                <p className="text-uppercase">
                                  {item.categoryItems &&
                                    item.categoryItems.length &&
                                    item.categoryItems.map(
                                      (category, index) => {
                                        return (
                                          <span key={index}>
                                            {index
                                              ? ", " + renderHTML(category)
                                              : renderHTML(category)}
                                          </span>
                                        );
                                      }
                                    )}
                                </p>
                                <h3 className="mb-4">
                                  {renderHTML(item.title)}
                                </h3>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                  })}
                </div>
                <div className="col-md-12 col-sm-6 col-12 p-0">
                  {postItems.map((item, index) => {
                    if (
                      (index % 3 == 1) &
                      (Math.ceil((postItems.length - 1) / 3) * 3 - 2 <= index)
                    )
                      return (
                        <Link href={"/blog/" + item.slug} key={index}>
                          <a>
                            <div className="blog-box pt-5 ps-md-0 ps-sm-5">
                              <div className="round blog-image">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    className="round"
                                    alt="blog-image"
                                  />
                                ) : (
                                  <Skeleton
                                    variant="rectangular"
                                    width="100%"
                                    height={250}
                                    animation="wave"
                                  />
                                )}
                              </div>
                              <div className="blog-title pt-4 pb-5">
                                <p className="text-uppercase">
                                  {item.categoryItems &&
                                    item.categoryItems.length &&
                                    item.categoryItems.map(
                                      (category, index) => {
                                        return (
                                          <span key={index}>
                                            {index
                                              ? ", " + renderHTML(category)
                                              : renderHTML(category)}
                                          </span>
                                        );
                                      }
                                    )}
                                </p>
                                <h3 className="mb-4">
                                  {renderHTML(item.title)}
                                </h3>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-blog-panel row m-0">
            <div className="col-md-8 col-12 p-0 pe-md-5 pt-5">
              <Skeleton
                variant="rectangular"
                width="100%"
                height={250}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={200}
                height={50}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="100%"
                height={80}
                animation="wave"
              />
            </div>
            <div className="col-md-4 col-12 p-0 ps-md-5 pt-5">
              <Skeleton
                variant="rectangular"
                width="100%"
                height={250}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={200}
                height={50}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="100%"
                height={80}
                animation="wave"
              />
            </div>
          </div>
        )}
      </div>
      {/* End blog section */}
      {/* Schedule */}
      <Schedule />
      {/* Footer */}
      <Footer />
    </div>
  );
}
