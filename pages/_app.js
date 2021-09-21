import { useState } from "react";
import GlobalContext from "../utils/global-context";
import { Provider } from "react-redux";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

import "../styles/components/header.scss";
import "../styles/components/collection.scss";
import "../styles/components/schedule.scss";
import "../styles/components/footer.scss";
import "../styles/components/needHelp.scss";
import "../styles/components/range.scss";
import "../styles/components/selectSearch.css";
import "../styles/components/productDetail.scss";
import "../styles/components/customer.scss";
import "../styles/components/help.scss";
import "../styles/components/instagram.scss";
import "../styles/components/craftingIdea.scss";
import "../styles/components/dropHintModal.scss";
import "../styles/components/appointmentModal.scss";
import "../styles/components/myCartList.scss";
import "../styles/components/aboutSlider.scss";

import "../styles/pages/homepage.scss";
import "../styles/pages/blog/blog.scss";
import "../styles/pages/blog/brief.scss";
import "../styles/pages/jewelry.scss";
import "../styles/pages/ring.scss";
import "../styles/pages/myCart/myCart.scss";
import "../styles/pages/myCart/checkout.scss";
import "../styles/pages/bespoke.scss";
import "../styles/pages/ringRecommend.scss";
import "../styles/pages/product/index.scss";
import "../styles/pages/timeline.scss";
import "../styles/pages/about.scss";
import "../styles/pages/customRing/chooseSetting.scss";
import "../styles/pages/customRing/confirmSetting.scss";
import "../styles/pages/customRing/chooseDiamond.scss";
import "../styles/pages/customRing/confirmDiamond.scss";
import "../styles/pages/customRing/confirmRing.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  )
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
