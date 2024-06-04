import PropTypes from "prop-types";
import styles from "./AdminRejectReason.module.css";
import { NavLink } from "react-router-dom";

const AdminRejectReason = ({ className = "", onClose }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className={[styles.adminRejectReason, className].join(" ")}>
      <b className={styles.b}>반려 사유를 작성해주세요</b>
      <div className={styles.adminRejectReasonChild}>
        
      </div>
      <div className={styles.div}>
        <div className={styles.cancel} onClick={handleCancelClick}>
          <b className={styles.b1}>취소</b>
        </div>
        <NavLink className={styles.accept} to="/">
          <b className={styles.b1}>확인</b>
        </NavLink>
      </div>
      <b className={styles.text}>{` `}</b>
    </div>
  );
};

AdminRejectReason.propTypes = {
  className: PropTypes.string,
};

export default AdminRejectReason;
