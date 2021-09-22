export default function ProductDetail({informations, productID, productDescription}) {
  return (
    <div className="detail-section r-container pb-5 mb-5">
      <h3 className="pb-5 blue-text title">Diamond Details</h3>
      <div className="pt-5 pb-md-5 text-panel">
        <h3 className="blue-text">{productID}</h3>
        <p className="m-0 pb-5">
            {productDescription}
        </p>
        <nav className="info-panel">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active text-uppercase px-0 me-5"
              id="nav-information-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-information"
              type="button"
              role="tab"
              aria-controls="nav-information"
              aria-selected="true"
            >
              Information
            </button>
            <button
              className="nav-link text-uppercase px-0"
              id="nav-setDiamond-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-setDiamond"
              type="button"
              role="tab"
              aria-controls="nav-setDiamond"
              aria-selected="false"
            >
              Can be set with
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-information"
            role="tabpanel"
            aria-labelledby="nav-information-tab"
          >
            <h3 className="title-panel py-5 text-uppercase m-0">
              Diamond information
            </h3>
            <div className="informations row m-0">
              {informations.map((item, index) => {
                return (
                  <div
                    className={
                      index % 2 == 1
                        ? "col-md-6 col-12 p-0 ps-md-3"
                        : "col-md-6 col-12 p-0 pe-md-3 pe-0"
                    }
                    key={index}
                  >
                    <div
                      className={
                        (Math.floor(index / 2) % 2 == 0) & (index % 2 == 0)
                          ? "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel grey-mode md-grey-mode"
                          : (Math.floor(index / 2) % 2 == 0) & (index % 2 == 1)
                          ? "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel grey-mode"
                          : index % 2 == 0
                          ? "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel md-grey-mode"
                          : "d-flex align-items-center px-4 py-3 justify-content-between info-title-panel"
                      }
                    >
                      <p className="text-uppercase information-name m-0">
                        {item.name}
                      </p>
                      <p className="text-uppercase m-0">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-setDiamond"
            role="tabpanel"
            aria-labelledby="nav-setDiamond-tab"
          >
            <h3 className="title py-5 text-uppercase m-0">Can be set with</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
