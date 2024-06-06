import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Submit.module.css";
import axios from "axios";


const Submit = ({ className = "", onClose, clubData }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const submitData = async () => {
    try {
      const response = await axios.post('/api/clubs', clubData);
      console.log(clubData);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={[styles.Sumbit, className].join(" ")}>
      <div className={styles.div}>
      <button className={styles.cancel} onClick={handleCancelClick}>
          <b className={styles.bc}>취소</b>
        </button>
        <Link className={styles.accept} to="/" onClick={submitData}>
          <b className={styles.b}>확인</b>
        </Link>
      </div>
      <b className={styles.b2}>제출하시겠습니까?</b>
    </div>
  );
};

Submit.propTypes = {
  className: PropTypes.string,
};

export default Submit;
