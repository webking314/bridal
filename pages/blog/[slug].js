import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from "react-icons/ri";
import "swiper/css";

SwiperCore.use([Autoplay, Navigation]);

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  useEffect(() => {
    const header = document.querySelector("#header");
    const aboutSection = document.querySelector(".about-section");
    const restHeight = aboutSection.clientHeight + header.clientHeight;
    const scrollListener = () => {
      if (!target.current) {
        return;
      }
      const element = target.current;
      const totalHeight = element.clientHeight - window.innerHeight;
      const windowScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (windowScrollTop - restHeight <= 0) {
        return setReadingProgress(0);
      }

      if (windowScrollTop - restHeight > totalHeight) {
        return setReadingProgress(100);
      }

      setReadingProgress(((windowScrollTop - restHeight) / totalHeight) * 100);
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div
      className={`reading-progress-bar`}
      style={{ width: `${readingProgress}%` }}
    />
  );
};

export default function Brief(props) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [pathName, setPathName] = useState();
  const [time, setTime] = useState();
  const title = "How to take care of your watch";
  const mainImage = "blog (1).png";
  const reporterAvatar = "reporter_avatar-1.png";
  const reporterName = "By Alina";
  const reporterDescription =
    "Marketing and Communications Advisor with a passion for diamonds and a nose for trends. Always happy to share the latest developments in the jewelry business with you.";
  const reporterDate = "January 27, 2021";
  const products = [
    {
      img: "product-1.png",
      type: "Bracelets",
      id: "Sku: 1342343",
      title: "The Rose Cut Diamond",
      cost: "$1.200",
    },
    {
      img: "product-2.png",
      type: "Rings",
      id: "Sku: 1342343",
      title: "The Rose Cut Diamond",
      cost: "$1.200",
    },
    {
      img: "product-3.png",
      type: "Rings",
      id: "Sku: 1342343",
      title: "The Rose Cut Diamond",
      cost: "$1.200",
    },
  ];
  const router = useRouter();
  const query = router.query;
  const target = React.createRef();

  useEffect(() => {
    const text = document.querySelector(".article-panel").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    // document.getElementById("time").innerText = time;
    setTime(time);
    console.log(time);
  }, []);

  return (
    <div className="brief_page">
      <Head>
        <title>Brief | Royal Coster</title>
      </Head>
      {/*Header */}
      <Header />
      {/* <div className="progress-bar"></div> */}
      {/* Start about section */}
      <div className="about-section pt-md-5 pt-0 mb-5x">
        <div className="link-panel r-container px-5 py-3 mb-md-5 mb-0 round-form d-flex align-items-center">
          <button
            className="btn back-arrow d-flex me-3 blue-text px-0"
            onClick={() => router.back()}
          >
            <HiOutlineArrowLeft />
          </button>
          <Link href="/">
            <a className="mx-2">HOME</a>
          </Link>
          /
          <Link href="/blog">
            <a className="mx-2">BLOG</a>
          </Link>
          /
          <span className="title ms-2 text-uppercase blue-text">
            {query.title}
          </span>
        </div>
        <div className="r-container">
          <h1 className="py-5 product-title blue-text text-capitalize">
            {query.title}
          </h1>
          <div className="about-panel row m-0 pb-5">
            <div className="col-md-9 col-12 p-0 image-panel pe-md-5 pe-0 ">
              <img
                src={"/img/blog/" + query.img}
                className="round"
                alt="about-image"
              />
            </div>
            <div className="col-md-3 col-12 p-0 text-panel mb-5 ps-md-5 ps-0 pt-md-0 pt-5 d-flex flex-column justify-content-between">
              <div className="reporter-info">
                <img
                  src={"/img/brief/" + reporterAvatar}
                  className="reporter-avatar"
                  alt="reporterAvatar"
                  width="50"
                  height="50"
                />
                <h3 className="reporter-name py-4">{reporterName}</h3>
                <p className="reporter-description text-capitalize">
                  {reporterDescription}
                </p>
                <p className="reporter-date pt-4">
                  <span className="text-uppercase me-2">{reporterDate}</span>·
                  <span className="ms-2">{time}</span> min read
                </p>
              </div>
              <div className="share-panel">
                <h3 className="blue-text text-uppercase mb-4">Share article</h3>
                <hr className="line" />
                <div className="links-panel mt-4 d-flex justify-content-between">
                  <Link href="#">
                    <a>
                      <RiFacebookCircleFill />
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <RiTwitterFill />
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <RiInstagramFill />
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <RiLinkedinFill />
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <RiWhatsappFill />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End about section */}
      {/* Start article section */}
      <ReadingProgress target={target} />
      <div ref={target} className="article-section py-5  r-container">
        <div className="link-panel-cover d-md-block d-none">
          <div className="link-panel">
            <Link href="#">
              <a>
                <div className="link-item d-flex align-items-center justify-content-center mb-3">
                  <RiFacebookLine />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="link-item d-flex align-items-center justify-content-center mb-3">
                  <RiTwitterLine />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="link-item d-flex align-items-center justify-content-center mb-3">
                  <RiInstagramLine />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="link-item d-flex align-items-center justify-content-center mb-3">
                  <RiLinkedinLine />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="link-item d-flex align-items-center justify-content-center">
                  <RiWhatsappLine />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="article-panel py-5">
          <p>
            {/* <span style={{fontSize: 120 + "px"}}>A</span> */}
            Although one in four people say they don’t use their watches for
            telling the time, they certainly use them as a fashion accessory.
            Watches are becoming more and more a status symbol and they can tell
            something about your lifestyle. Whether your watch is from Omega,
            Tag Heuer, Montblanc, or Frederique Constant, it needs constant
            maintenance to last long and perform accurately. Follow our easy
            tips, and you need not worry about losing your beautiful watch to
            untimely wear and tear. So here are some tips to take care of your
            watch and to keep it in perfect condition
          </p>
          <h2>Know your watch’s water resistance</h2>
          <img src="/img/brief/article_img-1.png" alt="article-image" />
          <p style={{ lineHeight: 23 + "px" }}>
            3 ATM / 30m: Splash proof and waterproof in small amounts of water.
            <br />
            5 ATM / 50m: Can be submerged in water. Suitable for shallow
            swimming. <br />
            10 ATM / 100m: Suitable for swimming, snorkeling, and water sports.{" "}
            <br />
            20 ATM / 200m: Ideal for scuba diving. <br />
            30 ATM / 300m and over: Professional and deep-sea diving.
            <br />
          </p>
          <p>
            The water-resistance of your watch may not be permanent as over time
            the seal may be affected by wear or accidental shock to the crown.
            We’d recommend you have the seals of your water-resistant watch
            tested annually.
          </p>
          <h2>Store your watch properly</h2>
          <img src="/img/brief/article_img-2.png" alt="article-image" />
          <p>
            To avoid humidity and dust, use the original box and packaging or
            store it in a box containing your other watches. If you’re storing
            watches in a watch box, make sure they are stored separately from
            one another to avoid wear caused by friction. Also, do not store
            your watches face down.
          </p>
          <h2>Clean your watch as often as possible</h2>
          <p>
            Use a soft slightly damp cloth to clean metal watch cases and
            bracelets. Avoid getting leather straps wet, as moisture can damage
            the appearance of the strap. Don’t immerse your watch in hot water.
            Even if your watch is water-resistant, hot water can damage the
            gaskets. Diamond embellishments can be gently scrubbed with a soapy
            brush and rubber straps can be immersed in soapy water. You can also
            visit our store to get your watch cleaned by our expert team.
          </p>
          <h2>Service your watch regularly</h2>
          <p>
            The general guidelines are around every two to three years for a
            mechanical watch, and three to four for quartz. However, the
            frequency with which we would recommend servicing your watch will
            depend upon the brand as well as your own personal use. Visit our
            store where our friendly team will be happy to advise you in more
            detail.
          </p>
          <h2>Don’t be your own watchmaker</h2>
          <img src="/img/brief/article_img-3.png" alt="article-image" />
          <p>
            Many times we want to fix our problems ourselves rather than going
            to a professional. This is the same in the case of wristwatches;
            however, we strongly advise that you do not try to be your own
            watchmaker when it comes to your wristwatches. You probably would
            end up damaging it more than it was already damaged. However, do not
            take this advice as a discouragement towards servicing your watch.
            If you have a passion for horology and have all the necessary tools,
            proceed with caution. But it is advised that you take your
            wristwatch to a properly licensed watchmaker for repairs or for
            servicing. This way, you can be sure that they know what they are
            doing and that your wristwatch would be back in one piece. While
            these tips are quite important for making sure that your
            wristwatches maintain their quality and are durable, it is important
            to know your wristwatch type. Different types of wristwatches may
            require some specific type of care, and if you have no knowledge of
            your wristwatch, then you would simply just be at a loss. Know what
            to expect from your wristwatch in terms of functionality and
            performance; this would help you to notice if there are any
            abnormalities in its functionality. If you have any questions about
            your watch and all the functionalities don’t hesitate to visit our
            store where we are able to tell you everything about your watch. You
            can also always contact us over the phone or by e-mail.
          </p>
        </div>
      </div>
      {/* End article section */}
      {/* Start select product section */}
      <div className="select-product-section py-5 r-container">
        <div className="title-panel row m-0 my-5">
          <div className="col-md-6 col-12 p-0">
            <h3 className="text-capitalize blue-text">Liked the article?</h3>
            <h2 className="text-capitalize blue-text">
              You'll love the products
            </h2>
          </div>
          <div className="col-6 p-0 justify-content-end d-md-flex d-none align-items-end">
            <Link href="#">
              <a>VIEW ALL</a>
            </Link>
          </div>
        </div>
        <div className="product-panel row m-0">
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            className="mySwiper"
            breakpoints={{
              1100: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              590: {
                slidesPerView: 1.4,
              },
              350: {
                slidesPerView: 1.4,
              },
              1: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 2500000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="product-image round">
                    <img src={"/img/brief/" + item.img} alt="product-image" />
                  </div>
                  <div className="product-info py-4">
                    <div className="product-id">
                      <span className="me-2">{item.type}</span>|
                      <span className="ms-2">{item.id}</span>
                    </div>
                    <h3 className="product-title my-4 blue-text">
                      {item.title}
                    </h3>
                    <p className="product-cost blue-text">{item.cost}</p>
                  </div>
                  <div className="btn-panel">
                    <button className="btn btn-cart pink-btn px-md-5 px-3 py-3 me-3 round-form">
                      ADD TO CART
                    </button>
                    <button className="btn btn-more-info px-md-5 px-3 py-3 blue-text round-form">
                      MORE INFO
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="btn-bottom-panel d-md-none d-block mt-5">
            <button ref={navigationPrevRef} className="btn px-0 me-5">
              <img src="/img/common/leftArrow_black.png" alt="rightArrow" />
            </button>
            <button ref={navigationNextRef} className="btn px-0">
              <img src="/img/common/rightArrow_black.png" alt="rightArrow" />
            </button>
          </div>
        </div>
      </div>
      {/* End select product section */}
      {/* Schedule section */}
      <Schedule />
      {/* Footer */}
      <Footer />
    </div>
  );
}
