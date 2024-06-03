import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AdminAccept.module.css";

const AdminAccept = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAcceptContainerClick = useCallback(() => {
    navigate("/admin-page");
  }, [navigate]);

  return (
    <div className={[styles.adminAccept, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.cancel}>
          <b className={styles.b}>취소</b>
        </div>
        <div className={styles.accept} onClick={onAcceptContainerClick}>
          <b className={styles.b}>확인</b>
        </div>
      </div>
      <b className={styles.b2}>승인하시겠습니까?</b>
    </div>
  );
};

AdminAccept.propTypes = {
  className: PropTypes.string,
};

export default AdminAccept;
