import { useMemo } from "react";
import styles from "./Navigation1.module.css";

const Navigation1 = ({
  logoIconDebugCommit,
  clabUDebugCommit,
  navigationDebugCommit,
  onClabUTextClick,
  onSearchClick,
  onListContainerClick,
  onApplicationContainerClick,
}) => {
  const logoIconStyle = useMemo(() => {
    return {
      debugCommit: logoIconDebugCommit,
    };
  }, [logoIconDebugCommit]);

  const clabUStyle = useMemo(() => {
    return {
      debugCommit: clabUDebugCommit,
    };
  }, [clabUDebugCommit]);

  const navigationStyle = useMemo(() => {
    return {
      debugCommit: navigationDebugCommit,
    };
  }, [navigationDebugCommit]);

  return (
    <header className={styles.navigation} style={navigationStyle}>
      <div className={styles.logoParent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          style={logoIconStyle}
        />
        <div
          className={styles.clabu}
          onClick={onClabUTextClick}
          style={clabUStyle}
        >
          Clab-U
        </div>
      </div>
      <nav className={styles.searchParent}>
        <button className={styles.search} onClick={onSearchClick}>
          <div className={styles.search1}>Search</div>
        </button>
        <div className={styles.listContainerParent}>
          <div className={styles.listContainer}>
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
        </div>
      </nav>
    </header>
  );
};

export default Navigation1;
