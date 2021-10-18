import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Instagram from "../../components/instagram";
import renderHTML from "react-render-html";

const educationData = [
  { image: '/img/education/about (1).png', title: "Loose Diamonds" },
  { image: '/img/education/about (2).png', title: "Engagement Rings" },
  { image: '/img/education/about (3).png', title: "Natural Gemstones" },
  { image: '/img/education/about (4).png', title: "Wedding Rings" },
  { image: '/img/education/about (5).png', title: "Fine Jewelry" },
  { image: '/img/education/about (6).png', title: "Watches" },
]

const blogURL = "https://royalcoster.nl/wordpress/wp-json/wp/v2/blogs?orderby=id&per_page=6&categories=";
const categoryURL = "https://royalcoster.nl/wordpress/wp-json/wp/v2/categories?search=craftsmanship";
let localBlog;

export async function getStaticProps() {

  let blogData = {}

  if (localBlog) {
    blogData = localBlog
  } else {
    const categoryRes = await fetch(categoryURL, {
      method: "get"
    });

    const category = await categoryRes.json();

    const blogRes = await fetch(blogURL + category[0].id, {
      method: "get"
    })

    blogData = await blogRes.json();
    localBlog = blogData
  }

  return {
    props: {
      blogData
    }
  }
}

export default function Education({blogData}) {
  const [blog, setBlog] = useState(blogData);

  return (
    <div className="education_page">
      <Head>
        <title>Education | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title col-lg-4 col-md-6 col-sm-8 text-capitalize mb-5">
            Education <span>Center</span>
          </h1>
        </div>
      </div>
      {/* End hero section */}

      {/* Start guide section */}
      <div className="guide-section">
        <div className="row r-container py-5">
          <div className="col-md-4 col-12 p-0 pe-md-5 pe-5 py-sm-5">
            <h3 className="title text-capitalize">let us guide you through</h3>
          </div>
          <div className="col-md-8 col-12 p-0 ps-md-5 ps-0 pt-sm-5 pt-4 pb-sm-5">
            <p className="guide-text mb-4">
              In order to get the perfect diamond for your engagement rings there are several factors to consider. You’ve read about the 4Cs of diamond education but let us guide you through our 7Cs to help you find the one.</p>
          </div>
        </div>
      </div>
      {/* End guide section */}

      {/* Start Know About Section */}
      <div className="know-about-section r-container pt-5">
        <h3 className="py-5 title text-center"><span>Know</span> About</h3>
        <div className="row">
          {
            blog.map((item, index) => {
              return (
                <div className="col-md-4 col-sm-6 education-item mb-5" key={index}>
                  <div className="image-panel hover-scale round">
                    <img src={item.acf.featured_image.sizes.large} alt="education-image" />
                  </div>
                  <h3 className="item-title blue-text my-4">{renderHTML(item.title.rendered)}</h3>
                  <Link href="#">
                    <a className="text-uppercase btn-read-more">Read More</a>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* Endr Know About Section */}

      {/* Start Instagram section */}
      <Instagram />
      {/* End Instagram section */}

      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}

    </div >
  );
}
