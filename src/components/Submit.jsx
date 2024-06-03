import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Submit.module.css";


const Submit = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAcceptContainerClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onCancelContainerClick = useCallback(() => {
    navigate(0);
  }, [navigate]);

  return (
    <div className={[styles.Sumbit, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.cancel} onClick={onCancelContainerClick}>
          <b className={styles.b}>취소</b>
        </div>
        <div className={styles.accept} onClick={onAcceptContainerClick}>
          <b className={styles.b}>확인</b>
        </div>
      </div>
      <b className={styles.b2}>제출하시겠습니까?</b>
    </div>
  );
};

Submit.propTypes = {
  className: PropTypes.string,
};

export default Submit;
