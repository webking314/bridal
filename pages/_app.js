import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import "./../styles/header.scss"
import "./../styles/homepage.scss"
import "./../styles/footer.scss"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
