import { useMemo } from "react";
import styles from "./Separator.module.css";

const Separator = ({
  separatorRows,
  separatorCols,
  propHeight,
  propWidth,
  propOutline,
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  onSeparator1Click,
}) => {
  const separatorStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      outline: propOutline,
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [
    propHeight,
    propWidth,
    propOutline,
    propAlignSelf,
    propPosition,
    propTop,
    propLeft,
  ]);

  return (
    <textarea
      className={styles.separator}
      rows={separatorRows}
      cols={separatorCols}
      onClick={onSeparator1Click}
      style={separatorStyle}
    />
  );
};

export default Separator;
