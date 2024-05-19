import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navigation2.module.css";

const Navigation2 = () => {
  const navigate = useNavigate();

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
    <header className={styles.navigation}>
      <div className={styles.leftNavbar}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className={styles.clabu}>Clab-U</div>
        </div>
      </div>
      <nav className={styles.centralNavbar}>
        <button className={styles.search} onClick={onSearchClick}>
          <div className={styles.search1}>Search</div>
        </button>
        <div className={styles.dropdownList}>
          <div className={styles.list} onClick={onListContainerClick}>
            <div className={styles.list1}>List</div>
          </div>
        </div>
        <div
          className={styles.application}
          onClick={onApplicationContainerClick}
        >
          <div className={styles.application1}>Application</div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation2;
