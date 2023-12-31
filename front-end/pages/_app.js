import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/azino-icons.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "swiper/swiper-bundle.min.css";
import 'react-toastify/dist/ReactToastify.css';



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (<><Component {...pageProps} /><script src="https://cdn.faceio.net/fio.js"></script></>);
}
