import PropTypes from "prop-types";
import styles from "./Frame.module.css";

const Frame = ({ className = "", message = "사용 가능한 아이디입니다" }) => {
  return (
    <div className={`${styles.frame} ${className}`}>
      <div className={styles.content}>
        <b className={styles.message}>{message}</b>
      </div>
      <button className={styles.acceptButton}>
        <b>확인</b>
      </button>
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

export default Frame;