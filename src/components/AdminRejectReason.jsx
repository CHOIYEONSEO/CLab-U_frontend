import PropTypes from "prop-types";
import styles from "./AdminRejectReason.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminRejectReason = ({ className = "", onClose }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const [isInputClicked, setIsInputClicked] = useState(false);
  let [reason, setReason] = useState("");

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
      <b className={styles.text}>{` d`}</b>
      <textarea
            className={styles.text}
            type="text"
            name="reason"
            value={reason}
          />
    </div>
  );
};

AdminRejectReason.propTypes = {
  className: PropTypes.string,
};

export default AdminRejectReason;
