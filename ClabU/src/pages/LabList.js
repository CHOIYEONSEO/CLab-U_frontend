import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./LabList.module.css";
import React, { useState } from "react";

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
    if (e.key === "Enter") {
      // Handle search functionality here
    }
  };

  return (
    <div className={styles.labList}>
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
      <div className={styles.header}>
        <div className={styles.tab}>
          <div className={styles.club} onClick={onClubTextClick}>
            club
          </div>
          <b className={styles.lab}>lab</b>
        </div>
        <div className={styles.nameSearch}>
          <img
            className={styles.search154734Icon}
            alt=""
            src="/search-154734@2x.png"
          />
          <input
            className={styles.typeHere}
            placeholder="연구실명으로 검색"
            type="text"
            value={labQuery}
            onChange={(e) => setlabQuery(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
          />
        </div>
      </div>
      <div className={styles.labGrid}>
        <div className={styles.labItem}>
          <div className={styles.labName}>인공지능을활용한보안</div>
          <img
            className={styles.labImage}
            alt=""
            src="/@2x.png"
            onClick={onImageClick}
          />
        </div>
        <div className={styles.labItem}>
          <div className={styles.labName}>데이터기반융합보안</div>
          <img
            className={styles.labImage}
            alt=""
            src="/-6@2x.png"
          />
        </div>
        <div className={styles.labItem}>
          <div className={styles.labName}>컴퓨팅플랫폼</div>
          <img
            className={styles.labImage}
            alt=""
            src="/-5@2x.png"
          />
        </div>
        <div className={styles.labItem}>
          <div className={styles.labName}>시스템보안</div>
          <img
            className={styles.labImage}
            alt=""
            src="/-4@2x.png"
          />
        </div>
        <div className={styles.labItem}>
          <div className={styles.labName}>소프트웨어공학</div>
          <img
            className={styles.labImage}
            alt=""
            src="/-3@2x.png"
          />
        </div>
        <div className={styles.labItem}>
          <div className={styles.labName}>자연어처리연구실</div>
          <img
            className={styles.labImage}
            alt=""
            src="/-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LabList;