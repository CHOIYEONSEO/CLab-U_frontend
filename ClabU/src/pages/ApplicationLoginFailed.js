import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import FrameComponent from "../components/FrameComponent";
import styles from "./ApplicationLoginFailed.module.css";

const ApplicationLoginFailed = () => {
  const navigate = useNavigate();

  const onClabUTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    navigate("/club-list");
  }, [navigate]);

  const onApplicationContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.applicationLoginFailed}>
      <Navigation1
        onClabUTextClick={onClabUTextClick}
        onSearchClick={onSearchClick}
        onListContainerClick={onListContainerClick}
        onApplicationContainerClick={onApplicationContainerClick}
      />
      <FrameComponent />
    </div>
  );
};

export default ApplicationLoginFailed;
