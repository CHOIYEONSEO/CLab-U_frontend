import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Account1.module.css";

const Account1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/application-login");
  }, [navigate]);

  const onAccount2ImageClick = useCallback(() => {
    navigate("/application-login");
  }, [navigate]);

  const onAccount3ImageClick = useCallback(() => {
    navigate("/application-login");
  }, [navigate]);

  return (
    <div className={[styles.account, className].join(" ")}>
      <div className={styles.div} onClick={onTextClick}>
        로그인하기
      </div>
      <img
        className={styles.freeIconX38189271}
        alt=""
        src="/freeiconx3818927-1@2x.png"
      />
      <img
        className={styles.account2Icon}
        alt=""
        src="/account-2@2x.png"
        onClick={onAccount2ImageClick}
      />
      <img
        className={styles.account2Icon}
        alt=""
        src="/account-2@2x.png"
        onClick={onAccount3ImageClick}
      />
    </div>
  );
};

Account1.propTypes = {
  className: PropTypes.string,
};

export default Account1;
