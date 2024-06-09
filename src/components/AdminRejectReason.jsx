import PropTypes from "prop-types";
import styles from "./AdminRejectReason.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminRejectReason = ({ className = "", onClose, clubid }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  let [reason, setReason] = useState("");

  const handleReject = async () => {
    try {
      console.log("clubid: %d", clubid);
      const response = await axios.post('/api/manage/decline', { groupId: clubid, description: reason });
      console.log(response.data);
      alert('동아리가 반려되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('승인 요청 실패:', error);
      alert('클럽 반려 요청에 실패했습니다.');
    }
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div className={[styles.adminRejectReason, className].join(" ")}>
      <b className={styles.b}>반려 사유를 작성해주세요</b>
      <div className={styles.adminRejectReasonChild}>
        
      </div>
      <textarea
            className={styles.text}
            type="text"
            name="reason"
            value={reason}
            onChange={handleReasonChange}
      />

      <div className={styles.div}>
        <div className={styles.cancel} onClick={handleCancelClick}>
          <b className={styles.b1}>취소</b>
        </div>
        <NavLink className={styles.accept} to="/" onClick={handleReject}>
          <b className={styles.b1}>확인</b>
        </NavLink>
      </div>
    </div>
  );
};

AdminRejectReason.propTypes = {
  className: PropTypes.string,
};

export default AdminRejectReason;
