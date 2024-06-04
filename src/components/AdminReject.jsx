import { useState, useCallback } from "react";
import AdminRejectReason from "./AdminRejectReason";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./AdminReject.module.css";

const AdminReject = ({ className = "", onClose }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const [isAdminRejectReasonOpen, setAdminRejectReasonOpen] = useState(false);

  const openAdminRejectReason = useCallback(() => {
    setAdminRejectReasonOpen(true);
  }, []);

  return (
    <>
      <div className={[styles.adminReject, className].join(" ")}>
        <b className={styles.b}>반려하시겠습니까?</b>
        <div className={styles.div}>
          <div className={styles.cancel} onClick={handleCancelClick}>
            <b className={styles.b1}>취소</b>
          </div>
          <div className={styles.accept} onClick={openAdminRejectReason}>
            <b className={styles.b1}>확인</b>
          </div>
        </div>
      </div>
      {isAdminRejectReasonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={handleCancelClick}
        >
          <AdminRejectReason onClose={handleCancelClick} />
        </PortalPopup>
      )}
    </>
  );
};

AdminReject.propTypes = {
  className: PropTypes.string,
};

export default AdminReject;
