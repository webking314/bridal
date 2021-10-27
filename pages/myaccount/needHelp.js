import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RiChat1Line, RiCustomerService2Fill } from "react-icons/ri";

export default function NeedHelp() {
  return (
    <div className="needHelp_panel">
      <h3 className="title pb-4 mb-4">Need Help?</h3>
      <p className="mb-4 description">
        Do you have a question about your account? Contact us here
      </p>
      <div className="row">
        <div className="col-md-9">
          <div className="help-panel p-4">
            <div className="top-panel d-flex justify-content-between pb-4">
              <p className="text-uppercase m-0">Need help?</p>
              <div className="link-panel d-flex">
                <Link passHref={true} href="#">
                  <a className="text-uppercase me-4 d-flex align-items-center blue-text">
                    <RiCustomerService2Fill className="me-2" />
                    contact
                  </a>
                </Link>
                <Link passHref={true} href="#">
                  <a className="text-uppercase d-flex align-items-center blue-text">
                    <RiChat1Line className="me-2" />
                    chat
                  </a>
                </Link>
              </div>
            </div>
            <div className="bottom-panel d-flex justify-content-between pt-4">
              <p className="text-uppercase m-0">
                Not ready to purchase online?
              </p>
              <button className="btn pink-btn btn-online px-4 py-2">
                Not ready to purchase online?
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-md-0 mt-4">
          <div className="left-panel p-3 d-flex flex-column">
            <Link href="#">
              <a className="text-uppercase mb-3">faq</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase mb-3">ORder & PAyment</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase mb-3">NEWSLETtER</a>
            </Link>
            <Link href="#">
              <a className="text-uppercase">VIP Member</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
