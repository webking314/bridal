import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

import "../styles/components/header.scss";
import "../styles/components/collection.scss";
import "../styles/components/schedule.scss";
import "../styles/components/footer.scss";
import "../styles/components/needHelp.scss";
import "../styles/components/range.scss";
import "../styles/components/selectSearch.css";

import "../styles/pages/homepage.scss";
import "../styles/pages/blog/blog.scss";
import "../styles/pages/blog/brief.scss";
import "../styles/pages/jewelry.scss";
import "../styles/pages/ring.scss";
import "../styles/pages/myCart.scss";
import "../styles/pages/product.scss";
import "../styles/pages/customRing/chooseSetting.scss";
import "../styles/pages/customRing/confirmSetting.scss";
import "../styles/pages/customRing/chooseDiamond.scss";
import "../styles/pages/customRing/confirmDiamond.scss";
import "../styles/pages/customRing/confirmRing.scss";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
