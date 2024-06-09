import { useState, useCallback, useNavigate } from "react";
import AdminRejectReason from "./AdminRejectReason";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./AdminReject.module.css";
import axios from "axios";

const AdminReject = ({ className = "", onClose, clubid }) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const [isAdminRejectReasonOpen, setAdminRejectReasonOpen] = useState(false);

  const openAdminRejectReason = useCallback(() => {
    setAdminRejectReasonOpen(true);
  }, []);

  const handleReject = async () => {
    try {
      console.log("clubid: %d", clubid);
      const response = await axios.post('/api/manage/decline', { groupId: clubid });
      console.log(response.data);
      alert('동아리가 반려되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('승인 요청 실패:', error);
      alert('클럽 반려 요청에 실패했습니다.');
    }
  };

  return (
    <>
      <div className={[styles.adminReject, className].join(" ")}>
        <b className={styles.b}>반려하시겠습니까?</b>
        <div className={styles.div}>
          <div className={styles.cancel} onClick={handleCancelClick}>
            <b className={styles.b1}>취소</b>
          </div>
          <div className={styles.accept} onClick={handleReject}>
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
