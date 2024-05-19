import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "./Navigation1";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
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
    <section className={styles.navigationParent}>
      <Navigation1
        logoIconDebugCommit="unset"
        clabUDebugCommit="unset"
        navigationDebugCommit="unset"
        onClabUTextClick={onClabUTextClick}
        onSearchClick={onSearchClick}
        onListContainerClick={onListContainerClick}
        onApplicationContainerClick={onApplicationContainerClick}
      />
      <div className={styles.chatArea}>
        <div className={styles.firstchat}>
          <div className={styles.chatHeader}>
            <div className={styles.logoContainer}>
              <img className={styles.logoIcon} alt="" src="/logo-1@2x.png" />
            </div>
            <div className={styles.div}>(캐릭터 이름)</div>
          </div>
          <div className={styles.clabU}>Clab-U는 ~~~ (대충 서비스 설명)</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
