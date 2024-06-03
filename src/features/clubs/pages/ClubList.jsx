import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClubList.module.css";
import { useState } from "react";

const ClubList = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onImage4Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onImage5Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onImage6Click = useCallback(() => {
    navigate("/club-detail");
  }, [navigate]);

  const onLabTextClick = useCallback(() => {
    navigate("/lab-list");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const [clubQuery, setclubQuery] = useState("");

  const activeEnter = (e) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <div className={styles.clubList}>
      <div className={styles.div}>
        <div className={styles.div1}>MAV</div>
        <img
          className={styles.icon}
          alt=""
          src="/@2x.png"
          onClick={onImageClick}
        />
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>NPC</div>
        <img
          className={styles.icon}
          alt=""
          src="/@2x.png"
          onClick={onImage2Click}
        />
      </div>
      <div className={styles.div4}>
        <div className={styles.div5}>SCAR</div>
        <img
          className={styles.icon}
          alt=""
          src="/@2x.png"
          onClick={onImage3Click}
        />
      </div>
      <div className={styles.div6}>
        <div className={styles.div7}>SST</div>
        <img
          className={styles.icon}
          alt=""
          src="/@2x.png"
          onClick={onImage4Click}
        />
      </div>
      <div className={styles.div8}>
        <div className={styles.div9}>SKKU.D</div>
        <img
          className={styles.icon}
          alt=""
          src="/@2x.png"
          onClick={onImage5Click}
        />
      </div>
      <div className={styles.div10}>
        <div className={styles.div11}>SKKUDING</div>
        <img
          className={styles.icon}
          alt=""
          src="/@2x.png"
          onClick={onImage6Click}
        />
      </div>
      <div className={styles.tab}>
        <b className={styles.club}>club</b>
        <div className={styles.lab} onClick={onLabTextClick}>
          lab
        </div>
      </div>
      <div className={styles.nameSearch}>
        <img
          className={styles.search154734Icon}
          alt=""
          src="/search-154734@2x.png"
        />
        <input
          className={styles.typeHere}
          placeholder="동아리명으로 검색"
          type="text"
          value={clubQuery}
          onChange={(e) => setclubQuery(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
      </div>
    </div>
  );
};

export default ClubList;
