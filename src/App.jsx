import { useEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

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
    <>
      <Navigation
        logIn="/login@2x.png"
        account1="/account-1@2x.png"
        logo="/logo@2x.png"
        propWidth="100%"
        propRight="0px"
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
