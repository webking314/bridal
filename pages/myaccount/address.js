import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Address() {
  return (
    <div className="address_panel">
      <h3 className="title pb-4 mb-3">My Address</h3>
      <div className="row mt-4 mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="ADDRESS NAME *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="FIRST NAME *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="LAST NAME *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="COMPANY(OPTIONAL)"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="STREET *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="ADDITIONAL INFORMATION(OPTIONAL)"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="LAND *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="ZIP CODE *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="HOUSE NUMBER *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="ADDITION(OPTIONAL)"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="TOWN *"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="TELEPHONE NUMBER *"
          />
        </div>
      </div>
      <button className="btn blue-btn btn-apply d-flex justify-content-between align-items-center px-4 py-3">
        APPLY
        <RiArrowRightLine />
      </button>
    </div>
  );
}
