import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ClubLogo.module.css";

const ClubLogo = ({ className = "", prop, prop1, propTop }) => {
  const clubLogoStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.clubLogo, className].join(" ")}
      style={clubLogoStyle}
    >
      <div className={styles.clubLogoChild} />
      <b className={styles.b}>{prop}</b>
      <b className={styles.b1}>{prop1}</b>
      <div className={styles.clubLogo1} />
    </div>
  );
};

ClubLogo.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default ClubLogo;
