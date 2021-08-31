import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Head from "next/head";
// import "animate.css"
import "../styles/globals.scss";
import "./../styles/header.scss";
import "./../styles/homepage.scss";
import "./../styles/footer.scss";
import "./../styles/schedule.scss";
import "./../styles/blog.scss";
import "./../styles/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
