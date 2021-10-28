import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Detail() {
  return (
    <div className="details_panel">
      <h3 className="title">
        My Details
      </h3>
      <div className="edit-panel row mt-4">
        <div className="edit-info-panel col-md-6">
          <h3 className="sub-title mb-3 text-capitalize">Change name/email</h3>
          <input
            type="text"
            className="form-control"
            placeholder="FIRST NAME"
          />
          <input
            type="text"
            className="form-control"
            placeholder="LAST NAME"
          />
          <input
            type="text"
            className="form-control"
            placeholder="EMAIL ADDRESS"
          />
          <input
            type="text"
            className="form-control"
            placeholder="CONFRIM EMAIL ADDRESS"
          />
        </div>
        <div className="edit-password-panel col-md-6">
          <h3 className="sub-title mb-3 text-capitalize">Change name/email</h3>
          <input
            type="password"
            className="form-control"
            placeholder="NEW PASSOWORD"
          />
          <input
            type="password"
            className="form-control"
            placeholder="CONFRIM NEW PASSOWORD"
          />
        </div>
      </div>
      <div className="confirm-panel">
        <input
          type="text"
          className="form-control"
          placeholder="FIRST NAME"
        />
        <button className="btn blue-btn btn-apply d-flex justify-content-between align-items-center">
          APPLY
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
}
