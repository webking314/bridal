import Link from "next/link";
import AboutSlider from "./aboutSlider";
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const instagramItems = [
  { img: "/img/homepage/Rectangle 34.png" },
  { img: "/img/homepage/Rectangle 38.png" },
  { img: "/img/homepage/Rectangle 37.png" },
  { img: "/img/homepage/Rectangle 36.png" },
  { img: "/img/homepage/Rectangle 35.png" },
  { img: "/img/homepage/Rectangle 1.png" },
];

export default function Instagram() {
  return (
    <div className="instagram pb-5">
      <div className="r-container">
        <div className="row mx-0 mb-5 text-panel">
          <div className="col-md-6 col-12 p-0">
            <h1 className="m-0 text-capitalize">
              Follow us on <div>Instagram</div>
            </h1>
          </div>
          <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-end link-panel">
            <div className="mx-0 text-md-end text-start">
              Follow{" "}
              <Link  passHref={true} href="#">
                <a className="text-primary">#Royalcoster</a>
              </Link>{" "}
              @Instagram For
            </div>
            <div className="mx-0 text-md-end text-start">
              <Link  passHref={true} href="#">
                <a className="text-primary">#Diamondstories</a>
              </Link>
              ,{" "}
              <Link  passHref={true} href="#">
                <a className="text-primary">#Inspiration</a>
              </Link>{" "}
              &{" "}
              <Link  passHref={true} href="#">
                <a className="text-primary">#Amsterdiamonds</a>
              </Link>
            </div>
          </div>
        </div>
        <InstagramFeed token="IGQVJYWjhoWlB5SGIzSU9NTndXODBya1pCZAWxWbGt1NmNQNUdHSnFrakoyd1hjUFJSZAHJDU1MxQ3BQOC1qWmM1X2s0TzZAockVFRm5fTUsyRTA5MDlkT3NNdURlNnNyWFFraUg2cUpVRE9zV2RvWmxSTQZDZD"  counter="6"/>
        {/* <div className="d-md-none d-block instagram-slider-panel">
          <AboutSlider componentProduct={true} slides={instagramItems} />
        </div>
        <div className="row gallery-panel d-md-flex d-none m-0 p-0">
          <div className="col-md-6 col-12 m-0 p-0 d-flex flex-column justify-content-between">
            <div className="row m-0 p-0">
              <div className="col-6 d-flex m-0 p-0">
                <Link  passHref={true} href="#">
                  <a className="instagram-link gallery-type-1">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 34.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-6 d-flex m-0 p-0">
                <Link  passHref={true} href="#">
                  <a className="instagram-link gallery-type-1">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 38.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="row m-0 p-0">
              <Link  passHref={true} href="#">
                <a className="instagram-link p-0 gallery-type-1">
                  <div className="gallery-item round">
                    <img
                      src="/img/homepage/Rectangle 37.png"
                      className="round"
                      alt="gallery-img"
                    />
                    <div className="hover-panel"></div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0">
            <div className="row m-0 p-0">
              <div className="col-6 p-0">
                <div className="row m-0 p-0">
                  <Link  passHref={true} href="#">
                    <a className="instagram-link p-0 gallery-type-1">
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 36.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="row m-0 p-0">
                  <Link  passHref={true} href="#">
                    <a className="instagram-link p-0 gallery-type-1">
                      <div className="gallery-item round">
                        <img
                          src="/img/homepage/Rectangle 35.png"
                          className="round"
                          alt="gallery-img"
                        />
                        <div className="hover-panel"></div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-6 d-flex p-0">
                <Link  passHref={true} href="#">
                  <a className="instagram-link gallery-type-2">
                    <div className="gallery-item round">
                      <img
                        src="/img/homepage/Rectangle 1.png"
                        className="round"
                        alt="gallery-img"
                      />
                      <div className="hover-panel"></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <button className="btn round-form mt-5 px-5 py-3 follow-btn blue-outline-btn">
          Follow @Costerdiamondsofficial
        </button>
      </div>
    </div>
  );
}
