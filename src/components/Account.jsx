import PropTypes from "prop-types";
import styles from "./Account.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import axios from "axios";

const Account = ({ className = "", name, onClose}) => {
  const navigate = useNavigate();

  const onLogOutClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
    const response = axios.get(`/api/auth/logout`);
    navigate("/");
    window.location.reload(); //임시방편. Application으로 바뀌는데 지연있음.
  }, [navigate]);

  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };
  
  return (
    <div className={[styles.account, className].join(" ")}>
      <div className={styles.npc}>{name}님 환영합니다!</div>
      <img
        className={styles.CloseIcon}
        alt=""
        src="/freeiconx3818927-1@2x.png"
        onClick={handleCancelClick}
      />
      <img className={styles.account2Icon} alt="" src="/account-2@2x.png" />
      <div className={styles.div} onClick={onLogOutClick}>로그아웃하기</div>
    </div>
  );
};

Account.propTypes = {
  className: PropTypes.string,
};

export default Account;
