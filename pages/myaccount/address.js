import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Address() {
  return (
    <div className="address_panel">
      <div className="title-panel d-flex justify-content-between">
        <h3 className="m-0">My Address</h3>
        <button className="btn btn-creat">CREATE NEW ADDRESS</button>
      </div>
      <div className="row mt-4 mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="ADDRESS NAME *"
          />
          <input
            type="text"
            className="form-control"
            placeholder="FIRST NAME *"
          />
          <input
            type="text"
            className="form-control"
            placeholder="LAST NAME *"
          />
          <input
            type="text"
            className="form-control"
            placeholder="COMPANY(OPTIONAL)"
          />
          <input type="text" className="form-control" placeholder="STREET *" />
          <input
            type="text"
            className="form-control"
            placeholder="ADDITIONAL INFORMATION(OPTIONAL)"
          />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="LAND *" />
          <input
            type="text"
            className="form-control"
            placeholder="ZIP CODE *"
          />
          <input
            type="text"
            className="form-control"
            placeholder="HOUSE NUMBER *"
          />
          <input
            type="text"
            className="form-control"
            placeholder="ADDITION(OPTIONAL)"
          />
          <input type="text" className="form-control" placeholder="TOWN *" />
          <input
            type="text"
            className="form-control"
            placeholder="TELEPHONE NUMBER *"
          />
        </div>
      </div>
      <button className="btn blue-btn btn-apply d-flex justify-content-between align-items-center">
        APPLY
        <RiArrowRightLine />
      </button>
    </div>
  );
}
