import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminRejectReason from "./components/AdminRejectReason";
import AdminClub from "./pages/AdminClub";
import AdminLab from "./pages/AdminLab";
import AdminPage from "./pages/AdminPage";
import ApplicationFormClub from "./pages/ApplicationFormClub";
import ApplicationFormLab from "./pages/ApplicationFormLab";
import ApplicationLogin from "./pages/ApplicationLogin";
import ClubDetail from "./pages/ClubDetail";
import LabDetail from "./pages/LabDetail";
import LabList from "./pages/LabList";
import ClubList from "./pages/ClubList";
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
      case "/admin-club":
        title = "";
        metaDescription = "";
        break;
      case "/admin-lab":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page":
        title = "";
        metaDescription = "";
        break;
      case "/application-form-club":
        title = "";
        metaDescription = "";
        break;
      case "/application-form-lab":
        title = "";
        metaDescription = "";
        break;
      case "/application-login":
        title = "";
        metaDescription = "";
        break;
      case "/club-detail":
        title = "";
        metaDescription = "";
        break;
      case "/lab-detail":
        title = "";
        metaDescription = "";
        break;
      case "/lab-list":
        title = "";
        metaDescription = "";
        break;
      case "/club-list":
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
      <Route path="/" element={<AdminRejectReason />} />
      <Route path="/admin-club" element={<AdminClub />} />
      <Route path="/admin-lab" element={<AdminLab />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/application-form-club" element={<ApplicationFormClub />} />
      <Route path="/application-form-lab" element={<ApplicationFormLab />} />
      <Route path="/application-login" element={<ApplicationLogin />} />
      <Route path="/club-detail" element={<ClubDetail />} />
      <Route path="/lab-detail" element={<LabDetail />} />
      <Route path="/lab-list" element={<LabList />} />
      <Route path="/club-list" element={<ClubList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
export default App;
