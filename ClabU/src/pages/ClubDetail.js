import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import ContentPanel from "../components/ContentPanel";
import styles from "./ClubDetail.module.css";

const ClubDetail = () => {
  const navigate = useNavigate();

  const onClabUTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onApplicationContainerClick = useCallback(() => {
    // Please sync "Application_login" to the project
  }, []);

  return (
    <div className={styles.clubDetail}>
      <Navigation1
        logoIconDebugCommit="unset"
        clabUDebugCommit="unset"
        navigationDebugCommit="unset"
        onClabUTextClick={onClabUTextClick}
        onSearchClick={onSearchClick}
        onListContainerClick={onListContainerClick}
        onApplicationContainerClick={onApplicationContainerClick}
      />
      <ContentPanel />
    </div>
  );
};

export default ClubDetail;
