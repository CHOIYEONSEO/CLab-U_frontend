import PropTypes from "prop-types";
import styles from "./Frame.module.css";

const Frame = ({ className = "", onClose }) => {
  const handleAcceptClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={[styles.div, className].join(" ")}>
      <button className={styles.accept} onClick={handleAcceptClick}>
        <b className={styles.b}>확인</b>
      </button>
      <b className={styles.b1}>사용 가능한 아이디입니다</b>
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
