import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ClubLogo.module.css";

const ClubLogo = ({ className = "", prop1, propTop }) => {
  const clubLogoStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  let [logoImg, setImg] = useState("");

  const setViewImg = (e) => {
    var reader = new FileReader();
    reader.onload = function(e) {
      setImg(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div
      className={[styles.clubLogo, className].join(" ")}
      style={clubLogoStyle}
    >
      <div className={styles.clubLogoChild} />
      <input 
      className={styles.b} 
      type="file" 
      accept='image/*'
      onChange={setViewImg}
      />
      <img className={styles.clubLogo1} src={logoImg}/>
      <b className={styles.b1}>{prop1}</b>
    </div>
  );
};

ClubLogo.propTypes = {
  className: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default ClubLogo;
