import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import { RiArrowRightLine } from "react-icons/ri";

export default function Login() {
  return (
    <div className="login_page d-flex flex-column">
      <Head>
        <title>My Account Login | Royal Coster</title>
      </Head>
      <Header />
      <div className="main-panel d-flex align-items-center justify-content-center">
        <div className="main-box round p-5">
          <h3 className="title text-capitalize pt-3 mb-4">Welcome back</h3>
          <p className="description text-capitalize mb-0 pb-4">
            Enter your email address and password to log in.
          </p>
          <input type="text" className="form-control p-3 mt-4 mb-3" />
          <input type="text" className="form-control p-3 mb-4" />
          <button className="btn btn-login d-flex justify-content-between align-items-center p-3 mb-4">
            LOG IN
            <RiArrowRightLine />
          </button>
          <div className="login-help-panel d-flex justify-content-between align-items-center pb-4">
            <div className="form-check d-flex align-items-center p-0">
              <input
                type="checkbox"
                className="form-check-input m-0 me-3"
                id="rememberme"
              />
              <label className="form-check-label" htmlFor="rememberme">
                Remember Me
              </label>
            </div>
            <button className="btn btn-forgot-password text-decoration-underline">
              Forgot Password
            </button>
          </div>
          <button className="btn btn-create-account d-flex justify-content-between align-items-center mt-4 p-3">
            CREATE A NEW ACCOUNT
            <RiArrowRightLine />
          </button>
        </div>
        <div className="blur-blue-panel"/>
        <div className="blur-pink-panel"/>
      </div>
    </div>
  );
}
