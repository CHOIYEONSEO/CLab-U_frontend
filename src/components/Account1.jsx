import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Account1.module.css";

const Account1 = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
    navigate("/login");
  }, [navigate]);

  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const onAccount2ImageClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
    navigate("/login");
  }, [navigate]);

  return (
    <div className={[styles.account, className].join(" ")}>
      <div className={styles.div} onClick={onTextClick}>
        로그인하기
      </div>
      <img
        className={styles.CloseIcon}
        alt=""
        src="/freeiconx3818927-1@2x.png"
        onClick={handleCancelClick}
      />
      <img
        className={styles.account2Icon}
        alt=""
        src="/account-2@2x.png"
        onClick={onAccount2ImageClick}
      />
    </div>
  );
};

Account1.propTypes = {
  className: PropTypes.string,
};

export default Account1;
