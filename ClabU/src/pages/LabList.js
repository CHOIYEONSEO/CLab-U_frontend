import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./LabList.module.css";
import React, {useState} from "react";

const LabList = () => {
  const navigate = useNavigate();

  const onApplicationContainerClick = useCallback(() => {
    navigate("/application-form-lab");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    navigate("/club-list");
  }, [navigate]);

  const onSearchContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onClubTextClick = useCallback(() => {
    navigate("/club-list");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/lab-detail");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onClabUTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onLogoIconClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const [labQuery, setlabQuery] = useState("");

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      
    }
  }

  return (
    <div className={styles.labList}>
      <img className={styles.icon} alt="" src="/-6@2x.png" />
      <img className={styles.icon1} alt="" src="/-5@2x.png" />
      <img className={styles.icon2} alt="" src="/-4@2x.png" />
      <img className={styles.icon3} alt="" src="/-3@2x.png" />
      <img className={styles.icon4} alt="" src="/-2@2x.png" />
      <div className={styles.tab}>
        <div className={styles.club} onClick={onClubTextClick}>
          club
        </div>
        <b className={styles.lab}>lab</b>
      </div>
      <Navigation1
        logIn="/login@2x.png"
        account1="/account-1@2x.png"
        logo="/logo@2x.png"
        propWidth="100%"
        propRight="0px"
        onApplicationContainerClick={onApplicationContainerClick}
        onListContainerClick={onListContainerClick}
        onSearchContainerClick={onSearchContainerClick}
        onClabUTextClick={onClabUTextClick}
        onLogoIconClick={onLogoIconClick}
      />
      <div className={styles.nameSearch}>
        <img
          className={styles.search154734Icon}
          alt=""
          src="/search-154734@2x.png"
        />
        <input className={styles.typeHere}
          placeholder="연구실명으로 검색"
          type="text"
          value={labQuery}
          onChange={(e)=>setlabQuery(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          />
      </div>
      <div className={styles.div1}>
        <div className={styles.div2}>인공지능을활용한보안</div>
        <img
          className={styles.icon5}
          alt=""
          src="/@2x.png"
          onClick={onImageClick}
        />
      </div>
      <div className={styles.div3}>데이터기반융합보안</div>
      <div className={styles.div4}>컴퓨팅플랫폼</div>
      <div className={styles.div5}>시스템보안</div>
      <div className={styles.div6}>소프트웨어공학</div>
      <div className={styles.div7}>자연어처리연구실</div>
    </div>
  );
};

export default LabList;
