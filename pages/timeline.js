import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel,
  Pagination,
  Scrollbar,
  EffectCreative,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/scrollbar";

SwiperCore.use([Mousewheel, Pagination, Scrollbar, EffectCreative]);

const timeLists = [
  {
    year: 1840,
    image: "timeline-1840.png",
    description:
      "The diamond polishing factory M.E. Coster was founded by Mr. Moses Elias Coster at the Binnen Amstel/Waterlooplein , in Amsterdam.",
  },
  {
    year: 1848,
    image: "timeline-1848.png",
    description:
      "After the death of Moses E. Coster, his son Martin Coster took over the position of director of Coster. When Moses Elias Coster died, he left a will for his wife and 11 children. Three of them entered into a partnership. Meijer Moses (Martin) Coster was involved most in the company until he moved to Paris.",
  },
  {
    year: 1850,
    image: "timeline-1850.png",
    description:
      "The company is managed by diamond cutter Abraham Eliazer Daniëls.",
  },
  {
    year: 1851,
    image: "timeline-1851.png",
    description:
      "Martin Coster moves to Paris, where he sets up a cutting factory as well. In the following years he acquires a near-monopoly on diamond cutting in the world’s jewellery capital..",
  },
  {
    year: 1852,
    image: "timeline-1852.png",
    description:
      "The main diamond of the British Crown Jewels, the Koh-I-Noor, needs to be recut. This diamond is one of the largest and oldest cut diamonds in the world. Coster was commisioned to arrange this, so he sends two of his best polishers, J. A. Fedder and L. B. Voorzanger to England to polish the Koh-I-Noor. They work for 38 days to transform the 186 carat Koh-I-Noor into a 105 carat oval brilliant.",
  },
  {
    year: 1854,
    image: "timeline-1854.png",
    description: "Coster was visited by Count Leopold II of Belgium",
  },
  {
    year: 1855,
    image: "timeline-1855.png",
    description:
      "The entire Amsterdam diamond industry wins a medal of honour at the World Exhibition in Paris. The Star of the South diamond is cut from the 225 carat rough to a 125 carat cushion brilliant by Coster in Amsterdam and exhibited in Paris. During the first state visit by a British monarch to France in 400 years, Queen Victoria dazzles Paris with the Koh-I-Noor set in her newly made crown diadem.",
  },
];

const settingSlider = {
  freeMode: {
    enabled: true,
    sticky: false,
    momentumBounce: false,
  },
    mousewheel: {
    enabled: true,
    sensitivity: 3.5,
  }
};

export default function TimeLine() {
  return (
    <div className="timeline_page">
      <Head>
        <title>Timeline | Royal Coster</title>
      </Head>
      <Header page="homepage" />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white text-capitalize">
            Historical Timeline.
            <br />
            Since <span>1840</span>
          </h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start guide section */}
      <div className="guide-section py-5">
        <div className="row r-container py-5">
          <div className="col-lg-3 col-md-4 col-12 p-0 pe-md-5 pe-5 py-5">
            <h3 className="title text-capitalize text-md-start text-center">
              180 years of craftsmanship.
            </h3>
          </div>
          <div className="col-lg-9 col-md-8 col-12 p-0 ps-md-5 ps-0 py-5">
            <p className="guide-text text-md-start text-center">
              Not long after our establishment in 1840, Queen Victoria of
              England reached out to Coster for a very special assignment.
              Without realizing it at that time, this assignment would mark the
              start of an impressive legacy.
            </p>
          </div>
        </div>
      </div>
      {/* End guide section */}
      {/* Start time list section */}
      <div className="time-list-section row">
        <div className="col-2 ps-5 py-5 p-0"></div>
        <Swiper {...settingSlider} className="col-10">
          {timeLists &&
            timeLists.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={
                      index % 2
                        ? "horizontal-layout timeline-box"
                        : "timeline-box"
                    }
                  >
                    <div className="main-box row p-5">
                      <div className="col-12 py-5 history-box">
                        <div className="row m-0">
                          <div
                            className={
                              index % 2
                                ? "col-6 image-box p-0 pe-5"
                                : "col-12 image-box p-0 pb-5"
                            }
                          >
                            <img
                              src={"/img/timeline/" + item.image}
                              className={index % 2 ? "me-5" : "round mb-5"}
                              alt="timeline-image"
                            />
                          </div>
                          <div
                            className={
                              index % 2
                                ? "col-6 text-box p-0 ps-5"
                                : "col-12 text-box p-0 d-flex mt-5"
                            }
                          >
                            <p className="m-0">{item.description}</p>
                            <h2
                              className={
                                index % 2
                                  ? "pt-5 m-0 mt-5"
                                  : "order-first pt-5 m-0 pe-5 me-5"
                              }
                            >
                              {item.year}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {/* End time list section */}
    </div>
  );
}
