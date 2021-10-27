import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Detail() {
  return (
    <div className="details_panel">
      <h3 className="title pb-4 mb-3">
        My Details
      </h3>
      <div className="edit-panel row mt-4">
        <div className="edit-info-panel col-md-6">
          <h3 className="sub-title mb-3 text-capitalize">Change name/email</h3>
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="FIRST NAME"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="LAST NAME"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-3"
            placeholder="EMAIL ADDRESS"
          />
          <input
            type="text"
            className="form-control px-4 py-3 mb-4"
            placeholder="CONFRIM EMAIL ADDRESS"
          />
        </div>
        <div className="edit-password-panel col-md-6">
          <h3 className="sub-title mb-3 text-capitalize">Change name/email</h3>
          <input
            type="password"
            className="form-control px-4 py-3 mb-3"
            placeholder="NEW PASSOWORD"
          />
          <input
            type="password"
            className="form-control px-4 py-3 mb-4"
            placeholder="CONFRIM NEW PASSOWORD"
          />
        </div>
      </div>
      <div className="confirm-panel pt-4">
        <input
          type="text"
          className="form-control px-4 py-3 mb-3"
          placeholder="FIRST NAME"
        />
        <button className="btn blue-btn btn-apply d-flex justify-content-between align-items-center px-4 py-3">
          APPLY
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
}
