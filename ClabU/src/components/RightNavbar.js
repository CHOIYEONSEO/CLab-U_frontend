import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RightNavbar.module.css";

const RightNavbar = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  return (
    <section className={styles.rightNavbar}>
      <div className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <img className={styles.logoIcon} alt="" src="/logo-11@2x.png" />
        </div>
        <footer className={styles.inputfield}>
          <b className={styles.typeHere}>
            무엇이든 물어보세요! (예시: "인공지능 분야 연구실 중 학부생 인턴
            모집하는 곳 있어요?")
          </b>
          <div className={styles.iconWrapper}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon@2x.png"
              onClick={onIconClick}
            />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default RightNavbar;
