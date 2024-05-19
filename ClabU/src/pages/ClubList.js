import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import FrameComponent1 from "../components/FrameComponent1";
import Component from "../components/Component";
import styles from "./ClubList.module.css";

const ClubList = () => {
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
    // Please sync "Application_login" to the project
  }, []);

  return (
    <div className={styles.clubList}>
      <Navigation1
        logoIconDebugCommit="unset"
        clabUDebugCommit="unset"
        navigationDebugCommit="unset"
        onClabUTextClick={onClabUTextClick}
        onSearchClick={onSearchClick}
        onListContainerClick={onListContainerClick}
        onApplicationContainerClick={onApplicationContainerClick}
      />
      <main className={styles.clubListInner}>
        <section className={styles.frameParent}>
          <FrameComponent1 />
          <div className={styles.parent}>
            <Component />
            <textarea className={styles.textarea} rows={11} cols={15} />
            <textarea className={styles.textarea1} rows={11} cols={14} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClubList;
