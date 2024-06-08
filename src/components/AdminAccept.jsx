import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AdminAccept.module.css";
import axios from "axios";

const AdminAccept = ({ className = "", onClose, clubid }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleAccept = async () => {
    try {
      console.log(clubid);
      const response = await axios.post('/api/manage/approve', { groupId: clubid });
      console.log(response.data);
      alert('동아리가 성공적으로 승인되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('승인 요청 실패:', error);
      alert('클럽 승인 요청에 실패했습니다.');
    }
  };

  return (
    <div className={[styles.adminAccept, className].join(" ")}>
      <b className={styles.b2}>승인하시겠습니까?</b>
      <div className={styles.div}>
        <div className={styles.cancel} onClick={handleCancelClick}>
          <b className={styles.b}>취소</b>
        </div>
        <NavLink className={styles.accept} to="/" onClick={handleAccept}>
          <b className={styles.b}>확인</b>
        </NavLink>
      </div>
    </div>
  );
};

AdminAccept.propTypes = {
  className: PropTypes.string,
};

export default AdminAccept;
