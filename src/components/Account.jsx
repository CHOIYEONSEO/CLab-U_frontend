import PropTypes from "prop-types";
import styles from "./Account.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Account = ({ className = "", onClose}) => {
  const navigate = useNavigate();

  const onLogOutClick = useCallback(() => {
    navigate(0);
  }, [navigate]);

  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };
  
  return (
    <div className={[styles.account, className].join(" ")}>
      <div className={styles.npc}>안녕하세요, NPC 님!</div>
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
