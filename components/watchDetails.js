import Link from "next/link";
import NumberFormat from "react-number-format";


export default function WatchDetails({ watchData }) {
  return (
    <>
      {
        watchData.map((watch, index) => {
          return (
            <div className="watch-detail-section r-container py-5" key={index}>
              <div className="watch-info-panel row m-0 mb-5">
                <div className={"text-panel col-md-6 col-12 d-flex flex-column justify-content-center mt-md-0 mt-5 p-0 pe-md-5 " + (index % 2 == 1 && "ps-md-5")}>
                  <h3 className={"blue-text watch-title text-capitalize mb-md-5 mb-3 " + (index % 2 == 0 ? "pe-md-5" : "ps-md-5")}>{watch.title}</h3>
                  <p className={"watch-description pb-5 m-0 " + (index % 2 == 0 ? "pe-md-5" : "ps-md-5")}>{watch.description}</p>
                  <div className={"btn-panel pt-md-5 pt-3 " + (index % 2 == 0 ? "pe-md-5" : "ps-md-5")}>
                    <button className="btn btn-show-watch text-uppercase round-form py-3 px-5 blue-btn">{watch.btnText}</button>
                  </div>
                </div>
                <div className={"image-panel col-md-6 col-12 px-0 " + (index % 2 == 1 ? "order-first" : "order-md-last order-first")}>
                  <img src={"/img/watch/" + watch.coverImage} className="watch-cover-image" alt="watch-cover-image" />
                </div>
              </div>
              <div className="watch-items-panel pb-5">
                <h3 className="title py-3 mb-4">{watch.itemTitle}</h3>
                <div className="item-panel row">
                  {
                    watch.items.map((item, id) => {
                      return (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={id}>
                          <Link href={item.url}>
                            <a>
                              <div className="image-panel round hover-scale mb-3">
                                <img src={"/img/watch/" + item.image} className="item-image" alt="watch-image" />
                              </div>
                            </a>
                          </Link>
                          <h4 className="item-title text-capitalize mb-3">{item.title}</h4>
                          <p className="item-id text-capitalize mb-4">{item.id}</p>
                          <h3 className="item-cost text-uppercase">
                            <NumberFormat
                              value={item.cost}
                              displayType="text"
                              decimalScale={2}
                              fixedDecimalScale={true}
                              thousandSeparator={true}
                              prefix="€ "
                            />
                          </h3>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  );
}
