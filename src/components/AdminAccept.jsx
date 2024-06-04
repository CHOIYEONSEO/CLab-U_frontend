import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AdminAccept.module.css";

const AdminAccept = ({ className = "", onClose }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={[styles.adminAccept, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.cancel} onClick={handleCancelClick}>
          <b className={styles.b}>취소</b>
        </div>
        <NavLink className={styles.accept} to="/">
          <b className={styles.b}>확인</b>
        </NavLink>
      </div>
      <b className={styles.b2}>승인하시겠습니까?</b>
    </div>
  );
};

AdminAccept.propTypes = {
  className: PropTypes.string,
};

export default AdminAccept;
