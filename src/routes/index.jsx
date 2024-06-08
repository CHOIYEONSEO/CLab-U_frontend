import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import AdminPage from "../features/admin/pages/AdminPage";
import AdminLab from "../features/admin/pages/AdminLab";
import AdminClub from "../features/admin/pages/AdminClub";
import Main from "../pages/Main";
import Search from "../features/chat/pages/Search";
import LabDetail from "../features/labs/pages/LabDetail";
import LabList from "../features/labs/pages/LabList";
import ClubList from "../features/clubs/pages/ClubList";
import ClubDetail from "../features/clubs/pages/ClubDetail";
import ApplicationFormLab from "../features/labs/pages/ApplicationFormLab";
import ApplicationFormClub from "../features/clubs/pages/ApplicationFormClub";
import ApplicationLogin from "../features/auth/pages/ApplicationLogin";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index element={<Main></Main>}></Route>
      <Route path="search" element={<Search></Search>}></Route>
      <Route path="labs">
        <Route index element={<LabList></LabList>}></Route>
        <Route
          path="form"
          element={<ApplicationFormLab></ApplicationFormLab>}
        ></Route>
        <Route path=":labId" element={<LabDetail></LabDetail>}></Route>
      </Route>
      <Route path="clubs">
        <Route index element={<ClubList></ClubList>}></Route>
        <Route
          path="form"
          element={<ApplicationFormClub></ApplicationFormClub>}
        ></Route>
        <Route path=":clubId" element={<ClubDetail></ClubDetail>}></Route>
      </Route>
      <Route path="admin">
        <Route index element={<AdminPage></AdminPage>}></Route>
        <Route path="labs/:labId" element={<AdminLab></AdminLab>}></Route>
        <Route path="clubs/:clubId" element={<AdminClub></AdminClub>}></Route>
      </Route>
      <Route
        path="/login"
        element={<ApplicationLogin></ApplicationLogin>}
      ></Route>
    </Route>
  )
);
