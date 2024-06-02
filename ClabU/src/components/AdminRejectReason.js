import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AdminRejectReason.module.css";

const AdminRejectReason = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAcceptContainerClick = useCallback(() => {
    navigate("/admin-page");
  }, [navigate]);

  return (
    <div className={[styles.adminRejectReason, className].join(" ")}>
      <b className={styles.b}>반려 사유를 작성해주세요</b>
      <div className={styles.adminRejectReasonChild} />
      <div className={styles.div}>
        <div className={styles.cancel}>
          <b className={styles.b1}>취소</b>
        </div>
        <div className={styles.accept} onClick={onAcceptContainerClick}>
          <b className={styles.b1}>확인</b>
        </div>
      </div>
      <b className={styles.text}>{` `}</b>
    </div>
  );
};

AdminRejectReason.propTypes = {
  className: PropTypes.string,
};

export default AdminRejectReason;
