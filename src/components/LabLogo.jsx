import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./LabLogo.module.css";

const LabLogo = ({ className = "", prop1, propTop }) => {
  const labLogoStyle = useMemo(() => {
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
      className={[styles.labLogo, className].join(" ")}
      style={labLogoStyle}
    >
      <div className={styles.labLogoChild} />
      <input 
      className={styles.b} 
      type="file" 
      accept='image/*'
      onChange={setViewImg}
      />
      <img className={styles.labLogo1} src={logoImg}/>
      <b className={styles.b1}>{prop1}</b>
    </div>
  );
};

LabLogo.propTypes = {
  className: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default LabLogo;
