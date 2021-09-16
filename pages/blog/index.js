import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import SelectSearch, {
  fuzzySearch,
  useSelect,
} from "react-select-search-nextjs";
import { RiSearchLine } from "react-icons/ri";
import renderHTML from "react-render-html";
import head from "next/head";
import Loading from "../../components/loading";

const blogURL = "https://royalcoster.nl/wordpress/wp-json/wp/v2/posts";
const categoryURL = "https://royalcoster.nl/wordpress/wp-json/wp/v2/categories";
const headers = {
  "Content-Type": "application/json",
};

export default function Blog() {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const [result, setResult] = useState();
  const [postItems, setPostItems] = useState();
  const [blogItems, setBlogItems] = useState();
  const [filterCategory, setFilterCategory] = useState("");
  const [filterKey, setFilterKey] = useState();
  const [options, setOptions] = useState();

  useEffect(() => {
    fetch(categoryURL + "?orderby=id&exclude=1&per_page=100&hide_empty=true", {
      method: "get",
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(blogURL + "?orderby=id&per_page=10&" + filterCategory, {
      method: "get",
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
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
    let postArr = [];
    if (post) {
      if (post.length != 0) {
        post.map((item, index) => {
          fetch(item._links["wp:featuredmedia"][0].href, {
            method: "get",
            headers,
          })
            .then((res) => res.json())
            .then((data) => {
              fetch(categoryURL + "?post=" + item.id, {
                method: "get",
                headers,
              })
                .then((res) => res.json())
                .then((categoryItems) => {
                  postArr.push({
                    id: item.id,
                    title: item.title.rendered,
                    slug: item.slug,
                    img: data.guid.rendered,
                    categories: categoryItems,
                  });
                  setPostItems([...postArr]);
                });
            });
        });
      } else setLoading(false);
    }
  }, [post]);

  useEffect(() => {
    if (post) {
      if (post.length == postItems.length) {
        setLoading(false);
        setBlogItems(postItems.sort((item1, item2) => item2.id - item1.id));
        setResult(post.length);
      }
    }
  }, [postItems]);

  useEffect(() => {
    setLoading(true);
    if (filterKey) {
      fetch(blogURL + "?orderby=id&per_page=10&" + filterCategory + filterKey, {
        method: "get",
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
        });
    }
  }, [filterKey]);

  const selectCategory = (key) => {
    if (!loading) {
      setBlogItems("");
      if (key) {
        setFilterCategory("categories=" + key);
      } else {
        setFilterCategory("");
      }
    }
  };

  const searchHandle = (event) => {
    if (!loading) {
      if (event.keyCode == 13) {
        setBlogItems("");
        setFilterKey("&search=" + event.target.value);
        event.target.value = ''
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
            <p className="blog__banner--description text-white mt-5">
              Our Royal Legacy
            </p>
          </div>
          <button className="btn text-uppercase mt-5 px-5 py-3 btn--read-more pink-btn round-form">
            Read more
          </button>
        </div>
      </div>
      {/* End banner section */}

      {/* Start blog section */}
      <div className="blog-section r-container py-5">
        <div className="top-bar row align-items-center m-0 p-0 mt-5 pt-5 pb-4">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-5">
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
            <div className="search-box round-form d-flex align-items-center">
              <label htmlFor="selectSearch" className="px-4">
                FITER BY :{" "}
              </label>
              {options && (
                <SelectSearch
                  id="selectSearch"
                  options={options}
                  onChange={(value) => {
                    {
                      setFilterCategory("categories=" + value);
                    }
                  }}
                  filterOptions={fuzzySearch}
                  emptyMessage="Not found"
                  search
                />
              )}
            </div>
          </div>
        </div>
        <div className="tab-bar d-md-flex d-none flex-wrap py-4 mb-5">
          <button
            className="btn btn-tab px-5 py-3 round-form text-capitalize mt-3 me-3"
            onClick={() => selectCategory("")}
          >
            All
          </button>
          {categories &&
            categories.map((item, index) => {
              return (
                <button
                  className="btn btn-tab px-5 py-3 round-form text-capitalize mt-3 me-3"
                  key={"button" + index}
                  onClick={() => selectCategory(item.id)}
                >
                  {renderHTML(item.name)}
                </button>
              );
            })}
        </div>
        <Loading loading={loading} />
        {blogItems && blogItems.length != 0 ? (
          <div className="main-blog-panel row m-0">
            <div className="col-md-8 col-12 p-0">
              {
                <div className="row m-0">
                  <Link
                    props="sasfd"
                    href={{
                      pathname: "/blog/[slug]",
                      query: {
                        slug: blogItems[0].slug,
                        title: blogItems[0].title,
                      },
                    }}
                    as={"/blog/" + blogItems[0].slug}
                  >
                    <a>
                      <div className="blog-box main-blog ps-0 pt-5 pe-md-5 pe-0">
                        <div className="round blog-image">
                          <img
                            src={blogItems[0].img}
                            className="round"
                            alt="blog-image"
                          />
                        </div>
                        <div className="blog-title py-5">
                          <p className="text-uppercase">
                            {blogItems[0].categories.map((item, index) => {
                              return (
                                <span key={index}>
                                  {index
                                    ? ", " + renderHTML(item.name)
                                    : renderHTML(item.name)}
                                </span>
                              );
                            })}
                          </p>
                          <h3>{renderHTML(blogItems[0].title)}</h3>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              }
              <div className="row m-0">
                <div className="col-sm-6 col-12 p-0">
                  {blogItems.map((item, index) => {
                    if (index % 3 == 2)
                      return (
                        <Link
                          href={{
                            pathname: "/blog/[slug]",
                            query: {
                              slug: item.slug,
                              title: blogItems[0].title,
                            },
                          }}
                          key={index}
                          as={"/blog/" + item.slug}
                        >
                          <a>
                            <div className="blog-box pt-5 pe-sm-5" key={index}>
                              <div className="round blog-image">
                                <img
                                  src={item.img}
                                  className="round"
                                  alt="blog-image"
                                />
                              </div>
                              <div className="blog-title py-5">
                                <p className="text-uppercase">
                                  {item.categories.map((category, index) => {
                                    return (
                                      <span key={index}>
                                        {index
                                          ? ", " + renderHTML(category.name)
                                          : renderHTML(category.name)}
                                      </span>
                                    );
                                  })}
                                </p>
                                <h3>{renderHTML(item.title)}</h3>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                  })}
                </div>
                <div className="col-sm-6 col-12 p-0">
                  {blogItems.map((item, index) => {
                    if ((index != 0) & (index % 3 == 0))
                      return (
                        <Link
                          href={{
                            pathname: "/blog/[slug]",
                            query: {
                              slug: item.slug,
                              title: item.title,
                            },
                          }}
                          key={index}
                          as={"/blog/" + item.slug}
                        >
                          <a>
                            <div
                              className="blog-box pt-5 pe-md-5 pe-0 ps-md-0 ps-sm-5"
                              key={index}
                            >
                              <div className="round blog-image">
                                <img
                                  src={item.img}
                                  className="round"
                                  alt="blog-image"
                                />
                              </div>
                              <div className="blog-title py-5">
                                <p className="text-uppercase">
                                  {item.categories.map((category, index) => {
                                    return (
                                      <span key={index}>
                                        {index
                                          ? ", " + renderHTML(category.name)
                                          : renderHTML(category.name)}
                                      </span>
                                    );
                                  })}
                                </p>
                                <h3>{renderHTML(item.title)}</h3>
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
                  {blogItems.map((item, index) => {
                    if (
                      (index % 3 == 1) &
                      (Math.ceil((blogItems.length - 1) / 3) * 3 - 2 > index)
                    )
                      return (
                        <Link
                          href={{
                            pathname: "/blog/[slug]",
                            query: {
                              slug: item.slug,
                              title: item.title,
                            },
                          }}
                          key={index}
                          as={"/blog/" + item.slug}
                        >
                          <a>
                            <div className="blog-box pt-5 pe-md-0 pe-sm-5">
                              <div className="round blog-image">
                                <img
                                  src={item.img}
                                  className="round"
                                  alt="blog-image"
                                />
                              </div>
                              <div className="blog-title py-5">
                                <p className="text-uppercase">
                                  {item.categories.map((category, index) => {
                                    return (
                                      <span key={index}>
                                        {index
                                          ? ", " + renderHTML(category.name)
                                          : renderHTML(category.name)}
                                      </span>
                                    );
                                  })}
                                </p>
                                <h3>{renderHTML(item.title)}</h3>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                  })}
                </div>
                <div className="col-md-12 col-sm-6 col-12 p-0">
                  {blogItems.map((item, index) => {
                    if (
                      (index % 3 == 1) &
                      (Math.ceil((blogItems.length - 1) / 3) * 3 - 2 <= index)
                    )
                      return (
                        <Link
                          href={{
                            pathname: "/blog/[slug]",
                            query: {
                              slug: item.slug,
                              title: item.title,
                            },
                          }}
                          as={"/blog/" + item.slug}
                          key={index}
                        >
                          <a>
                            <div className="blog-box pt-5 ps-md-0 ps-sm-5">
                              <div className="round blog-image">
                                <img
                                  src={item.img}
                                  className="round"
                                  alt="blog-image"
                                />
                              </div>
                              <div className="blog-title py-5">
                                <p className="text-uppercase">
                                  {item.categories.map((category, index) => {
                                    return (
                                      <span key={index}>
                                        {index
                                          ? ", " + renderHTML(category.name)
                                          : renderHTML(category.name)}
                                      </span>
                                    );
                                  })}
                                </p>
                                <h3>{renderHTML(item.title)}</h3>
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
          <h2 className="no-blog-text px-5 text-center">
            {loading ? "Loading..." : "No blogs to display."}
          </h2>
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
