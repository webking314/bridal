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
  const [result, setResult] = useState(76);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    // Get categories
    setLoading(true);
    fetch(categoryURL + "?orderby=id&exclude=1&per_page=100&hide_empty=true", {
      method: "get",
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        fetch(blogURL + "?orderby=id&per_page=10", {
          method: "get",
          headers,
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            setPost(data);
          });
      });
  }, []);

  useEffect(() => {
    if (post) {
      post.map((item) => {
        console.log(item._links['wp:featuredmedia'][0].href)
      });
    }
  }, [post]);

  const selectCategory = (item) => {
    console.log(item);
  };
  const options = [
    { name: "All", value: "All" },
    { name: "Diamond Products", value: "Diamond Products" },
    { name: "To Do in Amsterdam", value: "To Do in Amsterdam" },
    { name: "Knowledge", value: "Knowledge" },
    { name: "News", value: "News" },
    { name: "Craftsmanship", value: "Craftsmanship" },
    { name: "Diamonds & Gemstones", value: "Diamonds & Gemstones" },
    { name: "Our Royal Legacy", value: "Our Royal Legacy" },
    { name: "Blog", value: "Blog" },
    { name: "Job opening", value: "Job opening" },
    { name: "Tourism", value: "Tourism" },
    { name: "Kennis", value: "Kennis" },
    { name: "Diamanten & Edelstenen", value: "Diamanten & Edelstenen" },
  ];

  const blogItems = [
    {
      image: "blog (1).png",
      type: "KNOWLEDGE, BLOG",
      title:
        "The golden Jubilee: How an ugly duckling became the biggest faceted diamond in the world",
    },
    {
      image: "blog (2).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "How to take care of your watch",
    },
    {
      image: "blog (3).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "The Onyx Gemstone",
    },
    {
      image: "blog (4).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "Velantines day at home",
    },
    {
      image: "blog (5).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "The Rose Cut Diamond",
    },
    {
      image: "blog (6).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "The Rose Cut Diamond",
    },
    {
      image: "blog (7).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "The Rose Cut Diamond",
    },
    {
      image: "blog (8).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "How to take care of your watch",
    },
    {
      image: "blog (9).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "The Rose Cut Diamond",
    },
    {
      image: "blog (10).png",
      type: "KNOWLEDGE | Craftsmanship",
      title: "How to take care of your watch",
    },
  ];
  // if (loading) return <Loading />;
  // else
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
              <SelectSearch
                id="selectSearch"
                options={options}
                value={selectValue}
                onChange={(value) => {
                  {
                    setSelectValue(value);
                  }
                }}
                filterOptions={fuzzySearch}
                emptyMessage="Not found"
                search
              />
            </div>
          </div>
        </div>
        <div className="tab-bar d-md-flex d-none flex-wrap py-4 mb-5">
          <button
            className="btn btn-tab px-5 py-3 round-form text-capitalize mt-3 me-3"
            onClick={() => selectCategory(1)}
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
        <div className="main-blog-panel row m-0">
          <div className="col-md-8 col-12 p-0">
            <div className="row m-0">
              <Link
                props="sasfd"
                href={{
                  pathname: "/blog/[slug]",
                  query: {
                    slug: blogItems[0].title,
                    title: blogItems[0].title,
                    img: blogItems[0].image,
                  },
                }}
                as={"/blog/" + blogItems[0].title}
              >
                <a>
                  <div className="blog-box main-blog ps-0 pt-5 pe-md-5 pe-0">
                    <div className="round blog-image">
                      {/* {
                        fetch(blogURL + "?orderby=id&per_page=10", {
                          method: "get",
                          headers,
                        })
                          .then((res) => res.json())
                          .then((data) => {
                            setLoading(false);
                            setPost(data);
                          })
                      } */}
                      <img
                        src={"/img/blog/" + blogItems[0].image}
                        className="round"
                        alt="blog-image"
                      />
                    </div>
                    <div className="blog-title py-5">
                      <p className="text-uppercase">{blogItems[0].type}</p>
                      <h3>{blogItems[0].title}</h3>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
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
                        as={"/blog/" + item.title}
                      >
                        <a>
                          <div className="blog-box pt-5 pe-sm-5" key={index}>
                            <div className="round blog-image">
                              <img
                                src={"/img/blog/" + item.image}
                                className="round"
                                alt="blog-image"
                              />
                            </div>
                            <div className="blog-title py-5">
                              <p className="text-uppercase">{item.type}</p>
                              <h3>{item.title}</h3>
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
                        as={"/blog/" + item.title}
                      >
                        <a>
                          <div
                            className="blog-box pt-5 pe-md-5 pe-0 ps-md-0 ps-sm-5"
                            key={index}
                          >
                            <div className="round blog-image">
                              <img
                                src={"/img/blog/" + item.image}
                                className="round"
                                alt="blog-image"
                              />
                            </div>
                            <div className="blog-title py-5">
                              <p className="text-uppercase">{item.type}</p>
                              <h3>{item.title}</h3>
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
                        as={"/blog/" + item.title}
                      >
                        <a>
                          <div className="blog-box pt-5 pe-md-0 pe-sm-5">
                            <div className="round blog-image">
                              <img
                                src={"/img/blog/" + item.image}
                                className="round"
                                alt="blog-image"
                              />
                            </div>
                            <div className="blog-title py-5">
                              <p className="text-uppercase">{item.type}</p>
                              <h3>{item.title}</h3>
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
                        as={"/blog/" + item.title}
                        key={index}
                      >
                        <a>
                          <div className="blog-box pt-5 ps-md-0 ps-sm-5">
                            <div className="round blog-image">
                              <img
                                src={"/img/blog/" + item.image}
                                className="round"
                                alt="blog-image"
                              />
                            </div>
                            <div className="blog-title py-5">
                              <p className="text-uppercase">{item.type}</p>
                              <h3>{item.title}</h3>
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
      </div>
      {/* End blog section */}
      {/* Schedule */}
      <Schedule />
      {/* Footer */}
      <Footer />
      <Loading visible={loading} />
    </div>
  );
}
