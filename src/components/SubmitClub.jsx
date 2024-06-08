import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SubmitClub.module.css";
import axios from "axios";

const Submit = ({ className = "", onClose, clubData }) => {
  const handleCancelClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const submitData = async () => {
    try {
      console.log(clubData);
      const response = await axios.post('/api/clubs', clubData);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
    //const formData = new FormData();
    if (clubData.logoUrl) {
      formData.append('file', clubData.logoUrl);
    }
    try {
      const response = await axios.post('/api/files/image', {"path": clubData.logoUrl});
    }
    catch (error) {
      console.error(error); 
    }
    /*
    try {
      const response = await axios.post('/api/files/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error); 
    }*/
  };

  return (
    <div className={styles.Sumbit}>
      <b className={styles.b2}>제출하시겠습니까?</b>
      <div className={styles.div}>
      <button className={styles.cancel} onClick={handleCancelClick}>
          <b className={styles.bc}>취소</b>
        </button>
        <Link className={styles.accept} to="/" onClick={submitData}>
          <b className={styles.b}>확인</b>
        </Link>
      </div>
    </div>
  );
};

Submit.propTypes = {
  className: PropTypes.string,
};

export default Submit;
