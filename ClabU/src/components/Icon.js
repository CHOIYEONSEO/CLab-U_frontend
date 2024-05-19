import { useMemo } from "react";
import styles from "./Icon.module.css";

const Icon = ({ propWidth, propMinHeight, propFlex, onImageClick }) => {
  const iconStyle = useMemo(() => {
    return {
      width: propWidth,
      minHeight: propMinHeight,
      flex: propFlex,
    };
  }, [propWidth, propMinHeight, propFlex]);

  return (
    <img
      className={styles.icon}
      loading="lazy"
      alt=""
      src="/-1@2x.png"
      onClick={onImageClick}
      style={iconStyle}
    />
  );
};

export default Icon;
