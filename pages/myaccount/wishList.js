import React, { useState, useRef, useEffect } from "react";
import { setWishList } from "../../redux/actions/wishListAction";
import { connect } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import NumberFormat from "react-number-format";
import renderHTML from "react-render-html";

function WishList(props) {
  const removeItem = (product) => {
    let localProducts = props.wishList;
    let removeProduct = localProducts.find(
      (item) => item.shopifyid == product.shopifyid
    );
    if (removeProduct) {
      localProducts.splice(localProducts.indexOf(removeProduct), 1);
      props.setWishList(localProducts);
      localStorage.setItem("wishList", JSON.stringify(localProducts));
    }
  };

  return (
    <div className="wishList-panel">
      <h3 className="title pb-4 mb-3">
        My wishlist <span>({props.wishList ? props.wishList.length : 0})</span>
      </h3>
      <div className="list-panel">
        {props.wishList != 0 &&
          props.wishList.map((item, index) => (
            <div
              className="item-panel d-flex justify-content-between align-items-center mb-3"
              key={index}
            >
              <div className="title-panel d-flex align-items-center">
                <div className="item-image hover-scale me-3">
                  <img src={item.image} alt="item.image" />
                </div>
                <div className="item-title">
                  <h3>{item.title}</h3>
                  <p className="description">
                    {renderHTML(item.description.split("<")[0])}
                  </p>
                  <button
                    className="btn btn-remove d-flex align-items-center text-uppercase p-0"
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    Remove <RiCloseFill className="ms-2" />
                  </button>
                </div>
              </div>
              <div className="price-panel ps-3">
                <h3 className="item-price mb-5">
                  <NumberFormat
                    value={item.price}
                    displayType="text"
                    decimalScale={2}
                    fixedDecimalScale={true}
                    thousandSeparator={true}
                    prefix="$"
                  />
                </h3>
                <button className="btn btn-add-cart text-uppercase px-4 py-2">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  wishList: state.wishList.value,
});

const mapDispatchToProps = {
  setWishList: setWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
