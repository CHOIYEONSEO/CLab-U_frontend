import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onLabTextClick = useCallback(() => {
    // Please sync "Lab_list" to the project
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.clubLabContentWrapper}>
        <div className={styles.clubLabContent}>
          <b className={styles.club}>club</b>
          <div className={styles.lab} onClick={onLabTextClick}>
            lab
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <Icon onImageClick={onImageClick} />
        <img className={styles.icon} loading="lazy" alt="" src="/-2@2x.png" />
        <img className={styles.icon1} loading="lazy" alt="" src="/-3@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent1;
