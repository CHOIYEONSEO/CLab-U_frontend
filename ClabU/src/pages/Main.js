import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import styles from "./Main.module.css";
import React, { useState } from "react";

const Main = () => {
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

  const onIconClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const [question, setQuestion] = useState("");

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      onIconClick();
    }
  };

  return (
    <div className={styles.main}>
      <Navigation1
        logIn="/login@2x.png"
        account1="/account-1@2x.png"
        logo="/logo@2x.png"
        propWidth="100%"
        propRight="0px"
        onApplicationContainerClick={onApplicationContainerClick}
        onListContainerClick={onListContainerClick}
        onSearchContainerClick={onSearchContainerClick}
      />
      <div className={styles.content}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.inputField}>
          <input
            className={styles.typeHere}
            placeholder="무엇이든 물어보세요!"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
          />
          <img
            className={styles.icon}
            alt=""
            src="/icon@2x.png"
            onClick={onIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;