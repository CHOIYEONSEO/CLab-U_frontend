import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ApplicationLoginFailed from "./pages/ApplicationLoginFailed";
import ClubList from "./pages/ClubList";
import ClubDetail from "./pages/ClubDetail";
import Search from "./pages/Search";
import Main from "./pages/Main";

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
      case "/club-list":
        title = "";
        metaDescription = "";
        break;
      case "/club-detail":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ApplicationLoginFailed />} />
      <Route path="/club-list" element={<ClubList />} />
      <Route path="/club-detail" element={<ClubDetail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
export default App;
