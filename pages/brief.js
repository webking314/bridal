import React, { useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Schedule from "../components/schedule";

export default function Brief() {


  return (
    <div className="brief_page">
      <Head>
        <title>Brief | Royal Coster</title>
      </Head>
      {/*Header */}
      <Header />
     <div>Hello World!</div>
      <Schedule />
      {/* Footer */}
      <Footer />
    </div>
  );
}
