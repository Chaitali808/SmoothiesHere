import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Str from "./pages/Str";
import Header from "./pages/Header";
import Root from "./pages/Root";
import Root1 from "./pages/Root1";
import Root2 from "./pages/Root2";
import Root3 from "./pages/Root3";
import Root4 from "./pages/Root4";
import Root5 from "./pages/Root5";
import Root6 from "./pages/Root6";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/8":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Str />} />
      <Route path="/2" element={<Header />} />
      <Route path="/1" element={<Root />} />
      <Route path="/3" element={<Root1 />} />
      <Route path="/4" element={<Root2 />} />
      <Route path="/5" element={<Root3 />} />
      <Route path="/8" element={<Root4 />} />
      <Route path="/7" element={<Root5 />} />
      <Route path="/6" element={<Root6 />} />
    </Routes>
  );
}
export default App;
